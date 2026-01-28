'use client';

import { useState } from 'react';

interface LeagueFilterProps {
  onFilterChange?: (league: string) => void;
}

export default function LeagueFilter({ onFilterChange }: LeagueFilterProps) {
  const [activeLeague, setActiveLeague] = useState<string>('all');

  const leagues = [
    { id: 'all', name: 'ALLA', icon: '🏀' },
    { id: 'nba', name: 'NBA', icon: '🏀' },
    { id: 'euroleague', name: 'EuroLeague', icon: '🇪🇺' },
    { id: 'sbl', name: 'SBL', icon: '🇸🇪' },
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
          {leagues.map((league) => (
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
              <span className="text-2xl mb-1">{league.icon}</span>
              <span className="text-xs font-semibold whitespace-nowrap">
                {league.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
