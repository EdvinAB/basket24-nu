import LeagueHero from '@/components/LeagueHero';
import LeagueMatches from '@/components/LeagueMatches';
import { Metadata } from 'next';

// SEO Metadata
export const metadata: Metadata = {
  title: 'EuroLeague på TV - Alla EuroLeague-matcher | basket24.nu',
  description: 'Se alla EuroLeague-matcher på TV och stream. Real Madrid, Barcelona, Efes Istanbul och alla europeiska topplag. Komplett TV-guide för EuroLeague 2025/2026.',
  keywords: 'EuroLeague på TV, EuroLeague stream, EuroLeague matcher, Real Madrid basket, Barcelona basket, Viaplay EuroLeague',
};

export default function EuroLeaguePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero */}
      <LeagueHero
        league="EuroLeague"
        title="EuroLeague Basketball"
        description="Alla EuroLeague-matcher på TV och stream. Följ Real Madrid, Barcelona, Efes Istanbul och Europas bästa lag."
        icon="🇪🇺"
      />

      {/* Matches */}
      <LeagueMatches league="EuroLeague" />

      {/* SEO Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow-sm p-6">
          <h2 className="text-xl font-bold text-dark mb-4">
            EuroLeague på TV och stream i Sverige
          </h2>
          <div className="prose prose-sm text-gray-700 space-y-4">
            <p>
              Välkommen till basket24.nu - din kompletta TV-guide för EuroLeague! 
              Här hittar du alla EuroLeague-matcher med exakta TV-tider, kanaler och 
              streamingtjänster för den svenska marknaden.
            </p>
            <p>
              EuroLeague är Europas högsta basketliga med 18 topplag från hela kontinenten. 
              Säsongen 2025/2026 pågår från oktober till maj med Final Four som säsongens höjdpunkt.
            </p>
            <h3 className="text-lg font-bold text-dark">Var kan jag se EuroLeague i Sverige?</h3>
            <p>
              EuroLeague sänds i Sverige på:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Viaplay</strong> - Alla EuroLeague-matcher live</li>
              <li><strong>EuroLeague TV</strong> - Officiell streamtjänst</li>
            </ul>
            <h3 className="text-lg font-bold text-dark">Topplagan i EuroLeague</h3>
            <p>
              Bland de mest framgångsrika lagen hittar vi Real Madrid, FC Barcelona, 
              Anadolu Efes Istanbul, Panathinaikos Athens, och CSKA Moscow. Svenska 
              basketfans följer särskilt noga lag med nordiska spelare.
            </p>
            <p>
              Med basket24.nu får du alltid aktuell information om vilken kanal som visar 
              vilken match, så du aldrig missar spännande EuroLeague-basket!
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
