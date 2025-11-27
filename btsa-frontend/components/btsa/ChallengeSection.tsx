import { Home, Users, TreeDeciduous } from "lucide-react";

export function ChallengeSection() {
  const challenges = [
    {
      icon: Home,
      stat: "100M+",
      label: "Lack adequate shelter",
      description: "Millions of families across Africa live in inadequate housing, facing health risks and economic hardship."
    },
    {
      icon: Users,
      stat: "60%",
      label: "Youth unemployment",
      description: "Young people across the continent need marketable skills and economic opportunities to build futures."
    },
    {
      icon: TreeDeciduous,
      stat: "80%",
      label: "Rely on wood fuel",
      description: "Deforestation crisis driven by traditional building methods and energy needs threatens our environment."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-5xl">
            The Challenge Facing Africa
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Housing poverty, youth unemployment, and environmental degradation are interconnected crises—but we see opportunity, not just problems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            return (
              <div
                key={challenge.label}
                className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 text-center hover:bg-white/10 transition-all"
              >
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full bg-sunset-orange/20 p-4">
                    <Icon className="h-10 w-10 text-sunset-orange" />
                  </div>
                </div>
                <div className="mb-2 font-heading text-5xl font-bold text-white">
                  {challenge.stat}
                </div>
                <div className="mb-4 text-lg font-semibold text-gray-200">
                  {challenge.label}
                </div>
                <p className="text-sm text-gray-400">
                  {challenge.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <blockquote className="mx-auto max-w-3xl text-2xl font-medium italic text-gray-200">
            "But we see opportunity, not just crisis. Every challenge is a chance to build something better—together."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
