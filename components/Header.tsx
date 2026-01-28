'use client';

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      
      {/* Top Bar */}
      <div className="bg-gray-100 border-b">
        <div className="container-custom py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-4">
              <span className="text-gray-600">Stockholm, Sverige</span>
            </div>
            <div className="flex gap-4">
              <a href="/om-oss" className="text-gray-600 hover:text-primary">Om oss</a>
              <a href="/kontakt" className="text-gray-600 hover:text-primary">Kontakt</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo - FLAT DESIGN, NO GRADIENT */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Flat orange block instead of gradient */}
              <div className="w-12 h-12 bg-primary flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                <span className="text-white font-black text-2xl">24</span>
              </div>
              {/* Hard edge on basketball icon */}
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
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-gray-700 hover:text-primary font-medium">Matcher</a>
            <a href="/tv-guide" className="text-gray-700 hover:text-primary font-medium">TV-Guide</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <span className="text-2xl">☰</span>
          </button>

        </div>
      </nav>

      {/* Tabs Navigation */}
      <div className="border-t bg-gray-50">
        <div className="container-custom">
        </div>
      </div>

    </header>
  );
}
