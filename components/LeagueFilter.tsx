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
    { id: 'all', name: 'ALLT', flag: null },
    { id: 'nba', name: 'NBA' },
    { id: 'euroleague', name: 'EuroLeague' },
    { id: 'sbl', name: 'SBL' },
    { id: '117', name: 'ACB' },
    { id: '104', name: 'BSL' },
    { id: '198', name: 'ABA' },
    { id: '40', name: 'BBL' },
    { id: '136', name: 'Greek' },
    { id: '52', name: 'Lega A' },
    { id: '60', name: 'LKL' },
    { id: '85', name: 'KLS' },
    { id: '86', name: 'SSL' },
    { id: '194', name: 'EuroCup' },
    { id: '202', name: 'BCL' },
    { id: '201', name: 'FEC' },
    { id: '2', name: 'LNB' },
    { id: '281', name: 'WC 27' },
  ];

  const handleClick = (leagueId: string) => {
    setActiveLeague(leagueId);
    if (onFilterChange) {
      onFilterChange(leagueId);
    }
  };

  return (
    <div className="bg-dark border-b border-gray-600">
      <div className="max-w-7xl mx-auto py-2 px-2">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {leagues.map((league) => {
            const leagueInfo = league.id === 'all' ? null : getLeagueInfo(league.id);

            return (
              <button
                key={league.id}
                onClick={() => handleClick(league.id)}
                className={`
                  flex flex-col items-center justify-center
                  min-w-[60px] px-3 py-2
                  transition-all duration-200
                  ${
                    activeLeague === league.id
                      ? 'bg-accent text-dark font-bold'
                      : 'bg-dark text-white hover:opacity-80'
                  }
                `}
                style={{ borderRadius: 0 }}
              >
                {league.id === 'all' ? (
                  <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ) : leagueInfo ? (
                  <Image
                    src={leagueInfo.flag}
                    alt={`${leagueInfo.name} flag`}
                    width={24}
                    height={24}
                    className="mb-1 object-cover"
                  />
                ) : (
                  <span className="text-xl mb-1">🏀</span>
                )}

                <span className="text-[10px] font-bold uppercase whitespace-nowrap tracking-wide">
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
