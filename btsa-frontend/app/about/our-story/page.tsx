import { Header } from "@/components/btsa/Header";
import { Footer } from "@/components/btsa/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function OurStoryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-earth-brown-950 py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/20">
                <span className="text-sm font-semibold text-sunset-orange">Our Origin Story</span>
              </div>
              <h1 className="mb-6 font-heading text-4xl font-bold md:text-6xl">
                African Solutions for <span className="text-sunset-orange">African Challenges</span>
              </h1>
              <p className="text-xl text-white/80">
                We are a collective of professionals who refused to wait for someone else to build our future.
              </p>
            </div>
          </div>
        </section>

        {/* The Spark */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-2 items-center">
                <div>
                  <h2 className="mb-6 font-heading text-3xl font-bold text-gray-900">The Spark</h2>
                  <div className="space-y-4 text-lg text-gray-700">
                    <p>
                      Build To Shelter Africa (BTSA) began not in a boardroom, but from a shared frustration among African professionals. We saw our continent's housing crisis, youth unemployment, and environmental degradation growing every year.
                    </p>
                    <p>
                      We realized that while international aid has its place, sustainable change must come from within. We have the engineers, the architects, the lawyers, and the visionaries right here.
                    </p>
                    <p>
                      So we asked ourselves: <span className="font-bold italic text-earth-brown">"What if we pooled our expertise and resources to build the Africa we want to see?"</span>
                    </p>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gray-100">
                  {/* Placeholder for founding team image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    [Founding Team Image]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center mb-16">
              <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900">Our Philosophy</h2>
              <p className="text-lg text-gray-600">
                We believe in dignity, sustainability, and the power of community.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4 h-12 w-12 rounded-full bg-earth-brown-100 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold">Dignity First</h3>
                <p className="text-gray-600">
                  Housing is a human right. We don't just build shelters; we build homes that families are proud to own.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4 h-12 w-12 rounded-full bg-forest-green-100 flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold">Sustainable Action</h3>
                <p className="text-gray-600">
                  We use eco-friendly materials and methods that protect our environment for future generations.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4 h-12 w-12 rounded-full bg-sky-blue-100 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold">Empowerment</h3>
                <p className="text-gray-600">
                  We train youth and women, giving them skills to build their own futures long after we leave.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-earth-brown text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 font-heading text-3xl font-bold">Join Our Movement</h2>
            <p className="mb-8 text-xl text-white/90 max-w-2xl mx-auto">
              Whether you're a professional looking to volunteer or a supporter who believes in our vision, there's a place for you at BTSA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-bold" asChild>
                <Link href="/get-involved/volunteer">Volunteer With Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-earth-brown" asChild>
                <Link href="/get-involved/donate">Support Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
