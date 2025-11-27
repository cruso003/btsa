"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn, SlideUp, ScaleOnHover } from "@/components/ui/motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[800px] flex items-center overflow-hidden bg-gray-900 text-white">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-earth-brown-900 via-gray-900 to-forest-green-900 opacity-90" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-sunset-orange/20 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-forest-green/20 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 border border-white/20 shadow-lg">
                <CheckCircle2 className="h-4 w-4 text-forest-green-400" />
                <span className="text-sm font-bold text-white tracking-wide">Pan-African NGO • 16 Professionals • Est. 2025</span>
              </div>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={0.4} className="space-y-6">
              <h1 className="font-heading text-5xl font-extrabold leading-tight text-white lg:text-7xl drop-shadow-xl">
                Empowering Communities, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-orange to-yellow-400">Building Homes</span>, <br />
                Protecting the Planet
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-xl drop-shadow-md">
                Build To Shelter Africa unites professionals across the continent to address housing poverty, youth unemployment, and environmental degradation through sustainable, community-driven solutions.
              </p>
            </FadeIn>

            {/* Key Stats */}
            <FadeIn delay={0.6}>
              <div className="grid grid-cols-3 gap-6 py-8 border-y border-white/10">
                <div>
                  <div className="font-heading text-4xl font-bold text-white">16</div>
                  <div className="text-sm font-medium text-gray-300">Pan-African Professionals</div>
                </div>
                <div>
                  <div className="font-heading text-4xl font-bold text-forest-green-400">3</div>
                  <div className="text-sm font-medium text-gray-300">Countries (Expanding)</div>
                </div>
                <div>
                  <div className="font-heading text-4xl font-bold text-sky-blue-400">2</div>
                  <div className="text-sm font-medium text-gray-300">Initiatives Launching</div>
                </div>
              </div>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.8} className="flex flex-col sm:flex-row gap-4 pt-4">
              <ScaleOnHover>
                <Button 
                  size="lg" 
                  className="bg-sunset-orange hover:bg-sunset-orange-600 text-white text-lg font-bold px-8 py-7 shadow-glow-orange w-full sm:w-auto"
                  asChild
                >
                  <Link href="/about/our-story">
                    Discover Our Mission
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </ScaleOnHover>
              <ScaleOnHover>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/20 text-lg font-bold px-8 py-7 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/projects">
                    See Our Projects
                  </Link>
                </Button>
              </ScaleOnHover>
            </FadeIn>

            {/* Social Proof */}
            <FadeIn delay={1.0} className="flex items-center gap-3 text-sm text-gray-300 font-medium">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full bg-earth-brown border-2 border-gray-900"></div>
                <div className="h-10 w-10 rounded-full bg-forest-green border-2 border-gray-900"></div>
                <div className="h-10 w-10 rounded-full bg-sky-blue border-2 border-gray-900"></div>
              </div>
              <span>Join our growing community of supporters</span>
            </FadeIn>
          </div>

          {/* Right Image */}
          <SlideUp delay={0.6} className="relative h-[600px] hidden lg:block rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src="/hero-youth-training.png"
              alt="African youth learning sustainable construction skills"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            {/* Overlay Badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sunset-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-sunset-orange-500"></span>
                    </span>
                    <span className="text-xs font-bold text-sunset-orange-400 uppercase tracking-wider">Fundraising Phase</span>
                  </div>
                  <div className="text-lg font-bold text-white">Liberia Youth Empowerment</div>
                  <div className="text-sm text-gray-300">Goal: $26,000 • Launching 2026</div>
                </div>
                <div className="text-right">
                  <Link href="/projects/liberia-youth-empowerment" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-earth-brown hover:bg-gray-200 transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
