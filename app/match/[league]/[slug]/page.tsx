import { notFound } from 'next/navigation';
import { allMatches, Match } from '@/lib/matchesData';
import Link from 'next/link';
import SportsEventSchema from '@/components/SportsEventSchema';

interface MatchPageProps {
  params: Promise<{
    league: string;
    slug: string;
  }>;
}

// Parse slug to extract date and teams
function parseSlug(slug: string | undefined) {
  if (!slug || typeof slug !== 'string') {
    console.error('Invalid slug:', slug);
    return null;
  }
  
  const parts = slug.split('-vs-');
  if (parts.length !== 2) return null;
  
  const datePart = slug.substring(0, 10);
  const awayTeam = parts[0].substring(11).replace(/-/g, ' ');
  const homeTeam = parts[1].replace(/-/g, ' ');
  
  return { date: datePart, awayTeam, homeTeam };
}

// Find match by league, date, and teams
function findMatch(league: string, slug: string): Match | null {
  // Decode URL-encoded characters (å, ä, ö, etc.)
  const decodedSlug = decodeURIComponent(slug);
  const parsed = parseSlug(decodedSlug);
  if (!parsed) return null;
  
  const { date, awayTeam, homeTeam } = parsed;
  
  const match = allMatches.find(m => {
    const matchDate = m.date.split('T')[0];
    const matchLeague = m.league.toLowerCase();
    const matchAway = m.away.toLowerCase();
    const matchHome = m.home.toLowerCase();
    
    return (
      matchLeague === league.toLowerCase() &&
      matchDate === date &&
      matchAway.includes(awayTeam.toLowerCase()) &&
      matchHome.includes(homeTeam.toLowerCase())
    );
  });
  
  return match || null;
}

// Check if match is live
function isMatchLive(matchDate: string): boolean {
  const now = new Date();
  const matchDateTime = new Date(matchDate);
  const threeHoursAgo = new Date(now.getTime() - (3 * 60 * 60 * 1000));
  
  return matchDateTime >= threeHoursAgo && matchDateTime <= now;
}

// Format date nicely
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const days = ['SÖN', 'MÅN', 'TIS', 'ONS', 'TOR', 'FRE', 'LÖR'];
  const months = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  
  const dayName = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${dayName} ${day} ${month.toUpperCase()}. ${year}`;
}

export default async function MatchPage({ params }: MatchPageProps) {
  const { league, slug } = await params;
  
  const match = findMatch(league, slug);
  
  if (!match) {
    notFound();
  }
  
if (!match.date || !match.broadcaster) {
    console.error('Match missing required data:', match);
    notFound();
  }

  // ADD NULL CHECKS HERE!
  const isLive = isMatchLive(match.date);
  const formattedDate = formatDate(match.date);
  const tvChannels = match.broadcaster.split(',').map(c => c.trim()).filter(Boolean);
  
  // Match URL for structured data
  const matchUrl = `https://basket24.nu/match/${league}/${slug}`;
  const matchName = `${match.away} vs ${match.home}`;
  
  return (
    <>
      {/* Structured Data */}
      <SportsEventSchema
        matchName={matchName}
        homeTeam={match.home}
        awayTeam={match.away}
        date={match.date}
        time={match.time}
        venue={match.venue}
        league={match.league}
        broadcaster={match.broadcaster}
        matchUrl={matchUrl}
      />
      
      <div className="bg-gray-50 min-h-screen">
        
        {/* Header Bar - Dark */}
        <div className="bg-dark text-white py-3 px-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="text-sm font-semibold uppercase">
              {formattedDate}
            </div>
            <div className="text-xs text-gray-400">
              TIDSZON CET
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <div className="max-w-4xl mx-auto py-8 px-4">
          
          <div className="bg-white shadow-lg">
            
            {/* Teams */}
            <div className="py-8 px-6">
              <div className="grid grid-cols-3 gap-4 items-center">
                
                {/* Away Team */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-3 bg-gray-200 flex items-center justify-center">
                    <span className="text-3xl">🏀</span>
                  </div>
                  <h2 className="text-lg font-bold text-dark">
                    {match.away}
                  </h2>
                </div>
                
                {/* VS */}
                <div className="text-center">
                  <div className="text-4xl font-black text-gray-300">
                    VS
                  </div>
                  {isLive && (
                    <div className="mt-3 inline-flex items-center gap-1 bg-live px-3 py-1 animate-pulse">
                      <span className="w-2 h-2 bg-white rounded-full animate-ping absolute"></span>
                      <span className="w-2 h-2 bg-white rounded-full relative"></span>
                      <span className="text-white text-xs font-bold uppercase">LIVE</span>
                    </div>
                  )}
                </div>
                
                {/* Home Team */}
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-3 bg-gray-200 flex items-center justify-center">
                    <span className="text-3xl">🏀</span>
                  </div>
                  <h2 className="text-lg font-bold text-dark">
                    {match.home}
                  </h2>
                </div>
                
              </div>
            </div>
            
            {/* Match Info Bar */}
            <div className="bg-gray-50 py-4 px-6 border-t">
              <div className="flex items-center justify-center gap-6 text-sm text-court-gray">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-primary">🏀 {match.league}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🕐 {match.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍 {match.venue}</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* TV & STREAMING SECTION */}
        <div className="bg-primary py-6">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-center text-white text-xl font-bold uppercase mb-6">
              Se den live - Kanaler och Stream
            </h2>
            
            <div className="space-y-3">
              {tvChannels.map((channel, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-4 flex items-center justify-between hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-dark flex items-center justify-center">
                      <span className="text-white text-xs">📺</span>
                    </div>
                    <span className="font-semibold text-dark">{channel}</span>
                  </div>
                  
                  <a
                    href={getChannelLink(channel)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-live text-white px-4 py-2 text-sm font-bold uppercase hover:bg-green-700 transition-colors flex items-center gap-2"
                  >
                    <span className="text-lg">▶</span>
                    Streama här!
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DESCRIPTION SECTION */}
        <div className="max-w-4xl mx-auto py-8 px-4">
          <div className="bg-white shadow-sm p-6">
            <p className="text-gray-700 leading-relaxed">
              Letar du efter vilken kanal som visar {match.away} - {match.home}? Inga problem! 
              Vi guidar dig rätt med vår träffsäkra TV-tablå där du hittar starttider, TV-kanaler 
              och streaming för alla matcher och event. Med basket24.nu har du alltid full koll på 
              kommande direktsänd sport på TV.
            </p>
          </div>
        </div>

        {/* BACK TO HOME */}
        <div className="max-w-4xl mx-auto pb-12 px-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold"
          >
            ← Tillbaka till alla matcher
          </Link>
        </div>

      </div>
    </>
  );
}

// Helper function to get channel streaming link
function getChannelLink(channel: string): string {
  const channelMap: Record<string, string> = {
    'Viaplay': 'https://viaplay.se/',
    'NBA League Pass': 'https://www.nba.com/watch',
    'HBO MAX': 'https://www.hbomax.com/',
    'Amazon Prime': 'https://www.primevideo.com/',
    'Expressen': 'https://www.expressen.se/',
    'EuroLeague TV': 'https://www.euroleaguebasketball.net/euroleague-tv/',
  };
  
  const key = Object.keys(channelMap).find(
    k => k.toLowerCase() === channel.toLowerCase()
  );
  
  return key ? channelMap[key] : '#';
}

// Metadata for SEO
export async function generateMetadata({ params }: MatchPageProps) {
  const { league, slug } = await params;
  const match = findMatch(league, slug);
  
  if (!match) {
    return {
      title: 'Match hittades inte | basket24.nu',
    };
  }
  
  // ADD NULL CHECK HERE!
  if (!match.date || !match.broadcaster) {
    return {
      title: 'Match saknar data | basket24.nu',
    };
  }

  const formattedDate = formatDate(match.date);
  const matchName = `${match.away} vs ${match.home}`;
  
  return {
    title: `${matchName} Live Stream - ${formattedDate}`,
    description: `Se ${matchName} live ${formattedDate}. TV-tider, streaming och var matchen sänds. ${match.broadcaster}`,
    keywords: [
      `${match.away} vs ${match.home}`,
      `${match.league} stream`,
      match.away,
      match.home,
      ...match.broadcaster.split(',').map(c => c.trim()),
    ],
    openGraph: {
      title: `${matchName} Live - ${formattedDate}`,
      description: `Se ${matchName} live på TV och stream. ${match.broadcaster}`,
      type: 'website',
      url: `https://basket24.nu/match/${league}/${slug}`,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${matchName} - basket24.nu`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${matchName} Live - ${formattedDate}`,
      description: `Se ${matchName} live. ${match.broadcaster}`,
      images: ['/og-image.png'],
    },
  };
}
