// app/robots.ts
// Generates robots.txt dynamically

export async function GET() {
  const robotsTxt = `# basket24.nu robots.txt
  
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://basket24.nu/sitemap.xml

# Crawl-delay (optional, remove if not needed)
# Crawl-delay: 1
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
