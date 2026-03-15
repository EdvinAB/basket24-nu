'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LeagueFilter from "@/components/LeagueFilter";
import DateNavigation from "@/components/DateNavigation";
import DateBar from '@/components/DateBar';
import TodaysMatches from "@/components/TodaysMatches";

const LEAGUES = [
  { name: 'NBA',               url: '/nba' },
  { name: 'EuroLeague',        url: '/euroleague' },
  { name: 'SBL',               url: '/sbl' },
  { name: 'EuroCup',           url: '/eurocup' },
  { name: 'Champions League',  url: '/champions-league' },
  { name: 'FIBA Europe Cup',   url: '/fiba-europe-cup' },
  { name: 'ACB',               url: '/acb' },
  { name: 'Lega A',            url: '/lega-a' },
  { name: 'BBL',               url: '/bbl' },
  { name: 'Turkish BSL',       url: '/turkish-bsl' },
  { name: 'LNB',               url: '/lnb' },
  { name: 'ABA Liga',          url: '/aba-liga' },
  { name: 'LKL',               url: '/lkl' },
  { name: 'Greek Cup',         url: '/greek-cup' },
  { name: 'KLS',               url: '/kls' },
  { name: 'Serbian Super League', url: '/serbian-super-league' },
  { name: 'World Cup 2027',    url: '/world-cup' },
];

export default function HomePage() {
  const [selectedLeague, setSelectedLeague] = useState<string>('all');
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  useEffect(() => {
    console.log('🟢 selectedDate UPPDATERAD till:', selectedDate);
  }, [selectedDate]);

  const handleLeagueChange = (league: string) => {
    setSelectedLeague(league);
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-[1200px] mx-auto bg-white shadow-lg min-h-screen">

        {/* Hero Section */}
        <section className="py-[2px] px-0 border-b border-gray-300">
          <div className="max-w-full mx-auto">
            <h1 className="flex flex-col justify-center items-center bg-primary text-white uppercase min-h-[44px] p-2 text-2xl font-extrabold leading-6 mb-0">
              BASKET PÅ TV & STREAM
            </h1>
          </div>
        </section>

        {/* Liga-filter */}
        <LeagueFilter onFilterChange={handleLeagueChange} />

        {/* Datum-navigering */}
        <DateNavigation selectedDate={selectedDate} onDateChange={handleDateChange} />
        <DateBar selectedDate={selectedDate} />

        {/* Main Content */}
        <div className="px-1 pt-1 pb-1 min-h-[400px]">
          <TodaysMatches
            selectedLeague={selectedLeague}
            selectedDate={selectedDate}
          />
        </div>

        {/* Alla Ligor */}
        <section className="bg-white border-t mt-12 py-8">
          <div className="px-4">
            <h2 className="text-xl font-bold mb-4">Alla Ligor</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {LEAGUES.map((league) => (
                <Link
                  key={league.url}
                  href={league.url}
                  className="flex items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 transition rounded"
                >
                  <span className="text-sm font-medium text-dark">{league.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
