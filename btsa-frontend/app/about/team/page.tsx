import { Header } from "@/components/btsa/Header";
import { Footer } from "@/components/btsa/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Quote } from "lucide-react";

export default function TeamPage() {
  const team = [
    {
      name: "Bisasa Lewis Nakabaale",
      role: "Founder & Executive Director",
      country: "Uganda 🇺🇬",
      bio: "I've witnessed the devastating cycle of inadequate housing, poverty, and environmental degradation across African communities. BTSA is my commitment to breaking this cycle through sustainable solutions that empower people, not just provide aid. We're building a movement, not just homes.",
      image: "/team/bisasa-lewis-nakabaale.jpeg"
    },
    {
      name: "Engr. Geitodyu Henrique Crusoe",
      role: "Assistant Project Coordinator",
      country: "Liberia 🇱🇷",
      bio: "I've seen firsthand how lack of opportunity drives young people to despair. In Liberia, we call them Zokos - disadvantaged youth lost to drugs and hopelessness. But I see master builders, entrepreneurs, and community leaders waiting to emerge. With the right skills and support, they can transform not just their own lives, but rebuild our nation sustainably.",
      image: "/team/geitodyu-henrique-crusoe.jpg"
    },
    {
      name: "Abdulhafiz Hassan Omar",
      role: "Deputy Executive Director & Projects Manager",
      country: "Uganda 🇺🇬",
      bio: "Sustainable development requires strategic thinking and meticulous execution. I'm here to ensure every project BTSA undertakes delivers maximum impact with full accountability.",
      image: "/team/abdulhafiz-hassan-omar.jpeg"
    },
    {
      name: "Matovu Timothy",
      role: "Chief of Staff",
      country: "Uganda 🇺🇬",
      bio: "Behind every successful mission is a well-oiled organizational machine. I ensure BTSA operates efficiently so our teams can focus on changing lives.",
      image: "/team/matovu-timothy.jpeg"
    },
    {
      name: "Esther Tigamalwayo Yvonne",
      role: "Secretary & Grants Coordinator",
      country: "Uganda 🇺🇬",
      bio: "Every project starts with funding, and every partnership begins with clear communication. I connect BTSA's mission with the resources needed to make it reality.",
      image: "/team/esther-Tigamalwayo-yvonne.jpeg"
    },
    {
      name: "Nansasi Josephine",
      role: "Assistant Secretary & Programs Coordinator",
      country: "Uganda 🇺🇬",
      bio: "Programs are where our mission meets reality. I ensure every initiative is well-coordinated, community-centered, and impactful.",
      image: "/team/nansasi-josephine.jpeg"
    },
    {
      name: "Namanda Patience",
      role: "Legal Advisor",
      country: "Uganda 🇺🇬",
      bio: "Legal protection isn't bureaucracy - it's the foundation that allows BTSA to operate fearlessly and make bold moves for African communities.",
      image: "/team/namanda-patience.jpeg"
    },
    {
      name: "Kasirye Mahad",
      role: "Assistant Legal Advisor",
      country: "Uganda 🇺🇬",
      bio: "Strong legal foundations enable bold action. I help ensure BTSA operates with integrity and protection across all African jurisdictions.",
      image: "/team/kasirye-mahad.jpeg"
    },
    {
      name: "Akankwatsa John Patrick",
      role: "Statistics Department Lead",
      country: "Uganda 🇺🇬",
      bio: "Numbers tell the story of our impact. I ensure BTSA's work is measured, understood, and continuously improved through rigorous data analysis.",
      image: "/team/akankwatsa-john-patrick.jpeg"
    },
    {
      name: "Hilary Abindabyamu",
      role: "Sustainability & Climate Action Lead",
      country: "Uganda 🇺🇬",
      bio: "We can't build homes on a dying planet. Every BTSA project must heal the environment while sheltering communities - that's my mandate.",
      image: "/team/hilary-abindabyamu.jpeg"
    },
    {
      name: "Nikuze Nzabandora Beatrice",
      role: "Human Resource Manager & Tour Coordinator",
      country: "Uganda 🇺🇬",
      bio: "Our people are our greatest asset. I ensure BTSA attracts, develops, and retains passionate professionals who believe in our mission.",
      image: "/team/nikuze-nzabandora-beatrice.jpeg"
    },
    {
      name: "Diana Rose",
      role: "Research & Innovation Officer",
      country: "Uganda 🇺🇬",
      bio: "Innovation keeps BTSA ahead. I explore cutting-edge solutions in sustainable construction so we always deliver the best to communities.",
      image: "/team/diana-rose.jpeg"
    },
    {
      name: "Nagawa Deborah Edith",
      role: "Coordinator",
      country: "Uganda 🇺🇬",
      bio: "Coordination is the glue that holds ambitious projects together. I make sure all our moving parts work in harmony.",
      image: "/team/nagawa-deborah-edith.jpeg"
    },
    {
      name: "Akandawanaho Alvin Sam",
      role: "ICT Officer",
      country: "Uganda 🇺🇬",
      bio: "Technology amplifies impact. I ensure BTSA has the digital infrastructure to operate efficiently and reach communities effectively.",
      image: "/team/akandawanaho-alvin-sam.jpeg"
    },
    {
      name: "Minawa Arnold Desire",
      role: "IT Specialist",
      country: "DR Congo 🇨🇩",
      bio: "From DRC to Uganda to Liberia - technology connects our international team. I build the digital bridges that make our collaboration seamless.",
      image: "/team/minawa-arnold-desire.jpeg"
    },
    {
      name: "Abigail Epongseh Mba Ah Mbatu",
      role: "Welfare Officer",
      country: "Cameroon 🇨🇲",
      bio: "Caring for our team's well-being is essential to our mission. I ensure every member feels supported, valued, and empowered to do their best work.",
      image: "/team/abigail-epongseh-mba-ah-mbatu.jpeg"
    },
    {
      name: "Anoh Precious Akwe",
      role: "Assistant Welfare Officer",
      country: "Cameroon 🇨🇲",
      bio: "A healthy, happy team builds stronger communities. I work to create an environment where everyone can thrive personally and professionally.",
      image: "/team/anoh-precious-akwe.jpeg"
    },
    {
      name: "Awonge Precious Adaeze",
      role: "Communications Officer",
      country: "Nigeria 🇳🇬",
      bio: "Effective communication amplifies our impact. I ensure BTSA's message reaches communities, partners, and supporters across Africa and beyond.",
      image: "/team/awonge-precious-adaeze.jpeg"
    },
    {
      name: "Diana Bosibori Nyakoe",
      role: "Social Media Manager",
      country: "Kenya 🇰🇪",
      bio: "Social media is where movements are built. I connect BTSA's mission with audiences worldwide, inspiring action and engagement.",
      image: "/team/diana-bosibori-nyakoe.jpeg"
    },
    {
      name: "Dulandzev Melvis Berinyuy",
      role: "Content Creator",
      country: "Cameroon 🇨🇲",
      bio: "Compelling content tells our story. I create narratives that showcase BTSA's impact and inspire others to join our mission.",
      image: "/team/dulandzev-melvis-berinyuy.jpeg"
    },
    {
      name: "Fred Muno Ochaka",
      role: "Graphic Designer",
      country: "Kenya 🇰🇪",
      bio: "Design brings our vision to life. I create visual identities that communicate BTSA's values and capture the spirit of our work.",
      image: "/team/fred-muno-ochaka.jpeg"
    },
    {
      name: "Gloria Munyi",
      role: "Videographer",
      country: "Kenya 🇰🇪",
      bio: "Video captures the human stories behind our work. I document BTSA's journey, showing the real impact we're making in communities.",
      image: "/team/gloria-munyi.jpeg"
    },
    {
      name: "Ngebenui Queency",
      role: "Photographer",
      country: "Cameroon 🇨🇲",
      bio: "Photography freezes moments of transformation. I capture the faces, places, and progress that define BTSA's mission.",
      image: "/team/ngebenui-queency.jpeg"
    },
    {
      name: "Samjeh Lourdes",
      role: "Event Coordinator",
      country: "Cameroon 🇨🇲",
      bio: "Events bring people together for a common cause. I create experiences that engage communities and build lasting partnerships for BTSA.",
      image: "/team/samjeh-lourdes.jpeg"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-earth-brown-900 py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 font-heading text-4xl font-bold md:text-6xl">
              Meet the Team
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-200">
              24 professionals from across Africa, working together as equals to build a sustainable future.
            </p>
          </div>
        </section>

        {/* Diversity Stats */}
        <section className="bg-white py-12 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-4 text-center">
              <div className="p-4 rounded-lg bg-forest-green-50">
                <div className="text-3xl font-bold text-forest-green mb-1">24</div>
                <div className="text-sm text-gray-600 font-medium">Team Members</div>
              </div>
              <div className="p-4 rounded-lg bg-sunset-orange-50">
                <div className="text-3xl font-bold text-sunset-orange mb-1">62.5%</div>
                <div className="text-sm text-gray-600 font-medium">Women (15)</div>
              </div>
              <div className="p-4 rounded-lg bg-sky-blue-50">
                <div className="text-3xl font-bold text-sky-blue mb-1">37.5%</div>
                <div className="text-sm text-gray-600 font-medium">Men (9)</div>
              </div>
              <div className="p-4 rounded-lg bg-earth-brown-50">
                <div className="text-3xl font-bold text-earth-brown mb-1">6</div>
                <div className="text-sm text-gray-600 font-medium">Countries Represented</div>
              </div>
            </div>
          </div>
        </section>

        {/* Unified Team Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {team.map((member, index) => (
                <div key={index} className="group flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all hover:border-earth-brown">
                  <div className="relative h-64 bg-gray-100">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-50 text-gray-400 font-medium">
                        [Photo]
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                    <div className="text-sm font-semibold text-earth-brown mb-2">{member.role}</div>
                    <div className="text-xs font-medium text-gray-500 mb-4">{member.country}</div>
                    
                    <div className="relative flex-1">
                      <Quote className="absolute -top-2 -left-2 h-4 w-4 text-gray-300 rotate-180" />
                      <p className="text-sm text-gray-600 italic pl-4 relative z-10">
                        "{member.bio}"
                      </p>
                    </div>
                    
                    {/* Social Links (Optional) */}
                    <div className="flex gap-2 mt-auto pt-4 border-t border-gray-100">
                      <button className="text-gray-400 hover:text-earth-brown transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-earth-brown transition-colors">
                        <Mail className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20 bg-forest-green-50 text-center">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900">Join Our Professional Network</h2>
            <p className="mb-8 text-lg text-gray-600 max-w-2xl mx-auto">
              We are always looking for passionate architects, engineers, and changemakers to join our flat, collaborative team.
            </p>
            <Button size="lg" className="bg-forest-green hover:bg-forest-green-700 text-white" asChild>
              <Link href="/get-involved/volunteer">Apply to Join</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
