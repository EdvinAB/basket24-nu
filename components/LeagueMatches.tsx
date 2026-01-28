'use client';

import { useState, useEffect } from 'react';
import MatchCard from './MatchCard';
import DateNavigation from './DateNavigation';

// TypeScript interface
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

interface LeagueMatchesProps {
  league: 'NBA' | 'EuroLeague' | 'SBL';
}

export default function LeagueMatches({ league }: LeagueMatchesProps) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Hämta matcher
  useEffect(() => {
    async function fetchMatches() {
      try {
        setLoading(true);
        const response = await fetch('/api/matches');
        const data = await response.json();
        
        if (data.success) {
          // Filtrera bara matcher för denna liga
          const leagueMatches = data.matches.filter(
            (m: Match) => m.league.toLowerCase() === league.toLowerCase()
          );
          setMatches(leagueMatches);
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
  }, [league]);

  // Kolla om match är live
  const isMatchLive = (matchDate: string): boolean => {
    const now = new Date();
    const matchDateTime = new Date(matchDate);
    const threeHoursAgo = new Date(now.getTime() - (3 * 60 * 60 * 1000));
    
    return matchDateTime >= threeHoursAgo && matchDateTime <= now;
  };

  // Filtrera matcher per datum
  const filteredMatches = matches.filter((match) => {
    if (selectedDate) {
      const matchDate = match.date.split('T')[0];
      return matchDate === selectedDate;
    }
    return true;
  });

  // Gruppera matcher per datum (alla framtida matcher)
  const matchesByDate = matches.reduce((acc, match) => {
    const matchDate = match.date.split('T')[0];
    const today = new Date().toISOString().split('T')[0];
    
    // Bara framtida och dagens matcher
    if (matchDate >= today) {
      if (!acc[matchDate]) {
        acc[matchDate] = [];
      }
      acc[matchDate].push(match);
    }
    return acc;
  }, {} as Record<string, Match[]>);

  // Sortera datum
  const sortedDates = Object.keys(matchesByDate).sort();

  // Format date för visning
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const days = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
    const months = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
    
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    
    return `${dayName} ${day} ${month}`;
  };

  // LOADING
  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
        <p className="mt-4 text-gray-600">Laddar matcher...</p>
      </div>
    );
  }

  // ERROR
  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        <p className="text-lg font-semibold">❌ {error}</p>
      </div>
    );
  }

  // INGA MATCHER
  if (matches.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600">
          🏀 Inga {league} matcher hittades.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      {/* Date Navigation */}
      <div className="mb-8">
        <DateNavigation 
          onDateChange={(date) => setSelectedDate(date)}
        />
      </div>

      {/* Show filtered matches if date selected, otherwise show all grouped by date */}
      {selectedDate && filteredMatches.length > 0 ? (
        // Filtered view (single date)
        <div>
          <h2 className="text-2xl font-bold text-dark mb-4">
            {formatDate(selectedDate)}
          </h2>
          <div className="space-y-3">
            {filteredMatches.map((match) => (
              <MatchCard
                key={match.id}
                league={match.league}
                home={match.home}
                away={match.away}
                time={match.time}
                date={match.date}
                broadcaster={match.broadcaster}
                venue={match.venue}
                isLive={isMatchLive(match.date)}
              />
            ))}
          </div>
        </div>
      ) : selectedDate && filteredMatches.length === 0 ? (
        // No matches for selected date
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">
            🏀 Inga {league} matcher {formatDate(selectedDate)}.
          </p>
          <button
            onClick={() => setSelectedDate('')}
            className="mt-4 text-primary hover:text-primary-dark font-semibold"
          >
            Visa alla matcher →
          </button>
        </div>
      ) : (
        // All matches grouped by date
        <div className="space-y-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-dark">
              Alla {league} matcher - Resten av säsongen
            </h2>
            <span className="text-sm text-court-gray">
              {matches.length} matcher
            </span>
          </div>
          
          {sortedDates.map((date) => {
            const dateMatches = matchesByDate[date];
            
            return (
              <div key={date}>
                {/* Date Header */}
                <div className="flex items-center gap-3 mb-4 pb-2 border-b-2 border-primary">
                  <h3 className="text-xl font-bold text-dark">
                    {formatDate(date)}
                  </h3>
                  <span className="text-sm text-gray-500">
                    ({dateMatches.length} {dateMatches.length === 1 ? 'match' : 'matcher'})
                  </span>
                </div>

                {/* Matches */}
                <div className="space-y-3">
                  {dateMatches.map((match) => (
                    <MatchCard
                      key={match.id}
                      league={match.league}
                      home={match.home}
                      away={match.away}
                      time={match.time}
                      date={match.date}
                      broadcaster={match.broadcaster}
                      venue={match.venue}
                      isLive={isMatchLive(match.date)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
