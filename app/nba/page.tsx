'use client';

import { useState, useEffect } from 'react';
import LeagueHero from '@/components/LeagueHero';
import DateNavigation from '@/components/DateNavigation';
import MatchCard from '@/components/MatchCard';
import DayNavigation from '@/components/DayNavigation';
import nbaData from '@/lib/data/nba-2025-2026.json';

interface ApiMatch {
  id: number | string;
  league: string;
  home: string;
  away: string;
  time: string;
  date: string;
  status: string;
  venue: string;
  broadcaster?: string;      // Gammal string (från API)
  broadcasters?: string[];   // Ny array (från lokal JSON)
}

interface LocalMatch {
  id: number | string;
  broadcasters: string[];
}

// Slår upp broadcaster-info från lokal JSON
// Om matchen inte finns i JSON → default NBA League Pass
function getBroadcastersForMatch(matchId: number | string): string[] {
  const localMatches = (nbaData as any).matches as LocalMatch[];
  const localMatch = localMatches.find(m => String(m.id) === String(matchId));
  return localMatch?.broadcasters || ['nba-league-pass'];
}

export default function NBAPage() {
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    return new Date().toISOString().split('T')[0];
  });
  const [matches, setMatches] = useState<ApiMatch[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMatches() {
      try {
        setLoading(true);
        const response = await fetch(`/api/basketball?league=nba&date=${selectedDate}`);
        const data = await response.json();
        if (data.success && data.matches) {
          setMatches(data.matches);
        } else {
          setMatches([]);
        }
      } catch (error) {
        console.error('Error fetching matches:', error);
        setMatches([]);
      } finally {
        setLoading(false);
      }
    }
    fetchMatches();
  }, [selectedDate]);

  const sortedMatches = [...matches].sort((a, b) => a.time.localeCompare(b.time));

  const handlePrevDay = () => {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() - 1);
    setSelectedDate(d.toISOString().split('T')[0]);
  };

  const handleNextDay = () => {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() + 1);
    setSelectedDate(d.toISOString().split('T')[0]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LeagueHero league="NBA" />

      <div className="max-w-[1092px] mx-auto px-4">
        <DateNavigation selectedDate={selectedDate} onDateChange={setSelectedDate} />

        <div className="bg-primary text-white px-4 py-3 mt-6 mb-0">
          <h2 className="text-lg font-bold uppercase">NBA SPELSCHEMA</h2>
        </div>

        {loading ? (
          <div className="text-center py-8 bg-white">
            <div className="text-gray-500">Laddar matcher...</div>
          </div>
        ) : sortedMatches.length === 0 ? (
          <div className="text-center py-8 bg-white">
            <div className="text-gray-500">Inga matcher hittades för valt datum</div>
          </div>
        ) : (
          <div className="bg-white">
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
                broadcasters={getBroadcastersForMatch(match.id)}
              />
            ))}
          </div>
        )}

        <DayNavigation onPrevDay={handlePrevDay} onNextDay={handleNextDay} />
      </div>
    </div>
  );
}
