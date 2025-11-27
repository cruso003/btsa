import { Header } from "@/components/btsa/Header";
import { Footer } from "@/components/btsa/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Target, Calendar, TrendingUp } from "lucide-react";

export default function ImpactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-forest-green-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 font-heading text-4xl font-bold text-gray-900 md:text-6xl">
              Our Roadmap to Impact
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Clear goals, measurable outcomes, and a strategic path to transforming rural Africa.
            </p>
          </div>
        </section>

        {/* Short Term Goals */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-earth-brown text-white">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">Short-Term (0-3 Years)</h2>
                <p className="text-gray-600">Laying the foundation in Uganda</p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-gray-200 p-8 shadow-sm hover:border-earth-brown transition-colors">
                <div className="mb-4 text-4xl font-bold text-earth-brown">50</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Pilot Homes</h3>
                <p className="text-gray-600">Building and empowering 50 families in target villages to solidify our model.</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-8 shadow-sm hover:border-earth-brown transition-colors">
                <div className="mb-4 text-4xl font-bold text-earth-brown">100</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Builders Trained</h3>
                <p className="text-gray-600">Equipping local youth with sustainable construction skills (targeting 70% women).</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-8 shadow-sm hover:border-earth-brown transition-colors">
                <div className="mb-4 text-4xl font-bold text-earth-brown">200</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">Trees Planted</h3>
                <p className="text-gray-600">Environmental stewardship integrated into every community project.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Long Term Vision */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-green text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-heading text-3xl font-bold text-gray-900">Long-Term (3-7 Years)</h2>
                <p className="text-gray-600">Scaling across East Africa</p>
              </div>
            </div>

            <div className="space-y-6 max-w-4xl">
              <div className="flex gap-4 items-start">
                <div className="mt-1 h-6 w-6 rounded-full bg-forest-green flex items-center justify-center text-white text-xs font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">National Expansion</h3>
                  <p className="text-gray-600">Expand operations to new districts across Uganda.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 h-6 w-6 rounded-full bg-forest-green flex items-center justify-center text-white text-xs font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Refugee Settlements</h3>
                  <p className="text-gray-600">Replicate the successful model in refugee settlements to address displacement crises.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 h-6 w-6 rounded-full bg-forest-green flex items-center justify-center text-white text-xs font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Regional Partnerships</h3>
                  <p className="text-gray-600">Forge strategic partnerships with regional governments and SDG-aligned investors to scale across East Africa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 font-heading text-3xl font-bold text-gray-900">Be Part of the Solution</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-earth-brown hover:bg-earth-brown-700 text-white" asChild>
                <Link href="/get-involved/partner">Partner With Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2" asChild>
                <Link href="/get-involved/donate">Support Our Goals</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
