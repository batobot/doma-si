import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Montserrat } from 'next/font/google';
import './globals.css';

const serif = Cormorant_Garamond({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const accent = Montserrat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.doma-si.com'),
  title: {
    default: 'Doma Si - The Warmest Advent in Zagreb',
    template: '%s | Doma Si',
  },
  description:
    'An intimate Christmas courtyard in Upper Town—cozy, covered, and curated nightly with music, gastronomy, and Croatian tradition.',
  keywords: [
    'Zagreb Advent',
    'Christmas market Zagreb',
    'Gornji Grad',
    'Croatian Christmas',
    'Zagreb events',
    'Doma Si',
  ],
  authors: [{ name: 'Tu Si Doma j.d.o.o.' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['hr_HR'],
    url: 'https://www.doma-si.com',
    siteName: 'Doma Si',
    title: 'Doma Si - The Warmest Advent in Zagreb',
    description:
      'An intimate Christmas courtyard in Upper Town—cozy, covered, and curated nightly with music, gastronomy, and Croatian tradition.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Doma Si - The Warmest Advent in Zagreb',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doma Si - The Warmest Advent in Zagreb',
    description:
      'An intimate Christmas courtyard in Upper Town—cozy, covered, and curated nightly.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.doma-si.com',
    languages: {
      en: '/en',
      hr: '/hr',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${accent.variable}`}>
      <body>
        <a href="#main" className="skip-to-main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
