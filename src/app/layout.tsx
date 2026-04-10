import type { Metadata, Viewport } from 'next';
import { Outfit, Playfair_Display, Great_Vibes } from 'next/font/google';
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

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-great-vibes',
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MetroPizza Los Patios y Cúcuta | Auténtica Pizza Italiana por Metro',
  description:
    'Disfruta la mejor pizza artesanal en Los Patios y Cúcuta. MetroPizza ofrece pizza por metro, pastas italianas y lasañas con el sabor tradicional de Italia. ¡Pide ahora en el área metropolitana!',
  keywords: [
    'pizza italiana Los Patios',
    'pizza cucuta',
    'pizzeria los patios',
    'restaurante italiano cucuta',
    'pizza por metro Norte de Santander',
    'MetroPizza Colombia',
    'comida italiana los patios',
    'domicilios de pizza cucuta',
    'mejor pizza de cucuta',
  ],
  authors: [{ name: 'MetroPizza' }],
  creator: 'MetroPizza Colombia',
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
    title: 'MetroPizza Los Patios y Cúcuta | Sabor Italiano Real',
    description:
      'La mejor pizza por metro de Norte de Santander. Auténtica tradición italiana en Los Patios y Cúcuta. ¡Haz tu pedido hoy!',
    type: 'website',
    locale: 'es_CO',
    siteName: 'MetroPizza Colombia',
    url: 'https://metropizzacol.com',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552832230-c0197dd311f5?q=80&w=1996&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'MetroPizza - Pizza Italiana en Los Patios y Cúcuta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetroPizza | Pizza y Pasta en Los Patios y Cúcuta',
    description: 'Sabor 100% italiano en el área metropolitana de Cúcuta. Pizza por metro, pastas y más.',
    images: ['https://images.unsplash.com/photo-1552832230-c0197dd311f5?q=80&w=1996&auto=format&fit=crop'],
  },
  alternates: {
    canonical: 'https://metropizzacol.com',
    languages: {
      'es-CO': 'https://metropizzacol.com',
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
    'google-site-verification': 'google9285a1ae083335fe',
    'geo.region': 'CO-NST',
    'geo.placename': 'Los Patios, Cúcuta',
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
    <html lang="es-CO" className={`${outfit.variable} ${playfair.variable} ${greatVibes.variable} scroll-smooth`}>
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
