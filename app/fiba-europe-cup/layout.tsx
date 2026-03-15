import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FIBA Europe Cup på TV & Stream 2025/26 | basket24.nu',
  description: 'Se FIBA Europe Cup på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
  keywords: [
    'FIBA Europe Cup på TV',
    'FIBA Europe Cup stream',
    'Courtside 1891 Max basket',
    'se FIBA Europe Cup',
  ],
  alternates: {
    canonical: 'https://basket24.nu/fiba-europe-cup',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu/fiba-europe-cup',
    siteName: 'basket24.nu',
    title: 'FIBA Europe Cup på TV & Stream 2025/26 | basket24.nu',
    description: 'Se FIBA Europe Cup på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: [{ url: '/og-image-minimal.png', width: 1200, height: 630, alt: 'basket24.nu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIBA Europe Cup på TV & Stream 2025/26 | basket24.nu',
    description: 'Se FIBA Europe Cup på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: ['/og-image-minimal.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
