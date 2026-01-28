export default function TVGuidePage() {
  const matchesByChannel = {
    'V Sport': [
      { id: 1, time: '20:00', home: 'Lakers', away: 'Celtics', league: 'NBA', venue: 'Crypto.com Arena' },
      { id: 2, time: '03:00', home: 'Warriors', away: 'Suns', league: 'NBA', venue: 'Chase Center' },
      { id: 3, time: '01:30', home: 'Bucks', away: 'Heat', league: 'NBA', venue: 'Fiserv Forum' },
    ],
    'Viaplay': [
      { id: 4, time: '21:00', home: 'Real Madrid', away: 'Barcelona', league: 'EuroLeague', venue: 'WiZink Center' },
      { id: 5, time: '20:00', home: 'Panathinaikos', away: 'Olympiacos', league: 'EuroLeague', venue: 'OAKA Arena' },
    ],
    'C More': [
      { id: 6, time: '19:00', home: 'Norrköping', away: 'Borås', league: 'Basketligan', venue: 'Himmelstalundshallen' },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container-custom py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">TV-Guide</h1>
          <p className="text-gray-600">Se vilka matcher som sänds på TV idag</p>
        </div>

        <div className="space-y-8">
          {Object.entries(matchesByChannel).map(([channel, matches]) => (
            <div key={channel} className="bg-white rounded-xl shadow-sm border-2 border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-orange-600 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📺</span>
                  <h2 className="text-2xl font-bold text-white">{channel}</h2>
                  <span className="ml-auto bg-white text-primary px-3 py-1 rounded-full text-sm font-bold">
                    {matches.length} matcher
                  </span>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {matches.map((match) => (
                  <div
                    key={match.id}
                    className="p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="text-center min-w-[60px]">
                          <div className="text-2xl font-bold text-primary">{match.time}</div>
                          <div className="text-xs text-gray-500 mt-1">Idag</div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="font-bold text-gray-900">{match.home}</div>
                            <div className="text-xs text-gray-500 mt-1">Hemma</div>
                          </div>
                          
                          <div className="text-gray-400 font-bold text-xl">VS</div>
                          
                          <div className="text-left">
                            <div className="font-bold text-gray-900">{match.away}</div>
                            <div className="text-xs text-gray-500 mt-1">Borta</div>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium mb-2">
                          {match.league}
                        </div>
                        <div className="text-sm text-gray-600 flex items-center gap-2 justify-end">
                          <span>📍</span>
                          <span>{match.venue}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/" 
            className="inline-block text-primary hover:text-orange-700 font-semibold hover:underline"
          >
            ← Tillbaka till startsidan
          </a>
        </div>
      </div>
    </div>
  );
}