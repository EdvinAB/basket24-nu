import { NextRequest, NextResponse } from 'next/server';

// Cache på 1 timme – tabeller ändras inte oftare
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 60 * 60 * 1000;

const API_KEY = process.env.APISPORTS_KEY;
const BASE_URL = 'https://v1.basketball.api-sports.io';

const LEAGUE_CONFIG: Record<string, { id: number; season: string }> = {
  'nba':                  { id: 12,  season: '2025-2026' },
  'sbl':                  { id: 93,  season: '2025-2026' },
  'euroleague':           { id: 120, season: '2025' },
  'acb':                  { id: 117, season: '2025' },
  'turkish-bsl':          { id: 104, season: '2025' },
  'aba-liga':             { id: 198, season: '2025' },
  'bbl':                  { id: 40,  season: '2025' },
  'lega-a':               { id: 52,  season: '2025' },
  'lkl':                  { id: 60,  season: '2025' },
  'kls':                  { id: 85,  season: '2025' },
  'serbian-super-league': { id: 86,  season: '2025' },
  'lnb':                  { id: 2,   season: '2025-2026' },
};

export async function GET(request: NextRequest) {
  try {
    const league = request.nextUrl.searchParams.get('league') || '';

    if (!league || !LEAGUE_CONFIG[league]) {
      return NextResponse.json(
        { success: false, error: 'Invalid or missing league parameter' },
        { status: 400 }
      );
    }

    const { id, season } = LEAGUE_CONFIG[league];
    const cacheKey = `standings-${id}-${season}`;
    const cached = cache.get(cacheKey);

    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      console.log('💾 Using CACHED standings for', league.toUpperCase());
      return NextResponse.json({ success: true, standings: cached.data });
    }

    const url = `${BASE_URL}/standings?league=${id}&season=${season}`;
    console.log('📡 Fetching standings:', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: { 'x-apisports-key': API_KEY || '' },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Standings API error:', response.status, errorText);
      return NextResponse.json(
        { success: false, error: 'Failed to fetch standings' },
        { status: 500 }
      );
    }

    const data = await response.json();
    console.log(`✅ Standings fetched for ${league}, groups: ${data.response?.length}`);

    cache.set(cacheKey, { data: data.response, timestamp: Date.now() });

    return NextResponse.json({ success: true, standings: data.response });

  } catch (error) {
    console.error('❌ Standings error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}