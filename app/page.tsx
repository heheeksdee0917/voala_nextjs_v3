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
  title: 'Best Interior Designer in KL - If you looking for interior designer for commercial, residential Voala Interior is your best choice.',
  description: "Malaysia's award-winning interior design & build studio with  years of heart-led experience. Residential & Commercial projects in Kuala Lumpur.",
  keywords: 'interior designer KL, interior design Malaysia, home interior design, office interior design, renovation KL',
  alternates: {
    canonical: 'https://voalainterior.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://voalainterior.com',
    siteName: 'Voala Interior',
    title: 'Best Interior Designer in KL - If you looking for interior designer for commercial, residential Voala Interior is your best choice.',
    description: "Malaysia's award-winning interior design & build studio with  years of heart-led experience. Residential & Commercial projects in Kuala Lumpur.",
    images: [
      {
        url: 'https://voalainterior.com/Voala/1.avif', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Voala Interior - Award-winning Interior Design Studio in Kuala Lumpur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Interior Designer in KL - Voala Interior',
    description: "Award-winning interior design studio with  years experience in Kuala Lumpur",
    images: ['https://voalainterior.com/Voala/1.avif'], // Replace with your actual Twitter card image URL
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