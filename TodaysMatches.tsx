'use client';

// MOCK DATA - Vi byter ut detta mot API-Basketball senare!
const mockMatches = [
  {
    id: 1,
    league: 'NBA',
    homeTeam: 'Los Angeles Lakers',
    awayTeam: 'Boston Celtics',
    time: '20:00',
    date: '2025-01-15',
    venue: 'Crypto.com Arena',
    broadcaster: 'V Sport Premium'
  },
  {
    id: 2,
    league: 'EuroLeague',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    time: '21:00',
    date: '2025-01-15',
    venue: 'WiZink Center',
    broadcaster: 'Viaplay'
  },
  {
    id: 3,
    league: 'Basketligan',
    homeTeam: 'Norrköping Dolphins',
    awayTeam: 'Borås Basket',
    time: '19:00',
    date: '2025-01-15',
    venue: 'Himmelstalundshallen',
    broadcaster: 'C More'
  },
];

export default function TodaysMatches() {
  return (
    <div className="space-y-4">
      {mockMatches.map((match) => (
        <div key={match.id} className="match-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-primary">{match.league}</span>
            <span className="text-xs text-gray-500">{match.time}</span>
          </div>
          
          <div className="grid grid-cols-3 gap-4 items-center mb-3">
            {/* Hemmalag */}
            <div className="text-right">
              <div className="flex items-center justify-end gap-2">
                <span className="font-semibold">{match.homeTeam}</span>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              </div>
            </div>

            {/* VS */}
            <div className="text-center">
              <span className="text-gray-400 font-medium">VS</span>
            </div>

            {/* Bortalag */}
            <div className="text-left">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <span className="font-semibold">{match.awayTeam}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-600 pt-2 border-t">
            <span>📍 {match.venue}</span>
            <span>📺 {match.broadcaster}</span>
          </div>
        </div>
      ))}

      {/* Ladda fler knapp */}
      <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition">
        Visa fler matcher
      </button>
    </div>
  );
}
