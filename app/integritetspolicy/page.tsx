import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integritetspolicy | basket24.nu',
  description: 'Läs om hur Fanpulse Media AB hanterar dina uppgifter och cookies på basket24.nu.',
  alternates: { canonical: 'https://basket24.nu/integritetspolicy' },
};

export default function IntegritetspolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">

        <div className="bg-white shadow-sm p-8">
          <h1 className="text-4xl font-bold text-dark mb-2">Integritetspolicy</h1>
          <p className="text-sm text-gray-500 mb-8">Senast uppdaterad: mars 2026</p>

          <p className="text-gray-700 mb-8">
            Fanpulse Media AB ("vi", "oss") värnar om din personliga integritet. Denna integritetspolicy
            beskriver hur vi samlar in, använder och skyddar information när du besöker basket24.nu.
          </p>

          {/* 1 */}
          <h2 className="text-2xl font-bold text-dark mt-8 mb-3">1. Personuppgiftsansvarig</h2>
          <p className="text-gray-700">Fanpulse Media AB</p>
          <p className="text-gray-700">E-post: edvin.rtech@gmail.com</p>
          <p className="text-gray-700 mb-6">Webbplats: basket24.nu</p>

          {/* 2 */}
          <h2 className="text-2xl font-bold text-dark mt-8 mb-3">2. Vilken information samlar vi in?</h2>
          <p className="text-gray-700 mb-4">
            Vi samlar inte in personuppgifter direkt från besökare. Däremot kan följande teknisk
            information samlas in automatiskt via tredjepartstjänster:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li><strong>Besöksstatistik:</strong> Via Google Analytics samlar vi in anonymiserad data om sidvisningar, sessionslängd och trafikkällor. IP-adresser anonymiseras.</li>
            <li><strong>Teknisk data:</strong> Webbläsartyp, enhet, operativsystem och ungefärlig geografisk plats (land/stad).</li>
            <li><strong>Kakor (cookies):</strong> Se avsnitt 5 nedan.</li>
          </ul>

          {/* 3 */}
          <h2 className="text-2xl font-bold text-dark mt-8 mb-3">3. Hur använder vi informationen?</h2>
          <p className="text-gray-700 mb-4">Den insamlade informationen används för att:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Förstå hur besökare använder sajten och förbättra användarupplevelsen</li>
            <li>Analysera vilka sidor och ligor som är mest populära</li>
            <li>Åtgärda tekniska problem och optimera prestanda</li>
          </ul>

          {/* 4 */}
          <h2 className="text-2xl font-bold text-dark mt-8 mb-3">4. Rättslig grund för behandling</h2>
          <p className="text-gray-700 mb-6">
            Behandlingen av besöksstatistik sker med stöd av vårt berättigade intresse (GDPR artikel 6.1 f)
            att förbättra och utveckla tjänsten. Ingen behandling kräver att du lämnar ut personuppgifter
            för att använda sajten.
          </p>

          {/* 5 */}
          <h2 className="text-2xl font-bold text-dark mt-8 mb-3">5. Kakor (Cookies)</h2>
          <p className="text-gray-700 mb-4">
            basket24.nu använder kakor för att sajten ska fungera och för att samla in anonymiserad
            statistik. Vi använder följande typer av kakor:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Nödvändiga kakor:</strong> Krävs för att sajten ska fungera korrekt. Kan inte stängas av.</li>
            <li><strong>Analytiska kakor:</strong> Google Analytics för anonymiserad besöksstatistik. Du kan avböja dessa via din webbläsares inställningar eller via Google Analytics Opt-out.</li>
          </ul>
          <p className="text-gray-700 mb-6">
            Du kan när som helst radera eller blockera kakor via din webbläsares inställningar.
            Observera att detta kan påverka sajtens funktionalitet.
          </p>

          {/* 6 */}
          <h2 className="text-2xl font-bold text-dark mt-8 mb-3">6. Tredjepartstjänster</h2>
          <p className="text-gray-700 mb-4">
            basket24.nu använder följande tredjepartstjänster som kan behandla data:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li><strong>Google Analytics:</strong> Besöksstatistik. Googles integritetspolicy: policies.google.com/privacy</li>
            <li><strong>Vercel:</strong> Hosting och CDN. Vercels integritetspolicy: vercel.com/legal/privacy-policy</li>
            <li><strong>API-Sports:</strong> Matchdata för basketligor. api-sports.io/privacy-policy</li>
          </ul>

          {/* 7 */}
          <h2 className="text-2xl font-bold text-dark mt-8 mb-3">7. Affiliate-länkar</h2>
          <p className="text-gray-700 mb-6">
            basket24.nu kan innehålla affiliate-länkar till streamingtjänster och andra externa sajter.
            Om du klickar på en sådan länk och genomför ett köp kan vi erhålla en provision. Detta
            påverkar inte priset du betalar. Vi ansvarar inte för innehållet eller integritetspolicyn
            på länkade externa sajter.
          </p>

          {/* 8 */}
          <h2 className="text-2xl font-bold text-dark mt-8 mb-3">8. Dina rättigheter</h2>
          <p className="text-gray-700 mb-4">Enligt GDPR har du rätt att:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Begära tillgång till de uppgifter vi behandlar om dig</li>
            <li>Begära rättelse av felaktiga uppgifter</li>
            <li>Begära radering av dina uppgifter</li>
            <li>Invända mot behandling baserad på berättigat intresse</li>
            <li>Lämna in klagomål till Integritetsskyddsmyndigheten (IMY) på imy.se</li>
          </ul>
          <p className="text-gray-700 mb-6">
            För att utöva dina rättigheter, kontakta oss på: <strong>edvin.rtech@gmail.com</strong>
          </p>

          {/* 9 */}
          <h2 className="text-2xl font-bold text-dark mt-8 mb-3">9. Lagring och säkerhet</h2>
          <p className="text-gray-700 mb-6">
            Vi lagrar ingen personlig information på egna servrar. All data behandlas av tredjepartstjänster
            listade i avsnitt 6 enligt deras respektive säkerhetsrutiner. Statistikdata från Google Analytics
            lagras i enlighet med Googles datapolicy.
          </p>

          {/* 10 */}
          <h2 className="text-2xl font-bold text-dark mt-8 mb-3">10. Ändringar i denna policy</h2>
          <p className="text-gray-700 mb-6">
            Vi förbehåller oss rätten att uppdatera denna integritetspolicy. Vid väsentliga ändringar
            uppdateras datumet längst upp på sidan. Vi rekommenderar att du läser igenom policyn regelbundet.
          </p>

          {/* 11 */}
          <h2 className="text-2xl font-bold text-dark mt-8 mb-3">11. Kontakt</h2>
          <p className="text-gray-700 mb-2">
            Har du frågor om vår integritetspolicy eller hur vi hanterar data, kontakta oss:
          </p>
          <p className="text-gray-700">Fanpulse Media AB</p>
          <p className="text-gray-700">E-post: edvin.rtech@gmail.com</p>
          <p className="text-gray-700">Webbplats: basket24.nu</p>
        </div>

      </div>
    </div>
  );
}