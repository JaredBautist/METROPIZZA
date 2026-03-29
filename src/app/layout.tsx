import type { Metadata, Viewport } from 'next';
import { Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['600', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MetroPizza Los Patios | Auténtica Pizza Italiana',
  description:
    'Descubre el sabor de Italia en Los Patios, Norte de Santander. Pizza por metro al estilo italiano, pastas artesanales, lasañas y crepes. 10+ años de tradición gastronómica. Reserva: +57 310 888 4489',
  keywords: [
    'pizza italiana Los Patios',
    'restaurante italiano',
    'pizza por metro Norte de Santander',
    'MetroPizza Los Patios',
    'auténtica pizza italiana',
    'pastas artesanales',
    'restaurante italiano pizzería',
    'comida italiana',
    'pizza napolitana',
    'lasagna casera',
  ],
  authors: [{ name: 'MetroPizza' }],
  creator: 'MetroPizza Los Patios',
  publisher: 'MetroPizza',
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
  openGraph: {
    title: 'MetroPizza Los Patios | Auténtica Pizza Italiana',
    description:
      'El auténtico sabor de Italia en Los Patios. Pizza por metro, pastas artesanales y lasañas. Tradición 100% italiana.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'MetroPizza Los Patios',
    url: 'https://metropizza.com',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552832230-c0197dd311f5?q=80&w=1996&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'MetroPizza - Auténtica Pizza Italiana en Los Patios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetroPizza Los Patios | Pizza Italiana Auténtica',
    description: 'Descubre el sabor de Italia en Los Patios. Pizza por metro, pastas y lasañas.',
    images: ['https://images.unsplash.com/photo-1552832230-c0197dd311f5?q=80&w=1996&auto=format&fit=crop'],
  },
  alternates: {
    canonical: 'https://metropizza.com',
    languages: {
      'es-CO': 'https://metropizza.com',
    },
  },
  category: 'restaurant',
  classification: 'Restaurant, Italian Food, Pizza',
  applicationName: 'MetroPizza',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
  },
  other: {
    'google-site-verification': 'your-verification-code',
    'msvalidate.01': 'your-bing-verification',
    'geo.region': 'CO-NST',
    'geo.placename': 'Los Patios',
    'geo.position': '7.8389;-72.5039',
    'ICBM': '7.8389, -72.5039',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FDFCDC' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO" className={`${outfit.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="geo.region" content="CO-NST" />
        <meta name="geo.placename" content="Los Patios, Norte de Santander" />
        <meta name="geo.position" content="7.8389;-72.5039" />
        <meta name="ICBM" content="7.8389, -72.5039" />
      </head>
      <body className="font-outfit antialiased bg-bg-light text-text-main">
        {children}
      </body>
    </html>
  );
}
