import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.companyName} - trusted HVAC service in Riverside, CA since 2008. Ranked in the top 9% of California contractors. Licensed, certified, and committed to honest pricing.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {siteConfig.about.mission}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {siteConfig.about.highlights.map((item, i) => (
              <div key={i} className="card-glow bg-white text-center p-6 rounded-xl">
                <div className="text-4xl font-extrabold text-primary mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {siteConfig.about.story}
          </p>

          <div className="card-glow mt-12 p-6 bg-gray-50 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Trusted Since 2008
            </h3>
            <p className="text-gray-500">
              {siteConfig.companyName} was established in {siteConfig.foundedYear} with a simple goal - {siteConfig.about.mission.toLowerCase()}
            </p>
          </div>

          {/* Trust Points */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Licensed (#917275) & Insured",
              "Ranked Top 9% of CA Contractors",
              "55+ Completed Permits Since 2008",
              "Perfect 5.0 Google Rating",
              "Same-Day Service Available",
              "Free Consultations",
              "Transparent Pricing - No Surprises",
              "Residential & Commercial",
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700">
                <span className="text-primary font-bold text-lg">✓</span>
                <span className="text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Meet the Team</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              The people behind nearly two decades of trusted HVAC service in the Inland Empire.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.team.map((member, i) => (
              <div key={i} className="card-glow bg-white p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Service Areas</h2>
          <p className="text-gray-500 mb-8">
            We proudly serve homeowners and businesses across the Inland Empire.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.serviceAreas.map((area, i) => (
              <span
                key={i}
                className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-gray-700 font-medium text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-gray-900">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Ready to get comfortable? We&apos;re one call away.
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
