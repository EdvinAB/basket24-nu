import Link from 'next/link';

interface MatchCardProps {
  league: string;
  home: string;
  away: string;
  time: string;
  date: string;
  broadcaster: string;
  venue: string;
  isLive?: boolean;
}

// Helper to create match URL slug
function createMatchSlug(date: string, away: string, home: string): string {
  const dateOnly = date.split('T')[0]; // "2026-01-21"
  const awaySlug = away.toLowerCase().replace(/\s+/g, '-');
  const homeSlug = home.toLowerCase().replace(/\s+/g, '-');
  
  return `${dateOnly}-${awaySlug}-vs-${homeSlug}`;
}

export default function MatchCard({
  league,
  home,
  away,
  time,
  date,
  broadcaster,
  venue,
  isLive = false
}: MatchCardProps) {
  
  // Create match URL
  const leagueSlug = league.toLowerCase();
  const matchSlug = createMatchSlug(date, away, home);
  const matchUrl = `/match/${leagueSlug}/${matchSlug}`;
  
  // Liga-specifika färger
  const getLeagueColor = () => {
    switch(league) {
      case 'NBA':
        return 'text-blue-600 border-blue-500';
      case 'SBL':
        return 'text-green-600 border-green-500';
      case 'EuroLeague':
        return 'text-purple-600 border-purple-500';
      default:
        return 'text-primary border-primary';
    }
  };
  
  const leagueColors = getLeagueColor();

  return (
    <Link href={matchUrl}>
      <div 
        className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 p-4 border-l-4 group cursor-pointer"
        style={{ borderRadius: 0 }}
      >
        <div className="flex items-center justify-between gap-4">
          
          {/* VÄNSTER: Tid + Live Badge */}
          <div className="flex flex-col items-center min-w-[60px]">
            <div className="font-bold text-dark text-base mb-1">{time}</div>
            
            {/* LIVE INDICATOR */}
            {isLive && (
              <div className="flex items-center gap-1 bg-live px-2 py-0.5 animate-pulse">
                <span className="w-2 h-2 bg-white rounded-full animate-ping absolute"></span>
                <span className="w-2 h-2 bg-white rounded-full relative"></span>
                <span className="text-white text-xs font-bold uppercase">LIVE</span>
              </div>
            )}
          </div>

          {/* MITTEN: Teams + Info */}
          <div className="flex-1">
            {/* Teams */}
            <div className="font-semibold text-dark text-base mb-2 group-hover:text-primary transition-colors">
              {away} <span className="text-gray-400 font-normal">@</span> {home}
            </div>
            
            {/* Info rad */}
            <div className="flex items-center gap-4 text-sm">
              {/* Liga Badge */}
              <span className={`font-semibold ${leagueColors.split(' ')[0]} px-2 py-0.5 bg-gray-50`}>
                {league}
              </span>
              
              {/* Arena */}
              <span className="text-court-gray truncate">
                📍 {venue}
              </span>
            </div>
          </div>

          {/* HÖGER: TV-kanaler */}
          <div className="flex flex-col items-end gap-1.5 min-w-[120px]">
            {broadcaster.split(',').slice(0, 2).map((channel, idx) => (
              <div 
                key={idx}
                className="bg-dark text-white px-3 py-1.5 text-xs font-medium hover:bg-primary transition-colors"
                style={{ borderRadius: 0 }}
              >
                {channel.trim()}
              </div>
            ))}
            
            {/* Se mer länk */}
            <span className="text-primary hover:text-primary-dark text-xs font-medium transition-colors mt-1">
              Se detaljer →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
