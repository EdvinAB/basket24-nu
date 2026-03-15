import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Basket-VM 2027 Kval på TV & Stream | basket24.nu',
  description: 'Se FIBA Basketball World Cup 2027-kval på TV och stream. Spelschema med sändningstider och kanaler för alla VM-kvalmatcher.',
  keywords: [
    'Basket-VM 2027 kval',
    'FIBA World Cup kval stream',
    'basket VM kval TV',
    'se basket VM kval',
    'FIBA basket VM',
  ],
  alternates: {
    canonical: 'https://basket24.nu/world-cup',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu/world-cup',
    siteName: 'basket24.nu',
    title: 'Basket-VM 2027 Kval på TV & Stream | basket24.nu',
    description: 'Se FIBA Basketball World Cup 2027-kval på TV och stream. Spelschema med sändningstider och kanaler för alla VM-kvalmatcher.',
    images: [{ url: '/og-image-minimal.png', width: 1200, height: 630, alt: 'basket24.nu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basket-VM 2027 Kval på TV & Stream | basket24.nu',
    description: 'Se FIBA Basketball World Cup 2027-kval på TV och stream. Spelschema med sändningstider och kanaler för alla VM-kvalmatcher.',
    images: ['/og-image-minimal.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
