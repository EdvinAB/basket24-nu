import { NextResponse } from 'next/server';
import { allMatches } from '@/lib/matchesData';

export async function GET() {
  try {
    // Return all matches from imported data
    // 829 matches total: NBA (613), EuroLeague (161), SBL (55)
    // Date range: 2026-01-17 to 2026-04-17
    
    return NextResponse.json({
      success: true,
      count: allMatches.length,
      matches: allMatches,
      stats: {
        total: allMatches.length,
        nba: allMatches.filter(m => m.league === 'NBA').length,
        euroleague: allMatches.filter(m => m.league === 'EuroLeague').length,
        sbl: allMatches.filter(m => m.league === 'SBL').length,
      }
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to fetch matches',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}