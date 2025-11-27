"use client";

import { Users, Globe2, Hammer, TrendingUp } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const stats = [
  {
    label: "Pan-African Professionals",
    value: 16,
    suffix: "+",
    icon: Users,
    color: "text-earth-brown",
    bg: "bg-earth-brown-50",
    border: "border-earth-brown-200",
  },
  {
    label: "Countries Represented",
    value: 3,
    suffix: "",
    icon: Globe2,
    color: "text-forest-green",
    bg: "bg-forest-green-50",
    border: "border-forest-green-200",
  },
  {
    label: "Initiatives Launching",
    value: 2,
    suffix: "",
    icon: Hammer,
    color: "text-sunset-orange",
    bg: "bg-sunset-orange-50",
    border: "border-sunset-orange-200",
  },
  {
    label: "Lives to be Impacted",
    value: 1000,
    suffix: "+",
    icon: TrendingUp,
    color: "text-sky-blue",
    bg: "bg-sky-blue-50",
    border: "border-sky-blue-200",
  },
];

export function ImpactCounters() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <StaggerContainer ref={ref} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StaggerItem
              key={index}
              className={`relative overflow-hidden rounded-2xl border ${stat.border} ${stat.bg} p-8 text-center transition-all hover:shadow-lg hover:scale-105`}
            >
              <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className={`mb-2 font-heading text-4xl font-bold ${stat.color}`}>
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
