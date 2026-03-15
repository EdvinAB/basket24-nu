// SportsEvent Structured Data (JSON-LD)
// Used on match detail pages

interface SportsEventSchemaProps {
  homeTeam: string;
  awayTeam: string;
  date: string; // ISO format
  venue: string;
  league: string;
  broadcasters: string[];
  matchUrl: string;
}

const LEAGUE_NAME: Record<string, string> = {
  'nba': 'NBA',
  'euroleague': 'EuroLeague',
  'sbl': 'Svenska Basketligan',
  'acb': 'ACB',
  'turkish-bsl': 'Turkish BSL',
  'aba-liga': 'ABA Liga',
  'bbl': 'Basketball Bundesliga',
  'greek-cup': 'Greek Cup',
  'lega-a': 'Lega A',
  'lkl': 'LKL',
  'kls': 'KLS',
  'serbian-super-league': 'Serbian Super League',
  'eurocup': 'EuroCup',
  'champions-league': 'Basketball Champions League',
  'fiba-europe-cup': 'FIBA Europe Cup',
  'lnb': 'LNB Pro A',
  'world-cup': 'FIBA Basketball World Cup',
};

const BROADCASTER_NAME: Record<string, string> = {
  'nba-league-pass': 'NBA League Pass',
  'hbo-max': 'HBO Max',
  'allente': 'Allente',
  'kanal-9': 'Kanal 9',
  'expressen-tv': 'Expressen TV',
  'viaplay': 'Viaplay',
  'movistar-plus': 'Movistar+',
  'bein-sports-turkey': 'beIN Sports Turkey',
  'arena-sport': 'Arena Sport',
  'dyn': 'Dyn',
  'cosmote-tv': 'Cosmote TV',
  'dazn-italy': 'DAZN',
  'go3': 'Go3',
  'eurocup-tv': 'EuroLeague TV',
  'courtside1891': 'Courtside 1891',
  'dazn': 'DAZN',
  'courtside1891-max': 'Courtside 1891 Max',
  'fiba-plus': 'FIBA+',
  'lnb-tv': 'LNB TV',
  'bein-sports-fr': 'beIN Sports France',
};

const LEAGUE_COUNTRY: Record<string, string> = {
  'nba': 'US',
  'euroleague': 'EU',
  'sbl': 'SE',
  'acb': 'ES',
  'turkish-bsl': 'TR',
  'aba-liga': 'RS',
  'bbl': 'DE',
  'greek-cup': 'GR',
  'lega-a': 'IT',
  'lkl': 'LT',
  'kls': 'RS',
  'serbian-super-league': 'RS',
  'eurocup': 'EU',
  'champions-league': 'EU',
  'fiba-europe-cup': 'EU',
  'lnb': 'FR',
  'world-cup': 'WORLD',
};

export default function SportsEventSchema({
  homeTeam,
  awayTeam,
  date,
  venue,
  league,
  broadcasters,
  matchUrl,
}: SportsEventSchemaProps) {
  const eventDate = new Date(date);
  const endDate = new Date(eventDate.getTime() + 3 * 60 * 60 * 1000);
  const country = LEAGUE_COUNTRY[league.toLowerCase()] || 'EU';
  const leagueDisplayName = LEAGUE_NAME[league.toLowerCase()] || league;
  const matchName = `${homeTeam} vs ${awayTeam}`;
  const broadcasterNames = broadcasters.map(b => BROADCASTER_NAME[b] || b).join(', ');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    'name': matchName,
    'description': `Se ${homeTeam} mot ${awayTeam} live på TV och stream. Sänds på ${broadcasterNames}.`,
    'startDate': eventDate.toISOString(),
    'endDate': endDate.toISOString(),
    'url': `https://basket24.nu${matchUrl}`,
    'location': {
      '@type': 'Place',
      'name': venue,
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': country,
      },
    },
    'homeTeam': {
      '@type': 'SportsTeam',
      'name': homeTeam,
      'sport': 'Basketball',
    },
    'awayTeam': {
      '@type': 'SportsTeam',
      'name': awayTeam,
      'sport': 'Basketball',
    },
    'sport': 'Basketball',
    'organizer': {
      '@type': 'SportsOrganization',
      'name': leagueDisplayName,
      'sport': 'Basketball',
    },
    'eventStatus': 'https://schema.org/EventScheduled',
    'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
