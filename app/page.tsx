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
  title: 'Award-Winning Interior Designer in KL | Voala Interior Kuala Lumpur',
  description: 'Voala Interior – Award-winning interior designer in KL specialising in luxury residential & commercial projects. One-stop design & build studio in Kuala Lumpur.',
  alternates: {
    canonical: 'https://voalainterior.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://voalainterior.com',
    siteName: 'Voala Interior',
    title: 'Award-Winning Interior Designer in KL | Voala Interior Kuala Lumpur',
    description: 'Award-winning interior designer in KL. Voala Interior offers luxury residential & commercial interior design in Kuala Lumpur. One-stop design & build studio from concept to handover.',
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
    title: 'Award-Winning Interior Designer in KL | Voala Interior Kuala Lumpur',
    description: 'Award-winning interior designer in KL. Voala Interior offers luxury residential & commercial interior design in Kuala Lumpur. One-stop design & build studio from concept to handover.',
    images: ['https://voalainterior.com/Voala/Voala_OG.png'],
  },
};

export default function HomePage() {
  return (
    <>

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

      <Suspense fallback={<div className="h-screen" />}>
        <section id="signature-projects">
          <LazySignatureProjects />
        </section>
      </Suspense>

      <Suspense fallback={<div className="h-screen" />}>
        <section id="about">
          <LazyAboutSection />
        </section>
      </Suspense>

      <Suspense fallback={<div className="h-screen" />}>
        <section id="testimonials">
          <LazyTestimonialCarousel />
        </section>
      </Suspense>


      <Suspense fallback={<div className="h-screen" />}>
        <section id="cta">
          <LazyCallUsNowCTA />
        </section>
      </Suspense>

      <Suspense fallback={<div className="h-screen" />}>
        <section id="recognition">
          <LazyRecognitionGrid />
        </section>
      </Suspense>

      <BackToTop />
    </>
  );
}