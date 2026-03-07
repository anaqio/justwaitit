import { type MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'https://anaqio.com';

  return {
    host: baseUrl.replace(/^https?:\/\//, ''),
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/auth/',
          '/protected/',
          '/playground',
          '/api/',
          '/_next/',
          '/legal-mentions',
        ],
      },
      {
        userAgent: ['Googlebot', 'Bingbot'],
        allow: ['/', '/brand', '/early-access', '/terms', '/privacy'],
        disallow: ['/auth/', '/protected/', '/legal-mentions'],
      },
      {
        userAgent: ['Twitterbot', 'FacebookExternalHit', 'LinkedInBot'],
        allow: '/',
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`],
  };
}
