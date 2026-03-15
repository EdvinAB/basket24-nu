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
    affiliateUrl: "#", // Byt till riktig affiliate-URL innan launch
    buttonText: "Se på HBO Max",
  },
  {
    id: "allente",
    name: "Allente",
    displayName: "ALLENTE",
    affiliateUrl: "#", // Byt till riktig affiliate-URL innan launch
    buttonText: "Se på Allente",
  },
  {
    id: "kanal-9",
    name: "Kanal 9",
    displayName: "KANAL 9",
  },
  {
    id: "expressen-tv",
    name: "Expressen TV",
    displayName: "EXPRESSEN",
    affiliateUrl: "https://www.expressen.se/tv",
    buttonText: "Se på Expressen",
  },
  {
    id: "viaplay",
    name: "Viaplay",
    displayName: "VIAPLAY",
    affiliateUrl: "#", // Byt till riktig affiliate-URL innan launch
    buttonText: "Se på Viaplay",
  },
  {
    id: "movistar-plus",
    name: "Movistar+",
    displayName: "MOVISTAR+",
  },
  {
    id: "bein-sports-turkey",
    name: "beIN Sports Turkey",
    displayName: "BEIN TR",
  },
  {
    id: "arena-sport",
    name: "Arena Sport",
    displayName: "ARENA",
  },
  {
    id: "dyn",
    name: "Dyn",
    displayName: "DYN",
  },
  {
    id: "cosmote-tv",
    name: "Cosmote TV",
    displayName: "COSMOTE",
  },
  {
    id: "dazn-italy",
    name: "DAZN Italy",
    displayName: "DAZN IT",
  },
  {
    id: "go3",
    name: "Go3",
    displayName: "GO3",
  },

  // === NYA ===
  {
    id: "eurocup-tv",
    name: "EuroLeague TV",
    displayName: "EUROCUP TV",
    affiliateUrl: "#", // Byt till riktig affiliate-URL innan launch
    buttonText: "Se på EuroLeague TV",
  },
  {
    id: "courtside1891",
    name: "Courtside 1891",
    displayName: "COURTSIDE",
    affiliateUrl: "#", // Byt till riktig affiliate-URL innan launch
    buttonText: "Se på Courtside 1891",
  },
  {
    id: "dazn",
    name: "DAZN",
    displayName: "DAZN",
    affiliateUrl: "#", // Byt till riktig affiliate-URL innan launch
    buttonText: "Se på DAZN",
  },
  {
    id: "courtside1891-max",
    name: "Courtside 1891 Max",
    displayName: "COURTSIDE MAX",
    affiliateUrl: "#", // Byt till riktig affiliate-URL innan launch
    buttonText: "Se på Courtside Max",
  },
  {
    id: "fiba-plus",
    name: "FIBA+",
    displayName: "FIBA+",
    affiliateUrl: "#", // Byt till riktig affiliate-URL innan launch
    buttonText: "Se på FIBA+",
  },
  {
    id: "lnb-tv",
    name: "LNB TV",
    displayName: "LNB TV",
  },
  {
    id: "bein-sports-fr",
    name: "beIN Sports France",
    displayName: "BEIN FR",
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
