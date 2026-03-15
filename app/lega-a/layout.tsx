import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lega A Italienska Ligan på TV & Stream 2025/26 | basket24.nu',
  description: 'Se Lega Basket Serie A på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
  keywords: [
    'Lega A på TV',
    'italienska basketligan stream',
    'Lega Basket TV',
    'DAZN basket Italien',
    'se Lega A',
    'Lega A spelschema',
  ],
  alternates: {
    canonical: 'https://basket24.nu/lega-a',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu/lega-a',
    siteName: 'basket24.nu',
    title: 'Lega A Italienska Ligan på TV & Stream 2025/26 | basket24.nu',
    description: 'Se Lega Basket Serie A på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: [{ url: '/og-image-minimal.png', width: 1200, height: 630, alt: 'basket24.nu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lega A Italienska Ligan på TV & Stream 2025/26 | basket24.nu',
    description: 'Se Lega Basket Serie A på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: ['/og-image-minimal.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
