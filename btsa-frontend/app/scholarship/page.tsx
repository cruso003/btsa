"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/btsa/Header";
import { Footer } from "@/components/btsa/Footer";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  PenTool,
  MessageSquare,
  Share2,
  Calendar,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export default function ScholarshipPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-gray-900">
          <Image
            src="/scholarship/hero.jpg"
            alt="BTSA Scholarship Chapter"
            fill
            className="object-contain object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="container px-4">
              <FadeIn>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm mb-6 border border-white/20">
                  <Calendar className="h-4 w-4 text-sunset-orange" />
                  Launched Thursday 8th January 2026
                </div>
                <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                  BTSA Scholarship{" "}
                  <span className="text-sunset-orange">Chapter</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
                  Collaborating for growth, education, and professional
                  development.
                </p>
                <Button
                  className="bg-sunset-orange hover:bg-sunset-orange-700 text-white font-bold text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all rounded-full"
                  asChild
                >
                  <Link href="#get-started">
                    Join the Chapter <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn delay={0.2}>
                <div className="relative w-full aspect-[1131/1600] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  {/* Assuming we might want to use another image here or reuse hero/gallery images. using hero for now as placeholder if no specific image provided for intro */}
                  <Image
                    src="/scholarship/image.jpg"
                    alt="Students collaborating"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-dancing text-2xl mb-2 text-sunset-orange">
                      Growth & Community
                    </p>
                    <p className="font-semibold">Building a future together</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <h2 className="font-heading text-3xl font-bold text-earth-brown-800 mb-6 relative inline-block">
                  About the Chapter
                  <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-sunset-orange rounded-full"></span>
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>
                    The BTSA Scholarship Chapter is a unique branch within Build
                    To Shelter Africa (BTSA), dedicated to building homes,
                    empowering communities, and protecting the planet.
                  </p>
                  <p>
                    This chapter provides a unique opportunity for members to
                    support each other’s personal and professional growth
                    through collaborative efforts focused on education and skill
                    development.
                  </p>
                  <p className="font-semibold text-earth-brown-600">
                    Officially managed by Miss Melvis, our BTSA Scholarship and
                    Soft Skills Manager.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Objectives Section */}
        <section
          className="py-20 bg-earth-brown-50 relative overflow-hidden"
          id="objectives"
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(#8B4513 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-sunset-orange font-bold tracking-wider uppercase text-sm mb-2 block">
                  Our Mission
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-earth-brown-900 mb-6">
                  Objectves and Key Features
                </h2>
                <p className="text-gray-600 text-lg">
                  The BTSA Scholarship Chapter is built on four core pillars
                  designed to foster holistic growth and professional success.
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {/* Objective 1 */}
              <StaggerItem>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-sunset-orange h-full">
                  <div className="h-14 w-14 bg-sunset-orange-50 rounded-xl flex items-center justify-center mb-6">
                    <GraduationCap className="h-8 w-8 text-sunset-orange" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                    Collaborative Contribution
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        Members join efforts to contribute to individual growth
                        through scholarship applications.
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        Fostering a supportive community for sharing knowledge
                        and resources.
                      </span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              {/* Objective 2 */}
              <StaggerItem>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-forest-green h-full">
                  <div className="h-14 w-14 bg-forest-green-50 rounded-xl flex items-center justify-center mb-6">
                    <PenTool className="h-8 w-8 text-forest-green" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                    Soft Skills Development
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        Training on writing effective personal statements, CVs,
                        resumes, and scholarship essays.
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        Online trainings from experienced speakers across
                        Africa.
                      </span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              {/* Objective 3 */}
              <StaggerItem>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-sky-blue h-full">
                  <div className="h-14 w-14 bg-sky-blue-50 rounded-xl flex items-center justify-center mb-6">
                    <MessageSquare className="h-8 w-8 text-sky-blue" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                    Professional Communication
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        Enhancing written and verbal communication skills.
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        Adapting to professional environments with confidence.
                      </span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>

              {/* Objective 4 */}
              <StaggerItem>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500 h-full">
                  <div className="h-14 w-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                    <Share2 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                    Digital Literacy & Branding
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        Effective use of social media for digital marketing and
                        personal branding.
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>
                        Using modern tools to promote initiatives in the digital
                        world.
                      </span>
                    </li>
                  </ul>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* Plan of Action Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto rounded-3xl bg-forest-green-900 p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-forest-green-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-sunset-orange-500 rounded-full opacity-20 blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="font-heading text-3xl font-bold mb-8 text-center">
                  Plan of Action
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <p className="text-forest-green-50 pt-2">
                      Organize online webinars for training at the beginning of
                      the chapter
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <p className="text-forest-green-50 pt-2">
                      Keep the group updated daily with new scholarships
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <p className="text-forest-green-50 pt-2">
                      Apply to at least 1 scholarship per week to ensure
                      consistency
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <p className="text-forest-green-50 pt-2">
                      Assist members with challenges faced in application
                      process
                    </p>
                  </div>
                  <div className="flex gap-4 md:col-span-2">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                      5
                    </div>
                    <p className="text-forest-green-50 pt-2">
                      Ensure activeness of all members to promote holistic
                      personal development
                    </p>
                  </div>
                </div>

                <div className="mt-12 text-center" id="get-started">
                  <Button className="bg-white text-forest-green-900 hover:bg-gray-100 font-bold px-8 py-3 h-auto text-lg rounded-full">
                    Join Our WhatsApp Group
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Organization Details Footer Area */}
        <section className="py-12 bg-earth-brown-50 border-t border-earth-brown-100">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block p-4 bg-white rounded-xl shadow-sm border border-earth-brown-100">
              <h3 className="font-heading font-bold text-earth-brown-800 mb-2">
                Build To Shelter Africa (BTSA)
              </h3>
              <p className="text-gray-600">Kampala, Uganda</p>
              <a
                href="mailto:africabuildtoshelter@gmail.com"
                className="text-sunset-orange hover:text-sunset-orange-700 font-medium transition-colors"
              >
                africabuildtoshelter@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
