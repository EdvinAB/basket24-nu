'use client';

// MOCK DATA - senare hämtar vi detta från database
const blogPosts = [
  {
    id: 1,
    title: 'Lakers dominerar mot Celtics - LeBron med 35 poäng',
    excerpt: 'I nattens stormatch i NBA visade Lakers upp storhetsform när de besegrade Celtics med 112-98...',
    image: '/blog/lakers-celtics.jpg', // Placeholder
    date: '2025-01-14',
    category: 'NBA'
  },
  {
    id: 2,
    title: 'EuroLeague: Real Madrid förlänger kontraktet med Campazzo',
    excerpt: 'Den argentinske stjärnan Facundo Campazzo har förlängt sitt kontrakt med Real Madrid...',
    image: '/blog/campazzo.jpg',
    date: '2025-01-13',
    category: 'EuroLeague'
  },
  {
    id: 3,
    title: 'Basketligan: Norrköping klättrar i tabellen',
    excerpt: 'Efter tre raka segrar tar sig Norrköping Dolphins upp till fjärdeplatsen i Basketligan...',
    image: '/blog/norrkoping.jpg',
    date: '2025-01-12',
    category: 'Basketligan'
  },
  {
    id: 4,
    title: 'Speltips: Så bettar du på NBA All-Star Game',
    excerpt: 'NBA All-Star helgen närmar sig och vi ger dig våra bästa tips för betting...',
    image: '/blog/allstar.jpg',
    date: '2025-01-11',
    category: 'Betting'
  },
];

export default function BlogSidebar() {
  return (
    <div className="space-y-6">
      {/* Rubrik */}
      <div className="bg-primary text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">📰 Senaste Nytt</h2>
      </div>

      {/* Nyheter/Blogginlägg */}
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <a
            key={post.id}
            href={`/nyheter/${post.id}`}
            className="block bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden group"
          >
            {/* Bild */}
            <div className="relative h-40 bg-gradient-to-br from-primary to-secondary">
              {/* Placeholder - senare lägger vi in riktiga bilder */}
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
                🏀
              </div>
              
              {/* Kategori badge */}
              <div className="absolute top-2 left-2">
                <span className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Innehåll */}
            <div className="p-4">
              <h3 className="font-bold text-sm mb-2 group-hover:text-primary transition line-clamp-2">
                {post.title}
              </h3>
              <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{new Date(post.date).toLocaleDateString('sv-SE')}</span>
                <span className="text-primary font-medium">Läs mer →</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Visa alla nyheter knapp */}
      <a
        href="/nyheter"
        className="block w-full py-3 bg-primary text-white text-center font-medium rounded-lg hover:bg-primary-dark transition"
      >
        Se alla nyheter
      </a>
    </div>
  );
}
