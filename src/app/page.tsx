import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ServiceIcon, IconChevronRight } from "@/components/Icons";

export default function HomePage() {
  return (
    <>
      {/* Hero Section - dark banner */}
      <section className="relative bg-gray-900 text-white py-24 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase bg-primary/15 text-primary border border-primary/30">
            Riverside &amp; Inland Empire HVAC Experts
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            {siteConfig.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            {siteConfig.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={siteConfig.hero.ctaLink}
              className="px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary-dark transition-all shadow-lg"
            >
              {siteConfig.hero.ctaText}
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="px-8 py-4 border border-white/20 text-white rounded-lg font-bold text-lg hover:border-primary/60 hover:bg-white/5 transition-all"
            >
              Call {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-50 py-5 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-primary text-base">✓</span> Licensed &amp; Insured
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-base">✓</span> Same-Day Service Available
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-base">✓</span> Transparent Pricing
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-base">✓</span> Free Consultations
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-base">★</span> 17+ Years Experience
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Full HVAC service for homes and businesses across the Inland Empire.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((service, i) => (
              <div
                key={i}
                className="card-glow bg-white p-6 rounded-xl"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <ServiceIcon name={service.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View All Services <IconChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
            {siteConfig.about.highlights.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Even Flow?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-8">
              {siteConfig.about.mission}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/40 text-primary rounded-lg font-medium hover:bg-primary/20 transition-all"
            >
              Learn More About Us <IconChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {siteConfig.testimonials.length > 0 && (
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {siteConfig.testimonials.map((t, i) => (
                <div
                  key={i}
                  className="card-glow bg-white p-6 rounded-xl"
                >
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} className="text-primary text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4 leading-relaxed text-sm">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.author}</div>
                    <div className="text-xs text-gray-500">{t.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner - dark */}
      <section className="relative py-20 md:py-24 bg-gray-900">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            AC down? Heater not working? Call us now - same-day service available in Riverside and the Inland Empire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary-dark transition-all shadow-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="inline-block px-8 py-4 border border-white/20 text-white rounded-lg font-bold text-lg hover:border-primary/60 hover:bg-white/5 transition-all"
            >
              Call {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
