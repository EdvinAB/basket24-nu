import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
  
  // Verification
  verification: {
    google: 'your-google-verification-code',
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
            {/* Google Analytics */}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-18PW1MN9V8"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-18PW1MN9V8');
        `,
      }}
    />
        {/* Organization Structured Data */}
        <OrganizationSchema />
      </head>
      <body className={inter.className}>
        {/* Header - Mörkblå */}
        <Header />
        {/* Main Content - LJUS CONTAINER (spotlight-effekt) */}
        <main className="content-container">
          {children}
        </main>
        {/* Footer - Mörkblå */}
        <Footer />
      </body>
    </html>
  );
}
