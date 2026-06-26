import React from 'react';
import VoalaIntroGallery from './VoalaIntroGallery';

const OurServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-white font-sans">
      <div className="max-w-7xl mx-auto py-10 md:py-5 px-4 md:px-8 lg:px-10 text-center" style={{ paddingTop: '75px', paddingBottom: '75px' }}>
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black max-w-4xl font-linik gradient-highlight mx-auto">
            Award Winning Interior Designer KL — Timeless Spaces, Made with Heart.
          </h2>

          <p className="text-gray-700 text-base md:text-lg lg:text-xl font-linik mx-auto max-w-4xl">
            Voala Interior is an <strong>Award Winning Interior Designer KL</strong> based in Kuala Lumpur.
            We specialize in bespoke residential and commercial interior design across Malaysia, delivering exceptional spaces that blend beauty with functionality.
          </p>
        </div>
      </div>

      <div className="w-full">
        <VoalaIntroGallery slides={[]} />
      </div>
    </section>
  );
};

export default OurServicesSection;