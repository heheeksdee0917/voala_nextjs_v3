import { MetadataRoute } from "next";
import { projectsData } from "@/data/projectsData";

const BASE_URL = "https://voalainterior.com";

const areas = [
  "ampang-hilir",
  "bangsar-south",
  "bangsar",
  "bukit-bintang",
  "bukit-jalil",
  "bukit-tunku",
  "damansara-heights",
  "desa-park-city",
  "klcc",
  "kuala-lumpur",
  "mont-kiara",
  "sri-hartamas",
  "ttdi",
];

const services = [
  "3d-visualization",
  "bedroom",
  "commercial-interior-design",
  "consultation",
  "home-staging",
  "living-room-design",
  "material-selection",
  "project-management",
  "residential-interior-design",
  "space-planning",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Static top-level pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date("2026-06-30"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date("2026-06-30"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date("2026-06-30"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2026-06-30"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date("2026-06-30"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Area pages
  const areaPages: MetadataRoute.Sitemap = areas.map((slug) => ({
    url: `${BASE_URL}/areas/${slug}`,
    lastModified: new Date("2026-06-30"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Standard project detail pages — every project gets /projects/{id}
  const projectPages: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: `${BASE_URL}/projects/${project.id}`,
    lastModified: new Date("2026-06-30"),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const awardWinningPages: MetadataRoute.Sitemap = projectsData
    .filter((project) => project.isAwardWinningFeatured === true)
    .map((project) => ({
      url: `${BASE_URL}/award-winning-projects/${project.id}`,
      lastModified: new Date("2026-06-30"),
      changeFrequency: "yearly",
      priority: 0.9,
    }));

  return [
    ...staticPages,
    ...servicePages,
    ...areaPages,
    ...projectPages,
    ...awardWinningPages,
  ];
}