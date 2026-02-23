import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Om Oss - basket24.nu',
  description: 'basket24.nu är din kompletta TV-guide för basket. Hitta alla NBA, EuroLeague och SBL matcher på TV och stream.',
};

export default function OmOssPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        
        {/* Header */}
        <div className="bg-white shadow-sm p-8 mb-8">
          <h1 className="text-4xl font-bold text-dark mb-4">Om basket24.nu</h1>
          <p className="text-lg text-gray-600">
            Din kompletta TV-guide för basket i Sverige
          </p>
        </div>

        {/* Content */}
        <div className="bg-white shadow-sm p-8 space-y-6">
          
          <section>
            <h2 className="text-2xl font-bold text-dark mb-3">Vad vi gör</h2>
            <p className="text-gray-700 leading-relaxed">
              basket24.nu är en gratis TV-guide som hjälper svenska basketfans att hitta var matcher sänds. 
              Vi samlar information om alla NBA, EuroLeague och SBL (Svenska Basketligan) matcher och 
              visar vilka TV-kanaler och streamingtjänster som sänder dem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-3">Vårt uppdrag</h2>
            <p className="text-gray-700 leading-relaxed">
              Vi vill göra det enkelt för basketfans att aldrig missa en match. Med basket24.nu får du 
              alltid uppdaterad information om kommande matcher, TV-tider och var du kan se dem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-3">Vilka ligor täcker vi?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>NBA</strong> - Nordamerikas främsta basketliga</li>
              <li><strong>EuroLeague</strong> - Europas toppliga för klubblag</li>
              <li><strong>SBL</strong> - Svenska Basketligan</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-3">Bakom basket24.nu</h2>
            <p className="text-gray-700 leading-relaxed">
              basket24.nu drivs av DataMarketing AB, ett svenskt tech-företag specialiserat på 
              digitala plattformar inom sport och underhållning.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-3">Kontakta oss</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Har du frågor eller feedback? Vi vill gärna höra från dig!
            </p>
            <Link 
              href="/kontakt"
              className="inline-block bg-primary text-white px-6 py-3 font-bold hover:bg-orange-600 transition-colors"
            >
              Kontakta oss →
            </Link>
          </section>

        </div>

        {/* Back to home */}
        <div className="mt-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-orange-600 font-semibold"
          >
            ← Tillbaka till alla matcher
          </Link>
        </div>

      </div>
    </div>
  );
}