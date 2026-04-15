'use client';

import { useState, useEffect } from 'react';
import MatchCard from './MatchCard';
import sblData from '@/lib/data/sbl-2025-2026.json';
import euroleagueData from '@/lib/data/euroleague-2025-2026.json';
import acbData from '@/lib/data/acb-2025-2026.json';
import turkishBslData from '@/lib/data/turkish-bsl-2025-2026.json';
import abaLigaData from '@/lib/data/aba-liga-2025-2026.json';
import bblData from '@/lib/data/bbl-2025-2026.json';
import greekCupData from '@/lib/data/greek-cup-2025-2026.json';
import legaAData from '@/lib/data/lega-a-2025-2026.json';
import lklData from '@/lib/data/lkl-2025-2026.json';
import klsData from '@/lib/data/kls-2025-2026.json';
import serbianSuperLeagueData from '@/lib/data/serbian-super-league-2025-2026.json';
import eurocupData from '@/lib/data/eurocup-2025-2026.json';
import championsLeagueData from '@/lib/data/champions-league-2025-2026.json';
import fibaEuropeCupData from '@/lib/data/fiba-europe-cup-2025-2026.json';
import lnbData from '@/lib/data/lnb-2025-2026.json';
import worldCupData from '@/lib/data/world-cup-2027.json';
import { LEAGUE_BROADCASTERS } from '@/lib/broadcasters';

interface Match {
  id: number | string;
  league: string;
  home: string;
  away: string;
  time: string;
  date: string;
  status: string;
  venue: string;
  broadcaster: string;
}

interface LocalMatch {
  id: number | string;
  broadcasters: string[];
}

interface TodaysMatchesProps {
  selectedLeague: string;
  selectedDate: string;
}

function getBroadcastersForMatch(matchId: number | string, league: string, apiBroadcaster: string): string[] {
  const lower = league.toLowerCase();

  const leagueMap: Record<string, any> = {
    'sbl': sblData,
    'basketligan': sblData,
    'euroleague': euroleagueData,
    'acb': acbData,
    '117': acbData,
    'turkish-bsl': turkishBslData,
    'turkish bsl': turkishBslData,
    '104': turkishBslData,
    'aba-liga': abaLigaData,
    'aba liga': abaLigaData,
    '198': abaLigaData,
    'bbl': bblData,
    '40': bblData,
    'greek-cup': greekCupData,
    'greek cup': greekCupData,
    '136': greekCupData,
    'lega-a': legaAData,
    'lega a': legaAData,
    '52': legaAData,
    'lkl': lklData,
    '60': lklData,
    'kls': klsData,
    '85': klsData,
    'serbian-super-league': serbianSuperLeagueData,
    'serbian super league': serbianSuperLeagueData,
    '86': serbianSuperLeagueData,
    'eurocup': eurocupData,
    '194': eurocupData,
    'champions-league': championsLeagueData,
    'champions league': championsLeagueData,
    '202': championsLeagueData,
    'fiba-europe-cup': fibaEuropeCupData,
    'fiba europe cup': fibaEuropeCupData,
    '201': fibaEuropeCupData,
    'lnb': lnbData,
    '2': lnbData,
    'world-cup': worldCupData,
    'world cup': worldCupData,
    '281': worldCupData,
  };

  const leagueData = leagueMap[lower];
  if (leagueData) {
    const localMatches = (leagueData as any).matches as LocalMatch[];
    const localMatch = localMatches.find(m => String(m.id) === String(matchId));
    if (localMatch?.broadcasters) return localMatch.broadcasters;
  }

  return LEAGUE_BROADCASTERS[lower] || [];
}

export default function TodaysMatches({ selectedLeague, selectedDate }: TodaysMatchesProps) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log('🎯 TodaysMatches render:', { selectedLeague, selectedDate });

useEffect(() => {
    async function loadMatches() {
      try {
        setLoading(true);
        setError(null);

        const allLeagueData: Record<string, any> = {
          'sbl': sblData,
          'euroleague': euroleagueData,
          'acb': acbData,
          'turkish-bsl': turkishBslData,
          'aba-liga': abaLigaData,
          'bbl': bblData,
          'greek-cup': greekCupData,
          'lega-a': legaAData,
          'lkl': lklData,
          'kls': klsData,
          'serbian-super-league': serbianSuperLeagueData,
          'eurocup': eurocupData,
          'champions-league': championsLeagueData,
          'fiba-europe-cup': fibaEuropeCupData,
          'lnb': lnbData,
          'world-cup': worldCupData,
        };

        let allMatches: Match[] = [];

        // Hämta NBA live från API
        if (selectedLeague === 'all' || selectedLeague === 'nba') {
          try {
            const res = await fetch(`/api/basketball?league=nba&date=${selectedDate}`);
            const data = await res.json();
            if (data.success && data.matches) {
              const nbaMatches = data.matches.map((m: any) => ({
                id: m.id,
                league: 'nba',
                home: m.home,
                away: m.away,
                time: m.time,
                date: m.date,
                status: m.status || 'Scheduled',
                venue: m.venue,
                broadcaster: '',
              }));
              allMatches.push(...nbaMatches);
            }
          } catch {
            console.error('❌ Failed to fetch NBA matches');
          }
        }

        // Alla andra ligor från lokal JSON
        if (selectedLeague === 'all') {
          const leagues = [
            'sbl', 'euroleague', 'acb', 'turkish-bsl', 'aba-liga',
            'bbl', 'greek-cup', 'lega-a', 'lkl', 'kls', 'serbian-super-league',
            'eurocup', 'champions-league', 'fiba-europe-cup', 'lnb', 'world-cup',
          ];
          leagues.forEach(leagueName => {
            const leagueData = allLeagueData[leagueName];
            if (leagueData && (leagueData as any).matches) {
              const leagueMatches = (leagueData as any).matches.map((m: any) => ({
                id: m.id,
                league: leagueName,
                home: m.home,
                away: m.away,
                time: m.time,
                date: m.date,
                status: m.status || 'Scheduled',
                venue: m.venue,
                broadcaster: '',
              }));
              allMatches.push(...leagueMatches);
            }
          });
        } else if (selectedLeague !== 'nba') {
          const leagueData = allLeagueData[selectedLeague.toLowerCase()];
          if (leagueData && (leagueData as any).matches) {
            allMatches = (leagueData as any).matches.map((m: any) => ({
              id: m.id,
              league: selectedLeague,
              home: m.home,
              away: m.away,
              time: m.time,
              date: m.date,
              status: m.status || 'Scheduled',
              venue: m.venue,
              broadcaster: '',
            }));
          }
        }

        setMatches(allMatches);
      } catch (err) {
        console.error('❌ Error loading matches:', err);
        setError(err instanceof Error ? err.message : 'Failed to load matches');
        setMatches([]);
      } finally {
        setLoading(false);
      }
    }

    loadMatches();
  }, [selectedLeague, selectedDate]);

  // Filter matches by date
  const filteredMatches = matches.filter((match) => {
    if (selectedLeague !== 'all' && match.league.toLowerCase() !== selectedLeague.toLowerCase()) {
      return false;
    }
    const matchDate = match.date.split('T')[0];
    if (matchDate !== selectedDate) {
      return false;
    }
    return true;
  });

  console.log('🎯 Filtered matches:', filteredMatches.length);

  const sortedMatches = [...filteredMatches].sort((a, b) =>
    a.time.localeCompare(b.time)
  );

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-500">Laddar matcher...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-500">Fel: {error}</div>
      </div>
    );
  }

  if (sortedMatches.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-500">Inga matcher hittades för valt datum</div>
      </div>
    );
  }

  return (
    <div className="space-y-0">
      {sortedMatches.map((match) => (
        <MatchCard
          key={match.id}
          id={match.id}
          league={match.league}
          home={match.home}
          away={match.away}
          time={match.time}
          date={match.date}
          venue={match.venue}
          broadcasters={getBroadcastersForMatch(match.id, match.league, match.broadcaster)}
        />
      ))}
    </div>
  );
}
