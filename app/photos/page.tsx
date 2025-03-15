'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import Link from '@/components/shared/link';
import { cn } from '@/lib/utils';

// Define the image data structure
interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description?: string;
  width: number;
  height: number;
  date?: string;
}

// Updated image data with /media/bonabrian/imo.jpg at the top
const images: GalleryImage[] = [
  {
    src: '/media/bonabrian/imo.jpg',
    alt: 'Imo',
    title: 'Imo',
    width: 800,
    height: 600,
    date: 'March 2025',
  },
  {
    src: '/media/bonabrian/bhojpur ston.jpg',
    alt: 'Bhojpur Stone',
    title: 'Bhojpur Stone',
    description: 'A stone from Bhojpur',
    width: 800,
    height: 600,
    date: 'March 2025',
  },
  {
    src: '/media/bonabrian/bonabrian.jpg',
    alt: 'Bonabrian Portrait',
    title: 'Self Portrait',
    description: 'A professional portrait photo',
    width: 800,
    height: 1000,
    date: 'June 2023',
  },
  {
    src: '/media/bonabrian/bp.jpg',
    alt: 'BP',
    title: 'BP',
    width: 800,
    height: 600,
    date: 'March 2025',
  },
  {
    src: '/media/bonabrian/cap.png.jpg',
    alt: 'Cap',
    title: 'Cap',
    description: 'A cap image',
    width: 800,
    height: 600,
    date: 'March 2025',
  },
  {
    src: '/media/bonabrian/chanade.jpg',
    alt: 'Chanade',
    title: 'Chanade',
    width: 800,
    height: 600,
    date: 'March 2025',
  },
  {
    src: '/media/bonabrian/ktaharu.jpg',
    alt: 'Ktaharu',
    title: 'Ktaharu',
    width: 800,
    height: 600,
    date: 'March 2025',
  },
  {
    src: '/media/bonabrian/tire.jpg',
    alt: 'Tire',
    title: 'Tire',
    description: 'A tire image',
    width: 800,
    height: 600,
    date: 'March 2025',
  },
];

export default function PhotosPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(3);

  // Handle responsive columns
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Organize images into columns for masonry layout
  const getColumnImages = (colIndex: number) => {
    return images.filter((_, index) => index % columns === colIndex);
  };

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

  return (
    <>
      <div className={cn('bg-background text-foreground min-h-screen')}>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          {/* Simple header with back button and title */}
          <div className="mb-12 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className={cn(
                  'bg-background hover:bg-secondary/50 cursor-pointer rounded-full p-2 transition-colors duration-200',
                )}
              >
                <ArrowLeft className="text-foreground/70 h-5 w-5" />
              </Link>
              <h1 className="text-3xl font-bold">Photos</h1>
            </div>
          </div>

          {/* Minimalist masonry gallery */}
          <div
            ref={galleryRef}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
          >
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-6 sm:gap-8">
                {getColumnImages(colIndex).map((image, index) => {
                  const globalIndex = images.findIndex(
                    (img) => img.src === image.src,
                  );
                  return (
                    <motion.div
                      key={image.src}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group relative cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                      onMouseEnter={() => setHoveredIndex(globalIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="relative overflow-hidden">
                        {/* Image */}
                        <div className="relative aspect-auto">
                          <Image
                            src={image.src || '/placeholder.svg'}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="h-auto w-full object-cover transition-all duration-500"
                          />
                        </div>

                        {/* Minimalist hover box effect */}
                        <motion.div
                          className="pointer-events-none absolute inset-0"
                          initial={false}
                          animate={{
                            boxShadow:
                              hoveredIndex === globalIndex
                                ? 'inset 0 0 0 4px rgba(255,255,255,0.9)'
                                : 'inset 0 0 0 0px rgba(255,255,255,0)',
                          }}
                          transition={{ duration: 0.2 }}
                        />

                        {/* Simple date overlay on hover */}
                        <div
                          className={cn(
                            'absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity duration-300',
                            hoveredIndex === globalIndex
                              ? 'opacity-100'
                              : 'opacity-0',
                          )}
                        >
                          {image.date && (
                            <p className="text-sm text-white/80">
                              {image.date}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimalist Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 cursor-pointer p-2 text-white/80 transition-colors duration-200 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="flex max-h-[90vh] max-w-5xl flex-col items-center"
            >
              {/* Image */}
              <div className="relative flex items-center justify-center">
                <Image
                  src={selectedImage.src || '/placeholder.svg'}
                  alt={selectedImage.alt}
                  width={selectedImage.width}
                  height={selectedImage.height}
                  className="max-h-[80vh] object-contain"
                />
              </div>

              {/* Minimal image info with only date */}
              <div className="mt-4 text-center text-white">
                {selectedImage.date && (
                  <p className="text-white/80">{selectedImage.date}</p>
                )}
                {selectedImage.description && (
                  <p className="mx-auto mt-1 max-w-md text-white/80">
                    {selectedImage.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
