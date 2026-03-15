import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LKL Litauiska Ligan på TV & Stream 2025/26 | basket24.nu',
  description: 'Se LKL – litauiska basketligan – på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
  keywords: [
    'LKL på TV',
    'litauiska basketligan stream',
    'Zalgiris basket TV',
    'se LKL',
    'LKL spelschema',
  ],
  alternates: {
    canonical: 'https://basket24.nu/lkl',
  },
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://basket24.nu/lkl',
    siteName: 'basket24.nu',
    title: 'LKL Litauiska Ligan på TV & Stream 2025/26 | basket24.nu',
    description: 'Se LKL – litauiska basketligan – på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: [{ url: '/og-image-minimal.png', width: 1200, height: 630, alt: 'basket24.nu' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LKL Litauiska Ligan på TV & Stream 2025/26 | basket24.nu',
    description: 'Se LKL – litauiska basketligan – på TV och stream. Spelschema med sändningstider och kanaler 2025/26.',
    images: ['/og-image-minimal.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
