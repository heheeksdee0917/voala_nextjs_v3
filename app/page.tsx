"use client"

import React, { Suspense } from 'react';
import HeroSection from '@/components/HeroSection';
import VoalaAwardProjects from '@/components/VoalaAwardProjects';
import ServicesSection from '@/components/ServicesSection';
import TimelineSection from '@/components/TimelineSection';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer'; // ← add this import
import {
  LazyAboutSection,
  LazySignatureProjects,
  LazyTestimonialCarousel,
  LazyCallUsNowCTA,
  LazyRecognitionGrid,
  LazyService,
} from '@/components/LazyComponents';

const ComponentLoader = () => (
  <div className="py-20 flex justify-center">
    <div className="animate-pulse bg-gray-200 h-64 w-full max-w-4xl rounded-lg"></div>
  </div>
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TimelineSection />
      <VoalaAwardProjects />

      <Suspense fallback={<ComponentLoader />}>
        <LazySignatureProjects />
      </Suspense>

      <Suspense fallback={<ComponentLoader />}>
        <LazyAboutSection />
      </Suspense>

      <Suspense fallback={<ComponentLoader />}>
        <LazyTestimonialCarousel />
      </Suspense>

      <Suspense fallback={<ComponentLoader />}>
        <LazyCallUsNowCTA />
      </Suspense>

      <Suspense fallback={<ComponentLoader />}>
        <LazyService />
      </Suspense>

      <Suspense fallback={<ComponentLoader />}>
        <LazyRecognitionGrid />
      </Suspense>

      <BackToTop />

      <Footer />  {/* ← add this here */}
    </>
  );
}