import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Svenska Basketligan på TV & Stream 2025/26 | basket24.nu',
  description: 'Se Svenska Basketligan (SBL) på TV och stream. Spelschema med sändningstider och kanaler för alla SBL-matcher 2025/26.',
  keywords: [
    'SBL på TV',
    'Svenska Basketligan stream',
    'SBL stream',
    'Expressen basket',
    'se SBL',
    'SBL spelschema',
  ],
  alternates: {
    canonical: 'https://basket24.nu/sbl',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu/sbl',
    siteName: 'basket24.nu',
    title: 'Svenska Basketligan på TV & Stream 2025/26 | basket24.nu',
    description: 'Se Svenska Basketligan (SBL) på TV och stream. Spelschema med sändningstider och kanaler för alla SBL-matcher 2025/26.',
    images: [{ url: '/og-image-minimal.png', width: 1200, height: 630, alt: 'basket24.nu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Svenska Basketligan på TV & Stream 2025/26 | basket24.nu',
    description: 'Se Svenska Basketligan (SBL) på TV och stream. Spelschema med sändningstider och kanaler för alla SBL-matcher 2025/26.',
    images: ['/og-image-minimal.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
