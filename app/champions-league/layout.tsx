import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Basketball Champions League på TV 2025/26 | basket24.nu',
  description: 'Se Basketball Champions League (BCL) på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
  keywords: [
    'Basketball Champions League på TV',
    'BCL stream',
    'Courtside 1891 basket',
    'se Champions League basket',
    'BCL spelschema',
  ],
  alternates: {
    canonical: 'https://basket24.nu/champions-league',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu/champions-league',
    siteName: 'basket24.nu',
    title: 'Basketball Champions League på TV 2025/26 | basket24.nu',
    description: 'Se Basketball Champions League (BCL) på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: [{ url: '/og-image-minimal.png', width: 1200, height: 630, alt: 'basket24.nu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basketball Champions League på TV 2025/26 | basket24.nu',
    description: 'Se Basketball Champions League (BCL) på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: ['/og-image-minimal.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
