import Image from 'next/image';
import { getLeagueInfo } from '@/lib/leagueFlags';

interface LeagueHeroProps {
  league: 'NBA' | 'EuroLeague' | 'SBL' | 'ACB' | 'Turkish BSL' | 'ABA Liga' | 'BBL' | 'Greek Cup' | 'Lega A' | 'LKL' | 'KLS' | 'Serbian Super League';
}

const leagueInfo = {
  NBA: {
    title: 'NBA på TV & Stream',
    description: `Här hittar du streaming och sändningstider för NBA – världens största och mest prestigefyllda basketliga med lag från både USA och Kanada. NBA, National Basketball Association, grundades 1946 och består idag av 30 lag. Bland de mest kända och framgångsrika lagen finns Boston Celtics, Golden State Warriors, New York Knicks och Cleveland Cavaliers.

Med basket24.nu får du en komplett översikt över alla NBA-matcher, speltider och kanaler, så att du enkelt kan följa ligan live på TV och stream hela säsongen.`,
  },
  EuroLeague: {
    title: 'EuroLeague på TV & Stream',
    description: `Här hittar du streaming och sändningstider för EuroLeague – Europas främsta basketliga med de bästa lagen från hela kontinenten. EuroLeague grundades 2000 och består av 18 lag från länder som Spanien, Grekland, Turkiet, Ryssland och Israel. Bland de mest framgångsrika klubbarna finns Real Madrid, FC Barcelona, Panathinaikos och CSKA Moskva.

Med basket24.nu får du en komplett översikt över alla EuroLeague-matcher, speltider och kanaler, så att du enkelt kan följa ligan live på TV och stream hela säsongen.`,
  },
  SBL: {
    title: 'Svenska Basketligan på TV & Stream',
    description: `Här hittar du streaming och sändningstider för Svenska Basketligan (SBL) – Sveriges högsta division i basket för herrar. SBL grundades 1992 och består av 14 lag från hela landet. Bland de mest framgångsrika klubbarna finns Norrköping Dolphins, Södertälje Kings, Borås Basket och Luleå Basket.

Med basket24.nu får du en komplett översikt över alla SBL-matcher, speltider och kanaler, så att du enkelt kan följa ligan live på TV och stream hela säsongen.`,
  },
  ACB: {
    title: 'ACB på TV & Stream',
    description: `Här hittar du streaming och sändningstider för ACB (Liga Endesa) – Spaniens högsta basketliga och en av Europas starkaste ligor. ACB grundades 1957 och består av 18 lag. Bland de mest framgångsrika klubbarna finns Real Madrid, FC Barcelona, Baskonia och Valencia Basket.

Med basket24.nu får du en komplett översikt över alla ACB-matcher, speltider och kanaler, så att du enkelt kan följa ligan live på TV och stream hela säsongen.`,
  },
  'Turkish BSL': {
    title: 'Turkish BSL på TV & Stream',
    description: `Här hittar du streaming och sändningstider för Turkish Basketball Super League (BSL) – Turkiets högsta basketliga. BSL är en av de mest konkurrensutsatta ligorna i Europa med lag som Anadolu Efes, Fenerbahçe och Galatasaray.

Med basket24.nu får du en komplett översikt över alla Turkish BSL-matcher, speltider och kanaler, så att du enkelt kan följa ligan live på TV och stream hela säsongen.`,
  },
  'ABA Liga': {
    title: 'ABA Liga på TV & Stream',
    description: `Här hittar du streaming och sändningstider för ABA Liga – den regionala basketligan för lag från Balkan och Centraleuropa. ABA Liga grundades 2001 och inkluderar lag från Serbien, Kroatien, Slovenien och andra länder i regionen.

Med basket24.nu får du en komplett översikt över alla ABA Liga-matcher, speltider och kanaler, så att du enkelt kan följa ligan live på TV och stream hela säsongen.`,
  },
  BBL: {
    title: 'BBL på TV & Stream',
    description: `Här hittar du streaming och sändningstider för Basketball Bundesliga (BBL) – Tysklands högsta basketliga. BBL grundades 1966 och består av 18 lag. Bland de mest framgångsrika klubbarna finns Bayern München, Alba Berlin och Brose Bamberg.

Med basket24.nu får du en komplett översikt över alla BBL-matcher, speltider och kanaler, så att du enkelt kan följa ligan live på TV och stream hela säsongen.`,
  },
  'Greek Cup': {
    title: 'Greek Cup på TV & Stream',
    description: `Här hittar du streaming och sändningstider för Greek Basketball Cup – Greklands nationella basketcup-turnering. Turneringen samlar de bästa lagen från den grekiska basketligan och är en av de mest prestigefyllda turneringarna i grekisk basket.

Med basket24.nu får du en komplett översikt över alla Greek Cup-matcher, speltider och kanaler, så att du enkelt kan följa turneringen live på TV och stream.`,
  },
  'Lega A': {
    title: 'Lega A på TV & Stream',
    description: `Här hittar du streaming och sändningstider för Lega Basket Serie A (Lega A) – Italiens högsta basketliga. Lega A grundades 1920 och är en av Europas äldsta och mest prestigefyllda ligor med lag som Olimpia Milano, Virtus Bologna och Reyer Venezia.

Med basket24.nu får du en komplett översikt över alla Lega A-matcher, speltider och kanaler, så att du enkelt kan följa ligan live på TV och stream hela säsongen.`,
  },
  LKL: {
    title: 'LKL på TV & Stream',
    description: `Här hittar du streaming och sändningstider för Lietuvos Krepšinio Lyga (LKL) – Litauens högsta basketliga. LKL grundades 1993 och är känd för sin höga spelkvalitet med lag som Žalgiris Kaunas och Rytas Vilnius.

Med basket24.nu får du en komplett översikt över alla LKL-matcher, speltider och kanaler, så att du enkelt kan följa ligan live på TV och stream hela säsongen.`,
  },
  KLS: {
    title: 'KLS på TV & Stream',
    description: `Här hittar du streaming och sändningstider för Košarkaška Liga Srbije (KLS) – Serbiens högsta basketliga. KLS är en av de starkaste ligorna i regionen med lag som Crvena Zvezda, Partizan och Mega Basket.

Med basket24.nu får du en komplett översikt över alla KLS-matcher, speltider och kanaler, så att du enkelt kan följa ligan live på TV och stream hela säsongen.`,
  },
  'Serbian Super League': {
    title: 'Serbian Super League på TV & Stream',
    description: `Här hittar du streaming och sändningstider för Serbian Super League – en av Serbiens basketligor. Ligan samlar flera av landets bästa lag och erbjuder högkvalitativ basketunderhållning.

Med basket24.nu får du en komplett översikt över alla Serbian Super League-matcher, speltider och kanaler, så att du enkelt kan följa ligan live på TV och stream hela säsongen.`,
  },
};

// Mapping från League prop till leagueFlags key
const leagueKeyMap: Record<string, string> = {
  'NBA': 'nba',
  'EuroLeague': 'euroleague',
  'SBL': 'sbl',
  'ACB': 'acb',
  'Turkish BSL': 'turkish-bsl',
  'ABA Liga': 'aba-liga',
  'BBL': 'bbl',
  'Greek Cup': 'greek-cup',
  'Lega A': 'lega-a',
  'LKL': 'lkl',
  'KLS': 'kls',
  'Serbian Super League': 'serbian-super-league',
};

export default function LeagueHero({ league }: LeagueHeroProps) {
  const info = leagueInfo[league];
  const leagueKey = leagueKeyMap[league];
  const leagueData = getLeagueInfo(leagueKey);

  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-[1092px] mx-auto px-4">
        <div className="bg-dark text-white px-6 py-8 rounded-lg">
          {/* H1 med logo till vänster */}
          <div className="flex items-center gap-4 mb-2">
            {/* Liga-logotyp */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
              <Image
                src={leagueData.logo}
                alt={`${league} logo`}
                fill
                className="object-contain"
              />
            </div>
            
            {/* H1 titel */}
            <h1 className="text-2xl sm:text-3xl font-bold">
              {info.title}
            </h1>
          </div>
          
          {/* Orange accent line */}
          <div className="w-20 h-1 bg-primary mb-4"></div>
          
          {/* Beskrivning */}
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {info.description}
          </p>
        </div>
      </div>
    </div>
  );
}
