'use client';

import { useState, useEffect } from 'react';
import MatchCard from './MatchCard';

// TypeScript interface för match-objekt
interface Match {
  id: number;
  league: string;
  home: string;
  away: string;
  time: string;
  date: string;
  status: string;
  venue: string;
  broadcaster: string;
}

// PROPS: Ta emot filters från page.tsx
interface TodaysMatchesProps {
  selectedLeague?: string;
  selectedDate?: string;
}

export default function TodaysMatches({ 
  selectedLeague = 'all',
  selectedDate 
}: TodaysMatchesProps) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect - hämta matcher
  useEffect(() => {
    async function fetchMatches() {
      try {
        setLoading(true);
        const response = await fetch('/api/matches');
        const data = await response.json();
        
        if (data.success) {
          setMatches(data.matches);
        } else {
          setError('Kunde inte hämta matcher');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Ett fel uppstod');
      } finally {
        setLoading(false);
      }
    }

    fetchMatches();
  }, []);

  // Funktion för att kolla om match är live
  const isMatchLive = (matchDate: string, matchTime: string): boolean => {
    const now = new Date();
    const matchDateTime = new Date(matchDate);
    
    // Match är live om den startade för mindre än 3 timmar sedan
    const threeHoursAgo = new Date(now.getTime() - (3 * 60 * 60 * 1000));
    
    return matchDateTime >= threeHoursAgo && matchDateTime <= now;
  };

  // FILTRERING: Applicera liga och datum filter
  const filteredMatches = matches.filter((match) => {
    // Liga-filter
    if (selectedLeague && selectedLeague !== 'all') {
      const matchLeague = match.league.toLowerCase();
      const filterLeague = selectedLeague.toLowerCase();
      
      if (matchLeague !== filterLeague) {
        return false;
      }
    }
    
    // Datum-filter
    if (selectedDate) {
      const matchDate = match.date.split('T')[0];
      
      if (matchDate !== selectedDate) {
        return false;
      }
    }
    
    return true;
  });

  // GRUPPERA matcher per liga
  const matchesByLeague = filteredMatches.reduce((acc, match) => {
    const league = match.league;
    if (!acc[league]) {
      acc[league] = [];
    }
    acc[league].push(match);
    return acc;
  }, {} as Record<string, Match[]>);

  // Sortera ligorna
  const leagueOrder = ['NBA', 'EuroLeague', 'SBL'];
  const sortedLeagues = Object.keys(matchesByLeague).sort((a, b) => {
    const indexA = leagueOrder.indexOf(a);
    const indexB = leagueOrder.indexOf(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  // LOADING STATE
  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
        <p className="mt-4 text-gray-600">Laddar matcher...</p>
      </div>
    );
  }

  // ERROR STATE
  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        <p className="text-lg font-semibold">❌ {error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-primary text-white hover:bg-primary-dark transition"
        >
          Försök igen
        </button>
      </div>
    );
  }

  // INGA MATCHER
  if (filteredMatches.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600">
          🏀 Inga matcher hittades för valt filter.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Prova ett annat datum eller välj "ALLA" ligor.
        </p>
      </div>
    );
  }

  // VISA MATCHER
  return (
    <div className="space-y-8">
      {sortedLeagues.map((league) => {
        const leagueMatches = matchesByLeague[league];
        
        return (
          <div key={league}>
            {/* Liga Header */}
            <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-primary">
              <h2 className="text-xl font-bold text-dark">
                {league}
              </h2>
              <span className="text-sm text-gray-500">
                ({leagueMatches.length} {leagueMatches.length === 1 ? 'match' : 'matcher'})
              </span>
            </div>

            {/* Matcher */}
            <div className="space-y-3">
              {leagueMatches.map((match) => (
                <MatchCard
                  key={match.id}
                  league={match.league}
                  home={match.home}
                  away={match.away}
                  time={match.time}
                  date={match.date}
                  broadcaster={match.broadcaster}
                  venue={match.venue}
                  isLive={isMatchLive(match.date, match.time)}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
