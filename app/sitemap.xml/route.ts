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

const BASE_URL = 'https://basket24.nu';

interface SitemapPage {
  url: string;
  changefreq: string;
  priority: number;
  lastmod: string;
}

const today = new Date().toISOString().split('T')[0];

const staticPages: SitemapPage[] = [
  { url: '/',                      changefreq: 'daily',   priority: 1.0, lastmod: today },
  { url: '/nba/',                  changefreq: 'daily',   priority: 0.9, lastmod: today },
  { url: '/euroleague/',           changefreq: 'daily',   priority: 0.9, lastmod: today },
  { url: '/sbl/',                  changefreq: 'daily',   priority: 0.9, lastmod: today },
  { url: '/acb/',                  changefreq: 'daily',   priority: 0.8, lastmod: today },
  { url: '/turkish-bsl/',          changefreq: 'daily',   priority: 0.8, lastmod: today },
  { url: '/aba-liga/',             changefreq: 'daily',   priority: 0.8, lastmod: today },
  { url: '/bbl/',                  changefreq: 'daily',   priority: 0.8, lastmod: today },
  { url: '/greek-cup/',            changefreq: 'daily',   priority: 0.8, lastmod: today },
  { url: '/lega-a/',               changefreq: 'daily',   priority: 0.8, lastmod: today },
  { url: '/lkl/',                  changefreq: 'daily',   priority: 0.8, lastmod: today },
  { url: '/kls/',                  changefreq: 'daily',   priority: 0.8, lastmod: today },
  { url: '/serbian-super-league/', changefreq: 'daily',   priority: 0.8, lastmod: today },
  { url: '/eurocup/',              changefreq: 'daily',   priority: 0.8, lastmod: today },
  { url: '/champions-league/',     changefreq: 'daily',   priority: 0.8, lastmod: today },
  { url: '/fiba-europe-cup/',      changefreq: 'daily',   priority: 0.8, lastmod: today },
  { url: '/lnb/',                  changefreq: 'daily',   priority: 0.8, lastmod: today },
  { url: '/world-cup/',            changefreq: 'weekly',  priority: 0.7, lastmod: today },
  { url: '/om-oss/',               changefreq: 'monthly', priority: 0.4, lastmod: today },
  { url: '/kontakt/',              changefreq: 'monthly', priority: 0.4, lastmod: today },
];

function buildMatchPages(leagueSlug: string, data: any): SitemapPage[] {
  return (data.matches as any[]).map((match) => {
    const homeSlug = match.home.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const awaySlug = match.away.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const matchSlug = `${homeSlug}-vs-${awaySlug}-${match.id}`;
    const lastmod = match.date.split('T')[0];
    return {
      url: `/${leagueSlug}/${matchSlug}/`,
      changefreq: 'weekly',
      priority: 0.6,
      lastmod,
    };
  });
}

export async function GET() {
  const matchPages: SitemapPage[] = [
    ...buildMatchPages('nba',                  nbaData),
    ...buildMatchPages('euroleague',           euroleagueData),
    ...buildMatchPages('sbl',                  sblData),
    ...buildMatchPages('acb',                  acbData),
    ...buildMatchPages('turkish-bsl',          turkishBslData),
    ...buildMatchPages('aba-liga',             abaLigaData),
    ...buildMatchPages('bbl',                  bblData),
    ...buildMatchPages('greek-cup',            greekCupData),
    ...buildMatchPages('lega-a',               legaAData),
    ...buildMatchPages('lkl',                  lklData),
    ...buildMatchPages('kls',                  klsData),
    ...buildMatchPages('serbian-super-league', serbianSuperLeagueData),
    ...buildMatchPages('eurocup',              eurocupData),
    ...buildMatchPages('champions-league',     championsLeagueData),
    ...buildMatchPages('fiba-europe-cup',      fibaEuropeCupData),
    ...buildMatchPages('lnb',                  lnbData),
    ...buildMatchPages('world-cup',            worldCupData),
  ];

  const allPages = [...staticPages, ...matchPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((page) => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
    },
  });
}
