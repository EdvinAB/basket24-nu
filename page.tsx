import LeagueIcons from "@/components/LeagueIcons";
import TodaysMatches from "@/components/TodaysMatches";
import UpcomingBigMatches from "@/components/UpcomingBigMatches";
import BlogSidebar from "./BlogSidebar";

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section - League Icons (som fotboll.com) */}
      <section className="bg-white border-b">
        <div className="container-custom py-6">
          <LeagueIcons />
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Dagens Matcher */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-6">
              Basket Idag med Resultat och Statistik
            </h1>
            
            {/* Dagens Matcher Component */}
            <TodaysMatches />
            
            {/* Kommande Stormatcher */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Kommande Stormatcher</h2>
              <UpcomingBigMatches />
            </div>
          </div>

          {/* Right Sidebar - NYTT! Blog Widget */}
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
          
        </div>
      </div>

      {/* Bottom Section - Populära Ligor & Lag */}
      <section className="bg-white border-t mt-12 py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Populära Ligor */}
            <div>
              <h3 className="text-xl font-bold mb-4">Populära Ligor</h3>
              <div className="grid grid-cols-2 gap-3">
                {['NBA', 'EuroLeague', 'Basketligan', 'EuroCup', 'NCAA', 'WNBA', 'Spanish Liga ACB', 'Turkish BSL'].map((league) => (
                  <a 
                    key={league}
                    href={`/${league.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-2 p-3 bg-gray-50 rounded hover:bg-gray-100 transition"
                  >
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <span className="text-sm font-medium">{league}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Populära Lag */}
            <div>
              <h3 className="text-xl font-bold mb-4">Populära Lag</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Lakers', 'Celtics', 'Warriors', 'Heat', 'Real Madrid', 'Barcelona', 'Efes Istanbul', 'CSKA Moscow'].map((team) => (
                  <a 
                    key={team}
                    href={`/lag/${team.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-2 p-3 bg-gray-50 rounded hover:bg-gray-100 transition"
                  >
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <span className="text-sm font-medium">{team}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
