import { Header } from "@/components/btsa/Header";
import { Footer } from "@/components/btsa/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Zap, Leaf, Users, CheckCircle2 } from "lucide-react";

export default function BiogasProjectPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-forest-green-900 py-24 text-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/projects/biogas/hero.jpg"
              alt="Clean Energy Through Biogas"
              fill
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-green-900 to-transparent"></div>
          </div>
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-forest-green px-4 py-2 text-xs font-bold text-white uppercase tracking-wider">
                <Zap className="h-3 w-3" />
                Planned Initiative
              </div>
              <h1 className="mb-6 font-heading text-5xl font-bold md:text-6xl leading-tight">
                Clean Energy Through Biogas
              </h1>
              <p className="text-xl text-gray-100 leading-relaxed max-w-2xl">
                Converting organic waste into clean cooking energy and nutrient-rich fertilizer. A sustainable solution reducing deforestation, indoor air pollution, and household energy costs across East Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Project Details Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Left: Story */}
              <div className="lg:col-span-2 space-y-10">
                {/* The Challenge Section */}
                <div>
                  <h2 className="mb-6 font-heading text-3xl font-bold text-gray-900">The Challenge</h2>
                  <p className="mb-6 text-lg text-gray-700 leading-relaxed">
                    Across Uganda and the East African region, heavy reliance on firewood and charcoal has created a cascade of problems: rapid deforestation, severe indoor air pollution, devastating climate impacts, and unsustainable household energy costs.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <Image 
                        src="/projects/biogas/challenge1.jpg" 
                        alt="Environmental challenge" 
                        width={400} 
                        height={300} 
                        className="object-cover w-full h-56"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <Image 
                        src="/projects/biogas/challenge2.jpg" 
                        alt="Community impact" 
                        width={400} 
                        height={300} 
                        className="object-cover w-full h-56"
                      />
                    </div>
                  </div>
                </div>

                {/* Our Solution Section */}
                <div className="rounded-2xl bg-forest-green-50 p-10 border border-forest-green-100">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="rounded-full bg-forest-green/10 p-3 flex-shrink-0">
                      <Leaf className="h-6 w-6 text-forest-green-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-4 font-heading text-2xl font-bold text-gray-900">Our Solution</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Community-led installation of household and institutional biogas systems that transform organic waste into clean cooking gas and nutrient-rich bio-slurry for agriculture. Locally built, environmentally sustainable, and economically empowering.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Overview Cards */}
                <div>
                  <h3 className="mb-6 font-heading text-2xl font-bold text-gray-900">Project Scope</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="rounded-xl bg-earth-brown-50 p-6 border border-earth-brown-100 hover:shadow-lg transition-shadow">
                      <h4 className="mb-2 font-heading text-lg font-bold text-earth-brown-900">Geographic Coverage</h4>
                      <p className="flex items-center gap-2 text-gray-700">
                        <MapPin className="h-5 w-5 text-earth-brown flex-shrink-0" />
                        Wakiso, Mukono, Gulu, Mbarara, Omoro
                      </p>
                    </div>
                    <div className="rounded-xl bg-sky-blue-50 p-6 border border-sky-blue-100 hover:shadow-lg transition-shadow">
                      <h4 className="mb-2 font-heading text-lg font-bold text-sky-blue-900">Duration</h4>
                      <p className="text-gray-700 font-semibold">24 months</p>
                      <p className="text-sm text-gray-600">Implementation & monitoring</p>
                    </div>
                  </div>
                </div>

                {/* Key Activities */}
                <div>
                  <h3 className="mb-6 font-heading text-2xl font-bold text-gray-900">Key Activities</h3>
                  <div className="space-y-3">
                    {[
                      "Installation of 150 household and 20 institutional biogas systems",
                      "Community sensitization and beneficiary selection",
                      "Training households and institutional staff",
                      "Youth and local technician training programs",
                      "Performance monitoring and impact assessment",
                    ].map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className="rounded-full bg-forest-green/10 p-2 flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="h-5 w-5 text-forest-green-700" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">{activity}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Impact */}
                <div>
                  <h3 className="mb-6 font-heading text-2xl font-bold text-gray-900">Project Impact</h3>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl bg-gradient-to-br from-forest-green-50 to-forest-green-100 p-8 text-center border border-forest-green-200 hover:shadow-lg transition-shadow">
                      <div className="text-4xl font-bold text-forest-green-900 mb-2">150</div>
                      <div className="text-sm font-semibold text-gray-700">Household<br />Biogas Systems</div>
                    </div>
                    <div className="rounded-xl bg-gradient-to-br from-earth-brown-50 to-earth-brown-100 p-8 text-center border border-earth-brown-200 hover:shadow-lg transition-shadow">
                      <div className="text-4xl font-bold text-earth-brown-900 mb-2">20</div>
                      <div className="text-sm font-semibold text-gray-700">Institutional<br />Systems</div>
                    </div>
                    <div className="rounded-xl bg-gradient-to-br from-sky-blue-50 to-sky-blue-100 p-8 text-center border border-sky-blue-200 hover:shadow-lg transition-shadow">
                      <div className="text-4xl font-bold text-sky-blue-900 mb-2">∞</div>
                      <div className="text-sm font-semibold text-gray-700">Clean Energy<br />Benefits</div>
                    </div>
                  </div>
                  <p className="mt-6 text-gray-700 leading-relaxed">
                    <strong>Additional Benefits:</strong> Reduced firewood and charcoal consumption, improved indoor air quality, enhanced health outcomes, reduced greenhouse gas emissions, and strengthened sustainable livelihoods through agricultural productivity.
                  </p>
                </div>

                {/* Cross-Cutting Focus */}
                <div className="rounded-2xl bg-sky-blue-50 p-10 border border-sky-blue-100">
                  <h3 className="mb-6 font-heading text-2xl font-bold text-gray-900">Cross-Cutting Focus Areas</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { icon: Leaf, title: "Climate Action", desc: "Reducing emissions and deforestation" },
                      { icon: Users, title: "Youth Empowerment", desc: "Skills training for local technicians" },
                      { icon: CheckCircle2, title: "Community Ownership", desc: "Community-led implementation" },
                      { icon: Zap, title: "Sustainable Livelihoods", desc: "Economic benefits through agriculture" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="rounded-full bg-sky-blue-200/50 p-3 flex-shrink-0">
                          <item.icon className="h-5 w-5 text-sky-blue-900" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gallery */}
                <div>
                  <h3 className="mb-6 font-heading text-2xl font-bold text-gray-900">Project Gallery</h3>
                  <div className="grid gap-6 sm:grid-cols-3">
                    {[
                      { src: "/projects/biogas/challenge1.jpg", cap: "Biogas System Installation" },
                      { src: "/projects/biogas/solution.jpg", cap: "Community Training & Sensitization" },
                      { src: "/projects/biogas/gallery4.jpg", cap: "Clean Cooking with Biogas" },
                    ].map((item, idx) => (
                      <div key={idx} className="group rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                        <div className="relative h-48 overflow-hidden bg-gray-200">
                          <Image 
                            src={item.src} 
                            alt={item.cap} 
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4 bg-white">
                          <p className="text-sm font-medium text-gray-700 text-center">{item.cap}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Sidebar Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
                  <div className="mb-8">
                    <h3 className="mb-4 font-heading text-2xl font-bold text-gray-900">Get Involved</h3>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                        <MapPin className="h-5 w-5 text-forest-green flex-shrink-0" />
                        <div className="text-sm">
                          <p className="font-semibold text-gray-900">Five Locations</p>
                          <p className="text-xs text-gray-600">Wakiso, Mukono, Gulu, Mbarara, Omoro</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                        <Zap className="h-5 w-5 text-forest-green flex-shrink-0" />
                        <div className="text-sm">
                          <p className="font-semibold text-gray-900">170 Systems</p>
                          <p className="text-xs text-gray-600">Household & institutional</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-forest-green flex-shrink-0" />
                        <div className="text-sm">
                          <p className="font-semibold text-gray-900">Community-Led</p>
                          <p className="text-xs text-gray-600">Local ownership & training</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-forest-green hover:bg-forest-green-700 text-white font-bold py-6 text-base" 
                    asChild
                  >
                    <Link href="/get-involved/partner">Partner With Us</Link>
                  </Button>
                  <p className="mt-4 text-center text-xs text-gray-500 leading-relaxed">
                    Support system installations, staff training, local partnerships, or community advocacy.
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
