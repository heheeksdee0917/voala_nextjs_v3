import { Suspense } from 'react';
import type { Metadata } from 'next';
import React from 'react';
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
  title: 'Award-winning Interior Design in KL - Best Interior Designer for Commercial and Residential Projects | Voala Interior',
  description: 'Voala Interior – Award-winning interior design & build studio in Kuala Lumpur. Malaysia’s best one-stop designer for luxury residential & commercial projects, from concept to handover with heart-led craftsmanship.',
  keywords: 'award winning interior design KL, best interior designer Kuala Lumpur, interior design Malaysia, residential interior design KL, commercial interior design Kuala Lumpur, luxury home renovation KL, condo interior design Malaysia, bespoke interior KL',
  alternates: {
    canonical: 'https://voalainterior.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://voalainterior.com',
    siteName: 'Voala Interior',
    title: 'Award-winning Interior Design in KL - Best Interior Designer for Commercial and Residential Projects | Voala Interior',
    description: 'Malaysia’s award-winning interior design studio in Kuala Lumpur – best one-stop service for luxury residential & commercial projects from concept to handover.',
    images: [
      {
        url: 'https://voalainterior.com/Voala/Voala_OG.png',
        width: 1200,
        height: 630,
        alt: 'Award-winning interior design studio Voala Interior in Kuala Lumpur – residential & commercial projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Award-winning Interior Design in KL | Voala Interior',
    description: 'Best interior designer in Kuala Lumpur for commercial & residential projects – award-winning one-stop design & build.',
    images: ['https://voalainterior.com/Voala/Voala_OG.png'],
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
        Your premium interior design & built studio
        <br />in Kuala Lumpur, Malaysia.
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