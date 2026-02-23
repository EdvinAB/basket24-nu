export interface Broadcaster {
  id: string;
  name: string;
  displayName: string;
  affiliateUrl: string | null;
  buttonText: string | null;
}

export const broadcasters: Record<string, Broadcaster> = {
  'nba-league-pass': {
    id: 'nba-league-pass',
    name: 'NBA League Pass',
    displayName: 'NBA PASS',
    affiliateUrl: '#',        // Byt till riktig affiliate-URL innan launch
    buttonText: 'Streama på NBA League Pass',
  },
  'hbo-max': {
    id: 'hbo-max',
    name: 'HBO Max',
    displayName: 'HBO MAX',
    affiliateUrl: '#',        // Byt till riktig affiliate-URL innan launch
    buttonText: 'Streama på HBO Max',
  },
  'allente': {
    id: 'allente',
    name: 'Allente',
    displayName: 'ALLENTE',
    affiliateUrl: '#',        // Byt till riktig affiliate-URL innan launch
    buttonText: 'Streama på Allente',
  },
  'kanal-9': {
    id: 'kanal-9',
    name: 'Kanal 9',
    displayName: 'KANAL 9',
    affiliateUrl: null,       // Ingen affiliate-länk
    buttonText: null,
  },
  'expressen-tv': {
    id: 'expressen-tv',
    name: 'Expressen TV',
    displayName: 'EXPRESSEN',
    affiliateUrl: 'https://www.expressen.se/tv',
    buttonText: 'Streama på Expressen TV',
  },
  'viaplay': {
    id: 'viaplay',
    name: 'Viaplay',
    displayName: 'VIAPLAY',
    affiliateUrl: '#',        // Byt till riktig affiliate-URL innan launch
    buttonText: 'Streama på Viaplay',
  },
  'movistar-plus': {
    id: 'movistar-plus',
    name: 'Movistar Plus',
    displayName: 'MOVISTAR+',
    affiliateUrl: null,
    buttonText: null,
  },
  'bein-sports-turkey': {
    id: 'bein-sports-turkey',
    name: 'beIN Sports Turkey',
    displayName: 'BEIN TR',
    affiliateUrl: null,
    buttonText: null,
  },
  'arena-sport': {
    id: 'arena-sport',
    name: 'Arena Sport',
    displayName: 'ARENA',
    affiliateUrl: null,
    buttonText: null,
  },
  'dyn': {
    id: 'dyn',
    name: 'Dyn',
    displayName: 'DYN',
    affiliateUrl: null,
    buttonText: null,
  },
  'cosmote-tv': {
    id: 'cosmote-tv',
    name: 'Cosmote TV',
    displayName: 'COSMOTE',
    affiliateUrl: null,
    buttonText: null,
  },
  'dazn-italy': {
    id: 'dazn-italy',
    name: 'DAZN Italy',
    displayName: 'DAZN IT',
    affiliateUrl: null,
    buttonText: null,
  },
  'go3': {
    id: 'go3',
    name: 'Go3',
    displayName: 'GO3',
    affiliateUrl: null,
    buttonText: null,
  },
};

export function getBroadcasterById(id: string): Broadcaster {
  // Om ID finns i listan, returnera den
  if (broadcasters[id]) return broadcasters[id];

  // Fallback: skapa en generisk broadcaster från ID-strängen
  // (för äldre string-broadcasters som "Expressen TV" direkt från API)
  return {
    id: id,
    name: id,
    displayName: id.toUpperCase().slice(0, 10),
    affiliateUrl: null,
    buttonText: null,
  };
}
