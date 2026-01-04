import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HandHeart, Users, Handshake, Share2, ArrowRight } from "lucide-react";

export function GetInvolvedSection() {
  const actions = [
    {
      icon: HandHeart,
      title: "Donate",
      description: "Fund sustainable housing and skills training programs",
      href: "/get-involved/donate",
      color: "sunset-orange"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our international team of professionals",
      href: "/get-involved/volunteer",
      color: "forest-green"
    },
    {
      icon: Handshake,
      title: "Partner",
      description: "Corporate and NGO collaboration opportunities",
      href: "/get-involved/partner",
      color: "sky-blue"
    },
    {
      icon: Share2,
      title: "Share",
      description: "Help spread the word about our mission",
      href: "/get-involved/share",
      color: "earth-brown"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 md:text-5xl">
            Get Involved
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Every action counts. Choose how you want to make a difference in African communities.
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.title}
                href={action.href}
                className="group relative overflow-hidden rounded-xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-earth-brown hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className={`rounded-lg bg-${action.color}-100 p-3 transition-transform group-hover:scale-110`}>
                    <Icon className={`h-6 w-6 text-${action.color}-700`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 font-heading text-xl font-bold text-gray-900">
                      {action.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600">
                      {action.description}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-earth-brown">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
 