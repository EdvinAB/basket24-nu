'use client';

import { useState, useEffect } from 'react';
import MatchCard from './MatchCard';
import nbaData from '@/lib/data/nba-2025-2026.json';
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

  // Mapping för alla ligor (både API-namn och URL-slugs)
  const leagueMap: Record<string, any> = {
    'nba': nbaData,
    'sbl': sblData,
    'basketligan': sblData,
    'euroleague': euroleagueData,
    'acb': acbData,
    '117': acbData,  // ACB league ID från API
    'turkish-bsl': turkishBslData,
    'turkish bsl': turkishBslData,
    '104': turkishBslData,  // Turkish BSL league ID från API
    'aba-liga': abaLigaData,
    'aba liga': abaLigaData,
    '198': abaLigaData,  // ABA Liga league ID från API
    'bbl': bblData,
    '40': bblData,  // BBL league ID från API
    'greek-cup': greekCupData,
    'greek cup': greekCupData,
    '136': greekCupData,  // Greek Cup league ID från API
    'lega-a': legaAData,
    'lega a': legaAData,
    '52': legaAData,  // Lega A league ID från API
    'lkl': lklData,
    '60': lklData,  // LKL league ID från API
    'kls': klsData,
    '85': klsData,  // KLS league ID från API
    'serbian-super-league': serbianSuperLeagueData,
    'serbian super league': serbianSuperLeagueData,
    '86': serbianSuperLeagueData,  // Serbian Super League league ID från API
  };

  const leagueData = leagueMap[lower];
  if (leagueData) {
    const localMatches = (leagueData as any).matches as LocalMatch[];
    const localMatch = localMatches.find(m => String(m.id) === String(matchId));
    if (localMatch?.broadcasters) return localMatch.broadcasters;
  }

  // NBA fallback
  if (lower === 'nba') {
    return ['nba-league-pass'];
  }

  // Fallback: använd API:ets broadcaster-string
  if (apiBroadcaster) {
    return apiBroadcaster.split(',').map(b => b.trim()).filter(Boolean);
  }

  return [];
}

export default function TodaysMatches({ selectedLeague, selectedDate }: TodaysMatchesProps) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log('🎯 TodaysMatches render:', { selectedLeague, selectedDate });

  useEffect(() => {
    function loadMatches() {
      try {
        setLoading(true);
        setError(null);

        // Mapping för alla ligor
        const allLeagueData: Record<string, any> = {
          'nba': nbaData,
          'sbl': sblData,
          'euroleague': euroleagueData,
          'acb': acbData,
          '117': acbData,
          'turkish-bsl': turkishBslData,
          '104': turkishBslData,
          'aba-liga': abaLigaData,
          '198': abaLigaData,
          'bbl': bblData,
          '40': bblData,
          'greek-cup': greekCupData,
          '136': greekCupData,
          'lega-a': legaAData,
          '52': legaAData,
          'lkl': lklData,
          '60': lklData,
          'kls': klsData,
          '85': klsData,
          'serbian-super-league': serbianSuperLeagueData,
          '86': serbianSuperLeagueData,
        };

        let allMatches: Match[] = [];

        if (selectedLeague === 'all') {
          // Hämta matcher från alla ligor
          const leagues = ['nba', 'sbl', 'euroleague', 'acb', 'turkish-bsl', 'aba-liga', 'bbl', 'greek-cup', 'lega-a', 'lkl', 'kls', 'serbian-super-league'];
          
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
                broadcaster: '', // Kommer från getBroadcastersForMatch
              }));
              allMatches.push(...leagueMatches);
            }
          });
        } else {
          // Hämta matcher från specifik liga
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
              broadcaster: '', // Kommer från getBroadcastersForMatch
            }));
          }
        }

        console.log('📦 Loaded matches from local JSON:', allMatches.length);
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
    console.log('🔍 Checking match:', {
      id: match.id,
      league: match.league,
      home: match.home,
      away: match.away,
    });

    // League filter
    if (selectedLeague !== 'all' && match.league.toLowerCase() !== selectedLeague.toLowerCase()) {
      return false;
    }

    // Date filter
    const matchDate = match.date.split('T')[0];
    console.log('🔍 Date comparison:', {
      matchDate,
      selectedDate,
      match: matchDate === selectedDate
    });

    if (matchDate !== selectedDate) {
      return false;
    }

    console.log('✅ Match passed filters!');
    return true;
  });

  console.log('🎯 Filtered matches:', filteredMatches.length);

  // Sort by time
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
