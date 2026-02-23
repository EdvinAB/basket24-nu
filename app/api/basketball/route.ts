import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory cache
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minuter

const API_KEY = process.env.APISPORTS_KEY;
const BASE_URL = 'https://v1.basketball.api-sports.io';

// Liga-mappningar
const LEAGUE_IDS: Record<string, number> = {
  'nba': 12,
  'euroleague': 120,
  'sbl': 93,
  '117': 117,  // ACB
  '104': 104,  // Turkish BSL
  '198': 198,  // ABA Liga
  '40': 40,    // BBL
  '136': 136,  // Greek Cup
  '52': 52,    // Lega A
  '60': 60,    // LKL
  '85': 85,    // KLS
  '86': 86,    // Serbian Super League
};

// Beräkna aktuell säsong baserat på datum OCH liga
function getCurrentSeason(date: string, league: string): string {
  const matchDate = new Date(date);
  const year = matchDate.getFullYear();
  const month = matchDate.getMonth() + 1; // 1-12
  
  // Europeiska ligor använder bara året (2025, 2026, etc.)
  // EuroLeague, ABA Liga, ACB, BBL, Greek Cup, Lega A, LKL, KLS, Serbian Super League, Turkish BSL
  const europeanLeagues = ['euroleague', '198', '117', '40', '136', '52', '60', '85', '86', '104'];
  
  if (europeanLeagues.includes(league)) {
    // Säsongen börjar i september/oktober
    if (month >= 9) {
      return `${year}`; // "2025"
    } else {
      return `${year - 1}`; // "2025" för jan-aug 2026
    }
  }
  
  // NBA och SBL använder "2025-2026" format
  // Säsongen börjar i oktober (månad 10)
  if (month >= 10) {
    return `${year}-${year + 1}`;
  } else {
    return `${year - 1}-${year}`;
  }
}

// Mappa TV-kanaler per liga
function getBroadcasters(league: string): string {
  const broadcasters: Record<string, string> = {
    'nba': 'NBA League Pass, Viaplay, TV4 Play',
    'euroleague': 'Viaplay, TV4 Play',
    'sbl': 'Expressen TV',
  };
  return broadcasters[league] || 'TV information saknas';
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const league = searchParams.get('league') || 'all';
    const date = searchParams.get('date') || new Date().toISOString().split('T')[0];

    console.log('🏀 Fetching basketball data:', { league, date });

    // Bestäm vilka ligor att hämta
    const leaguesToFetch = league === 'all' 
      ? ['nba', 'euroleague', 'sbl']
      : [league];

    const allMatches = [];
    
    for (const leagueName of leaguesToFetch) {
      const leagueId = LEAGUE_IDS[leagueName as keyof typeof LEAGUE_IDS];
      
      if (!leagueId) {
        console.warn(`⚠️ Liga ${leagueName} har inget ID`);
        continue;
      }

      const season = getCurrentSeason(date, leagueName); // 🔥 PASS LEAGUE NAME
      const url = `${BASE_URL}/games?league=${leagueId}&season=${season}&date=${date}&timezone=Europe/Stockholm`;

      // 🔥 CHECK CACHE FÖRST
      const cacheKey = `${leagueId}-${season}-${date}`;
      const cached = cache.get(cacheKey);
      
      if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        console.log('💾 Using CACHED data for', leagueName.toUpperCase());
        
        const mappedMatches = cached.data.response?.map((game: any) => ({
          id: game.id,
          league: leagueName,  // Använd leagueName direkt (kan vara "nba", "117", etc.)
          home: game.teams?.home?.name || 'Unknown',
          away: game.teams?.away?.name || 'Unknown',
          homeLogo: game.teams?.home?.logo || null,  // ← Home Team Logo!
          awayLogo: game.teams?.away?.logo || null,  // ← Away Team Logo!
          time: new Date(game.date).toLocaleTimeString('sv-SE', { 
            hour: '2-digit', 
            minute: '2-digit',
            timeZone: 'Europe/Stockholm'
          }),
          date: game.date,
          status: game.status?.long || 'Unknown',
          venue: game.venue || 'Unknown',
          broadcaster: getBroadcasters(leagueName),
        })) || [];

        allMatches.push(...mappedMatches);
        continue;
      }

      // 🔥 INTE I CACHE - Hämta från API
      console.log('📡 Calling API-Sports:', url, 'Season:', season);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-apisports-key': API_KEY || '',
        },
      });

      console.log('📡 Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`❌ API error for ${leagueName}:`, response.status, errorText);
        continue;
      }

      const data = await response.json();
      
      console.log(`✅ ${leagueName} data:`, data.results, 'matches');

      // 🔥 SPARA I CACHE
      cache.set(cacheKey, { data, timestamp: Date.now() });
      console.log('💾 Saved to cache:', cacheKey);

      // Mappa API-Sports data till vårt format
      if (data.response && data.response.length > 0) {
        const mappedMatches = data.response.map((game: any) => ({
          id: game.id,
          league: leagueName,  // Använd leagueName direkt (kan vara "nba", "117", etc.)
          home: game.teams?.home?.name || 'Unknown',
          away: game.teams?.away?.name || 'Unknown',
          homeLogo: game.teams?.home?.logo || null,  // ← Home Team Logo!
          awayLogo: game.teams?.away?.logo || null,  // ← Away Team Logo!
          time: new Date(game.date).toLocaleTimeString('sv-SE', { 
            hour: '2-digit', 
            minute: '2-digit',
            timeZone: 'Europe/Stockholm'
          }),
          date: game.date,
          status: game.status?.long || 'Unknown',
          venue: game.venue || 'Unknown',
          broadcaster: getBroadcasters(leagueName),
        }));

        allMatches.push(...mappedMatches);
      }
    }

    console.log(`🎯 Total matches fetched: ${allMatches.length}`);

    return NextResponse.json({
      success: true,
      matches: allMatches,
      count: allMatches.length,
    });

  } catch (error) {
    console.error('❌ Basketball API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch basketball data',
        details: error instanceof Error ? error.message : 'Unknown error',
        matches: [] 
      },
      { status: 500 }
    );
  }
}