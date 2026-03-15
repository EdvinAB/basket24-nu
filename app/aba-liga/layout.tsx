import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABA Liga på TV & Stream 2025/26 | basket24.nu',
  description: 'Se ABA Liga på TV och stream. Spelschema med sändningstider och kanaler för alla ABA Liga-matcher 2025/26.',
  keywords: [
    'ABA Liga på TV',
    'ABA Liga stream',
    'Balkanligan basket TV',
    'se ABA Liga',
    'ABA Liga spelschema',
  ],
  alternates: {
    canonical: 'https://basket24.nu/aba-liga',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu/aba-liga',
    siteName: 'basket24.nu',
    title: 'ABA Liga på TV & Stream 2025/26 | basket24.nu',
    description: 'Se ABA Liga på TV och stream. Spelschema med sändningstider och kanaler för alla ABA Liga-matcher 2025/26.',
    images: [{ url: '/og-image-minimal.png', width: 1200, height: 630, alt: 'basket24.nu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Liga på TV & Stream 2025/26 | basket24.nu',
    description: 'Se ABA Liga på TV och stream. Spelschema med sändningstider och kanaler för alla ABA Liga-matcher 2025/26.',
    images: ['/og-image-minimal.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
