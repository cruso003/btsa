import Image from "next/image";
import { Building2, Users, TreePine } from "lucide-react";

export function ThreePillarsSection() {
  const pillars = [
    {
      icon: Building2,
      title: "Building Homes",
      subtitle: "Sustainable shelter for dignity",
      image: "/sustainable-home.png",
      features: [
        "Eco-friendly hydrofoam brick technology",
        "Expandable, modular designs",
        "50+ year structural lifespan"
      ]
    },
    {
      icon: Users,
      title: "Empowering Communities",
      subtitle: "Skills, not handouts",
      image: "/hero-youth-training.png",
      features: [
        "6-week intensive training programs",
        "Business & entrepreneurship skills",
        "70% women participation goal"
      ]
    },
    {
      icon: TreePine,
      title: "Protecting the Planet",
      subtitle: "Build without destroying",
      image: "/tree-planting.png",
      features: [
        "60% lower CO₂ emissions",
        "Zero deforestation policy",
        "Active tree planting programs"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-earth-brown-950 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-5xl">
            Our Three-Pillar Approach
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Integrated solutions for sustainable community transformation across Africa
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all hover:bg-white/10"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-brown-950 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <Icon className="h-10 w-10 text-sunset-orange" />
                  </div>
                  <h3 className="mb-2 font-heading text-2xl font-bold">
                    {pillar.title}
                  </h3>
                  <p className="mb-4 text-sm text-white/70">
                    {pillar.subtitle}
                  </p>
                  <ul className="space-y-2">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-white/80">
                        <span className="text-forest-green-400 font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
