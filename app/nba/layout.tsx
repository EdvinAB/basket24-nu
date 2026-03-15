import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NBA på TV & Stream 2025/26 | basket24.nu',
  description: 'Se NBA på TV och stream. Spelschema med sändningstider och kanaler för alla NBA-matcher 2025/26.',
  keywords: [
    'NBA på TV',
    'NBA stream',
    'NBA sändningstider',
    'NBA League Pass',
    'se NBA Sverige',
    'NBA spelschema',
  ],
  alternates: {
    canonical: 'https://basket24.nu/nba',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu/nba',
    siteName: 'basket24.nu',
    title: 'NBA på TV & Stream 2025/26 | basket24.nu',
    description: 'Se NBA på TV och stream. Spelschema med sändningstider och kanaler för alla NBA-matcher 2025/26.',
    images: [{ url: '/og-image-minimal.png', width: 1200, height: 630, alt: 'basket24.nu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBA på TV & Stream 2025/26 | basket24.nu',
    description: 'Se NBA på TV och stream. Spelschema med sändningstider och kanaler för alla NBA-matcher 2025/26.',
    images: ['/og-image-minimal.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
