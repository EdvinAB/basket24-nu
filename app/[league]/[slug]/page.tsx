import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import nbaData from '@/lib/data/nba-2025-2026.json';
import sblData from '@/lib/data/sbl-2025-2026.json';
import euroleagueData from '@/lib/data/euroleague-2025-2026.json';
import acbData from '@/lib/data/acb-2025-2026.json';
import turkishBslData from '@/lib/data/turkish-bsl-2025-2026.json';
import abaLigaData from '@/lib/data/aba-liga-2025-2026.json';
import bblData from '@/lib/data/bbl-2025-2026.json';
import greekCupData from '@/lib/data/greek-cup-2025-2026.json';
import legaAData from '@/lib/data/lega-a-2025-2026.json';
import lklData from '@/lib/data/lkl-2025-2026.json';
import klsData from '@/lib/data/kls-2025-2026.json';
import serbianSuperLeagueData from '@/lib/data/serbian-super-league-2025-2026.json';
import eurocupData from '@/lib/data/eurocup-2025-2026.json';
import championsLeagueData from '@/lib/data/champions-league-2025-2026.json';
import fibaEuropeCupData from '@/lib/data/fiba-europe-cup-2025-2026.json';
import lnbData from '@/lib/data/lnb-2025-2026.json';
import worldCupData from '@/lib/data/world-cup-2027.json';
import { getBroadcasterById } from '@/lib/broadcasters';
import SportsEventSchema from '@/components/SportsEventSchema';

interface Props {
  params: Promise<{
    league: string;
    slug: string;
  }>;
}

interface LocalMatch {
  id: number | string;
  date: string;
  time: string;
  home: string;
  away: string;
  homeLogo: string;
  awayLogo: string;
  homeId: number;
  awayId: number;
  venue: string;
  status: string;
  broadcasters: string[];
}

function getIdFromSlug(slug: string): string {
  const parts = slug.split('-');
  return parts[parts.length - 1];
}

function getLeagueName(leagueParam: string): string {
  const names: Record<string, string> = {
    'nba': 'NBA',
    'euroleague': 'EuroLeague',
    'sbl': 'SBL',
    'acb': 'ACB',
    'turkish-bsl': 'Turkish BSL',
    'aba-liga': 'ABA Liga',
    'bbl': 'BBL',
    'greek-cup': 'Greek Cup',
    'lega-a': 'Lega A',
    'lkl': 'LKL',
    'kls': 'KLS',
    'serbian-super-league': 'Serbian Super League',
    'eurocup': 'EuroCup',
    'champions-league': 'Champions League',
    'fiba-europe-cup': 'FIBA Europe Cup',
    'lnb': 'LNB',
    'world-cup': 'World Cup',
  };
  return names[leagueParam.toLowerCase()] || leagueParam.toUpperCase();
}

function getLocalMatch(matchId: string, league: string): LocalMatch | null {
  const lowerLeague = league.toLowerCase();

  const leagueDataMap: Record<string, any> = {
    'nba': nbaData,
    'sbl': sblData,
    'euroleague': euroleagueData,
    'acb': acbData,
    'turkish-bsl': turkishBslData,
    'aba-liga': abaLigaData,
    'bbl': bblData,
    'greek-cup': greekCupData,
    'lega-a': legaAData,
    'lkl': lklData,
    'kls': klsData,
    'serbian-super-league': serbianSuperLeagueData,
    'eurocup': eurocupData,
    'champions-league': championsLeagueData,
    'fiba-europe-cup': fibaEuropeCupData,
    'lnb': lnbData,
    'world-cup': worldCupData,
  };

  const data = leagueDataMap[lowerLeague];
  if (!data) return null;

  const matches = (data as any).matches as LocalMatch[];
  return matches.find(m => String(m.id) === String(matchId)) || null;
}
export async function generateMetadata({ params }: Props) {
  const { league, slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const matchId = getIdFromSlug(decodedSlug);
  const match = getLocalMatch(matchId, league);
  const leagueName = getLeagueName(league);

  if (!match) {
    return { title: 'Match hittades inte | basket24.nu' };
  }

  const matchDate = new Date(match.date);
  const dateStr = matchDate.toLocaleDateString('sv-SE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Stockholm',
  });

  const title = `${match.home} vs ${match.away} – ${dateStr} | basket24.nu`;
  const description = `Se ${match.home} möta ${match.away} i ${leagueName}. Matchen spelas ${dateStr} kl ${match.time}. Hitta var du kan streama matchen live på TV.`;
  const canonical = `https://basket24.nu/${league}/${slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'basket24.nu',
      locale: 'sv_SE',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export default async function MatchPage({ params }: Props) {
  const { league, slug } = await params;

  const decodedSlug = decodeURIComponent(slug);
  const matchId = getIdFromSlug(decodedSlug);
  const match = getLocalMatch(matchId, league);

  if (!match) {
    notFound();
  }

  const matchDate = new Date(match.date);
  const dateStr = matchDate.toLocaleDateString('sv-SE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Stockholm',
  });

  const leagueName = getLeagueName(league);
  const matchUrl = `/${league}/${slug}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <SportsEventSchema
        homeTeam={match.home}
        awayTeam={match.away}
        date={match.date}
        venue={match.venue}
        league={league}
        broadcasters={match.broadcasters}
        matchUrl={matchUrl}
      />
      <div className="max-w-[1092px] mx-auto px-4 py-6">

        <Link
          href={`/${league}`}
          className="inline-flex items-center text-primary hover:text-primary-dark mb-4 font-medium"
        >
          ← Tillbaka till {leagueName}
        </Link>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">

          {/* Datum-bar */}
          <div className="bg-dark text-white py-2 px-4 rounded-t-lg">
            <p className="text-center text-sm capitalize">{dateStr}</p>
          </div>

          {/* Teams */}
          <div className="px-6 py-8 text-center">
            <div className="flex items-center justify-center gap-4 sm:gap-12">

              <div className="flex flex-col items-center flex-1">
                {match.homeLogo && (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 relative">
                    <Image src={match.homeLogo} alt={match.home} fill className="object-contain" />
                  </div>
                )}
                <h1 className="text-base sm:text-xl font-bold text-dark text-center">{match.home}</h1>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-gray-400 text-lg font-medium">vs</span>
                <span className="text-xs text-gray-400 mt-1">{match.time}</span>
              </div>

              <div className="flex flex-col items-center flex-1">
                {match.awayLogo && (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 relative">
                    <Image src={match.awayLogo} alt={match.away} fill className="object-contain" />
                  </div>
                )}
                <h1 className="text-base sm:text-xl font-bold text-dark text-center">{match.away}</h1>
              </div>

            </div>
          </div>

          {/* Liga-badge */}
          <div className="px-6 pb-4 text-center">
            <span className="inline-block bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
              {leagueName}
            </span>
          </div>

          {/* Arena + Tid */}
          <div className="px-6 pb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{match.venue}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span><strong>{match.time}</strong> CET</span>
            </div>
          </div>

          {/* Broadcasters */}
          <div className="px-6 pb-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-base font-bold text-dark mb-4 uppercase tracking-wide">
                Se matchen live
              </h2>

              <div className="space-y-3">
                {match.broadcasters.map((broadcasterId) => {
                  const bc = getBroadcasterById(broadcasterId);

                  return (
                    <div
                      key={broadcasterId}
                      className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4"
                    >
                      <span className="font-medium text-dark">{bc.name}</span>

                      {bc.affiliateUrl ? (
                        <a
                          href={bc.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary text-white px-4 py-2 rounded text-sm font-medium hover:bg-primary-dark transition flex items-center gap-2"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                          {bc.buttonText}
                        </a>
                      ) : (
                        <span className="bg-primary text-white px-4 py-2 rounded text-sm font-medium flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                            <polyline points="17 2 12 7 7 2"></polyline>
                          </svg>
                          Linjär TV
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}
