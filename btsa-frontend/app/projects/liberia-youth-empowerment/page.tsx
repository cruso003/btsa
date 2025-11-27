import { Header } from "@/components/btsa/Header";
import { Footer } from "@/components/btsa/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Users, Hammer, Heart } from "lucide-react";

export default function LiberiaProjectPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-earth-brown-900 py-24 text-white">
          <div className="absolute inset-0 overflow-hidden">
             <Image
              src="/hero-youth-training.png"
              alt="Liberia youth training"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-earth-brown px-4 py-1.5 text-sm font-bold text-white">
                ACTIVE FUNDRAISING
              </div>
              <h1 className="mb-6 font-heading text-4xl font-bold md:text-6xl">
                Liberia Youth Empowerment & Housing
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                We are transforming disadvantaged street youth into skilled master builders. By training them in hydrofoam technology, we give them a future while they build a community center for their people.
              </p>
            </div>
          </div>
        </section>

        {/* Project Details Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Left: Story */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900">The Mission</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    In Monrovia, many young men live on the margins of society, often viewed as a threat. We see them differently. We see potential engineers, builders, and community leaders.
                  </p>
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    Led by our Assistant Project Coordinator, **Engr. Geitodyu Henrique Crusoe**, this project uses a donated hydrofoam machine to train 20 disadvantaged youth. They will learn to produce interlocking soil-stabilized bricks—a sustainable, cost-effective technology.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                   <div className="rounded-xl bg-forest-green-50 p-6 border border-forest-green-100">
                      <h3 className="mb-2 font-heading text-xl font-bold text-forest-green-900">Sustainable Tech</h3>
                      <p className="text-gray-700 text-sm">
                        Hydrofoam bricks are eco-friendly, requiring no firewood for curing. They interlock, reducing cement usage and construction costs by up to 30%.
                      </p>
                   </div>
                   <div className="rounded-xl bg-earth-brown-50 p-6 border border-earth-brown-100">
                      <h3 className="mb-2 font-heading text-xl font-bold text-earth-brown-900">Skill Transfer</h3>
                      <p className="text-gray-700 text-sm">
                        Trainees master soil testing, brick production, and masonry. These are lifelong skills that grant them financial independence.
                      </p>
                   </div>
                </div>

                <div className="rounded-xl bg-sky-blue-50 p-8 border border-sky-blue-100 relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="mb-4 font-heading text-2xl font-bold text-gray-900">Integrated Impact: Plastic Bricks</h3>
                    <p className="text-gray-700">
                      This project perfectly demonstrates BTSA's integrated approach. The yard of the empowerment center will be paved using **plastic bricks produced by our first initiative**.
                    </p>
                    <p className="mt-2 text-gray-700">
                      This means the center itself becomes a living showcase of sustainable technologies: hydrofoam walls rising from a recycled plastic foundation.
                    </p>
                  </div>
                  {/* Decorative Icon */}
                  <Hammer className="absolute -bottom-4 -right-4 h-32 w-32 text-sky-blue-200 opacity-20" />
                </div>

                <div>
                  <h3 className="mb-6 font-heading text-2xl font-bold text-gray-900">Project Deliverables</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="mt-1 rounded-full bg-earth-brown/10 p-2">
                        <CheckCircle2 className="h-5 w-5 text-earth-brown" />
                      </div>
                      <div>
                        <span className="block text-lg font-bold text-gray-900">A Community Empowerment Center</span>
                        <p className="text-gray-600">A permanent hub for future training, meetings, and community events in Monrovia.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                      <div className="mt-1 rounded-full bg-forest-green/10 p-2">
                        <Users className="h-5 w-5 text-forest-green" />
                      </div>
                      <div>
                        <span className="block text-lg font-bold text-gray-900">20 Skilled Careers Launched</span>
                        <p className="text-gray-600">The youth graduate not just with a certificate, but with a trade that is in high demand.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Donation Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
                  <h3 className="mb-2 font-heading text-2xl font-bold text-gray-900">Help Us Build This</h3>
                  <div className="mb-6">
                    <div className="mb-2 flex justify-between text-sm font-medium">
                      <span className="text-gray-600">Raised: $0</span>
                      <span className="text-earth-brown">Goal: $26,000</span>
                    </div>
                    <Progress value={0} className="h-3" />
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Users className="h-5 w-5 text-earth-brown" />
                      <span>20 Youth Trainees</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Hammer className="h-5 w-5 text-earth-brown" />
                      <span>6-Month Construction Phase</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Heart className="h-5 w-5 text-earth-brown" />
                      <span>1 Community Center</span>
                    </div>
                  </div>

                  <Button size="lg" className="w-full bg-earth-brown hover:bg-earth-brown-700 text-white font-bold py-6 text-lg" asChild>
                    <Link href="/get-involved/donate">Donate Now</Link>
                  </Button>
                  <p className="mt-4 text-center text-xs text-gray-500">
                    100% of your donation goes to materials and training. Equipment is already provided by members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
