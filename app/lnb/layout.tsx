import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LNB Franska Ligan på TV & Stream 2025/26 | basket24.nu',
  description: 'Se LNB Pro A – franska basketligan – på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
  keywords: [
    'LNB på TV',
    'franska basketligan stream',
    'LNB Pro A TV',
    'Betclic Elite stream',
    'se LNB basket',
  ],
  alternates: {
    canonical: 'https://basket24.nu/lnb',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu/lnb',
    siteName: 'basket24.nu',
    title: 'LNB Franska Ligan på TV & Stream 2025/26 | basket24.nu',
    description: 'Se LNB Pro A – franska basketligan – på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: [{ url: '/og-image-minimal.png', width: 1200, height: 630, alt: 'basket24.nu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LNB Franska Ligan på TV & Stream 2025/26 | basket24.nu',
    description: 'Se LNB Pro A – franska basketligan – på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: ['/og-image-minimal.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
