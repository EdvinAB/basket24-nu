import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EuroLeague på TV & Stream 2025/26 | basket24.nu',
  description: 'Se EuroLeague på TV och stream. Spelschema med sändningstider och kanaler för alla EuroLeague-matcher 2025/26.',
  keywords: [
    'EuroLeague på TV',
    'EuroLeague stream',
    'EuroLeague Viaplay',
    'se EuroLeague',
    'EuroLeague spelschema',
  ],
  alternates: {
    canonical: 'https://basket24.nu/euroleague',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu/euroleague',
    siteName: 'basket24.nu',
    title: 'EuroLeague på TV & Stream 2025/26 | basket24.nu',
    description: 'Se EuroLeague på TV och stream. Spelschema med sändningstider och kanaler för alla EuroLeague-matcher 2025/26.',
    images: [{ url: '/og-image-minimal.png', width: 1200, height: 630, alt: 'basket24.nu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EuroLeague på TV & Stream 2025/26 | basket24.nu',
    description: 'Se EuroLeague på TV och stream. Spelschema med sändningstider och kanaler för alla EuroLeague-matcher 2025/26.',
    images: ['/og-image-minimal.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
