import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ServiceIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services",
  description: `HVAC services offered by ${siteConfig.companyName} - AC installation, heating repair, maintenance, and more in Riverside, CA.`,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {siteConfig.tagline}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.services.map((service, i) => (
              <div
                key={i}
                className="card-glow bg-white p-8 rounded-xl"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 text-primary">
                  <ServiceIcon name={service.icon} className="w-7 h-7" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gray-900">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-gray-400 mb-8">
            Call us or send a message - we&apos;ll diagnose the problem and give you a straight answer with transparent pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-all shadow-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="inline-block px-8 py-4 border border-white/20 text-white rounded-lg font-bold hover:border-primary/60 hover:bg-white/5 transition-all"
            >
              Call {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
