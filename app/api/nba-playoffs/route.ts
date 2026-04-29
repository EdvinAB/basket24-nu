import { NextResponse } from 'next/server';

const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 60 * 60 * 1000; // 1 timme

const API_KEY = process.env.APISPORTS_KEY;

export async function GET() {
  const cacheKey = 'nba-playoffs-2025-2026';
  const cached = cache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return NextResponse.json({ success: true, games: cached.data });
  }

  try {
    const res = await fetch(
      'https://v1.basketball.api-sports.io/games?league=12&season=2025-2026',
      { headers: { 'x-apisports-key': API_KEY || '' } }
    );
    const data = await res.json();

    const playoffGames = data.response.filter((g: any) =>
      g.week && (g.week.includes('Semi') || g.week.includes('Final'))
    );

    cache.set(cacheKey, { data: playoffGames, timestamp: Date.now() });

    return NextResponse.json({ success: true, games: playoffGames });
  } catch {
    return NextResponse.json({ success: false, games: [] }, { status: 500 });
  }
}