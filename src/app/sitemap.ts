import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-04-18');

  return [
    {
      url: 'https://metropizzacol.com/',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
