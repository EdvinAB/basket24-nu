'use client';

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-100 border-b">
        <div className="container-custom py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-4">
              <span className="text-gray-600">📍 Malmö, Sverige</span>
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
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🏀</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Basket<span className="text-primary">.se</span>
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink href="/" label="Matcher" />
            <NavLink href="/tv" label="TV-Guide" />
            <NavLink href="/betting" label="Betting" />
            <NavLink href="/nyheter" label="Nyheter" />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </nav>

      {/* Tabs Navigation (Idag / Kommande / Resultat) */}
      <div className="border-t bg-gray-50">
        <div className="container-custom">
          <div className="flex gap-1">
            <TabLink href="/" label="Idag" active />
            <TabLink href="/kommande" label="Kommande" />
            <TabLink href="/resultat" label="Resultat" />
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a 
      href={href}
      className="text-gray-700 hover:text-primary font-medium transition-colors"
    >
      {label}
    </a>
  );
}

function TabLink({ href, label, active = false }: { href: string; label: string; active?: boolean }) {
  return (
    <a
      href={href}
      className={`px-6 py-3 font-medium transition-colors ${
        active 
          ? 'bg-white text-primary border-b-2 border-primary' 
          : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      {label}
    </a>
  );
}
