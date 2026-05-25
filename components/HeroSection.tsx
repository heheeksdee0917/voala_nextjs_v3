"use client"

import React from 'react';
import { ImagesSlider } from './ui/images-slider';
import StandardButton from './ui/standard-button';
import { useRouter } from 'next/navigation';

interface HeroSectionProps {
  onOpenQuoteModal?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
  const router = useRouter();

  const images = [
    "/Voala/ProjectSource/Signature-Projects/SkyMeridien/SkyMeridienCoverPhoto.avif",
    "/Voala/ProjectSource/Signature-Projects/Foresta/ForestaCoverPhoto.avif",
    "/Voala/ProjectSource/Signature-Projects/Legasi1/LegasiCoverPhoto.avif",
    "/Voala/ProjectSource/Signature-Projects/Rimbun/RimbunCoverPhoto.avif"
  ];

  const handleGetDesign = () => {
    router.push('/contact');
  };

  return (
    <ImagesSlider className="h-screen" images={images}>
      <div className="z-50 flex flex-col justify-center items-center text-center px-4 md:px-8">

        {/* Subheading — visually dominant, uses old H1 gradient style */}
        <p className="font-linik font-bold text-4xl md:text-5xl lg:text-7xl leading-tight mb-1 md:mb-1 tracking-wide">
          <span className="hero-gradient">
            Designs You'll Love.
            <br />
            Heartwork You'll Feel.
          </span>
        </p>


        {/* H1 — SEO tag, visually styled small like the old subheading */}
        <h1 className="font-louis-george-cafe text-xl md:text-2xl text-voala-off-white/90 mb-8 md:mb-12 font-light tracking-wide max-w-5xl">
          Interior Designer in KL | Award-Winning Interior Design in Kuala Lumpur
        </h1>

        <StandardButton
          onClick={handleGetDesign}
          variant="outline"
          className="bg-voala-gold text-voala-warm-cream border-2 border-voala-warm-cream hover:bg-voala-gold-hover rounded-full text-base md:text-lg px-6 md:px-8 py-3 md:py-4 font-medium transition-all duration-200"
        >
          Talk to us - It's free
        </StandardButton>
        {/* 
          <StandardButton
            onClick={handleGetDesign}
            variant="outline"
            className="bg-voala-gold text-voala-warm-beige border-2 border-voala-warm-beige hover:bg-voala-gold-hover rounded-full text-base md:text-lg px-6 md:px-8 py-3 md:py-4 font-medium transition-all duration-200"
          >
            Talk to us - It's free
          </StandardButton>
        */}

        {/* 
          Uncomment to use Option 3: Warm Cream background with Gold text & border
          <StandardButton
            onClick={handleGetDesign}
            variant="outline"
            className="bg-voala-warm-cream text-voala-gold border-2 border-voala-gold hover:bg-voala-warm-beige rounded-full text-base md:text-lg px-6 md:px-8 py-3 md:py-4 font-medium transition-all duration-200"
          >
            Talk to us - It's free
          </StandardButton>
        */}

      </div>
    </ImagesSlider>
  );
};

export default HeroSection;