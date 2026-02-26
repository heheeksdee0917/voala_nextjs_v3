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
  return (
    <>
      <h1 className="sr-only">
        Award-Winning Interior Designer in Kuala Lumpur | Residential & Commercial Interior Design
      </h1>

      <HeroSection />

      <section id="services-overview">
        <ServicesSection />
      </section>

      <section id="timeline-section">
        <TimelineSection />
      </section>

      <section id="award-projects">
        <VoalaAwardProjects />
      </section>

      <Suspense fallback={<ComponentLoader />}>
        <section id="signature-projects">
          <LazySignatureProjects />
        </section>
      </Suspense>

      <Suspense fallback={<ComponentLoader />}>
        <section id="about">
          <LazyAboutSection />
        </section>
      </Suspense>

      <Suspense fallback={<ComponentLoader />}>
        <section id="testimonials">
          <LazyTestimonialCarousel />
        </section>
      </Suspense>

      <Suspense fallback={<ComponentLoader />}>
        <section id="services-section">
          <LazyService />
        </section>
      </Suspense>

      <Suspense fallback={<ComponentLoader />}>
        <section id="cta">
          <LazyCallUsNowCTA />
        </section>
      </Suspense>

      <Suspense fallback={<ComponentLoader />}>
        <section id="recognition">
          <LazyRecognitionGrid />
        </section>
      </Suspense>

      <BackToTop />
    </>
  );
}