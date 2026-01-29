import { allMatches } from '@/lib/matchesData';

// Define the page type
interface SitemapPage {
  url: string;
  changefreq: string;
  priority: number;
  lastmod?: string; // Optional lastmod
}

// Generate sitemap.xml dynamically
export async function GET() {
  const baseUrl = 'https://basket24.nu';
  
  // Static pages
  const staticPages: SitemapPage[] = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/nba/', changefreq: 'daily', priority: 0.9 },
    { url: '/euroleague/', changefreq: 'daily', priority: 0.9 },
    { url: '/sbl/', changefreq: 'daily', priority: 0.9 },
  ];
  
  // Generate match URLs from matchesData
  const matchPages: SitemapPage[] = allMatches.map((match) => {
    const leagueSlug = match.league.toLowerCase();
    const dateOnly = match.date.split('T')[0];
    const awaySlug = match.away.toLowerCase().replace(/\s+/g, '-');
    const homeSlug = match.home.toLowerCase().replace(/\s+/g, '-');
    const matchSlug = `${dateOnly}-${awaySlug}-vs-${homeSlug}`;
    
    // Format date for lastmod
    const lastmod = match.date.split('T')[0];
    
    return {
      url: `/match/${leagueSlug}/${matchSlug}/`,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod,
    };
  });
  
  // Combine all pages
  const allPages = [...staticPages, ...matchPages];
  
  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
    },
  });
}