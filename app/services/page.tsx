import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Design Services in KL | Voala Interior',
  description:
    'Explore our full range of interior design services in Kuala Lumpur — from space planning and 3D visualization to full fit-out and home staging. Voala Interior, KL\'s award-winning studio.',
  openGraph: {
    title: 'Interior Design Services in KL | Voala Interior',
    description:
      'Explore our full range of interior design services in Kuala Lumpur — from space planning and 3D visualization to full fit-out and home staging.',
    url: 'https://voalainterior.com/services',
    images: [{ url: '/Voala_OG.png' }],
  },
  alternates: {
    canonical: 'https://voalainterior.com/services',
  },
};

const services = [
  {
    slug: 'consultation',
    name: 'Interior Design Consultation',
    description:
      'Start your project the right way. Our KL-based designers sit down with you to understand your vision, budget, and timeline — giving you expert direction from day one.',
  },
  {
    slug: 'space-planning',
    name: 'Space Planning',
    description:
      'Maximise every square foot. We analyse your layout and create optimised floor plans that balance flow, function, and aesthetics for any space in Kuala Lumpur.',
  },
  {
    slug: '3d-visualization',
    name: '3D Visualization',
    description:
      'See your space before it‘s built. Our photorealistic 3D renders give you a clear picture of the final design — materials, lighting, and all — so there are no surprises.',
  },
  {
    slug: 'material-selection',
    name: 'Material Selection',
    description:
      'The right materials make the difference. We source and curate premium finishes, textures, and fittings that are both beautiful and built to last the KL climate.',
  },
  {
    slug: 'residential-interior-design',
    name: 'Residential Interior Design',
    description:
      'Your home, designed around your life. From condos to bungalows across KL and Klang Valley, we craft living spaces that feel personal, timeless, and truly yours.',
  },
  {
    slug: 'bedroom',
    name: 'Bedroom Design',
    description:
      'Rest better in a room designed for you. We create bedrooms that balance comfort, storage, and style — tailored to how you live and unwind.',
  },
  {
    slug: 'living-room-design',
    name: 'Living Room Design',
    description:
      'The heart of every home. We design living rooms in KL that are warm, functional, and styled to impress — from layout to the final decorative detail.',
  },
  {
    slug: 'commercial-interior-design',
    name: 'Commercial Interior Design',
    description:
      'Spaces that work as hard as you do. We design commercial interiors across Kuala Lumpur that reflect your brand, improve productivity, and leave a lasting impression.',
  },
  {
    slug: 'project-management',
    name: 'Project Management',
    description:
      'We handle the complexity so you don\'t have to. From vendor coordination to on-site supervision, we keep your project on schedule and on budget across KL.',
  },
  {
    slug: 'home-staging',
    name: 'Home Staging',
    description:
      'Sell faster, sell higher. Our home staging service transforms your property into a buyer\'s dream — professionally styled to maximise appeal and market value.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Interior Design Services in KL — Voala Interior',
  url: 'https://voalainterior.com/services',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.name,
    url: `https://voalainterior.com/services/${s.slug}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Interior Design Services in KL
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-linik">
            From the first consultation to the final styling touch — Voala Interior offers a complete range of interior design services across Kuala Lumpur and Klang Valley.
          </p>
        </section>

        {/* Services Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 no-underline"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:opacity-70 transition-opacity duration-200">
                  {service.name}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed font-linik">
                  {service.description}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-gray-900 group-hover:opacity-70 transition-opacity duration-200">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}