import { Header } from "@/components/btsa/Header";
import { Footer } from "@/components/btsa/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gray-900 py-20 text-white text-center">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 font-heading text-4xl font-bold md:text-6xl">
              Get in Touch
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              Have a question, a project idea, or want to say hello? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="mb-6 font-heading text-3xl font-bold text-gray-900">Contact Information</h2>
                  <p className="text-gray-600 mb-8">
                    Our team is distributed across Africa, with our headquarters in Kampala, Uganda.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-earth-brown-100 p-3 text-earth-brown">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Headquarters</h3>
                      <p className="text-gray-600">
                        Plot No. 1112/1121, Kansanga Ggaba Rd<br />
                        P.O. Box 35502, Kampala, Uganda
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-earth-brown-100 p-3 text-earth-brown">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Phone</h3>
                      <p className="text-gray-600">
                        +256 761 070 710<br />
                        +256 700 252 723
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-earth-brown-100 p-3 text-earth-brown">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Email</h3>
                      <a href="mailto:africabuildtoshelter@gmail.com" className="text-gray-600 hover:text-earth-brown">
                        africabuildtoshelter@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-[400px] rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
                [Google Map Embed: Kansanga Ggaba Rd, Kampala]
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
