import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ACB Spanska Ligan på TV & Stream 2025/26 | basket24.nu',
  description: 'Se ACB – spanska basketligan – på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
  keywords: [
    'ACB på TV',
    'ACB stream',
    'spanska basketligan TV',
    'Liga Endesa stream',
    'se ACB',
    'ACB spelschema',
  ],
  alternates: {
    canonical: 'https://basket24.nu/acb',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu/acb',
    siteName: 'basket24.nu',
    title: 'ACB Spanska Ligan på TV & Stream 2025/26 | basket24.nu',
    description: 'Se ACB – spanska basketligan – på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: [{ url: '/og-image-minimal.png', width: 1200, height: 630, alt: 'basket24.nu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACB Spanska Ligan på TV & Stream 2025/26 | basket24.nu',
    description: 'Se ACB – spanska basketligan – på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: ['/og-image-minimal.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
