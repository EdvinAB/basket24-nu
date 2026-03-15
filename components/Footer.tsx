import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-gray-200 mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Om Basket24.nu */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Om Basket24.nu</h4>
            <p className="text-sm leading-relaxed mb-4">
              Sveriges basketsajt med TV-tider och streaminginfo för NBA, EuroLeague, SBL och alla stora basketligor i Europa.
            </p>
          </div>

          {/* Snabblänkar */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Snabblänkar</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> Matcher Idag
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> Om oss
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Ligor – Nordamerika & Sverige */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Ligor</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/nba" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> NBA
                </Link>
              </li>
              <li>
                <Link href="/sbl" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> Svenska Basketligan
                </Link>
              </li>
              <li>
                <Link href="/euroleague" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> EuroLeague
                </Link>
              </li>
              <li>
                <Link href="/eurocup" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> EuroCup
                </Link>
              </li>
              <li>
                <Link href="/champions-league" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> Champions League
                </Link>
              </li>
              <li>
                <Link href="/fiba-europe-cup" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> FIBA Europe Cup
                </Link>
              </li>
              <li>
                <Link href="/world-cup" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> World Cup 2027
                </Link>
              </li>
            </ul>
          </div>

          {/* Ligor – Europa */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Europeiska Ligor</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/acb" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> ACB (Spanien)
                </Link>
              </li>
              <li>
                <Link href="/lega-a" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> Lega A (Italien)
                </Link>
              </li>
              <li>
                <Link href="/bbl" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> BBL (Tyskland)
                </Link>
              </li>
              <li>
                <Link href="/turkish-bsl" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> Turkish BSL
                </Link>
              </li>
              <li>
                <Link href="/lnb" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> LNB (Frankrike)
                </Link>
              </li>
              <li>
                <Link href="/aba-liga" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> ABA Liga
                </Link>
              </li>
              <li>
                <Link href="/lkl" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> LKL (Litauen)
                </Link>
              </li>
              <li>
                <Link href="/greek-cup" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> Greek Cup
                </Link>
              </li>
              <li>
                <Link href="/kls" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> KLS (Serbien)
                </Link>
              </li>
              <li>
                <Link href="/serbian-super-league" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span>→</span> Serbian Super League
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-light mt-10 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {currentYear} Basket24.nu. Alla rättigheter förbehållna.</p>
            <p className="text-gray-400">
              18+ | Spela ansvarsfullt | <a href="https://stodlinjen.se" className="hover:text-accent transition-colors" target="_blank" rel="noopener">Stödlinjen.se</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
