export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Om Basket24 */}
          <div>
            <h4 className="text-white font-bold mb-4">Om Basket24</h4>
            <p className="text-sm mb-4">
              Sveriges ledande basketsajt med live-resultat, statistik och nyheter från NBA, EuroLeague och svensk basket.
            </p>
          </div>

          {/* Snabblänkar */}
          <div>
            <h4 className="text-white font-bold mb-4">Snabblänkar</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-primary">Matcher Idag</a></li>
              <li><a href="/ligor" className="hover:text-primary">Ligor</a></li>
              <li><a href="/lag" className="hover:text-primary">Lag</a></li>
              <li><a href="/tv" className="hover:text-primary">TV-Guide</a></li>
            </ul>
          </div>

          {/* Populära Ligor */}
          <div>
            <h4 className="text-white font-bold mb-4">Populära Ligor</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/nba" className="hover:text-primary">NBA</a></li>
              <li><a href="/euroleague" className="hover:text-primary">EuroLeague</a></li>
              <li><a href="/basketligan" className="hover:text-primary">Basketligan</a></li>
              <li><a href="/ncaa" className="hover:text-primary">NCAA</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/om-oss" className="hover:text-primary">Om oss</a></li>
              <li><a href="/kontakt" className="hover:text-primary">Kontakt</a></li>
              <li><a href="/integritetspolicy" className="hover:text-primary">Integritetspolicy</a></li>
              <li><a href="/cookies" className="hover:text-primary">Cookies</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} Basket.se. Alla rättigheter förbehållna.</p>
          <p className="mt-2 text-gray-500">
            18+ | Spela ansvarsfullt | <a href="https://stodlinjen.se" className="hover:text-primary" target="_blank" rel="noopener">Stödlinjen.se</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
