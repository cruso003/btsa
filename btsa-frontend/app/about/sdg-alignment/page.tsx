import { Header } from "@/components/btsa/Header";
import { Footer } from "@/components/btsa/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function SDGAlignmentPage() {
  const sdgs = [
    {
      id: "1",
      title: "No Poverty",
      description: "Creating economic opportunities and assets for vulnerable families through housing and skills training.",
      color: "bg-red-500"
    },
    {
      id: "5",
      title: "Gender Equality",
      description: "Strategic goal of 70% women's attendance and participation in our training and leadership programs.",
      color: "bg-orange-500"
    },
    {
      id: "6",
      title: "Clean Water & Sanitation",
      description: "Integrating rainwater harvesting and self-filtration systems into every housing design.",
      color: "bg-cyan-500"
    },
    {
      id: "8",
      title: "Decent Work & Economic Growth",
      description: "Training and employing local youth and community members in sustainable construction.",
      color: "bg-red-700"
    },
    {
      id: "11",
      title: "Sustainable Cities & Communities",
      description: "Constructing safe, resilient, and sustainable shelters using locally sourced materials.",
      color: "bg-orange-400"
    },
    {
      id: "13",
      title: "Climate Action",
      description: "Utilizing low-carbon, eco-friendly building materials (compressed earth blocks) that combat deforestation.",
      color: "bg-green-600"
    },
    {
      id: "17",
      title: "Partnerships for the Goals",
      description: "Actively seeking collaborations with NGOs, governments, and green-tech firms to scale impact.",
      color: "bg-blue-800"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-sky-blue-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4 inline-block rounded-full bg-sky-blue-100 px-4 py-1.5 text-sm font-bold text-sky-blue-900">
              AGENDA 2030 & 2040
            </div>
            <h1 className="mb-6 font-heading text-4xl font-bold text-gray-900 md:text-6xl">
              Championing the SDGs
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              Our entire operational framework is designed as a direct implementation vehicle for the UN Sustainable Development Goals.
            </p>
          </div>
        </section>

        {/* SDG Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sdgs.map((sdg) => (
                <div key={sdg.id} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg">
                  <div className={`absolute top-0 left-0 h-2 w-full ${sdg.color}`}></div>
                  <div className="mb-4 flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${sdg.color} text-xl font-bold text-white`}>
                      {sdg.id}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-gray-900">{sdg.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {sdg.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Strategy */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 font-heading text-3xl font-bold">Integrated Community Transformation</h2>
                <p className="mb-6 text-lg text-gray-300">
                  We don't just tick boxes. Our model merges sustainable construction with profound community empowerment.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-forest-green shrink-0" />
                    <div>
                      <span className="font-bold block text-white">Gender Inclusive</span>
                      <span className="text-gray-400">Targeting 70% women's participation in all programs.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-forest-green shrink-0" />
                    <div>
                      <span className="font-bold block text-white">Eco-Conscious</span>
                      <span className="text-gray-400">Using compressed earth blocks and bamboo to protect the planet.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-forest-green shrink-0" />
                    <div>
                      <span className="font-bold block text-white">Future-Ready</span>
                      <span className="text-gray-400">Scalable solutions for Agenda 2063 and beyond.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
                {/* Placeholder for SDG wheel or impact image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold">
                  [SDG Impact Visual]
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
