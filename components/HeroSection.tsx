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
        <p className="font-linik font-bold text-4xl md:text-5xl lg:text-7xl leading-tight mb-8 tracking-wide">
          <span className="hero-gradient">
            Designs You'll Love.
            <br />
            Heartwork You'll Feel.
          </span>
        </p>


        {/* H1 — SEO tag, visually styled small like the old subheading */}
        <h1 className="font-louis-george-cafe text-xl md:text-2xl text-voala-off-white/90 mb-4 md:mb-6 font-light tracking-wide max-w-5xl">
          Award-Winning Interior Designer in Kuala Lumpur
        </h1>

        <StandardButton
          onClick={handleGetDesign}
          variant="outline"
          className="bg-voala-off-white/10 backdrop-blur-sm border border-voala-off-white/20 text-white hover:bg-voala-off-white/20 hover:text-white rounded-full text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
        >
          Talk to us
        </StandardButton>

      </div>
    </ImagesSlider>
  );
};

export default HeroSection;