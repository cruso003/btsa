"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/motion";

export function ScholarshipPreviewSection() {
  return (
    <section className="py-20 bg-earth-brown-900 relative overflow-hidden text-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sunset-orange-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-sunset-orange-50 backdrop-blur-sm mb-6 border border-white/10">
              <Sparkles className="h-4 w-4 text-sunset-orange" />
              <span>Launched January 8th, 2026</span>
            </div>

            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              BTSA{" "}
              <span className="text-sunset-orange">Scholarship Chapter</span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
              A new chapter dedicated to personal and professional growth. Join
              a community where members support each other through scholarship
              applications, soft skills development, and digital literacy
              training.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-sunset-orange hover:bg-sunset-orange-600 text-white font-bold h-12 px-6 rounded-full text-base shadow-lg"
              >
                <Link href="/scholarship">
                  Explore the Chapter <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-black/10">
                <Image
                  src="/scholarship/image2.jpg"
                  alt="Students learning together"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/90 font-medium italic">
                    "Empowering each other to reach new heights through
                    education."
                  </p>
                  <p className="text-sm text-sunset-orange mt-2 font-bold">
                    — Miss Melvis, Chapter Manager
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
