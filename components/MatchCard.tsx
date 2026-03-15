import Link from 'next/link';
import Image from 'next/image';

interface MatchCardProps {
  id: number | string;
  date: string;
  time: string;
  away: string;
  home: string;
  league: string;
  broadcasters: string[];
  venue: string;
  status?: 'upcoming' | 'live' | 'finished';
}

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
  'eurocup-tv': 'EUROCUP TV',
  'courtside1891': 'COURTSIDE',
  'dazn': 'DAZN',
  'courtside1891-max': 'COURTSIDE MAX',
  'fiba-plus': 'FIBA+',
  'lnb-tv': 'LNB TV',
  'bein-sports-fr': 'BEIN FR',
};

function getLeagueColor(league: string): string {
  const colors: Record<string, string> = {
    'NBA': '#E84A3F',
    'EuroLeague': '#3F51B5',
    'SBL': '#F9A26C',
    'ACB': '#E84A3F',
    'Turkish BSL': '#3F51B5',
    'ABA Liga': '#F9A26C',
    'BBL': '#E84A3F',
    'Greek Cup': '#3F51B5',
    'Lega A': '#F9A26C',
    'LKL': '#E84A3F',
    'KLS': '#3F51B5',
    'Serbian Super League': '#F9A26C',
    'EuroCup': '#0891b2',
    'Champions League': '#1d4ed8',
    'FIBA Europe Cup': '#059669',
    'LNB': '#7c3aed',
    'World Cup': '#b45309',
  };
  return colors[league] || '#6B7280';
}

function getLeagueSlug(league: string): string {
  const slugMap: Record<string, string> = {
    // Namn-mappningar
    'NBA': 'nba',
    'EuroLeague': 'euroleague',
    'Euroleague': 'euroleague',
    'SBL': 'sbl',
    'Basketligan': 'sbl',
    'ACB': 'acb',
    'Super Ligi': 'turkish-bsl',
    'Turkish BSL': 'turkish-bsl',
    'ABA League': 'aba-liga',
    'ABA Liga': 'aba-liga',
    'BBL': 'bbl',
    'Greek Cup': 'greek-cup',
    'Lega A': 'lega-a',
    'LKL': 'lkl',
    'KLS': 'kls',
    'First League': 'kls',
    'Serbian Super League': 'serbian-super-league',
    'Super League': 'serbian-super-league',
    'EuroCup': 'eurocup',
    'Eurocup': 'eurocup',
    'Champions League': 'champions-league',
    'FIBA Europe Cup': 'fiba-europe-cup',
    'LNB': 'lnb',
    'World Cup': 'world-cup',
    // ID-mappningar
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
    '194': 'eurocup',
    '202': 'champions-league',
    '201': 'fiba-europe-cup',
    '2': 'lnb',
    '281': 'world-cup',
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
  status = 'upcoming',
}: MatchCardProps) {
  const homeSlug = home.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const awaySlug = away.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const matchSlug = `${homeSlug}-vs-${awaySlug}-${id}`;
  const leagueSlug = getLeagueSlug(league);
  const matchUrl = `/${leagueSlug}/${matchSlug}`;
  const leagueColor = getLeagueColor(league);

  const visibleBroadcasters = broadcasters.slice(0, 4);

  return (
    <Link href={matchUrl}>
      <div className="bg-white border border-gray-200 hover:border-primary hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-250 cursor-pointer relative overflow-hidden group">

        {/* LIVE Badge - Top Right */}
        {status === 'live' && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-live text-white px-3 py-1 text-xs font-bold flex items-center gap-1.5 shadow-md">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              LIVE
            </span>
          </div>
        )}

        {/* Content - HORISONTELL layout (ORIGINAL - OFÖRÄNDRAD) */}
        <div className="pl-3 sm:pl-5 pr-3 sm:pr-4 py-3 sm:py-4 flex gap-2 sm:gap-4 items-center">

          {/* LEFT: Time */}
          <div className="flex-shrink-0 min-w-[50px] sm:min-w-[60px]">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-dark leading-tight">
              {time}
            </div>
            {status === 'live' && (
              <div className="text-[10px] text-live font-semibold mt-1">PÅGÅR</div>
            )}
          </div>

          {/* CENTER: Teams + League */}
          <div className="flex-1 min-w-0">
            <div
              className="text-[10px] sm:text-xs font-bold uppercase mb-1 sm:mb-2 tracking-wide"
              style={{ color: leagueColor }}
            >
              {league}
            </div>

            <div className="space-y-0.5 sm:space-y-1">
              <div className="text-sm sm:text-base md:text-lg font-bold text-dark truncate">
                {home}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400 font-medium">vs</div>
              <div className="text-sm sm:text-base md:text-lg font-bold text-dark truncate">
                {away}
              </div>
            </div>
          </div>

          {/* RIGHT: Broadcaster-etiketter - MOBIL: 1 kolumn, DESKTOP: 2x2 grid */}
          <div className="flex-shrink-0">
            <div className="flex flex-col gap-1 sm:grid sm:grid-cols-2 sm:gap-1.5">
              {visibleBroadcasters.map((broadcasterId) => (
                <span
                  key={broadcasterId}
                  className="bg-secondary text-dark px-2 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] md:text-xs font-bold whitespace-nowrap text-center hover:bg-accent transition-colors"
                >
                  {broadcasterLabels[broadcasterId] || broadcasterId.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Venue with icon */}
        <div className="pl-3 sm:pl-5 pr-3 sm:pr-4 pb-3 sm:pb-4 flex items-center justify-between border-t border-gray-100 pt-2 sm:pt-3 mt-2">
          <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500 text-[11px] sm:text-xs md:text-sm">
            <Image src="/venue.svg" alt="" width={14} height={14} className="opacity-60" style={{ width: '14px', height: '14px' }} />
            <span className="truncate">{venue}</span>
          </div>

          <span className="text-[10px] sm:text-xs text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Detaljer →
          </span>
        </div>

      </div>
    </Link>
  );
}
