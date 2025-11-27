import { Header } from "@/components/btsa/Header";
import { Footer } from "@/components/btsa/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Handshake, Building2, Globe2 } from "lucide-react";

export default function PartnerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-sky-blue-900 py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 font-heading text-4xl font-bold md:text-6xl">
              Partner for Impact
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-200">
              We believe in the power of collaboration (SDG 17). Let's achieve more together.
            </p>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sky-blue-100 text-sky-blue-700">
                  <Building2 className="h-8 w-8" />
                </div>
                <h3 className="mb-3 font-heading text-2xl font-bold">Corporate CSR</h3>
                <p className="text-gray-600">
                  Align your brand with sustainable development. Sponsor a village project or equipment donation.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sky-blue-100 text-sky-blue-700">
                  <Globe2 className="h-8 w-8" />
                </div>
                <h3 className="mb-3 font-heading text-2xl font-bold">NGO Collaboration</h3>
                <p className="text-gray-600">
                  We partner with other organizations to deliver holistic solutions—water, health, and education alongside housing.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sky-blue-100 text-sky-blue-700">
                  <Handshake className="h-8 w-8" />
                </div>
                <h3 className="mb-3 font-heading text-2xl font-bold">Government</h3>
                <p className="text-gray-600">
                  We work with local and national governments to support housing and development agendas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-50 text-center">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 font-heading text-3xl font-bold text-gray-900">Let's Discuss Collaboration</h2>
            <Button size="lg" className="bg-sky-blue hover:bg-sky-blue-700 text-white" asChild>
              <Link href="mailto:africabuildtoshelter@gmail.com">Contact Our Partnership Team</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
