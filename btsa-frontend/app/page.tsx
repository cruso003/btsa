import { Header } from "@/components/btsa/Header";
import { Footer } from "@/components/btsa/Footer";
import { EventBanner } from "@/components/btsa/EventBanner";
import { HeroSection } from "@/components/btsa/HeroSection";
import { ImpactCounters } from "@/components/btsa/ImpactCounters";
import { ChallengeSection } from "@/components/btsa/ChallengeSection";
import { ThreePillarsSection } from "@/components/btsa/ThreePillarsSection";
import { HowWeWorkSection } from "@/components/btsa/HowWeWorkSection";
import { CurrentInitiativesSection } from "@/components/btsa/CurrentInitiativesSection";
import { TeamPreviewSection } from "@/components/btsa/TeamPreviewSection";
import { GalleryPreviewSection } from "@/components/btsa/GalleryPreviewSection";
import { GetInvolvedSection } from "@/components/btsa/GetInvolvedSection";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <EventBanner />
      
      <main className="flex-1 pt-32">
        <HeroSection />
        <ImpactCounters />
        <ChallengeSection />
        <ThreePillarsSection />
        <HowWeWorkSection />
        <CurrentInitiativesSection />
        <TeamPreviewSection />
        <GalleryPreviewSection />
        <GetInvolvedSection />
      </main>

      <Footer />
    </div>
  );
}
