import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Turkish BSL på TV & Stream 2025/26 | basket24.nu',
  description: 'Se Turkish Basketball Super League (BSL) på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
  keywords: [
    'Turkish BSL på TV',
    'turkiska basketligan stream',
    'BSL basket stream',
    'se Turkish BSL',
    'BSL spelschema',
  ],
  alternates: {
    canonical: 'https://basket24.nu/turkish-bsl',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu/turkish-bsl',
    siteName: 'basket24.nu',
    title: 'Turkish BSL på TV & Stream 2025/26 | basket24.nu',
    description: 'Se Turkish Basketball Super League (BSL) på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: [{ url: '/og-image-minimal.png', width: 1200, height: 630, alt: 'basket24.nu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turkish BSL på TV & Stream 2025/26 | basket24.nu',
    description: 'Se Turkish Basketball Super League (BSL) på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: ['/og-image-minimal.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
