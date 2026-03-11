import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.companyName} - trusted HVAC service in Riverside, CA since 2008. Licensed, certified, and committed to honest pricing.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="glow-bg relative bg-secondary text-white py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-glow text-4xl md:text-5xl font-extrabold mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {siteConfig.about.mission}
          </p>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Stats */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {siteConfig.about.highlights.map((item, i) => (
              <div key={i} className="card-glow bg-secondary text-center p-6 rounded-xl">
                <div className="text-glow text-4xl font-extrabold text-primary mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-text-light uppercase tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* Story */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            {siteConfig.about.story}
          </p>

          <div className="card-glow mt-12 p-6 bg-surface rounded-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Trusted Since 2008
            </h3>
            <p className="text-text-light">
              {siteConfig.companyName} was established in {siteConfig.foundedYear} with a simple goal - {siteConfig.about.mission.toLowerCase()}
            </p>
          </div>

          {/* Trust Points */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Licensed (#917275) & Insured",
              "Same-Day Service Available",
              "Transparent Pricing - No Surprises",
              "Free Consultations",
              "Residential & Commercial",
              "Proudly Serving Riverside & the Inland Empire",
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300">
                <span className="text-primary font-bold text-lg">✓</span>
                <span className="text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="glow-divider" />

      {/* CTA */}
      <section className="glow-bg relative py-20 bg-secondary">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-glow text-3xl font-extrabold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Ready to get comfortable? We&apos;re one call away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-glow inline-block px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-all"
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
