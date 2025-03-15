"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, X } from "lucide-react"
import Link from "@/components/shared/link"
import { cn } from "@/lib/utils"

// Define the image data structure
interface GalleryImage {
  src: string
  alt: string
  title: string
  description?: string
  width: number
  height: number
  date?: string
}

// Updated image data with bonabrian-small.jpg removed
const images: GalleryImage[] = [
  {
    src: "/media/bonabrian/imo.jpg",
    alt: "Bhojpur Stone",
    title: "Bhojpur Stone",
    description: "A stone from Bhojpur",
    width: 800, // Placeholder, replace with actual width
    height: 600, // Placeholder, replace with actual height
    date: "March 2025",
  },
  {
    src: "/media/bonabrian/bonabrian.jpg",
    alt: "Bonabrian Portrait",
    title: "Self Portrait",
    description: "A professional portrait photo",
    width: 800,
    height: 1000,
    date: "June 2023",
  },
  {
    src: "/media/bonabrian/bp.jpg",
    alt: "BP",
    title: "BP",
    width: 800, // Placeholder
    height: 600, // Placeholder
    date: "March 2025",
  },
  {
    src: "/media/bonabrian/cap.png.jpg",
    alt: "Cap",
    title: "Cap",
    description: "A cap image",
    width: 800, // Placeholder
    height: 600, // Placeholder
    date: "March 2025",
  },
  {
    src: "/media/bonabrian/chanade.jpg",
    alt: "Chanade",
    title: "Chanade",
    width: 800, // Placeholder
    height: 600, // Placeholder
    date: "March 2025",
  },
  {
    src: "/media/bonabrian/bhojpur ston.jpg",
    alt: "Imo",
    title: "Imo",
    width: 800, // Placeholder
    height: 600, // Placeholder
    date: "March 2025",
  },
  {
    src: "/media/bonabrian/ktaharu.jpg",
    alt: "Ktaharu",
    title: "Ktaharu",
    width: 800, // Placeholder
    height: 600, // Placeholder
    date: "March 2025",
  },
  {
    src: "/media/bonabrian/tire.jpg",
    alt: "Tire",
    title: "Tire",
    description: "A tire image",
    width: 800, // Placeholder
    height: 600, // Placeholder
    date: "March 2025",
  },
]

export default function PhotosPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const [columns, setColumns] = useState(3)

  // Handle responsive columns
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1)
      } else if (window.innerWidth < 1024) {
        setColumns(2)
      } else {
        setColumns(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Organize images into columns for masonry layout
  const getColumnImages = (colIndex: number) => {
    return images.filter((_, index) => index % columns === colIndex)
  }

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [selectedImage])

  return (
    <>
      <div className={cn("min-h-screen bg-background text-foreground")}>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6">
          {/* Simple header with back button and title */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className={cn(
                  "p-2 rounded-full bg-background hover:bg-secondary/50 transition-colors duration-200 cursor-pointer",
                )}
              >
                <ArrowLeft className="h-5 w-5 text-foreground/70" />
              </Link>
              <h1 className="text-3xl font-bold">Photos</h1>
            </div>
          </div>

          {/* Minimalist masonry gallery */}
          <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-6 sm:gap-8">
                {getColumnImages(colIndex).map((image, index) => {
                  const globalIndex = images.findIndex((img) => img.src === image.src)
                  return (
                    <motion.div
                      key={image.src}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative group cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                      onMouseEnter={() => setHoveredIndex(globalIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="relative overflow-hidden">
                        {/* Image */}
                        <div className="aspect-auto relative">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="object-cover w-full h-auto transition-all duration-500"
                          />
                        </div>

                        {/* Minimalist hover box effect */}
                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          initial={false}
                          animate={{
                            boxShadow:
                              hoveredIndex === globalIndex
                                ? "inset 0 0 0 4px rgba(255,255,255,0.9)"
                                : "inset 0 0 0 0px rgba(255,255,255,0)",
                          }}
                          transition={{ duration: 0.2 }}
                        />

                        {/* Simple date overlay on hover */}
                        <div
                          className={cn(
                            "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300",
                            hoveredIndex === globalIndex ? "opacity-100" : "opacity-0",
                          )}
                        >
                          {image.date && <p className="text-white/80 text-sm">{image.date}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )
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
              className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
            >
              {/* Image */}
              <div className="relative flex items-center justify-center">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  width={selectedImage.width}
                  height={selectedImage.height}
                  className="object-contain max-h-[80vh]"
                />
              </div>

              {/* Minimal image info with only date */}
              <div className="mt-4 text-center text-white">
                {selectedImage.date && <p className="text-white/80">{selectedImage.date}</p>}
                {selectedImage.description && (
                  <p className="mt-1 text-white/80 max-w-md mx-auto">{selectedImage.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}