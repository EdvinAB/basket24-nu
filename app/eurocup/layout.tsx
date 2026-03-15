import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EuroCup på TV & Stream 2025/26 | basket24.nu',
  description: 'Se EuroCup på TV och stream. Spelschema med sändningstider och kanaler för alla EuroCup-matcher 2025/26.',
  keywords: [
    'EuroCup på TV',
    'EuroCup stream',
    'EuroLeague TV EuroCup',
    'se EuroCup',
    'EuroCup spelschema',
  ],
  alternates: {
    canonical: 'https://basket24.nu/eurocup',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu/eurocup',
    siteName: 'basket24.nu',
    title: 'EuroCup på TV & Stream 2025/26 | basket24.nu',
    description: 'Se EuroCup på TV och stream. Spelschema med sändningstider och kanaler för alla EuroCup-matcher 2025/26.',
    images: [{ url: '/og-image-minimal.png', width: 1200, height: 630, alt: 'basket24.nu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EuroCup på TV & Stream 2025/26 | basket24.nu',
    description: 'Se EuroCup på TV och stream. Spelschema med sändningstider och kanaler för alla EuroCup-matcher 2025/26.',
    images: ['/og-image-minimal.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
