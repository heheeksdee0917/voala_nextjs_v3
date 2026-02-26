// app/page.tsx
import { Suspense } from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import VoalaAwardProjects from '@/components/VoalaAwardProjects';
import ServicesSection from '@/components/ServicesSection';
import TimelineSection from '@/components/TimelineSection';
import BackToTop from '@/components/BackToTop';
import {
  LazyAboutSection,
  LazySignatureProjects,
  LazyTestimonialCarousel,
  LazyCallUsNowCTA,
  LazyRecognitionGrid,
  LazyService,
} from '@/components/LazyComponents';

export const metadata: Metadata = {
  title: 'Award-Winning Interior Designer in KL | Voala Interior',
  description: "Voala Interior is Malaysia's award-winning interior design & build studio with over 10 years of heart-led experience in residential and commercial spaces.",
  keywords: 'interior designer KL, interior design Malaysia, home interior design, office interior design, renovation KL, award winning interior design Malaysia',
  alternates: {
    canonical: 'https://voalainterior.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://voalainterior.com',
    siteName: 'Voala Interior',
    title: 'Award-Winning Interior Designer in KL | Voala Interior',
    description: "Malaysia's award-winning interior design & build studio with over 10 years of heart-led experience in residential and commercial spaces.",
    images: [
      {
        url: 'https://voalainterior.com/Voala/1.avif',
        width: 1200,
        height: 630,
        alt: 'Voala Interior - Award-winning Interior Design Studio in Kuala Lumpur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Award-Winning Interior Designer in KL | Voala Interior',
    description: "Malaysia's award-winning interior design studio with over 10 years of experience in Kuala Lumpur.",
    images: ['https://voalainterior.com/Voala/1.avif'],
  },
  other: {
    'facebook:profile': 'https://www.facebook.com/hellovoala',
    'instagram:profile': 'https://www.instagram.com/hellovoala/',
    'linkedin:profile': 'https://www.linkedin.com/company/voala-interior/',
    'youtube:channel': 'https://www.youtube.com/@hellovoala9163',
  },
};

const ComponentLoader = () => (
  <div className="py-20 flex justify-center">
    <div className="animate-pulse bg-gray-200 h-64 w-full max-w-4xl rounded-lg"></div>
  </div>
);

export default function HomePage() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'InteriorDesigner',
    name: 'Voala Interior',
    description: "Malaysia's award-winning interior design & build studio with over 10 years of heart-led experience.",
    url: 'https://voalainterior.com',
    logo: 'https://voalainterior.com/Voala/ProjectSource/Logo/VOALA NEW_BLACK.png', // update to your actual logo path
    image: 'https://voalainterior.com/Voala/1.avif',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kuala Lumpur',
      addressCountry: 'MY',
    },
    sameAs: [
      'https://www.facebook.com/hellovoala',
      'https://www.instagram.com/hellovoala/',
      'https://www.linkedin.com/company/voala-interior/',
      'https://www.youtube.com/@hellovoala9163',
    ],
    areaServed: {
      '@type': 'City',
      name: 'Kuala Lumpur',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Interior Design Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Space Planning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Design Consultation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '3D Visualization' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bedroom Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Living Room Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Material Selection' } },
      ],
    },
  };

  return (
    <>
      {/* SEO h1 - hidden visually but available to screen readers and search engines */}
      <h1 className="sr-only">
        Interior Design in Kuala Lumpur - The best Residential & Commercial Interior Designer in Kuala Lumpur
      </h1>

      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview Section */}
      <section id="services-overview">
        <ServicesSection />
      </section>

      {/* Timeline/About Section */}
      <section id="timeline-section">
        <TimelineSection />
      </section>

      {/* Award-Winning Projects Section */}
      <section id="award-projects">
        <VoalaAwardProjects />
      </section>

      {/* Signature Projects Section */}
      <Suspense fallback={<ComponentLoader />}>
        <section id="signature-projects">
          <LazySignatureProjects />
        </section>
      </Suspense>

      {/* About Us Section */}
      <Suspense fallback={<ComponentLoader />}>
        <section id="about">
          <LazyAboutSection />
        </section>
      </Suspense>

      {/* Testimonials Section */}
      <Suspense fallback={<ComponentLoader />}>
        <section id="testimonials">
          <LazyTestimonialCarousel />
        </section>
      </Suspense>

      {/* Full Services Section */}
      <Suspense fallback={<ComponentLoader />}>
        <section id="services-section">
          <LazyService />
        </section>
      </Suspense>

      {/* Call to Action Section */}
      <Suspense fallback={<ComponentLoader />}>
        <section id="cta">
          <LazyCallUsNowCTA />
        </section>
      </Suspense>

      {/* Recognition & Awards Section */}
      <Suspense fallback={<ComponentLoader />}>
        <section id="recognition">
          <LazyRecognitionGrid />
        </section>
      </Suspense>

      <BackToTop />
    </>
  );
}