"use client"
import React, { memo } from 'react';
import Link from 'next/link';
import { Timeline } from './ui/timeline';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const ServiceImage: React.FC<{ src: string; alt: string; className?: string }> = memo(({ 
  src, 
  alt, 
  className = "rounded-lg shadow-xl w-full h-64" 
}) => {
  const { ref: imageRef, isInView } = useFadeInOnScroll();

  return (
    <div
      ref={imageRef as React.RefObject<HTMLImageElement>}
      className={`${className} ${isInView ? 'fadeInUpAnimated' : 'fadeInUpTrigger'}`}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
  );
});

ServiceImage.displayName = 'ServiceImage';

const TimelineSection: React.FC = () => {
  const servicesData = [
    {
      title: (
        <Link href="/services/space-planning" className="text-inherit no-underline hover:opacity-70 transition-opacity duration-200">
          <h2>Planning & Consultation</h2>
        </Link>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 text-lg leading-relaxed font-linik">
            Our comprehensive planning phase ensures your project starts on solid ground.
            As your trusted interior designer in KL, we conduct thorough site analysis,
            space optimization studies, and regulatory compliance reviews to establish
            the perfect foundation for your vision.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Comprehensive site analysis and space assessment</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Regulatory compliance and permit coordination</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Budget planning and timeline development</p>
            </div>
          </div>
          
          <div className="mt-4">
            <ServiceImage
              src="/Voala/1.avif"
              alt="Interior design planning and consultation service in KL by Voala Interior"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <Link href="/services/3d-visualization" className="text-inherit no-underline hover:opacity-70 transition-opacity duration-200">
          <h2>Bespoke Interior Design</h2>
        </Link>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 text-lg leading-relaxed font-linik">
            Transform your vision into reality with our bespoke design services. We create personalized concepts, select premium materials, and provide photorealistic 3D visualizations that bring every detail to life.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Personalized design concepts and mood boards</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Premium material selection and sourcing</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Photorealistic 3D visualization and renderings</p>
            </div>
          </div>
          
          <div className="mt-4">
            <ServiceImage
              src="/Voala/2.avif"
              alt="Bespoke interior designer in KL creating custom concept and 3D visualization"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <Link href="/services/project-management" className="text-inherit no-underline hover:opacity-70 transition-opacity duration-200">
          <h2>Professional Fit-Out</h2>
        </Link>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 text-lg leading-relaxed font-linik">
            Our professional fit-out services combine quality craftsmanship with precise
            project management across Kuala Lumpur and Klang Valley. We coordinate all
            vendors and trades to deliver exceptional results on schedule and within budget.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Quality craftsmanship and construction management</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Vendor coordination and trade supervision</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Timeline management and quality control</p>
            </div>
          </div>
          
          <div className="mt-4">
            <ServiceImage
              src="/Voala/3.avif"
              alt="Professional interior fit-out and construction management in Kuala Lumpur"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <Link href="/services/material-selection" className="text-inherit no-underline hover:opacity-70 transition-opacity duration-200">
          <h2>Luxury Styling & Finishing</h2>
        </Link>
      ),
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 text-lg leading-relaxed font-linik">
            The final touches that transform spaces into extraordinary experiences. Our luxury styling services include 
            precise furniture placement, curated art selection, and premium accessory coordination.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Precise furniture placement and arrangement</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Curated art selection and installation</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700 font-linik">Premium accessory coordination and styling</p>
            </div>
          </div>
          
          <div className="mt-4">
            <ServiceImage
              src="/Voala/4.avif"
              alt="Luxury interior styling and finishing by award-winning interior designer in KL"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ paddingTop: '0px', paddingBottom: '0px' }}>
      <Timeline data={servicesData} />
      <div className="flex justify-center pb-16">
        <Link
          href="/services"
          className="inline-block border border-black text-black text-sm font-medium px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300 no-underline"
        >
          View All Services
        </Link>
      </div>
    </div>
  );
};

export default TimelineSection;