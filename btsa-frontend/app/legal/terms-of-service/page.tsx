import { Header } from "@/components/btsa/Header";
import { Footer } from "@/components/btsa/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gray-900 py-20 text-white text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-heading text-4xl font-bold md:text-6xl">Terms of Service</h1>
          </div>
        </section>
        <div className="container mx-auto px-4 max-w-3xl py-12">
          <div className="prose prose-lg text-gray-700">
            <p>Last updated: November 2025</p>
            <p>Please read these Terms of Service carefully before using the BTSA website.</p>
            <h3>Acceptance of Terms</h3>
            <p>By accessing or using the Service you agree to be bound by these Terms.</p>
            {/* Add full terms content here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
