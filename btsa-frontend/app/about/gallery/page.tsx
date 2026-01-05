"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/btsa/Header";
import { Footer } from "@/components/btsa/Footer";
import { X } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Generate array of all 71 gallery images
  const galleryImages = Array.from({ length: 71 }, (_, i) => ({
    id: i + 1,
    src: `/gallery/member-work-${String(i + 1).padStart(2, '0')}.jpeg`,
    alt: `Member work showcase ${i + 1}`,
  }));

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToNext = () => {
    if (selectedImage !== null && selectedImage < galleryImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const goToPrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrevious();
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-32">
        {/* Hero Section */}
        <section className="bg-earth-brown-900 py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <FadeIn>
              <h1 className="mb-4 font-heading text-4xl font-bold md:text-6xl">
                Our Work Gallery
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-gray-200">
                Showcasing the exceptional craftsmanship and dedication of our team members across Africa
              </p>
              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-300">
                <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  Member Contributions
                </span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <StaggerItem key={image.id}>
                  <div
                    className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200 cursor-pointer transition-all hover:shadow-xl hover:scale-[1.02]"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm font-semibold">
                          View Full Size
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Buttons */}
          {selectedImage > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {selectedImage < galleryImages.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image Counter */}
          <div className="absolute top-4 left-4 z-10 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-sm text-sm font-medium">
            {selectedImage + 1} / {galleryImages.length}
          </div>

          {/* Image */}
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              width={1200}
              height={1200}
              className="h-auto w-auto max-h-[90vh] max-w-[90vw] object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
