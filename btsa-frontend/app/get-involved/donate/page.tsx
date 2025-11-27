import { Header } from "@/components/btsa/Header";
import { Footer } from "@/components/btsa/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Heart, ShieldCheck, Globe } from "lucide-react";

export default function DonatePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-sunset-orange-900 py-20 text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 font-heading text-4xl font-bold md:text-6xl">
              Invest in Africa's Future
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-200">
              Your donation doesn't just build a house; it builds dignity, skills, and a sustainable future.
            </p>
          </div>
        </section>

        {/* Donation Options */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {/* Option 1 */}
              <div className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sunset-orange-100 text-sunset-orange-700">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold">General Fund</h3>
                <p className="mb-6 text-gray-600">Support our core operations, team training, and emergency response capabilities.</p>
                <Button className="w-full bg-sunset-orange hover:bg-sunset-orange-700 text-white">Donate General</Button>
              </div>

              {/* Option 2 */}
              <div className="rounded-2xl border-2 border-earth-brown p-8 shadow-lg relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-earth-brown text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST URGENT
                </div>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-earth-brown-100 text-earth-brown-700">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold">Liberia Project</h3>
                <p className="mb-6 text-gray-600">Help us raise $26,000 to train 20 youth and build the empowerment center.</p>
                <Button className="w-full bg-earth-brown hover:bg-earth-brown-700 text-white">Donate to Liberia</Button>
              </div>

              {/* Option 3 */}
              <div className="rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest-green-100 text-forest-green-700">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold">Sponsor a Home</h3>
                <p className="mb-6 text-gray-600">Directly fund the construction of a sustainable home for a vulnerable family.</p>
                <Button className="w-full bg-forest-green hover:bg-forest-green-700 text-white">Sponsor Home</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Bank Details / Manual Donation */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-8 font-heading text-2xl font-bold text-gray-900">Direct Bank Transfer & Mobile Money</h2>
            <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-sm border border-gray-200 text-left">
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-bold text-gray-500 uppercase">Account Name</div>
                  <div className="text-lg font-semibold text-gray-900">Build To Shelter Africa</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-bold text-gray-500 uppercase">Bank</div>
                    <div className="text-lg text-gray-900">Equity Bank Uganda</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500 uppercase">Account Number</div>
                    <div className="text-lg text-gray-900">XXXX-XXXX-XXXX</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm font-bold text-gray-500 uppercase mb-2">Mobile Money (Uganda)</div>
                  <div className="text-lg font-semibold text-earth-brown">+256 761 070 710 / +256 700 252 723</div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              For international wire transfers or partnership inquiries, please contact us directly at <a href="mailto:africabuildtoshelter@gmail.com" className="text-earth-brown underline">africabuildtoshelter@gmail.com</a>
            </p>
          </div>
        </section>

        {/* Transparency Promise */}
        <section className="py-16 bg-white text-center">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-forest-green" />
              <h2 className="mb-4 font-heading text-2xl font-bold">Our Transparency Promise</h2>
              <p className="text-gray-600">
                We believe you have a right to know exactly where your money goes. We provide detailed quarterly reports and direct project updates to all our donors.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
