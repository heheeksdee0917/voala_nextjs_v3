"use client"

import React, { useState, useRef, useEffect } from 'react';

interface GalleryImageCardProps {
  imageSrc: string;
  alt: string;
  onClick: () => void;
  /** Called once when the image finishes loading or errors — used by the parent to trigger the next batch */
  onSettled?: () => void;
}

const GalleryImageCard: React.FC<GalleryImageCardProps> = ({ imageSrc, alt, onClick, onSettled }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const settledRef = useRef(false); // Guard: only fire onSettled once per src

  const settle = (loaded: boolean) => {
    if (settledRef.current) return;
    settledRef.current = true;
    if (loaded) setImageLoaded(true);
    else setImageError(true);
    onSettled?.();
  };

  // Handles cached images: onLoad fires before React mounts, so we check img.complete after mount
  useEffect(() => {
    settledRef.current = false;
    setImageLoaded(false);
    setImageError(false);

    if (imgRef.current?.complete) {
      settle(imgRef.current.naturalWidth > 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageSrc]);

  return (
    <div
      className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 h-64"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {/* Skeleton — visible until image loads or errors */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-gray-500 text-sm">Loading...</span>
          </div>
        </div>
      )}

      {/* Error state */}
      {imageError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
          <div className="text-gray-400 text-sm">Failed to load image</div>
        </div>
      )}

      {/* Image — always in DOM so browser can load it, fades in on load */}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => settle(true)}
        onError={() => settle(false)}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-110 ${imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'
          }`}
      />

      {/* Hover overlay */}
      {imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex items-center justify-center z-20">
          <div className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
            Click to view
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryImageCard;