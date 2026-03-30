'use client';

import { useState, useMemo } from 'react';
import LeagueHero from '@/components/LeagueHero';
import DateNavigation from '@/components/DateNavigation';
import MatchCard from '@/components/MatchCard';
import DayNavigation from '@/components/DayNavigation';
import LeagueStandings from '@/components/LeagueStandings';
import acbData from '@/lib/data/acb-2025-2026.json';

interface LocalMatch {
  id: number | string;
  date: string;
  time: string;
  home: string;
  away: string;
  venue: string;
  broadcasters: string[];
}

export default function ACBPage() {
  const [activeTab, setActiveTab] = useState<'spelschema' | 'tabell'>('spelschema');
  const [selectedDate, setSelectedDate] = useState<string>(() => new Date().toISOString().split('T')[0]);

  const allMatches = useMemo(() => (acbData as any).matches as LocalMatch[], []);

  const sortedMatches = useMemo(() => {
    return allMatches
      .filter(m => m.date.split('T')[0] === selectedDate)
      .sort((a, b) => a.time.localeCompare(b.time));
  }, [allMatches, selectedDate]);

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
      <LeagueHero league="ACB" />
      <div className="max-w-[1092px] mx-auto px-4">
        <div className="flex border-b border-gray-200 mt-6">
          <button onClick={() => setActiveTab('spelschema')} className={`px-6 py-3 text-sm font-bold uppercase transition-colors ${activeTab === 'spelschema' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-dark'}`}>Spelschema</button>
          <button onClick={() => setActiveTab('tabell')} className={`px-6 py-3 text-sm font-bold uppercase transition-colors ${activeTab === 'tabell' ? 'border-b-2 border-primary text-primary' : 'text-gray-500 hover:text-dark'}`}>Tabell</button>
        </div>

        {activeTab === 'spelschema' && (
          <>
            <DateNavigation selectedDate={selectedDate} onDateChange={setSelectedDate} />
            <div className="bg-primary text-white px-4 py-3 mt-6 mb-0">
              <h2 className="text-lg font-bold uppercase">ACB SPELSCHEMA</h2>
            </div>
            {sortedMatches.length === 0 ? (
              <div className="text-center py-8 bg-white"><div className="text-gray-500">Inga matcher hittades för valt datum</div></div>
            ) : (
              <div className="bg-white">
                {sortedMatches.map(match => (
                  <MatchCard key={match.id} id={match.id} league="ACB" home={match.home} away={match.away} time={match.time} date={match.date} venue={match.venue} broadcasters={match.broadcasters} />
                ))}
              </div>
            )}
            <DayNavigation onPrevDay={handlePrevDay} onNextDay={handleNextDay} />
          </>
        )}

        {activeTab === 'tabell' && (
          <div className="mt-6">
            <div className="bg-primary text-white px-4 py-3 mb-0">
              <h2 className="text-lg font-bold uppercase">ACB TABELL 2025</h2>
            </div>
            <LeagueStandings league="acb" />
          </div>
        )}
      </div>
    </div>
  );
}