"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/ui/motion";

export function TeamPreviewSection() {
  const leaders = [
    {
      name: "Bisasa Lewis Nakabaale",
      role: "Founder & Executive Director",
      image: "/team/bisasa-lewis-nakabaale.jpeg",
      quote: "We are not just building houses; we are building a future where every African has a place to call home."
    },
    {
      name: "Engr. Geitodyu Henrique Crusoe",
      role: "Assistant Project Coordinator",
      image: "/team/geitodyu-henrique-crusoe.jpg",
      quote: "Sustainable development starts with empowering the youth to build their own communities."
    },
    {
      name: "Abdulhafiz Hassan Omar",
      role: "Deputy Executive Director & Projects Manager",
      image: "/team/abdulhafiz-hassan-omar.jpeg",
      quote: "Transparency and accountability are the cornerstones of our mission to serve Africa."
    },
    {
      name: "Esther Tigamalwayo Yvonne",
      role: "Secretary & Grants Coordinator",
      image: "/team/esther-Tigamalwayo-yvonne.jpeg",
      quote: "Ensuring the well-being of our team and communities is at the heart of everything we do."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <FadeIn className="space-y-8">
            <h2 className="font-heading text-4xl font-bold text-gray-900 md:text-5xl leading-tight">
              Driven by <span className="text-earth-brown">Passion</span>, <br />
              United by <span className="text-forest-green">Purpose</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              BTSA is led by a diverse team of 24 professionals from Uganda, Liberia, DR Congo, Cameroon, Nigeria, and Kenya. We are engineers, environmentalists, social workers, and visionaries working together to build a better Africa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ScaleOnHover>
                <Button size="lg" className="bg-earth-brown hover:bg-earth-brown-700 text-white shadow-lg" asChild>
                  <Link href="/about/team">
                    Meet the Full Team <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </ScaleOnHover>
              <ScaleOnHover>
                <Button size="lg" variant="outline" className="border-2 border-earth-brown text-earth-brown hover:bg-earth-brown-50" asChild>
                  <Link href="/about/our-story">
                    Read Our Story
                  </Link>
                </Button>
              </ScaleOnHover>
            </div>

            {/* Diversity Stat */}
            <div className="flex items-center gap-8 pt-4 border-t border-gray-100">
              <div>
                <div className="font-heading text-3xl font-bold text-gray-900">62.5%</div>
                <div className="text-sm text-gray-600">Women Leadership</div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-gray-900">6</div>
                <div className="text-sm text-gray-600">Nations Represented</div>
              </div>
            </div>
          </FadeIn>

          {/* Right Grid */}
          <StaggerContainer className="grid grid-cols-2 gap-6">
            {leaders.map((leader, index) => (
              <StaggerItem key={index} className={`space-y-4 ${index === 1 || index === 3 ? 'lg:translate-y-12' : ''}`}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <Quote className="h-6 w-6 text-sunset-orange mb-2" />
                    <p className="text-white text-sm italic leading-relaxed">"{leader.quote}"</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 leading-tight">{leader.name}</h3>
                  <p className="text-sm text-earth-brown font-medium">{leader.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
