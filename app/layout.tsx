import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import OrganizationSchema from '@/components/OrganizationSchema';

const inter = Inter({ subsets: ['latin'] });

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://basket24.nu'),
  title: {
    default: 'basket24.nu - Basket på TV och stream | NBA, EuroLeague, SBL',
    template: '%s | basket24.nu',
  },
  description: 'Se alla basketmatcher på TV och stream. Komplett TV-guide för NBA, EuroLeague och SBL med TV-tider, kanaler och streaming. Hitta var alla matcher sänds!',
  keywords: [
    'basket på tv',
    'basket stream',
    'NBA på TV',
    'EuroLeague stream',
    'SBL matcher',
    'basket24',
    'basketmatcher',
    'NBA League Pass',
    'Viaplay basket',
    'basket streaming Sverige'
  ],
  authors: [{ name: 'DataMarketing AB' }],
  creator: 'DataMarketing AB',
  publisher: 'DataMarketing AB',
  
  // OpenGraph
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu',
    siteName: 'basket24.nu',
    title: 'basket24.nu - Basket på TV och stream 24/7',
    description: 'Se alla basketmatcher på TV och stream. NBA, EuroLeague och SBL med TV-tider, kanaler och streaming.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'basket24.nu - Basket på TV 24/7',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'basket24.nu - Basket på TV och stream 24/7',
    description: 'Se alla basketmatcher på TV och stream. NBA, EuroLeague och SBL.',
    images: ['/og-image.png'],
    creator: '@basket24nu',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (add your codes later)
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  // Additional
  category: 'Sports',
  alternates: {
    canonical: 'https://basket24.nu',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        {/* Organization Structured Data */}
        <OrganizationSchema />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        
        {/* Footer */}
        <footer className="bg-dark text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* About */}
              <div>
                <h3 className="text-lg font-bold mb-4">Om basket24.nu</h3>
                <p className="text-sm text-gray-400">
                  Din kompletta TV-guide för basket. Hitta alla NBA, EuroLeague 
                  och SBL matcher på TV och stream.
                </p>
              </div>
              
              {/* Links */}
              <div>
                <h3 className="text-lg font-bold mb-4">Snabblänkar</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/nba" className="text-gray-400 hover:text-primary">NBA</a></li>
                  <li><a href="/euroleague" className="text-gray-400 hover:text-primary">EuroLeague</a></li>
                  <li><a href="/sbl" className="text-gray-400 hover:text-primary">SBL</a></li>
                </ul>
              </div>
              
              {/* Contact */}
              <div>
                <h3 className="text-lg font-bold mb-4">Kontakt</h3>
                <p className="text-sm text-gray-400">
                  DataMarketing AB<br />
                  edvin.rtech@gmail.com
                </p>
              </div>
              
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} basket24.nu - DataMarketing AB. Alla rättigheter förbehållna.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
