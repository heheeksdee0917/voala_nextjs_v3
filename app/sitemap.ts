// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://voalainterior.com'
  
  return [
    // Core Pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Services
    {
      url: `${baseUrl}/services/residential-design-and-built`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/commercial`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/consultation`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/space-planning`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/3d-visualization`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/bedroom`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/living-room-design`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/material-selection`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Areas (Local SEO)
    {
      url: `${baseUrl}/areas/kuala-lumpur`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/mont-kiara`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/areas/bukit-jalil`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Award Winning Projects
    {
      url: `${baseUrl}/award-winning-projects/the-bear-house`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Projects
    {
      url: `${baseUrl}/projects/the-pinkground-1f`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/the-pinkground-gf`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/the-whisper-house`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/the-white-nest`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/the-sesh`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/the-carsome-academy`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/the-dual-key-hideaway`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/the-charlotte`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/the-kami`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/the-foresta`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/the-sister-home`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/the-rimbun`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/the-affinity`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/the-edge`,
      lastModified: new Date('2024-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}