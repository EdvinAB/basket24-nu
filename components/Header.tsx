'use client';

import LeagueDropdown from './LeagueDropdown';

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      
      {/* Top Bar - MÖRKBLÅ MED NYA FÄRGER */}
      <div className="bg-dark border-b border-dark-light">
        <div className="container-custom py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-4">
              <span className="text-gray-200">Stockholm, Sverige</span>
            </div>
            <div className="flex gap-4">
              <a href="/om-oss" className="text-gray-200 hover:text-accent transition-colors">Om oss</a>
              <a href="/kontakt" className="text-gray-200 hover:text-accent transition-colors">Kontakt</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-primary flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <span className="text-white font-black text-2xl">24</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-live border-2 border-white shadow-md flex items-center justify-center">
                <span className="text-xs">🏀</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-gray-900 tracking-tight leading-none">
                basket<span className="text-primary">24</span>
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                Live Basket 24/7
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-3">
            {/* Matcher Link */}
            <a 
              href="/" 
              className="px-4 py-2 text-sm font-bold text-dark hover:text-primary transition-colors uppercase hidden sm:block"
            >
              Matcher
            </a>
            
            {/* Dropdown Menu */}
            <LeagueDropdown />
          </div>

        </div>
      </nav>

      {/* ACCENT LINE (som TVsportens gröna linje) */}
      <div className="h-2 bg-secondary w-full shadow-md"></div>

    </header>
  );
}
