// lib/leagueFlags.ts
// Mapping från liga till flagg-ikon och logotyp

export interface LeagueInfo {
  name: string;
  flag: string;
  logo: string;
  color: string;
}

export const LEAGUE_FLAGS: Record<string, LeagueInfo> = {
  'nba': {
    name: 'NBA',
    flag: '/flags/us.svg',
    logo: '/league-logos/12.png',
    color: '#2563eb', // Blå
  },
  'euroleague': {
    name: 'EuroLeague',
    flag: '/flags/eu.svg',
    logo: '/league-logos/120.png',
    color: '#16a34a', // Grön
  },
  'sbl': {
    name: 'SBL',
    flag: '/flags/se.svg',
    logo: '/league-logos/93.png',
    color: '#eab308', // Gul
  },
  'acb': {
    name: 'ACB',
    flag: '/flags/es.svg',
    logo: '/league-logos/117.png',
    color: '#dc2626', // Röd
  },
  '117': {
    name: 'ACB',
    flag: '/flags/es.svg',
    logo: '/league-logos/117.png',
    color: '#dc2626',
  },
  'turkish-bsl': {
    name: 'Turkish BSL',
    flag: '/flags/tr.svg',
    logo: '/league-logos/104.png',
    color: '#ef4444', // Röd
  },
  '104': {
    name: 'Turkish BSL',
    flag: '/flags/tr.svg',
    logo: '/league-logos/104.png',
    color: '#ef4444',
  },
  'aba-liga': {
    name: 'ABA Liga',
    flag: '/flags/eu.svg',
    logo: '/league-logos/198.png',
    color: '#8b5cf6', // Lila
  },
  '198': {
    name: 'ABA Liga',
    flag: '/flags/eu.svg',
    logo: '/league-logos/198.png',
    color: '#8b5cf6',
  },
  'bbl': {
    name: 'BBL',
    flag: '/flags/de.svg',
    logo: '/league-logos/40.png',
    color: '#0ea5e9', // Ljusblå
  },
  '40': {
    name: 'BBL',
    flag: '/flags/de.svg',
    logo: '/league-logos/40.png',
    color: '#0ea5e9',
  },
  'greek-cup': {
    name: 'Greek Cup',
    flag: '/flags/gr.svg',
    logo: '/league-logos/136.png',
    color: '#3b82f6', // Blå
  },
  '136': {
    name: 'Greek Cup',
    flag: '/flags/gr.svg',
    logo: '/league-logos/136.png',
    color: '#3b82f6',
  },
  'lega-a': {
    name: 'Lega A',
    flag: '/flags/it.svg',
    logo: '/league-logos/52.png',
    color: '#10b981', // Grön
  },
  '52': {
    name: 'Lega A',
    flag: '/flags/it.svg',
    logo: '/league-logos/52.png',
    color: '#10b981',
  },
  'lkl': {
    name: 'LKL',
    flag: '/flags/lt.svg',
    logo: '/league-logos/60.png',
    color: '#f59e0b', // Amber
  },
  '60': {
    name: 'LKL',
    flag: '/flags/lt.svg',
    logo: '/league-logos/60.png',
    color: '#f59e0b',
  },
  'kls': {
    name: 'KLS',
    flag: '/flags/rs.svg',
    logo: '/league-logos/85.png',
    color: '#ec4899', // Rosa
  },
  '85': {
    name: 'KLS',
    flag: '/flags/rs.svg',
    logo: '/league-logos/85.png',
    color: '#ec4899',
  },
  'serbian-super-league': {
    name: 'Serbian Super League',
    flag: '/flags/rs.svg',
    logo: '/league-logos/86.png',
    color: '#a855f7', // Lila
  },
  '86': {
    name: 'Serbian Super League',
    flag: '/flags/rs.svg',
    logo: '/league-logos/86.png',
    color: '#a855f7',
  },
};

// Helper-funktion för att hämta liga-info
export function getLeagueInfo(league: string): LeagueInfo {
  const info = LEAGUE_FLAGS[league.toLowerCase()];
  if (!info) {
    return {
      name: league.toUpperCase(),
      flag: '/flags/eu.svg', // Default
      logo: '/league-logos/default.png', // Default
      color: '#4b5563', // Grå
    };
  }
  return info;
}
