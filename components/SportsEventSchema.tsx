// SportsEvent Structured Data (JSON-LD)
// Used on match detail pages

interface SportsEventSchemaProps {
  matchName: string;
  homeTeam: string;
  awayTeam: string;
  date: string; // ISO format
  time: string;
  venue: string;
  league: string;
  broadcaster: string;
  matchUrl: string;
}

export default function SportsEventSchema({
  matchName,
  homeTeam,
  awayTeam,
  date,
  time,
  venue,
  league,
  broadcaster,
  matchUrl,
}: SportsEventSchemaProps) {
  
  // Format date properly
  const eventDate = new Date(date);
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": matchName,
    "description": `Se ${awayTeam} mot ${homeTeam} live på TV och stream. ${broadcaster}`,
    "startDate": eventDate.toISOString(),
    "endDate": new Date(eventDate.getTime() + (3 * 60 * 60 * 1000)).toISOString(), // +3 hours
    "url": matchUrl,
    "location": {
      "@type": "Place",
      "name": venue,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": league === "SBL" ? "SE" : "US"
      }
    },
    "homeTeam": {
      "@type": "SportsTeam",
      "name": homeTeam,
      "sport": "Basketball"
    },
    "awayTeam": {
      "@type": "SportsTeam",
      "name": awayTeam,
      "sport": "Basketball"
    },
    "sport": "Basketball",
    "organizer": {
      "@type": "SportsOrganization",
      "name": league,
      "sport": "Basketball"
    },
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "SEK",
      "url": matchUrl,
      "description": `Streamat på ${broadcaster}`
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
