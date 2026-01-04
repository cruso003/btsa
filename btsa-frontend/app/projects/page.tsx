import { Header } from "@/components/btsa/Header";
import { Footer } from "@/components/btsa/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      id: "plastic-to-bricks",
      title: "Plastic-to-Pavement Bricks",
      status: "Active - First Project",
      location: "Africa-wide",
      description: "Converting plastic waste into durable, eco-friendly pavement bricks. This initiative tackles environmental pollution while creating affordable building materials for our other construction projects.",
      image: "/sustainable-home.png",
      href: "/projects/plastic-to-pavement-bricks",
      color: "forest-green"
    },
    {
      id: "liberia-youth",
      title: "Liberia Youth Empowerment",
      status: "Active - Fundraising",
      location: "Monrovia, Liberia 🇱🇷",
      description: "Training 20 'Zoko' youth in hydrofoam brick technology to build a community empowerment center—using the very plastic bricks produced by our first initiative.",
      image: "/hero-youth-training.png",
      href: "/projects/liberia-youth-empowerment",
      color: "earth-brown"
    },
    {
      id: "uganda-homes",
      title: "50 Sustainable Homes",
      status: "Planned",
      location: "Rural Uganda 🇺🇬",
      description: "Our pilot housing program to build 50 eco-friendly homes using compressed earth blocks and rainwater harvesting systems for vulnerable families.",
      image: "/tree-planting.png", // Placeholder
      href: "#",
      color: "sky-blue"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gray-900 py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 font-heading text-4xl font-bold md:text-6xl">
              Our Initiatives
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              From plastic waste to sustainable homes—see how our integrated projects are transforming communities across Africa.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.id} className="group flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block rounded-full bg-${project.color} px-3 py-1 text-xs font-bold text-white uppercase tracking-wide`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <h3 className="mb-4 font-heading text-2xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="mb-6 flex-1 text-gray-600">
                      {project.description}
                    </p>
                    <Button className={`w-full bg-${project.color} hover:bg-${project.color}-700 text-white`} asChild>
                      <Link href={project.href}>
                        View Project Details
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
