"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import MediaContent from '@/components/AwardWinningProjectContent';
import StandardButton from '@/components/ui/standard-button';
import ImageGalleryModal from '@/components/ui/ImageGalleryModal';
import { projectsData } from '@/data/projectsData';
import GalleryImageCard from '@/components/GalleryImageCard';

interface AwardWinningProjectDetailContentProps {
  projectId: string;
}

const AwardWinningProjectDetailContent: React.FC<AwardWinningProjectDetailContentProps> = ({ projectId }) => {
  const router = useRouter();

  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [currentGalleryImageIndex, setCurrentGalleryImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projectsData.find(p => p.id === projectId) || projectsData[0];

  if (!project || !project.overview) {
    return (
      <div className="min-h-screen bg-white font-louis-george-cafe flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The award-winning project you are looking for doesn't exist.</p>
          <StandardButton onClick={() => router.push('/projects')} variant="primary">
            Back to Projects
          </StandardButton>
        </div>
      </div>
    );
  }

  const handleImageClick = (index: number) => {
    setCurrentGalleryImageIndex(index);
    setIsGalleryModalOpen(true);
  };

  const handleCloseGallery = () => {
    setIsGalleryModalOpen(false);
  };

  const ProjectImageGallery = () => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8 text-black font-louis-george-cafe text-center">
        Project Gallery
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {project.galleryImages.map((image, index) => (
          <GalleryImageCard
            key={index}
            imageSrc={image.src}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );

  const CallToActionSection = () => (
    <div className="text-center bg-gray-50 rounded-lg p-8 md:p-12">
      <h3 className="text-3xl font-bold mb-4 text-black font-louis-george-cafe">
        Ready to Transform Your Space?
      </h3>
      <p className="text-lg text-gray-700 mb-8 font-louis-george-cafe max-w-2xl mx-auto">
        Experience the same level of excellence and attention to detail that made {project.name} an award-winning project.
        Let us bring your vision to life with our comprehensive design and fit-out services.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <StandardButton
          onClick={() => router.push('/projects')}
          variant="primary"
          showArrow
        >
          View All Projects
        </StandardButton>
        <StandardButton
          onClick={() => router.push('/contact')}
          variant="outline"
        >
          Contact Us
        </StandardButton>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-louis-george-cafe">
      <button
        onClick={() => router.push('/')}
        className="fixed top-4 left-4 z-50 flex items-center gap-2 bg-black/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-black/40 transition-all duration-300 text-sm"
      >
        <ArrowLeft size={16} />
        <span className="font-medium">Back to Home</span>
      </button>

      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="https://www.youtube.com/watch?v=U3M1dUFuSpo"
        bgImageSrc={project.image}
        title={project.name}
        date="Award Winning Project"
        scrollToExpand="Scroll to Explore"
        textBlend={false}
      >
        <MediaContent mediaType="video" about={{ overview: project.overview }} />
        <ProjectImageGallery />
        <CallToActionSection />
      </ScrollExpandMedia>

      <ImageGalleryModal
        isOpen={isGalleryModalOpen}
        onClose={handleCloseGallery}
        images={project.galleryImages}
        initialIndex={currentGalleryImageIndex}
      />
    </div>
  );
};

export default AwardWinningProjectDetailContent;
