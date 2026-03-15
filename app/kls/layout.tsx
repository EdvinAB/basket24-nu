import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KLS Serbiska Ligan på TV & Stream 2025/26 | basket24.nu',
  description: 'Se KLS – serbiska basketligan – på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
  keywords: [
    'KLS på TV',
    'serbiska basketligan stream',
    'KLS basket TV',
    'se KLS',
    'KLS spelschema',
  ],
  alternates: {
    canonical: 'https://basket24.nu/kls',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu/kls',
    siteName: 'basket24.nu',
    title: 'KLS Serbiska Ligan på TV & Stream 2025/26 | basket24.nu',
    description: 'Se KLS – serbiska basketligan – på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: [{ url: '/og-image-minimal.png', width: 1200, height: 630, alt: 'basket24.nu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KLS Serbiska Ligan på TV & Stream 2025/26 | basket24.nu',
    description: 'Se KLS – serbiska basketligan – på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: ['/og-image-minimal.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
