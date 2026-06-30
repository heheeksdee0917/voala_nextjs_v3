"use client"

import React from 'react';
import { ImagesSlider } from './ui/images-slider';

const HeroSection: React.FC = () => {
  const images = [
    "/Voala/ProjectSource/Signature-Projects/SkyMeridien/SkyMeridienCoverPhoto.avif",
    "/Voala/ProjectSource/Signature-Projects/Foresta/ForestaCoverPhoto.avif",
    "/Voala/ProjectSource/Signature-Projects/Legasi1/LegasiCoverPhoto.avif",
    "/Voala/ProjectSource/Signature-Projects/Rimbun/RimbunCoverPhoto.avif"
  ];

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
          Interior Designer KL | Award-Winning Interior Design Studio in Kuala Lumpur
        </h1>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pb-6 scroll-indicator">
        <span className="text-[10px] tracking-[0.16em] uppercase text-white/70 font-louis-george-cafe">
          Scroll
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/70"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>

      <style jsx>{`
        .scroll-indicator {
          animation: scroll-fade 2.6s ease-in-out infinite;
        }

        @keyframes scroll-fade {
          0% {
            opacity: 0;
            transform: translate(-50%, -6px);
          }
          25% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, 6px);
          }
          75% {
            opacity: 0;
            transform: translate(-50%, 10px);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -6px);
          }
        }
      `}</style>
    </ImagesSlider>
  );
};

export default HeroSection;