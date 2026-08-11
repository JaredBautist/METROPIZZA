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
  title: 'MetroPizza 🍕 La Mejor Pizza · Los Patios & Cúcuta',
  description:
    '⭐ 4.6 · +10.000 clientes · La mejor pizza de Los Patios, Cúcuta y Pinar del Río. Pizza por metro, artesanal y a domicilio. Best pizza near me open now. ¡Pedí ya!',
  keywords: [
    // Español — búsquedas locales
    'la mejor pizza en cucuta',
    'pizza los patios',
    'la mejor pizza de los patios',
    'pizza cucuta',
    'pizza pinar del rio',
    'pizza cerca de mi',
    'pizza los patios domicilios',
    'pizzerias en cucuta abiertas ya',
    'pizza por metro cucuta',
    'pizza gigante para fiestas',
    'pizza artesanal cucuta',
    'promociones de pizza hoy cucuta',
    'pizzeria los patios',
    'pizzeria pinar del rio',
    'domicilios de pizza cucuta',
    'pizza a domicilio los patios',
    'metro pizza cucuta',
    'metropizza',
    // Inglés — búsquedas reales detectadas en Search Console
    'best pizza nearby',
    'best pizza near me open now',
    'best pizza in cucuta',
    'pizza near me cucuta',
    'pizza delivery cucuta colombia',
    'pizza los patios colombia',
    'metro pizza cucuta colombia',
    'best pizza cucuta',
    'pizza open now cucuta',
    'italian pizza near me cucuta',
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
    title: 'MetroPizza 🍕 La Mejor Pizza · Los Patios & Cúcuta',
    description:
      '⭐ 4.6 · +10.000 clientes felices · Pizza por metro, artesanal y a domicilio en Los Patios, Cúcuta y Pinar del Río. Best pizza near me open now. ¡Pedí ya!',
    type: 'website',
    locale: 'es_CO',
    siteName: 'MetroPizza Colombia',
    url: 'https://metropizzacol.com',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552832230-c0197dd311f5?q=80&w=1996&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'MetroPizza - Pizza Italiana en Los Patios, Cúcuta y Pinar del Río',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetroPizza 🍕 La Mejor Pizza · Los Patios & Cúcuta',
    description: '⭐ 4.6 · Pizza por metro, artesanal y domicilios en Los Patios, Cúcuta y Pinar del Río. Best pizza near me open now. ¡Pedí ya!',
    images: ['https://images.unsplash.com/photo-1552832230-c0197dd311f5?q=80&w=1996&auto=format&fit=crop'],
  },
  alternates: {
    canonical: 'https://metropizzacol.com',
    languages: {
      'es-CO': 'https://metropizzacol.com',
      'en': 'https://metropizzacol.com',
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
        <link
          rel="preload"
          as="image"
          href="/images/image.png"
          fetchPriority="high"
        />
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
