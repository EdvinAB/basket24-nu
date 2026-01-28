'use client';

const leagues = [
  { name: 'NBA', icon: '🏀', href: '/nba' },
  { name: 'EuroLeague', icon: '⭐', href: '/euroleague' },
  { name: 'Basketligan', icon: '🇸🇪', href: '/basketligan' },
  { name: 'EuroCup', icon: '🏆', href: '/eurocup' },
  { name: 'NCAA', icon: '🎓', href: '/ncaa' },
  { name: 'WNBA', icon: '👩', href: '/wnba' },
  { name: 'Liga ACB', icon: '🇪🇸', href: '/liga-acb' },
  { name: 'BBL', icon: '🇩🇪', href: '/bbl' },
];

export default function LeagueIcons() {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 min-w-max">
        {leagues.map((league) => (
          <a
            key={league.name}
            href={league.href}
            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              {league.icon}
            </div>
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
              {league.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
