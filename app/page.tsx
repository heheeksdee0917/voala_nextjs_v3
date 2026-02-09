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

// Page-specific metadata (overrides layout.tsx)
export const metadata: Metadata = {
  title: 'Best Interior Designer in KL - If you looking for interior designer for commercial, residential Voala Interior is your best choice.',
  description: "Malaysia's award-winning interior design & build studio with 15+ years of heart-led experience. Residential & Commercial projects in Kuala Lumpur.",
  keywords: 'interior designer KL, interior design Malaysia, home interior design, office interior design, renovation KL',
  alternates: {
    canonical: 'https://voalainterior.com',
  },
  openGraph: {
    title: 'Best Interior Designer in KL - If you looking for interior designer for commercial, residential Voala Interior is your best choice.',
    description: "Award-winning interior design studio with 15+ years experience in Kuala Lumpur",
    url: 'https://voalainterior.com',
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
        Interior Design in KL - The best Residential & Commercial Interior Designer in KL
      </h1>
      {/* Visual hero section */}
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
        <LazyService />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <LazyCallUsNowCTA />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <LazyRecognitionGrid />
      </Suspense>
      <BackToTop />
    </>
  );
}