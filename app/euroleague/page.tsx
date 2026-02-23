'use client';

import { useState, useEffect } from 'react';
import LeagueHero from '@/components/LeagueHero';
import DateNavigation from '@/components/DateNavigation';
import MatchCard from '@/components/MatchCard';
import DayNavigation from '@/components/DayNavigation';
import sblData from '@/lib/data/sbl-2025-2026.json';
import euroleagueData from '@/lib/data/euroleague-2025-2026.json';

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

function getBroadcastersForMatch(matchId: number | string, league: string): string[] {
  const lower = league.toLowerCase();
  if (lower === 'sbl' || lower === 'basketligan') {
    const local = (sblData as any).matches as LocalMatch[];
    const m = local.find(m => String(m.id) === String(matchId));
    if (m?.broadcasters) return m.broadcasters;
    return ['expressen-tv'];
  }
  if (lower === 'euroleague') {
    const local = (euroleagueData as any).matches as LocalMatch[];
    const m = local.find(m => String(m.id) === String(matchId));
    if (m?.broadcasters) return m.broadcasters;
    return ['viaplay'];
  }
  return [];
}
export default function EuroLeaguePage() {
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMatches() {
      try {
        setLoading(true);
        const response = await fetch(`/api/basketball?league=euroleague&date=${selectedDate}`);
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
    const prevDay = new Date(selectedDate);
    prevDay.setDate(prevDay.getDate() - 1);
    setSelectedDate(prevDay.toISOString().split('T')[0]);
  };

  const handleNextDay = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(nextDay.getDate() + 1);
    setSelectedDate(nextDay.toISOString().split('T')[0]);
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <LeagueHero league="EuroLeague" />

      <div className="max-w-[1092px] mx-auto px-4">
        
        <DateNavigation 
          selectedDate={selectedDate}
          onDateChange={handleDateChange} 
        />

        <div className="bg-primary text-white px-4 py-3 mt-6 mb-0">
          <h2 className="text-lg font-bold uppercase">EUROLEAGUE SPELSCHEMA</h2>
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
                broadcasters={getBroadcastersForMatch(match.id, match.league)}
                venue={match.venue}
              />
            ))}
          </div>
        )}

        <DayNavigation onPrevDay={handlePrevDay} onNextDay={handleNextDay} />

      </div>
    </div>
  );
}
