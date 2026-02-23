'use client';

import { useState, useEffect } from 'react';
import LeagueFilter from "@/components/LeagueFilter";
import DateNavigation from "@/components/DateNavigation";
import DateBar from '@/components/DateBar';
import TodaysMatches from "@/components/TodaysMatches";

export default function HomePage() {
  // STATE: Vald liga och datum
  const [selectedLeague, setSelectedLeague] = useState<string>('all');
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  // DEBUG: Logga när selectedDate ändras (kan tas bort senare)
  useEffect(() => {
    console.log('🟢 selectedDate UPPDATERAD till:', selectedDate);
  }, [selectedDate]);

  // HANDLERS
  const handleLeagueChange = (league: string) => {
    console.log('Liga ändrad till:', league);
    setSelectedLeague(league);
  };

  const handleDateChange = (date: string) => {
    console.log('🔵 handleDateChange anropad med:', date);
    setSelectedDate(date);
    console.log('🔵 selectedDate efter setState:', date);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Main Container - Desktop centered with whitespace, Mobile full */}
      <div className="max-w-[1200px] mx-auto bg-white shadow-lg min-h-screen">
        
        {/* Hero Section - MINIMAL */}
        <section className="py-4 px-4">
          <div className="max-w-full mx-auto">
            <h1 className="flex flex-col justify-center items-center bg-primary text-white uppercase min-h-[44px] p-2 text-2xl font-extrabold leading-6 mb-0">
              BASKET PÅ TV
            </h1>
          </div>
        </section>

        {/* Liga-filter */}
        <LeagueFilter onFilterChange={handleLeagueChange} />

        {/* Datum-navigering */}
        <DateNavigation selectedDate={selectedDate} onDateChange={handleDateChange} />
        <DateBar selectedDate={selectedDate} />

        {/* Main Content */}
        <div className="px-4 pt-0 pb-8">
          {/* Dagens Matcher */}
          <TodaysMatches 
            selectedLeague={selectedLeague}
            selectedDate={selectedDate}
          />
        </div>

        {/* Bottom Section - Populära Ligor & Lag */}
        <section className="bg-white border-t mt-12 py-8">
          <div className="px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Populära Ligor */}
              <div>
                <h3 className="text-xl font-bold mb-4">Populära Ligor</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['NBA', 'EuroLeague', 'Basketligan', 'EuroCup', 'NCAA', 'WNBA', 'Spanish Liga ACB', 'Turkish BSL'].map((league) => (
                    <a 
                      key={league}
                      href={`/${league.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <div className="w-6 h-6 bg-gray-300"></div>
                      <span className="text-sm font-medium">{league}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Populära Lag */}
              <div>
                <h3 className="text-xl font-bold mb-4">Populära Lag</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Lakers', 'Celtics', 'Warriors', 'Heat', 'Real Madrid', 'Barcelona', 'Efes Istanbul', 'CSKA Moscow'].map((team) => (
                    <a 
                      key={team}
                      href={`/lag/${team.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 transition"
                    >
                      <div className="w-6 h-6 bg-gray-300"></div>
                      <span className="text-sm font-medium">{team}</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
        
      </div>
      {/* End Main Container */}
      
    </div>
  );
}