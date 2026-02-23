'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getLeagueInfo } from '@/lib/leagueFlags';

const LEAGUES = [
  { id: 'nba', name: 'NBA', url: '/nba' },
  { id: 'euroleague', name: 'EuroLeague', url: '/euroleague' },
  { id: 'sbl', name: 'Svenska Basketligan', url: '/sbl' },
  { id: '117', name: 'ACB', url: '/acb' },
  { id: '104', name: 'Turkish BSL', url: '/turkish-bsl' },
  { id: '198', name: 'ABA Liga', url: '/aba-liga' },
  { id: '40', name: 'BBL', url: '/bbl' },
  { id: '136', name: 'Greek Cup', url: '/greek-cup' },
  { id: '52', name: 'Lega A', url: '/lega-a' },
  { id: '60', name: 'LKL', url: '/lkl' },
  { id: '85', name: 'KLS', url: '/kls' },
  { id: '86', name: 'Serbian Super League', url: '/serbian-super-league' },
];

export default function LeagueDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Button - Precis som "Sport på TV" */}
      <button className="bg-primary text-white px-6 py-3 font-bold text-sm uppercase flex items-center gap-2 hover:bg-opacity-90 transition-colors">
        LIGOR
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 bg-white shadow-xl border border-gray-200 min-w-[280px] z-50">
          {LEAGUES.map((league) => {
            const info = getLeagueInfo(league.id);
            return (
              <Link
                key={league.id}
                href={league.url}
                className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
              >
                {/* Flag */}
                <div className="w-6 h-6 relative rounded overflow-hidden flex-shrink-0">
                  <Image src={info.flag} alt="" fill className="object-cover" />
                </div>

                {/* Logo */}
                <div className="w-7 h-7 relative flex-shrink-0">
                  <Image src={info.logo} alt="" fill className="object-contain" />
                </div>

                {/* Name */}
                <span className="text-gray-800 text-sm font-medium uppercase">{league.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
