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
  { id: '194', name: 'EuroCup', url: '/eurocup' },
  { id: '202', name: 'Champions League', url: '/champions-league' },
  { id: '201', name: 'FIBA Europe Cup', url: '/fiba-europe-cup' },
  { id: '2', name: 'LNB (Frankrike)', url: '/lnb' },
  { id: '281', name: 'World Cup 2027', url: '/world-cup' },
];

export default function LeagueDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="bg-primary text-white px-6 py-3 font-bold text-sm uppercase flex items-center gap-2 hover:bg-opacity-90 active:scale-95 transition-all duration-200 shadow-sm">
        LIGOR
        <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 bg-white shadow-dropdown border border-gray-200 min-w-[300px] z-50 mt-1">
          {LEAGUES.map((league) => {
            const info = getLeagueInfo(league.id);
            return (
              <Link
                key={league.id}
                href={league.url}
                className="flex items-center gap-3 px-5 py-3.5 hover:bg-accent hover:bg-opacity-20 border-b border-gray-100 last:border-b-0 transition-all duration-200 group hover:translate-x-1"
              >
                <div className="w-7 h-7 relative rounded overflow-hidden flex-shrink-0">
                  <Image src={info.flag} alt="" fill className="object-cover" />
                </div>

                <div className="w-8 h-8 relative flex-shrink-0">
                  <Image src={info.logo} alt="" fill className="object-contain" />
                </div>

                <span className="text-dark text-sm font-semibold uppercase flex-1 group-hover:text-primary transition-colors">
                  {league.name}
                </span>

                <svg className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
