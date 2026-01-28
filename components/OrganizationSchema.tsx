// Organization Structured Data (JSON-LD)
// Used on all pages for company information

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DataMarketing AB",
    "legalName": "DataMarketing AB",
    "description": "DataMarketing AB är ett innovativt tech-företag specialiserat på data, digital marknadsföring och affiliate marketing. Vi utvecklar och lanserar nischade digitala plattformar och appar inom sport, underhållning och livsstil. basket24.nu är vår TV-guide för basket som hjälper svenska basketfans att hitta var matcher sänds.",
    "url": "https://basket24.nu",
    "logo": "https://basket24.nu/opengraph-image",
    "email": "edvin.rtech@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SE"
    },
    "founder": {
      "@type": "Person",
      "name": "DataMarketing AB"
    },
    "knowsAbout": [
      "Basketball",
      "Sports Broadcasting",
      "TV Guide",
      "Streaming",
      "NBA",
      "EuroLeague",
      "Swedish Basketball"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
