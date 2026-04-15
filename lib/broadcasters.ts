export interface Broadcaster {
  id: string;
  name: string;
  displayName: string;
  affiliateUrl?: string;
  buttonText?: string;
}

export const BROADCASTERS: Broadcaster[] = [
  // === BEFINTLIGA ===
  {
    id: "nba-league-pass",
    name: "NBA League Pass",
    displayName: "NBA PASS",
    affiliateUrl: "#", // Byt till riktig affiliate-URL innan launch
    buttonText: "Se på NBA Pass",
  },
  {
    id: "hbo-max",
    name: "HBO Max",
    displayName: "HBO MAX",
    affiliateUrl: "#",
    buttonText: "Se på HBO Max",
  },
  {
    id: "allente",
    name: "Allente",
    displayName: "ALLENTE",
    affiliateUrl: "#",
    buttonText: "Se på Allente",
  },
  {
    id: "telia-play",
    name: "Telia Play",
    displayName: "TELIA PLAY",
    affiliateUrl: "#",
    buttonText: "Se på Telia Play",
  },

  // SBL
  {
    id: "expressen-tv",
    name: "Expressen TV",
    displayName: "EXPRESSEN",
    affiliateUrl: "https://www.expressen.se/tv",
    buttonText: "Se på Expressen",
  },

  // EuroLeague
  {
    id: "viaplay",
    name: "Viaplay",
    displayName: "VIAPLAY",
    affiliateUrl: "#",
    buttonText: "Se på Viaplay",
  },
  {
    id: "eurocup-tv",
    name: "EuroLeague TV",
    displayName: "EUROLEAGUE TV",
    affiliateUrl: "#",
    buttonText: "Se på EuroLeague TV",
  },

  // ACB, BBL, Lega A, Champions League
  {
    id: "dazn",
    name: "DAZN",
    displayName: "DAZN",
    affiliateUrl: "#",
    buttonText: "Se på DAZN",
  },

  // Turkish BSL, ABA Liga
  {
    id: "bet365",
    name: "bet365",
    displayName: "BET365",
    affiliateUrl: "#",
    buttonText: "Se på bet365",
  },
  {
    id: "bein-sports-turkey",
    name: "beIN Sports Turkey",
    displayName: "BEIN TR",
  },
  {
    id: "nettv-plus",
    name: "NetTV Plus",
    displayName: "NETTV+",
  },

  // ABA Liga
  {
    id: "unibet",
    name: "Unibet",
    displayName: "UNIBET",
    affiliateUrl: "#",
    buttonText: "Se på Unibet",
  },
  {
    id: "arena-sport",
    name: "Arena Sport",
    displayName: "ARENA SPORT",
  },

  // LKL
  {
    id: "fanseat",
    name: "Fanseat",
    displayName: "FANSEAT",
    affiliateUrl: "#",
    buttonText: "Se på Fanseat",
  },
  {
    id: "lkl-tv",
    name: "LKL.lt",
    displayName: "LKL TV",
  },

  // KLS
  {
    id: "rts",
    name: "RTS",
    displayName: "RTS",
  },
  {
    id: "sportklub",
    name: "Sportklub",
    displayName: "SPORTKLUB",
  },

  // Champions League, FIBA Europe Cup
  {
    id: "courtside1891",
    name: "Courtside 1891",
    displayName: "COURTSIDE",
    affiliateUrl: "#",
    buttonText: "Se på Courtside 1891",
  },

  // World Cup
  {
    id: "courtside1891-max",
    name: "Courtside 1891 Max",
    displayName: "COURTSIDE MAX",
    affiliateUrl: "#",
    buttonText: "Se på Courtside Max",
  },

  // LNB
  {
    id: "lnb-tv",
    name: "LNB TV",
    displayName: "LNB TV",
  },

  // Greek Cup
  {
    id: "cosmote-tv",
    name: "Cosmote TV",
    displayName: "COSMOTE",
  },

  // Lega A
  {
    id: "dazn-italy",
    name: "DAZN Italy",
    displayName: "DAZN IT",
    affiliateUrl: "#",
    buttonText: "Se på DAZN",
  },
];

export function getBroadcasterById(id: string): Broadcaster {
  return (
    BROADCASTERS.find((b) => b.id === id) ?? {
      id,
      name: id,
      displayName: id.toUpperCase(),
    }
  );
}
export const LEAGUE_BROADCASTERS: Record<string, string[]> = {
  'nba': ['nba-league-pass', 'hbo-max', 'allente', 'telia-play'],
  'sbl': ['expressen-tv'],
  'euroleague': ['viaplay', 'eurocup-tv'],
  'acb': ['dazn'],
  'turkish-bsl': ['bet365', 'bein-sports-turkey', 'nettv-plus'],
  'aba-liga': ['bet365', 'unibet', 'nettv-plus', 'arena-sport'],
  'bbl': ['dazn'],
  'lega-a': ['dazn', 'eurocup-tv'],
  'lkl': ['fanseat', 'lkl-tv'],
  'kls': ['rts', 'sportklub', 'nettv-plus', 'arena-sport'],
  'eurocup': ['eurocup-tv'],
  'champions-league': ['courtside1891', 'dazn'],
  'fiba-europe-cup': ['courtside1891'],
  'lnb': ['lnb-tv'],
  'greek-cup': ['cosmote-tv'],
  'world-cup': ['courtside1891-max'],
  'serbian-super-league': ['arena-sport'],
};
