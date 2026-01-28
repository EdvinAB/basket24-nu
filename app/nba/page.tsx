import LeagueHero from '@/components/LeagueHero';
import LeagueMatches from '@/components/LeagueMatches';
import { Metadata } from 'next';

// SEO Metadata
export const metadata: Metadata = {
  title: 'NBA på TV och stream - Alla NBA-matcher 2025/2026 | basket24.nu',
  description: 'Se alla NBA-matcher på TV och stream. TV-tider, kanaler och streaming för Lakers, Celtics, Warriors och alla NBA lag. Komplett TV-guide för NBA säsongen 2025/2026.',
  keywords: 'NBA på TV, NBA stream, NBA matcher, NBA Sverige, NBA League Pass, Lakers på TV, Celtics stream, Warriors matcher',
};

export default function NBAPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero */}
      <LeagueHero
        league="NBA"
        title="NBA - National Basketball Association"
        description="Alla NBA-matcher på TV och stream. Följ Lakers, Celtics, Warriors och alla dina favorit-NBA-lag."
        icon="🏀"
      />

      {/* Matches */}
      <LeagueMatches league="NBA" />

      {/* SEO Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow-sm p-6">
          <h2 className="text-xl font-bold text-dark mb-4">
            NBA på TV och stream i Sverige
          </h2>
          <div className="prose prose-sm text-gray-700 space-y-4">
            <p>
              Välkommen till basket24.nu - din kompletta TV-guide för NBA! 
              Här hittar du alla NBA-matcher med exakta TV-tider, kanaler och 
              streamingtjänster för den svenska marknaden.
            </p>
            <p>
              NBA (National Basketball Association) är världens största och mest prestigefyllda 
              basketliga med 30 lag från USA och Kanada. Säsongen 2025/2026 pågår från oktober 
              till april med playoffs fram till juni.
            </p>
            <h3 className="text-lg font-bold text-dark">Var kan jag se NBA i Sverige?</h3>
            <p>
              NBA sänds i Sverige på flera kanaler och streamingtjänster:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>NBA League Pass</strong> - Officiell streamtjänst med alla matcher</li>
              <li><strong>Viaplay</strong> - Utvalda matcher varje vecka</li>
              <li><strong>HBO MAX</strong> - Toppmatcher och playoffs</li>
              <li><strong>Amazon Prime Video</strong> - Utvalda matcher</li>
            </ul>
            <p>
              Med basket24.nu får du alltid aktuell information om vilken kanal som visar 
              vilken match, så du aldrig missar dina favorit-NBA-lag!
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
