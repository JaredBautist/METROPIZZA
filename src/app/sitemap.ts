import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: 'https://metropizzacol.com/',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://metropizzacol.com/#nosotros',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://metropizzacol.com/#menu',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://metropizzacol.com/#historia',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://metropizzacol.com/#galeria',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://metropizzacol.com/#testimonios',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://metropizzacol.com/#sucursales',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://metropizzacol.com/#contacto',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
