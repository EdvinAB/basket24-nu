import { NextResponse } from 'next/server';

const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 60 * 60 * 1000; // 1 timme
const API_KEY = process.env.APISPORTS_KEY;

// Playoff startdatum – matcher före detta datum ignoreras (regular season)
const PLAYOFF_START = '2026-04-14';

// First round matchups: visningsnamn + exakta API-namn
const FIRST_ROUND_MATCHUPS = [
  { display1: 'OKC Thunder',            display2: 'Phoenix Suns',           api1: 'Oklahoma City Thunder', api2: 'Phoenix Suns' },
  { display1: 'LA Lakers',              display2: 'Houston Rockets',        api1: 'Los Angeles Lakers',    api2: 'Houston Rockets' },
  { display1: 'Minnesota Timberwolves', display2: 'Denver Nuggets',         api1: 'Minnesota Timberwolves', api2: 'Denver Nuggets' },
  { display1: 'San Antonio Spurs',      display2: 'Portland Trail Blazers', api1: 'San Antonio Spurs',     api2: 'Portland Trail Blazers' },
  { display1: 'Detroit Pistons',        display2: 'Orlando Magic',          api1: 'Detroit Pistons',       api2: 'Orlando Magic' },
  { display1: 'Cleveland Cavaliers',    display2: 'Toronto Raptors',        api1: 'Cleveland Cavaliers',   api2: 'Toronto Raptors' },
  { display1: 'New York Knicks',        display2: 'Atlanta Hawks',          api1: 'New York Knicks',       api2: 'Atlanta Hawks' },
  { display1: 'Boston Celtics',         display2: 'Philadelphia 76ers',     api1: 'Boston Celtics',        api2: 'Philadelphia 76ers' },
];

// Mappning visningsnamn → API-namn (används för senare rundor)
const DISPLAY_TO_API: Record<string, string> = {};
FIRST_ROUND_MATCHUPS.forEach(m => {
  DISPLAY_TO_API[m.display1] = m.api1;
  DISPLAY_TO_API[m.display2] = m.api2;
});

export interface Series {
  team1: string;
  team2: string;
  wins1: number;
  wins2: number;
  winner: string | null;
}

const TBD: Series = { team1: 'TBD', team2: 'TBD', wins1: 0, wins2: 0, winner: null };

// Räknar vinster för ett specifikt lag-par baserat på speldata
function calcSeries(
  games: any[],
  apiTeam1: string,
  apiTeam2: string,
  display1: string,
  display2: string
): Series {
  let wins1 = 0, wins2 = 0;

  for (const g of games) {
    const home = g.teams?.home?.name;
    const away = g.teams?.away?.name;
    const homeScore = g.scores?.home?.total;
    const awayScore = g.scores?.away?.total;
    const status = g.status?.short;

    if (status !== 'FT' && status !== 'AOT') continue;
    if (homeScore === null || homeScore === undefined) continue;
    if (awayScore === null || awayScore === undefined) continue;

    const isMatch =
      (home === apiTeam1 && away === apiTeam2) ||
      (home === apiTeam2 && away === apiTeam1);
    if (!isMatch) continue;

    if (homeScore > awayScore) {
      if (home === apiTeam1) wins1++; else wins2++;
    } else if (awayScore > homeScore) {
      if (away === apiTeam1) wins1++; else wins2++;
    }
  }

  const apiWinner = wins1 === 4 ? apiTeam1 : wins2 === 4 ? apiTeam2 : null;
  const winner = apiWinner
    ? (apiWinner === apiTeam1 ? display1 : display2)
    : null;

  return { team1: display1, team2: display2, wins1, wins2, winner };
}

export async function GET() {
  const cacheKey = 'nba-bracket-2025-2026';
  const cached = cache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return NextResponse.json({ success: true, ...cached.data });
  }

  try {
    const res = await fetch(
      'https://v1.basketball.api-sports.io/games?league=12&season=2025-2026',
      { headers: { 'x-apisports-key': API_KEY || '' } }
    );
    const data = await res.json();
    const allGames: any[] = data.response || [];

    // Filtrera bort regular season – behåll bara playoff-matcher
    const playoffGames = allGames.filter(g => {
      const gameDate = g.date?.split('T')[0] ?? '';
      return gameDate >= PLAYOFF_START;
    });

    // ── First Round ──────────────────────────────────────
    const firstRound: Series[] = FIRST_ROUND_MATCHUPS.map(m =>
      calcSeries(playoffGames, m.api1, m.api2, m.display1, m.display2)
    );

    // ── Conf. Semifinals ─────────────────────────────────
    // Par: FR[0]+FR[1] → Semi[0], FR[2]+FR[3] → Semi[1],
    //      FR[4]+FR[5] → Semi[2], FR[6]+FR[7] → Semi[3]
    const semis: Series[] = [];
    for (let i = 0; i < 4; i++) {
      const fr1 = firstRound[i * 2];
      const fr2 = firstRound[i * 2 + 1];

      if (!fr1.winner || !fr2.winner) {
        semis.push({ ...TBD });
        continue;
      }

      const api1 = DISPLAY_TO_API[fr1.winner] || fr1.winner;
      const api2 = DISPLAY_TO_API[fr2.winner] || fr2.winner;
      semis.push(calcSeries(playoffGames, api1, api2, fr1.winner, fr2.winner));
    }

    // ── Conf. Finals ─────────────────────────────────────
    // Semi[0]+Semi[1] → CF[0], Semi[2]+Semi[3] → CF[1]
    const confFinals: Series[] = [];
    for (let i = 0; i < 2; i++) {
      const s1 = semis[i * 2];
      const s2 = semis[i * 2 + 1];

      if (!s1.winner || !s2.winner) {
        confFinals.push({ ...TBD });
        continue;
      }

      const api1 = DISPLAY_TO_API[s1.winner] || s1.winner;
      const api2 = DISPLAY_TO_API[s2.winner] || s2.winner;
      confFinals.push(calcSeries(playoffGames, api1, api2, s1.winner, s2.winner));
    }

    // ── NBA Finals ───────────────────────────────────────
    let nbaFinal: Series = { ...TBD };
    if (confFinals[0].winner && confFinals[1].winner) {
      const api1 = DISPLAY_TO_API[confFinals[0].winner] || confFinals[0].winner;
      const api2 = DISPLAY_TO_API[confFinals[1].winner] || confFinals[1].winner;
      nbaFinal = calcSeries(
        playoffGames, api1, api2,
        confFinals[0].winner, confFinals[1].winner
      );
    }

    const result = { firstRound, semis, confFinals, nbaFinal };
    cache.set(cacheKey, { data: result, timestamp: Date.now() });

    return NextResponse.json({ success: true, ...result });

  } catch (error) {
    console.error('NBA playoffs error:', error);
    return NextResponse.json(
      { success: false, firstRound: [], semis: [], confFinals: [], nbaFinal: { ...TBD } },
      { status: 500 }
    );
  }
}