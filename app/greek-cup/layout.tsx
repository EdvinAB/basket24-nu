import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Greek Cup på TV & Stream 2025/26 | basket24.nu',
  description: 'Se Greek Basketball Cup på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
  keywords: [
    'Greek Cup på TV',
    'grekiska basketligan stream',
    'Greek Basketball Cup TV',
    'se Greek Cup',
    'Greek Cup spelschema',
  ],
  alternates: {
    canonical: 'https://basket24.nu/greek-cup',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu/greek-cup',
    siteName: 'basket24.nu',
    title: 'Greek Cup på TV & Stream 2025/26 | basket24.nu',
    description: 'Se Greek Basketball Cup på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: [{ url: '/og-image-minimal.png', width: 1200, height: 630, alt: 'basket24.nu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greek Cup på TV & Stream 2025/26 | basket24.nu',
    description: 'Se Greek Basketball Cup på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: ['/og-image-minimal.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
