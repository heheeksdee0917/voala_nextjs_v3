"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === loadedImages.length ? 0 : prevIndex + 1
    );
  }, [loadedImages.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? loadedImages.length - 1 : prevIndex - 1
    );
  }, [loadedImages.length]);

  useEffect(() => {
    if (images.length === 0) return;

    // Load images one by one — as each resolves, add it to loadedImages immediately
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages((prev) => {
          // Preserve original order: only add if not already present
          if (prev.includes(src)) return prev;
          // Insert in original order
          const ordered = images.filter(
            (s) => s === src || prev.includes(s)
          );
          return ordered;
        });
      };
      img.onerror = () => {
        console.warn(`❌ Failed to load image: ${src}`);
      };
    });
  }, [images]);

  useEffect(() => {
    if (loadedImages.length === 0) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNext();
      else if (event.key === "ArrowLeft") handlePrevious();
    };

    window.addEventListener("keydown", handleKeyDown);

    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(handleNext, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay, handleNext, handlePrevious, loadedImages.length]);

  // Nothing ready yet — show a minimal skeleton that doesn't block the page
  if (loadedImages.length === 0) {
    return (
      <div className={cn("overflow-hidden h-full w-full relative flex items-center justify-center bg-gray-900", className)}>
        <div className="relative z-30">{children}</div>
        {overlay && <div className={cn("absolute inset-0 bg-black/60 z-20", overlayClassName)} />}
      </div>
    );
  }

  // Clamp currentIndex in case it's ahead of how many images have loaded
  const safeIndex = Math.min(currentIndex, loadedImages.length - 1);

  return (
    <div
      className={cn("overflow-hidden h-full w-full relative flex items-center justify-center", className)}
      style={{ perspective: "1000px" }}
    >
      {/* Children content (text overlay) */}
      <div className="relative z-30">{children}</div>

      {/* Overlay */}
      {overlay && (
        <div className={cn("absolute inset-0 bg-black/60 z-20", overlayClassName)} />
      )}

      {/* Animated Images */}
      <AnimatePresence>
        <motion.div
          key={safeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full z-10"
          style={{
            backgroundImage: `url(${loadedImages[safeIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </AnimatePresence>
    </div>
  );
};