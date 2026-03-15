'use client';

import { useState, useMemo } from 'react';
import LeagueHero from '@/components/LeagueHero';
import DateNavigation from '@/components/DateNavigation';
import MatchCard from '@/components/MatchCard';
import DayNavigation from '@/components/DayNavigation';
import nbaData from '@/lib/data/nba-2025-2026.json';

interface LocalMatch {
  id: number | string;
  date: string;
  time: string;
  home: string;
  away: string;
  venue: string;
  broadcasters: string[];
}

export default function NBAPage() {
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    return new Date().toISOString().split('T')[0];
  });

  const allMatches = useMemo(() => {
    return (nbaData as any).matches as LocalMatch[];
  }, []);

  const filteredMatches = useMemo(() => {
    return allMatches.filter((match) => {
      return match.date.split('T')[0] === selectedDate;
    });
  }, [allMatches, selectedDate]);

  const sortedMatches = useMemo(() => {
    return [...filteredMatches].sort((a, b) => a.time.localeCompare(b.time));
  }, [filteredMatches]);

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

        {sortedMatches.length === 0 ? (
          <div className="text-center py-8 bg-white">
            <div className="text-gray-500">Inga matcher hittades för valt datum</div>
          </div>
        ) : (
          <div className="bg-white">
            {sortedMatches.map((match) => (
              <MatchCard
                key={match.id}
                id={match.id}
                league="NBA"
                home={match.home}
                away={match.away}
                time={match.time}
                date={match.date}
                venue={match.venue}
                broadcasters={match.broadcasters}
              />
            ))}
          </div>
        )}

        <DayNavigation onPrevDay={handlePrevDay} onNextDay={handleNextDay} />
      </div>
    </div>
  );
}