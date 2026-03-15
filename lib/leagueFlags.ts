export interface LeagueInfo {
  name: string;
  flag: string;
  logo: string;
  color: string;
}

export const LEAGUE_FLAGS: Record<string, LeagueInfo> = {
  // NBA
  nba: { name: "NBA", flag: "/flags/us.svg", logo: "/league-logos/12.png", color: "#2563eb" },
  "12": { name: "NBA", flag: "/flags/us.svg", logo: "/league-logos/12.png", color: "#2563eb" },

  // EuroLeague
  euroleague: { name: "EuroLeague", flag: "/flags/eu.svg", logo: "/league-logos/120.png", color: "#16a34a" },
  "120": { name: "EuroLeague", flag: "/flags/eu.svg", logo: "/league-logos/120.png", color: "#16a34a" },

  // SBL
  sbl: { name: "SBL", flag: "/flags/se.svg", logo: "/league-logos/93.png", color: "#eab308" },
  "93": { name: "SBL", flag: "/flags/se.svg", logo: "/league-logos/93.png", color: "#eab308" },

  // ACB
  acb: { name: "ACB", flag: "/flags/es.svg", logo: "/league-logos/117.png", color: "#dc2626" },
  "117": { name: "ACB", flag: "/flags/es.svg", logo: "/league-logos/117.png", color: "#dc2626" },

  // Turkish BSL
  "turkish-bsl": { name: "BSL", flag: "/flags/tr.svg", logo: "/league-logos/104.png", color: "#ef4444" },
  "104": { name: "BSL", flag: "/flags/tr.svg", logo: "/league-logos/104.png", color: "#ef4444" },

  // ABA Liga
  "aba-liga": { name: "ABA Liga", flag: "/flags/eu.svg", logo: "/league-logos/198.png", color: "#8b5cf6" },
  "198": { name: "ABA Liga", flag: "/flags/eu.svg", logo: "/league-logos/198.png", color: "#8b5cf6" },

  // BBL
  bbl: { name: "BBL", flag: "/flags/de.svg", logo: "/league-logos/40.png", color: "#0ea5e9" },
  "40": { name: "BBL", flag: "/flags/de.svg", logo: "/league-logos/40.png", color: "#0ea5e9" },

  // Greek Cup
  "greek-cup": { name: "Greek Cup", flag: "/flags/gr.svg", logo: "/league-logos/136.png", color: "#3b82f6" },
  "136": { name: "Greek Cup", flag: "/flags/gr.svg", logo: "/league-logos/136.png", color: "#3b82f6" },

  // Lega A
  "lega-a": { name: "Lega A", flag: "/flags/it.svg", logo: "/league-logos/52.png", color: "#10b981" },
  "52": { name: "Lega A", flag: "/flags/it.svg", logo: "/league-logos/52.png", color: "#10b981" },

  // LKL
  lkl: { name: "LKL", flag: "/flags/lt.svg", logo: "/league-logos/60.png", color: "#f59e0b" },
  "60": { name: "LKL", flag: "/flags/lt.svg", logo: "/league-logos/60.png", color: "#f59e0b" },

  // KLS
  kls: { name: "KLS", flag: "/flags/rs.svg", logo: "/league-logos/85.png", color: "#ec4899" },
  "85": { name: "KLS", flag: "/flags/rs.svg", logo: "/league-logos/85.png", color: "#ec4899" },

  // Serbian Super League
  "serbian-super-league": { name: "Superliga", flag: "/flags/rs.svg", logo: "/league-logos/86.png", color: "#a855f7" },
  "86": { name: "Superliga", flag: "/flags/rs.svg", logo: "/league-logos/86.png", color: "#a855f7" },

  // EuroCup (NYA)
  eurocup: { name: "EuroCup", flag: "/flags/eu.svg", logo: "/league-logos/194.png", color: "#0891b2" },
  "194": { name: "EuroCup", flag: "/flags/eu.svg", logo: "/league-logos/194.png", color: "#0891b2" },

  // Champions League (NYA)
  "champions-league": { name: "Champions League", flag: "/flags/eu.svg", logo: "/league-logos/202.png", color: "#1d4ed8" },
  "202": { name: "Champions League", flag: "/flags/eu.svg", logo: "/league-logos/202.png", color: "#1d4ed8" },

  // FIBA Europe Cup (NYA)
  "fiba-europe-cup": { name: "FIBA Europe Cup", flag: "/flags/eu.svg", logo: "/league-logos/201.png", color: "#059669" },
  "201": { name: "FIBA Europe Cup", flag: "/flags/eu.svg", logo: "/league-logos/201.png", color: "#059669" },

  // LNB – Franska ligan (NYA)
  lnb: { name: "LNB", flag: "/flags/fr.svg", logo: "/league-logos/2.png", color: "#7c3aed" },
  "2": { name: "LNB", flag: "/flags/fr.svg", logo: "/league-logos/2.png", color: "#7c3aed" },

  // World Cup 2027 (NYA)
  "world-cup": { name: "World Cup", flag: "/flags/un.svg", logo: "/league-logos/281.png", color: "#b45309" },
  "281": { name: "World Cup", flag: "/flags/un.svg", logo: "/league-logos/281.png", color: "#b45309" },
};

export function getLeagueInfo(league: string): LeagueInfo {
  return (
    LEAGUE_FLAGS[league] ?? {
      name: league,
      flag: "/flags/eu.svg",
      logo: "",
      color: "#6b7280",
    }
  );
}
