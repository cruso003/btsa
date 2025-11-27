"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Hammer, Users, Calendar, MapPin } from "lucide-react";
import { FadeIn, SlideUp, ScaleOnHover } from "@/components/ui/motion";

export function ProjectSpotlightSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 md:text-5xl">
            Current Initiatives
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We are actively working on the ground. Support our live projects today.
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Project 1: Plastic-to-Bricks (Completed/Active) */}
          <SlideUp delay={0.2} className="h-full">
            <Card className="flex h-full flex-col overflow-hidden border-none shadow-lg transition-all hover:shadow-xl group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/sustainable-home.png"
                  alt="Plastic to Pavement Bricks"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-forest-green text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Active Model
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-sm text-forest-green font-semibold mb-2">
                  <MapPin className="h-4 w-4" />
                  Kampala, Uganda
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-900">
                  Plastic-to-Pavement Bricks
                </h3>
              </CardHeader>
              <CardContent className="flex-1 pb-4">
                <p className="text-gray-600 mb-6">
                  Transforming plastic waste into durable, eco-friendly pavement bricks. A circular economy model creating jobs and cleaning cities.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Hammer className="h-4 w-4 text-forest-green" />
                    <span>Waste Reduction</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="h-4 w-4 text-forest-green" />
                    <span>Job Creation</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0 pb-6 px-6">
                <Button className="w-full bg-forest-green hover:bg-forest-green-600 text-white" asChild>
                  <Link href="/projects/plastic-to-pavement-bricks">
                    View Impact Model <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </SlideUp>

          {/* Project 2: Liberia Youth (Fundraising) */}
          <SlideUp delay={0.4} className="h-full">
            <Card className="flex h-full flex-col overflow-hidden border-2 border-sunset-orange/20 shadow-lg transition-all hover:shadow-xl group relative">
              <div className="absolute top-0 right-0 bg-sunset-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                URGENT FUNDING NEEDED
              </div>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/hero-youth-training.png"
                  alt="Liberia Youth Empowerment"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider mb-1">Target Launch: Jan 2026</div>
                  <div className="font-heading text-xl font-bold">Liberia Youth Empowerment</div>
                </div>
              </div>
              <CardContent className="flex-1 pt-6 pb-4">
                <p className="text-gray-600 mb-6">
                  Training 20 disadvantaged youth in sustainable hydrofoam brick technology. Building a community center while rebuilding lives.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-gray-700">Raised: $0</span>
                    <span className="text-sunset-orange">Goal: $26,000</span>
                  </div>
                  <Progress value={0} className="h-3 bg-gray-100" indicatorClassName="bg-sunset-orange" />
                  <p className="text-xs text-gray-500 text-right">0% Funded</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="h-4 w-4 text-sunset-orange" />
                    <span>20 Youth Trainees</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="h-4 w-4 text-sunset-orange" />
                    <span>6 Month Program</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0 pb-6 px-6 gap-3">
                <Button className="flex-1 bg-sunset-orange hover:bg-sunset-orange-600 text-white shadow-glow-orange" asChild>
                  <Link href="/get-involved/donate">
                    Donate Now
                  </Link>
                </Button>
                <Button variant="outline" className="flex-1 border-sunset-orange text-sunset-orange hover:bg-sunset-orange-50" asChild>
                  <Link href="/projects/liberia-youth-empowerment">
                    Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </SlideUp>
        </div>

        <FadeIn delay={0.6} className="mt-12 text-center">
          <Button variant="link" className="text-earth-brown hover:text-earth-brown-700 text-lg" asChild>
            <Link href="/projects">
              View All Planned Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
