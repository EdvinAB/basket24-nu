'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getLeagueInfo } from '@/lib/leagueFlags';

const LEAGUES = [
  { id: 'nba', name: 'NBA', url: '/nba' },
  { id: 'euroleague', name: 'EuroLeague', url: '/euroleague' },
  { id: 'sbl', name: 'Svenska Basketligan', url: '/sbl' },
  { id: '117', name: 'ACB (Spanien)', url: '/acb' },
  { id: '104', name: 'Turkish BSL', url: '/turkish-bsl' },
  { id: '198', name: 'ABA Liga', url: '/aba-liga' },
  { id: '40', name: 'BBL (Tyskland)', url: '/bbl' },
  { id: '136', name: 'Greek Cup', url: '/greek-cup' },
  { id: '52', name: 'Lega A (Italien)', url: '/lega-a' },
  { id: '60', name: 'LKL (Litauen)', url: '/lkl' },
  { id: '85', name: 'KLS (Serbien)', url: '/kls' },
  { id: '86', name: 'Serbian Super League', url: '/serbian-super-league' },
];

export default function LeagueMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={openMenu}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:border-primary transition-colors"
      >
        <span className="hidden sm:inline text-sm font-bold text-dark">LIGOR</span>
        <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay - ENDAST SYNLIG NÄR isOpen=true */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[100]"
          onClick={closeMenu}
        />
      )}

      {/* Menu Sidebar - ENDAST SYNLIG NÄR isOpen=true */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-[90%] sm:w-[400px] bg-white z-[110] shadow-2xl">
          {/* Header */}
          <div className="bg-dark text-white px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">LIGOR</h2>
            <button
              onClick={closeMenu}
              className="text-white hover:text-primary p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* League List */}
          <div className="overflow-y-auto h-[calc(100%-64px)]">
            {LEAGUES.map((league) => {
              const info = getLeagueInfo(league.id);
              return (
                <Link
                  key={league.id}
                  href={league.url}
                  onClick={closeMenu}
                  className="flex items-center gap-4 px-6 py-4 border-b border-gray-200 hover:bg-gray-50"
                >
                  {/* Flag */}
                  <div className="w-8 h-8 relative rounded overflow-hidden flex-shrink-0">
                    <Image src={info.flag} alt="" fill className="object-cover" />
                  </div>

                  {/* Logo */}
                  <div className="w-10 h-10 relative flex-shrink-0">
                    <Image src={info.logo} alt="" fill className="object-contain" />
                  </div>

                  {/* Name */}
                  <span className="text-dark font-semibold flex-1">{league.name}</span>

                  {/* Chevron */}
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
