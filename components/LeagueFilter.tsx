'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getLeagueInfo } from '@/lib/leagueFlags';

interface LeagueFilterProps {
  onFilterChange?: (league: string) => void;
}

export default function LeagueFilter({ onFilterChange }: LeagueFilterProps) {
  const [activeLeague, setActiveLeague] = useState<string>('all');

  const leagues = [
    { id: 'all', name: 'ALLA', flag: null }, // Ingen flagga för "ALLA"
    { id: 'nba', name: 'NBA' },
    { id: 'euroleague', name: 'EuroLeague' },
    { id: 'sbl', name: 'SBL' },
    { id: '117', name: 'ACB' },
    { id: '104', name: 'BSL' },
    { id: '198', name: 'ABA' },
    { id: '40', name: 'BBL' },
    { id: '136', name: 'Greek Cup' },
    { id: '52', name: 'Lega A' },
    { id: '60', name: 'LKL' },
    { id: '85', name: 'KLS' },
    { id: '86', name: 'SSL' },
  ];

  const handleClick = (leagueId: string) => {
    setActiveLeague(leagueId);
    if (onFilterChange) {
      onFilterChange(leagueId);
    }
  };

  return (
    <div className="bg-white py-4 px-4 border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {leagues.map((league) => {
            const leagueInfo = league.id === 'all' ? null : getLeagueInfo(league.id);
            
            return (
              <button
                key={league.id}
                onClick={() => handleClick(league.id)}
                className={`
                  flex flex-col items-center justify-center
                  min-w-[70px] px-3 py-2
                  transition-all duration-200
                  ${
                    activeLeague === league.id
                      ? 'bg-primary text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
                style={{ borderRadius: 0 }}
              >
                {/* Flagg-ikon eller emoji för "ALLA" */}
                {league.id === 'all' ? (
                  <span className="text-2xl mb-1">🏀</span>
                ) : leagueInfo ? (
                  <div className="w-8 h-8 mb-1 relative rounded overflow-hidden">
                    <Image
                      src={leagueInfo.flag}
                      alt={`${leagueInfo.name} flag`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <span className="text-2xl mb-1">🏀</span>
                )}
                
                <span className="text-xs font-semibold whitespace-nowrap">
                  {league.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
