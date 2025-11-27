import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MapPin, Calendar, User, ArrowRight, Leaf, Users as UsersIcon } from "lucide-react";

export function CurrentInitiativesSection() {
  const initiatives = [
    {
      id: "plastic-to-bricks",
      status: "active",
      statusLabel: "Active - First Project",
      title: "Plastic-to-Pavement Bricks Initiative",
      location: "Pan-African",
      description: "Converting plastic waste into durable, eco-friendly pavement bricks—addressing environmental pollution while creating affordable building materials and jobs.",
      image: "/sustainable-home.png",
      sdgs: ["SDG 11", "SDG 12", "SDG 13"],
      impact: [
        "Reduce plastic waste in communities",
        "Create affordable building materials",
        "Generate employment opportunities",
        "Zero deforestation footprint"
      ],
      memberContribution: "Technology transfer & expertise",
      href: "/projects/plastic-to-pavement-bricks"
    },
    {
      id: "liberia-youth",
      status: "active",
      statusLabel: "Active - Fundraising",
      title: "Liberia Youth Empowerment & Housing",
      location: "Monrovia, Liberia 🇱🇷",
      description: "Training 20 'Zoko' youth in rare hydrofoam brick technology, transforming disadvantaged young people into skilled builders while constructing a community empowerment center.",
      image: "/hero-youth-training.png",
      raised: 0,
      goal: 26000,
      timeline: "6 months (Jan-Jun 2026)",
      leadBy: "Engr. Geitodyu Henrique Crusoe",
      sdgs: ["SDG 1", "SDG 4", "SDG 8"],
      impact: [
        "Train 20 youth in rare, marketable skills",
        "Build community empowerment center with shelter",
        "Partner with local youth organizations",
        "Transfer sustainable building knowledge"
      ],
      memberContribution: "$15K hydrofoam machine (donated use)",
      href: "/projects/liberia-youth-empowerment"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-3 inline-block rounded-full bg-sunset-orange-100 px-4 py-1.5 text-sm font-semibold text-sunset-orange-900">
            CURRENT INITIATIVES
          </div>
          <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 md:text-5xl">
            Active Projects Across Africa
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Each initiative addresses specific community needs using our flexible, opportunity-driven approach
          </p>
        </div>

        {/* Initiative Cards */}
        <div className="mx-auto max-w-6xl space-y-12">
          {initiatives.map((initiative, index) => (
            <div
              key={initiative.id}
              className={`grid lg:grid-cols-5 gap-8 rounded-2xl bg-white p-8 shadow-lg border-2 ${
                index === 0 ? 'border-forest-green-200' : 'border-earth-brown-200'
              }`}
            >
              {/* Left: Image */}
              <div className="lg:col-span-2">
                <div className="relative h-[300px] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold text-white ${
                      index === 0 ? 'bg-forest-green' : 'bg-sunset-orange'
                    }`}>
                      {initiative.statusLabel}
                    </span>
                  </div>
                </div>
                
                {/* SDG Badges */}
                <div className="flex flex-wrap gap-2">
                  {initiative.sdgs.map((sdg) => (
                    <span key={sdg} className="inline-block rounded-md bg-sky-blue-100 px-2 py-1 text-xs font-semibold text-sky-blue-900">
                      {sdg}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Details */}
              <div className="lg:col-span-3 space-y-6">
                {/* Title & Location */}
                <div>
                  <h3 className="mb-2 font-heading text-2xl font-bold text-gray-900">
                    {initiative.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>{initiative.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700">
                  {initiative.description}
                </p>

                {/* Funding Progress (if applicable) */}
                {initiative.goal && (
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-3 flex items-baseline justify-between">
                      <div>
                        <div className="text-xs font-medium text-gray-600">Raised</div>
                        <div className="font-heading text-2xl font-bold text-earth-brown">${initiative.raised.toLocaleString()}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-medium text-gray-600">Goal</div>
                        <div className="font-heading text-2xl font-bold text-gray-900">${initiative.goal.toLocaleString()}</div>
                      </div>
                    </div>
                    <Progress value={(initiative.raised / initiative.goal) * 100} className="h-2 mb-2" />
                    <div className="text-center text-xs text-gray-600">
                      Be the first supporter • 0% funded
                    </div>
                  </div>
                )}

                {/* Impact Points */}
                <div>
                  <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-900">
                    Expected Impact
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {initiative.impact.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-forest-green font-bold">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Details */}
                <div className="flex flex-wrap gap-4 border-t pt-4 text-sm">
                  {initiative.timeline && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-700">{initiative.timeline}</span>
                    </div>
                  )}
                  {initiative.leadBy && (
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-700">{initiative.leadBy}</span>
                    </div>
                  )}
                </div>

                {/* Member Contribution Highlight */}
                {initiative.memberContribution && (
                  <div className="rounded-lg bg-green-50 border border-green-200 p-3">
                    <div className="flex items-start gap-2">
                      <Leaf className="h-4 w-4 text-green-700 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wide text-green-900">
                          Member Contribution
                        </div>
                        <div className="text-sm text-gray-700">
                          {initiative.memberContribution}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <Button 
                  className={`w-full ${
                    index === 0 
                      ? 'bg-forest-green hover:bg-forest-green-700' 
                      : 'bg-earth-brown hover:bg-earth-brown-700'
                  } text-white font-semibold`}
                  asChild
                >
                  <Link href={initiative.href}>
                    Learn More & Support
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="border-2" asChild>
            <Link href="/projects">
              View All Initiatives
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
