import { Header } from "@/components/btsa/Header";
import { Footer } from "@/components/btsa/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, HardHat, PenTool, Users } from "lucide-react";

export default function VolunteerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-forest-green-900 py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 font-heading text-4xl font-bold md:text-6xl">
              Join the Movement
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-200">
              We are looking for architects, engineers, environmentalists, and community mobilizers ready to build a better Africa.
            </p>
          </div>
        </section>

        {/* Roles Needed */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-heading text-3xl font-bold text-gray-900">Who We Need</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-gray-200 p-6 hover:border-forest-green transition-colors">
                <HardHat className="mb-4 h-10 w-10 text-forest-green" />
                <h3 className="mb-2 text-xl font-bold">Technical Experts</h3>
                <p className="text-gray-600 mb-4">Civil engineers, architects, and construction managers to oversee sustainable building projects.</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-forest-green" /> Site Supervision</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-forest-green" /> Design & Planning</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 p-6 hover:border-forest-green transition-colors">
                <Users className="mb-4 h-10 w-10 text-forest-green" />
                <h3 className="mb-2 text-xl font-bold">Community Mobilizers</h3>
                <p className="text-gray-600 mb-4">Passionate individuals to engage with local communities, identify needs, and organize youth.</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-forest-green" /> Youth Outreach</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-forest-green" /> Stakeholder Engagement</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 p-6 hover:border-forest-green transition-colors">
                <PenTool className="mb-4 h-10 w-10 text-forest-green" />
                <h3 className="mb-2 text-xl font-bold">Creatives & Admin</h3>
                <p className="text-gray-600 mb-4">Writers, designers, and administrators to help tell our story and keep operations running.</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-forest-green" /> Content Creation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-forest-green" /> Grant Writing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Placeholder */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 font-heading text-3xl font-bold text-gray-900">Ready to Apply?</h2>
            <p className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">
              Send us your CV and a brief statement about why you want to join BTSA.
            </p>
            <Button size="lg" className="bg-forest-green hover:bg-forest-green-700 text-white" asChild>
              <Link href="mailto:africabuildtoshelter@gmail.com">Email Your Application</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
