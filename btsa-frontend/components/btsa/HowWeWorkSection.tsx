import { GraduationCap, Search, HandshakeIcon } from "lucide-react";

export function HowWeWorkSection() {
  const steps = [
    {
      icon: Search,
      number: "1",
      title: "Problem Identification",
      description: "We find opportunities through multiple channels:",
      points: [
        "Members identify local challenges",
        "Communities reach out to us",
        "We research SDG gaps across Africa",
        "Partners propose collaborations"
      ]
    },
    {
      icon: GraduationCap,
      number: "2",
      title: "Resource Assessment",
      description: "We evaluate what's needed vs. what's available:",
      points: [
        "Can a member contribute equipment or expertise?",
        "Are there local partners we can work with?",
        "What funding is required for implementation?",
        "How can we maximize impact with available resources?"
      ],
      example: "Our Liberia initiative uses a member's hydrofoam machine, so funds go toward training and building, not equipment purchase."
    },
    {
      icon: HandshakeIcon,
      number: "3",
      title: "Community Partnership",
      description: "We work WITH communities, not FOR them:",
      points: [
        "Partner with local organizations",
        "Co-design solutions with beneficiaries",
        "Ensure cultural respect and sustainability",
        "Build local capacity for long-term impact"
      ]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-3 inline-block rounded-full bg-earth-brown-100 px-4 py-1.5 text-sm font-semibold text-earth-brown-900">
            OUR APPROACH
          </div>
          <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 md:text-5xl">
            How We Identify & Execute Initiatives
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Every project is unique, but all follow our sustainable, community-driven approach aligned with the SDGs
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-earth-brown text-2xl font-bold text-white">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="rounded-xl bg-earth-brown-50 p-4">
                    <Icon className="h-10 w-10 text-earth-brown" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-3 font-heading text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  {step.description}
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {step.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-forest-green font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Example Callout */}
                {step.example && (
                  <div className="mt-4 rounded-lg bg-forest-green-50 border border-forest-green-200 p-4">
                    <div className="text-xs font-bold uppercase tracking-wide text-forest-green-900 mb-1">
                      Example
                    </div>
                    <p className="text-sm text-gray-700">
                      {step.example}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Transparency Note */}
        <div className="mt-16 mx-auto max-w-3xl rounded-xl bg-sky-blue-50 border-2 border-sky-blue-200 p-6 text-center">
          <div className="mb-2 font-heading text-lg font-bold text-gray-900">
            100% Transparency
          </div>
          <p className="text-sm text-gray-700">
            Every initiative shows exactly how funds are used, what resources were contributed, and impact achieved. Track every dollar from donation to impact.
          </p>
        </div>
      </div>
    </section>
  );
}
