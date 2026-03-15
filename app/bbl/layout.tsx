import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BBL Tyska Basketligan på TV & Stream 2025/26 | basket24.nu',
  description: 'Se Basketball Bundesliga (BBL) på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
  keywords: [
    'BBL på TV',
    'tyska basketligan stream',
    'Basketball Bundesliga TV',
    'se BBL',
    'BBL spelschema',
  ],
  alternates: {
    canonical: 'https://basket24.nu/bbl',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu/bbl',
    siteName: 'basket24.nu',
    title: 'BBL Tyska Basketligan på TV & Stream 2025/26 | basket24.nu',
    description: 'Se Basketball Bundesliga (BBL) på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: [{ url: '/og-image-minimal.png', width: 1200, height: 630, alt: 'basket24.nu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BBL Tyska Basketligan på TV & Stream 2025/26 | basket24.nu',
    description: 'Se Basketball Bundesliga (BBL) på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: ['/og-image-minimal.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
