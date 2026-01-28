'use client';

const upcomingMatches = [
  {
    id: 1,
    league: 'NBA',
    homeTeam: 'Golden State Warriors',
    awayTeam: 'Phoenix Suns',
    date: '2025-01-18',
    time: '03:00',
    label: 'STORMATCH'
  },
  {
    id: 2,
    league: 'EuroLeague',
    homeTeam: 'Panathinaikos',
    awayTeam: 'Olympiacos',
    date: '2025-01-19',
    time: '20:00',
    label: 'DERBY'
  },
  {
    id: 3,
    league: 'NBA',
    homeTeam: 'Milwaukee Bucks',
    awayTeam: 'Miami Heat',
    date: '2025-01-20',
    time: '01:30',
    label: 'STORMATCH'
  },
];

export default function UpcomingBigMatches() {
  return (
    <div className="space-y-3">
      {upcomingMatches.map((match) => (
        <a
          key={match.id}
          href={`/matcher/${match.id}`}
          className="block bg-white border-l-4 border-primary p-4 rounded hover:shadow-md transition"
        >
          <div className="flex items-start justify-between mb-2">
            <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
              {match.label}
            </span>
            <span className="text-xs text-gray-500">{match.league}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
              <span className="font-medium text-sm">{match.homeTeam}</span>
            </div>
            <span className="text-xs text-gray-400">VS</span>
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm">{match.awayTeam}</span>
              <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          <div className="mt-2 text-xs text-gray-600">
            {new Date(match.date).toLocaleDateString('sv-SE', { 
              weekday: 'long', 
              day: 'numeric', 
              month: 'long' 
            })} - {match.time}
          </div>
        </a>
      ))}
    </div>
  );
}
