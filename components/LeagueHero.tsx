interface LeagueHeroProps {
  league: 'NBA' | 'EuroLeague' | 'SBL';
  title: string;
  description: string;
  icon?: string;
}

export default function LeagueHero({ league, title, description, icon = '🏀' }: LeagueHeroProps) {
  
  // Liga-specifika färger
  const getLeagueColors = () => {
    switch(league) {
      case 'NBA':
        return 'bg-blue-600 border-blue-500';
      case 'EuroLeague':
        return 'bg-purple-600 border-purple-500';
      case 'SBL':
        return 'bg-green-600 border-green-500';
      default:
        return 'bg-primary border-primary';
    }
  };

  const leagueColors = getLeagueColors();

  return (
    <div className="bg-gray-50 py-6 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Hero Card - Compact */}
        <div className={`bg-white shadow-lg border-l-4 ${leagueColors.split(' ')[1]} p-6`}>
          <div className="flex items-center gap-4">
            
            {/* League Icon */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gray-100 flex items-center justify-center">
                <span className="text-4xl">{icon}</span>
              </div>
            </div>
            
            {/* League Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-bold uppercase px-2 py-1 text-white ${leagueColors.split(' ')[0]}`}>
                  {league}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-dark mb-2">
                {title}
              </h1>
              <p className="text-court-gray text-sm md:text-base">
                {description}
              </p>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}
