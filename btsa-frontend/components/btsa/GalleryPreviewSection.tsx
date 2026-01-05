"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion";

export function GalleryPreviewSection() {
  // Featured gallery images - selecting a diverse showcase of member work
  const featuredImages = [
    { id: 5, src: "/gallery/member-work-05.jpeg", alt: "Construction project showcase 1" },
    { id: 10, src: "/gallery/member-work-10.jpeg", alt: "Construction project showcase 2" },
    { id: 21, src: "/gallery/member-work-21.jpeg", alt: "Construction project showcase 3" },
    { id: 30, src: "/gallery/member-work-30.jpeg", alt: "Construction project showcase 4" },
    { id: 39, src: "/gallery/member-work-39.jpeg", alt: "Construction project showcase 5" },
    { id: 50, src: "/gallery/member-work-50.jpeg", alt: "Construction project showcase 6" },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-3 inline-block rounded-full bg-earth-brown-100 px-4 py-1.5 text-sm font-semibold text-earth-brown-900">
            FEATURED WORK
          </div>
          <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 md:text-5xl">
            Our Team's Craftsmanship
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            A glimpse into the exceptional work our members have contributed across Africa
          </p>
        </div>

        {/* Gallery Grid */}
        <StaggerContainer className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredImages.map((image, index) => (
              <StaggerItem key={image.id}>
                <Link href="/about/gallery">
                  <div className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200 cursor-pointer transition-all hover:shadow-2xl hover:scale-[1.02]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm font-semibold flex items-center gap-2">
                          View in Gallery
                          <ArrowRight className="h-4 w-4" />
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-earth-brown hover:bg-earth-brown-700 text-white font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <Link href="/about/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Showcasing member contributions and craftsmanship
          </p>
        </div>
      </div>
    </section>
  );
}
