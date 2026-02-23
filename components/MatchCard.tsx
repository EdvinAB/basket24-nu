import Link from 'next/link';

interface MatchCardProps {
  id: number | string;
  date: string;
  time: string;
  away: string;
  home: string;
  league: string;
  broadcasters: string[];   // ← Array med broadcaster-IDs
  venue: string;
}

// Kort visningsnamn för etiketter i matchkortet
const broadcasterLabels: Record<string, string> = {
  'nba-league-pass': 'NBA PASS',
  'hbo-max': 'HBO MAX',
  'allente': 'ALLENTE',
  'kanal-9': 'KANAL 9',
  'viaplay': 'VIAPLAY',
  'expressen-tv': 'EXPRESSEN',
  'movistar-plus': 'MOVISTAR+',
  'bein-sports-turkey': 'BEIN TR',
  'arena-sport': 'ARENA',
  'dyn': 'DYN',
  'cosmote-tv': 'COSMOTE',
  'dazn-italy': 'DAZN IT',
  'go3': 'GO3',
};

function getLeagueColor(league: string): string {
  const colors: Record<string, string> = {
    'NBA': '#2563eb',
    'EuroLeague': '#16a34a',
    'SBL': '#eab308',
  };
  return colors[league] || '#4b5563';
}

// Mappa API:ets liga-namn till URL-slugs
function getLeagueSlug(league: string): string {
  const slugMap: Record<string, string> = {
    'NBA': 'nba',
    'EuroLeague': 'euroleague',
    'Euroleague': 'euroleague',
    'SBL': 'sbl',
    'Basketligan': 'sbl',
    'ACB': 'acb',
    'Super Ligi': 'turkish-bsl',
    'ABA League': 'aba-liga',
    'BBL': 'bbl',
    'Greek Cup': 'greek-cup',
    'Lega A': 'lega-a',
    'LKL': 'lkl',
    'First League': 'kls',
    'Super League': 'serbian-super-league',
    // Fallback för API IDs (om de används)
    '12': 'nba',
    '120': 'euroleague',
    '93': 'sbl',
    '117': 'acb',
    '104': 'turkish-bsl',
    '198': 'aba-liga',
    '40': 'bbl',
    '136': 'greek-cup',
    '52': 'lega-a',
    '60': 'lkl',
    '85': 'kls',
    '86': 'serbian-super-league',
  };
  
  return slugMap[league] || league.toLowerCase().replace(/\s+/g, '-');
}

export default function MatchCard({
  id,
  date,
  time,
  away,
  home,
  league,
  broadcasters,
  venue,
}: MatchCardProps) {
  const homeSlug = home.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const awaySlug = away.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const matchSlug = `${homeSlug}-vs-${awaySlug}-${id}`;
  const leagueSlug = getLeagueSlug(league);
  const matchUrl = `/${leagueSlug}/${matchSlug}`;
  const leagueColor = getLeagueColor(league);

  // Max 4 broadcasters i 2x2 grid
  const visibleBroadcasters = broadcasters.slice(0, 4);

  return (
    <Link href={matchUrl}>
      <div className="bg-white border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer relative">

        {/* VERTICAL color strip on LEFT */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1"
          style={{ backgroundColor: leagueColor }}
        ></div>

        {/* Content with left padding for strip */}
        <div className="pl-4 pr-3 py-3 flex gap-3 items-center">

          {/* LEFT: Time */}
          <div className="flex-shrink-0 min-w-[50px]">
            <div className="text-xl sm:text-2xl font-bold text-dark leading-tight">
              {time}
            </div>
          </div>

          {/* CENTER: Teams + Venue */}
          <div className="flex-1 min-w-0">
            <div
              className="text-[10px] sm:text-xs font-bold uppercase mb-1"
              style={{ color: leagueColor }}
            >
              {league}
            </div>

            <div className="text-sm font-semibold text-dark mb-0.5">
              {home}
            </div>
            <div className="text-xs text-gray-400 mb-0.5">vs</div>
            <div className="text-sm font-semibold text-dark mb-1.5">
              {away}
            </div>
            <div className="text-[10px] sm:text-xs text-gray-500 truncate">
              📍 {venue}
            </div>
          </div>

          {/* RIGHT: Broadcaster-etiketter i 2x2 grid */}
          <div className="flex-shrink-0">
            <div className="grid grid-cols-2 gap-1">
              {visibleBroadcasters.map((broadcasterId) => (
                <span
                  key={broadcasterId}
                  className="bg-dark text-white px-2 py-0.5 text-[9px] sm:text-[10px] font-medium whitespace-nowrap text-center"
                >
                  {broadcasterLabels[broadcasterId] || broadcasterId.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: "Se detaljer" */}
        <div className="pl-4 pr-3 pb-2 text-right">
          <span className="text-xs text-primary font-semibold">
            Se detaljer →
          </span>
        </div>
      </div>
    </Link>
  );
}
