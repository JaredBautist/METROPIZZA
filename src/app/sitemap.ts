import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://metropizzacol.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://metropizzacol.com/#menu',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95, // Alta prioridad: "pizza por metro cucuta", la página mas transaccional
    },
    {
      url: 'https://metropizzacol.com/#nosotros',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://metropizzacol.com/#historia',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://metropizzacol.com/#galeria',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.65,
    },
    {
      url: 'https://metropizzacol.com/#contacto',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85, // Alta: "pizza los patios domicilios a domicilio" termina aqui
    },
  ];
}
