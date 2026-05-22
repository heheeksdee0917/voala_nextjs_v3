// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://voalainterior.com';
  const today = new Date();

  return [
    // ==================== CORE PAGES ====================
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ==================== KEY LOCATION PAGE ====================
    {
      url: `${baseUrl}/areas/kuala-lumpur`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.95,
    },

    // ==================== ALL AREA PAGES ====================
    { url: `${baseUrl}/areas/klcc`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/areas/bangsar`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/areas/mont-kiara`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/areas/bukit-jalil`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/areas/ampang-hilir`, lastModified: today, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/areas/bukit-bintang`, lastModified: today, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/areas/bukit-tunku`, lastModified: today, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/areas/damansara-heights`, lastModified: today, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/areas/desa-park-city`, lastModified: today, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/areas/sri-hartamas`, lastModified: today, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/areas/ttdi`, lastModified: today, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/areas/bangsar-south`, lastModified: today, changeFrequency: 'monthly', priority: 0.75 },

    // ==================== ALL SERVICE PAGES ====================
    { url: `${baseUrl}/services/commercial-interior-design`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/services/residential-interior-design`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/services/residential-design-and-built`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/services/3d-visualization`, lastModified: today, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${baseUrl}/services/bedroom`, lastModified: today, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${baseUrl}/services/living-room-design`, lastModified: today, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${baseUrl}/services/space-planning`, lastModified: today, changeFrequency: 'monthly', priority: 0.82 },
    { url: `${baseUrl}/services/material-selection`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/consultation`, lastModified: today, changeFrequency: 'monthly', priority: 0.78 },
    { url: `${baseUrl}/services/project-management`, lastModified: today, changeFrequency: 'monthly', priority: 0.78 },
    { url: `${baseUrl}/services/home-staging`, lastModified: today, changeFrequency: 'monthly', priority: 0.75 },

    // ==================== AWARD-WINNING & SIGNATURE PROJECTS ====================
    { url: `${baseUrl}/award-winning-projects/the-bear-house`, lastModified: new Date('2026-05-18'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/award-winning-projects/the-edge`, lastModified: new Date('2026-05-18'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/award-winning-projects/the-pinkground-1f`, lastModified: new Date('2026-05-18'), changeFrequency: 'monthly', priority: 0.85 },

    { url: `${baseUrl}/projects/the-foresta`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects/the-rimbun`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects/the-affinity`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects/the-whisper-house`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects/the-white-nest`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects/the-dual-key-hideaway`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.78 },
    { url: `${baseUrl}/projects/the-kami`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.78 },
    { url: `${baseUrl}/projects/the-sister-home`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.78 },
    { url: `${baseUrl}/projects/the-sesh`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.78 },
    { url: `${baseUrl}/projects/the-carsome-academy`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.78 },
    { url: `${baseUrl}/projects/the-charlotte`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/projects/the-pinkground-gf`, lastModified: new Date('2026-05-15'), changeFrequency: 'monthly', priority: 0.75 },
  ];
}