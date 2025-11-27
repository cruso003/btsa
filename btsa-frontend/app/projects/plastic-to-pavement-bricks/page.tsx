import { Header } from "@/components/btsa/Header";
import { Footer } from "@/components/btsa/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Recycle, Hammer, DollarSign, CheckCircle2 } from "lucide-react";

export default function PlasticToBricksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-gray-900 py-24 text-white">
          <div className="absolute inset-0 overflow-hidden">
             <Image
              src="/sustainable-home.png" // Ideally a plastic brick image
              alt="Plastic bricks background"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-forest-green px-4 py-1.5 text-sm font-bold text-white">
                FIRST INITIATIVE
              </div>
              <h1 className="mb-6 font-heading text-4xl font-bold md:text-6xl">
                Turning Waste into Wealth: Plastic-to-Pavement Bricks
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                We are tackling Africa's plastic pollution crisis by converting waste into durable, affordable pavement bricks—creating jobs and cleaning our cities simultaneously.
              </p>
            </div>
          </div>
        </section>

        {/* The Problem & Solution */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-16 md:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 font-heading text-3xl font-bold text-gray-900">Why This Matters</h2>
                <div className="space-y-6 text-lg text-gray-700">
                  <p>
                    Plastic waste clogs our drainage systems, pollutes our soil, and harms our health. Yet, this "waste" is actually a valuable resource.
                  </p>
                  <p>
                    By melting down plastic waste and mixing it with sand, we create pavement bricks that are:
                  </p>
                  <ul className="space-y-3 pl-4">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-forest-green" />
                      <span className="font-semibold">Stronger than concrete</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-forest-green" />
                      <span className="font-semibold">Waterproof & durable</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-forest-green" />
                      <span className="font-semibold">Cheaper to produce</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-lg">
                 {/* Placeholder for plastic brick production image */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">
                  [Plastic Brick Production Process]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Strategy */}
        <section className="py-20 bg-forest-green-50">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-3xl">
              <div className="mb-4 inline-block rounded-full bg-forest-green-100 px-4 py-1.5 text-sm font-bold text-forest-green-900">
                INTEGRATED IMPACT
              </div>
              <h2 className="mb-6 font-heading text-3xl font-bold text-gray-900">A Circular Economy Model</h2>
              <p className="mb-8 text-lg text-gray-700">
                This isn't just a standalone project. The bricks we produce here will be directly used in our **Liberia Youth Empowerment** project to pave the yard of the new community center.
              </p>
              <div className="grid gap-6 md:grid-cols-3 text-left">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Recycle className="h-8 w-8 text-forest-green mb-4" />
                  <h3 className="font-bold text-lg mb-2">1. Collect Waste</h3>
                  <p className="text-sm text-gray-600">Community members collect plastic, cleaning their environment.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Hammer className="h-8 w-8 text-forest-green mb-4" />
                  <h3 className="font-bold text-lg mb-2">2. Produce Bricks</h3>
                  <p className="text-sm text-gray-600">Youth are employed to manufacture high-quality pavers.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <DollarSign className="h-8 w-8 text-forest-green mb-4" />
                  <h3 className="font-bold text-lg mb-2">3. Build & Save</h3>
                  <p className="text-sm text-gray-600">We use these bricks in our own projects, saving costs and closing the loop.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold text-gray-900">Support This Initiative</h2>
            <p className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">
              Help us acquire the simple molds and safety equipment needed to scale this production.
            </p>
            <Button size="lg" className="bg-forest-green hover:bg-forest-green-700 text-white" asChild>
              <Link href="/get-involved/donate">Donate to This Project</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
