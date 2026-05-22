// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/_next/',           // Next.js internal files
          '/_vercel/',         // Vercel specific
          '/studio/',          // If you use Sanity or any CMS studio
        ],
      },
      // Optional: More strict rules for specific bots
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
    sitemap: 'https://voalainterior.com/sitemap.xml',
  };
}