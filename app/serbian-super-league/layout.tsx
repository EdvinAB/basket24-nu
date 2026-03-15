import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serbian Super League på TV & Stream 2025/26 | basket24.nu',
  description: 'Se Serbian Super League på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
  keywords: [
    'Serbian Super League på TV',
    'serbiska superligans stream',
    'Serbian Super League TV',
    'se Serbian Super League',
  ],
  alternates: {
    canonical: 'https://basket24.nu/serbian-super-league',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu/serbian-super-league',
    siteName: 'basket24.nu',
    title: 'Serbian Super League på TV & Stream 2025/26 | basket24.nu',
    description: 'Se Serbian Super League på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: [{ url: '/og-image-minimal.png', width: 1200, height: 630, alt: 'basket24.nu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serbian Super League på TV & Stream 2025/26 | basket24.nu',
    description: 'Se Serbian Super League på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: ['/og-image-minimal.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
