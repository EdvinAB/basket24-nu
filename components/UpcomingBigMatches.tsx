'use client';

export default function UpcomingBigMatches() {
  const matches = [
    { 
      id: 1, 
      league: 'NBA', 
      home: 'Golden State Warriors', 
      away: 'Phoenix Suns',
      date: '2025-01-18',
      time: '03:00',
      venue: 'Chase Center',
      tv: 'V Sport',
      label: 'STORMATCH',
      labelColor: 'red'
    },
    { 
      id: 2, 
      league: 'EuroLeague', 
      home: 'Panathinaikos', 
      away: 'Olympiacos',
      date: '2025-01-19',
      time: '20:00',
      venue: 'OAKA Arena',
      tv: 'Viaplay',
      label: 'DERBY',
      labelColor: 'blue'
    },
    { 
      id: 3, 
      league: 'NBA', 
      home: 'Milwaukee Bucks', 
      away: 'Miami Heat',
      date: '2025-01-20',
      time: '01:30',
      venue: 'Fiserv Forum',
      tv: 'V Sport Premium',
      label: 'STORMATCH',
      labelColor: 'red'
    },
  ];

  return (
    <div className="space-y-3">
      {matches.map((m) => (
        <div
          key={m.id}
          className="relative bg-gradient-to-r from-white to-gray-50 border-l-4 border-primary p-4 rounded-lg hover:shadow-xl hover:from-orange-50 hover:to-orange-50 transition-all duration-300 group"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex gap-2">
              <span 
                className={`${m.labelColor === 'red' ? 'bg-red-600' : 'bg-blue-600'} text-white text-xs font-black px-3 py-1 rounded uppercase tracking-wider shadow-md`}
              >
                {m.label}
              </span>
              <span className="bg-gray-100 text-gray-700 text-xs font-bold px-2 py-1 rounded">
                {m.league}
              </span>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500 font-medium">
                {new Date(m.date).toLocaleDateString('sv-SE', { weekday: 'short', day: 'numeric', month: 'short' })}
              </div>
              <div className="text-sm font-bold text-gray-900">{m.time}</div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <div className="flex-1 text-left">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-full mx-auto mb-2 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <div className="font-bold text-gray-900 text-sm">{m.home}</div>
              <div className="text-xs text-gray-500 uppercase mt-1">Hemma</div>
            </div>

            <div className="px-4">
              <div className="text-xl font-black text-primary">VS</div>
            </div>

            <div className="flex-1 text-right">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <div className="font-bold text-gray-900 text-sm">{m.away}</div>
              <div className="text-xs text-gray-500 uppercase mt-1">Borta</div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-200 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>{m.venue}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📺</span>
              <span className="text-primary font-medium">{m.tv}</span>
            </div>
          </div>
        </div>
      ))}

      <div className="text-center pt-2">
        <a href="/stormatcher" className="inline-block text-sm text-primary hover:text-orange-700 font-semibold">
          Se alla kommande stormatcher →
        </a>
      </div>
    </div>
  );
}