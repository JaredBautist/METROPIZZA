import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      // Bloquear bots de entrenamiento IA (no traen clientes, solo raspan contenido)
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'Google-Extended', disallow: '/' },
      { userAgent: 'anthropic-ai', disallow: '/' },
      { userAgent: 'ClaudeBot', disallow: '/' },
      { userAgent: 'CCBot', disallow: '/' },
      { userAgent: 'FacebookBot', disallow: '/' },
      { userAgent: 'Bytespider', disallow: '/' },
      { userAgent: 'Diffbot', disallow: '/' },
      { userAgent: 'cohere-ai', disallow: '/' },
      { userAgent: 'AI2Bot', disallow: '/' },
      // Permitir bots de búsqueda IA (traen tráfico de Perplexity, ChatGPT search)
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'YouBot', allow: '/' },
    ],
    sitemap: 'https://metropizzacol.com/sitemap.xml',
  };
}
