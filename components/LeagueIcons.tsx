'use client';

export default function LeagueIcons() {
  const leagues = [
    { name: 'NBA', icon: '🏀', slug: 'nba' },
    { name: 'EuroLeague', icon: '⭐', slug: 'euroleague' },
    { name: 'Basketligan', icon: '🇸🇪', slug: 'basketligan' },
    { name: 'EuroCup', icon: '🏆', slug: 'eurocup' },
    { name: 'NCAA', icon: '🎓', slug: 'ncaa' },
    { name: 'WNBA', icon: '👩', slug: 'wnba' },
    { name: 'Liga ACB', icon: '🇪🇸', slug: 'liga-acb' },
    { name: 'BBL', icon: '🇩🇪', slug: 'bbl' },
  ];

  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {leagues.map((league) => (
        <a
          key={league.name}
          href={`/liga/${league.slug}`}
          className="flex flex-col items-center gap-2 p-4 min-w-[100px] bg-white border-2 border-gray-200 rounded-xl hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-300 no-underline"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center text-3xl shadow-md">
            {league.icon}
          </div>
          <span className="text-sm font-bold text-gray-900 text-center">
            {league.name}
          </span>
        </a>
      ))}
    </div>
  );
}