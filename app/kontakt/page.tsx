import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kontakt - basket24.nu',
  description: 'Kontakta basket24.nu. Vi svarar gärna på dina frågor om vår TV-guide för basket.',
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        
        {/* Header */}
        <div className="bg-white shadow-sm p-8 mb-8">
          <h1 className="text-4xl font-bold text-dark mb-4">Kontakta oss</h1>
          <p className="text-lg text-gray-600">
            Vi hjälper dig gärna med frågor om basket24.nu
          </p>
        </div>

        {/* Content */}
        <div className="bg-white shadow-sm p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">Kontaktinformation</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-bold text-dark mb-1">E-post</h3>
                  <a 
                    href="mailto:edvin.rtech@gmail.com" 
                    className="text-primary hover:underline"
                  >
                    edvin.rtech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl">🏢</div>
                <div>
                  <h3 className="font-bold text-dark mb-1">Företag</h3>
                  <p className="text-gray-700">DataMarketing AB</p>
                  <p className="text-gray-600 text-sm">Sverige</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark mb-4">Vanliga frågor</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-dark mb-2">Kostar basket24.nu något?</h3>
                <p className="text-gray-700">
                  Nej, basket24.nu är helt gratis att använda. Vi visar bara var matcher sänds.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-dark mb-2">Kan jag streama matcher via er sajt?</h3>
                <p className="text-gray-700">
                  Nej, vi streamar inte matcher själva. Vi visar bara vilka kanaler och 
                  streamingtjänster som sänder matcherna, och länkar till dessa.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-dark mb-2">Saknas en match eller liga?</h3>
                <p className="text-gray-700">
                  Kontakta oss gärna via e-post så tittar vi på det!
                </p>
              </div>

              <div>
                <h3 className="font-bold text-dark mb-2">Felaktig TV-information?</h3>
                <p className="text-gray-700">
                  Vi strävar efter att hålla all information uppdaterad. Om du hittar fel, 
                  vänligen kontakta oss så rättar vi det omgående.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t pt-6">
            <h2 className="text-2xl font-bold text-dark mb-4">Samarbeten & Annonsering</h2>
            <p className="text-gray-700 mb-4">
              Är du intresserad av samarbete eller annonsering på basket24.nu? 
              Kontakta oss via e-post för mer information.
            </p>
            <a 
              href="mailto:edvin.rtech@gmail.com?subject=Samarbete basket24.nu"
              className="inline-block bg-primary text-white px-6 py-3 font-bold hover:bg-orange-600 transition-colors"
            >
              Skicka e-post →
            </a>
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