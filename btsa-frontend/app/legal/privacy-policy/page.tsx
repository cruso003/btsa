import { Header } from "@/components/btsa/Header";
import { Footer } from "@/components/btsa/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gray-900 py-20 text-white text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-heading text-4xl font-bold md:text-6xl">Privacy Policy</h1>
          </div>
        </section>
        <div className="container mx-auto px-4 max-w-3xl py-12">
          <div className="prose prose-lg text-gray-700">
            <p>Last updated: November 2025</p>
            <p>Build To Shelter Africa ("us", "we", or "our") operates the BTSA website.</p>
            <h3>Information Collection</h3>
            <p>We collect information you provide directly to us when you donate, volunteer, or contact us.</p>
            <h3>Use of Information</h3>
            <p>We use the information to communicate with you about our projects and impact.</p>
            {/* Add full policy content here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
