import LeagueHero from '@/components/LeagueHero';
import LeagueMatches from '@/components/LeagueMatches';
import { Metadata } from 'next';

// SEO Metadata
export const metadata: Metadata = {
  title: 'SBL på TV - Svenska Basketligan matcher | basket24.nu',
  description: 'Se alla SBL-matcher på TV och stream. Följ svenska basketligan med Borås Basket, Umeå Basket, Uppsala Basket och alla svenska lag. Komplett TV-guide för SBL 2025/2026.',
  keywords: 'SBL på TV, Svenska Basketligan, SBL stream, Borås Basket, Umeå Basket, Uppsala Basket, svensk basket',
};

export default function SBLPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero */}
      <LeagueHero
        league="SBL"
        title="SBL - Svenska Basketligan"
        description="Alla SBL-matcher på TV och stream. Följ Borås Basket, Umeå Basket, Uppsala Basket och alla svenska basketlag."
        icon="🇸🇪"
      />

      {/* Matches */}
      <LeagueMatches league="SBL" />

      {/* SEO Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow-sm p-6">
          <h2 className="text-xl font-bold text-dark mb-4">
            SBL på TV och stream i Sverige
          </h2>
          <div className="prose prose-sm text-gray-700 space-y-4">
            <p>
              Välkommen till basket24.nu - din kompletta TV-guide för Svenska Basketligan! 
              Här hittar du alla SBL-matcher med exakta TV-tider och streamingtjänster.
            </p>
            <p>
              Svenska Basketligan (SBL) är Sveriges högsta basketliga för herrar. 
              Säsongen 2025/2026 pågår från september till april med slutspel som 
              avgör svenska mästaren.
            </p>
            <h3 className="text-lg font-bold text-dark">Var kan jag se SBL i Sverige?</h3>
            <p>
              SBL sänds i Sverige på:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Expressen TV</strong> - Streamar många SBL-matcher</li>
              <li><strong>Lagets egna streams</strong> - Vissa lag streamar hemma-matcher</li>
            </ul>
            <h3 className="text-lg font-bold text-dark">Lagen i SBL</h3>
            <p>
              Bland de mest framgångsrika lagen i SBL hittar vi Borås Basket, Norrköping Dolphins, 
              Södertälje BBK, och Uppsala Basket. Ligan har stark tradition i svenska basketstäder 
              som Borås, Norrköping, Södertälje och Uppsala.
            </p>
            <p>
              Med basket24.nu får du alltid aktuell information om vilken kanal som visar 
              vilken SBL-match, så du kan stötta ditt favoritlag genom hela säsongen!
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
