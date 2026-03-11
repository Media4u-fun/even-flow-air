"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { IconPhone, IconMail, IconMapPin } from "@/components/Icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get a Free Quote</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            AC down? Need a new system? Fill out the form and we&apos;ll get back to you fast - same-day service available.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Reach Us Directly</h2>
              <p className="text-gray-500">
                Prefer to talk? Give us a call. We answer fast.
              </p>

              <div className="space-y-4">
                {siteConfig.contact.phone && (
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0">
                      <IconPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Phone</div>
                      <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} className="font-bold text-gray-900 hover:text-primary transition-colors">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                )}

                {siteConfig.contact.email && (
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0">
                      <IconMail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Email</div>
                      <a href={`mailto:${siteConfig.contact.email}`} className="font-bold text-gray-900 hover:text-primary transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                )}

                {siteConfig.contact.address && (
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0">
                      <IconMapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Service Area</div>
                      <div className="font-bold text-gray-900">{siteConfig.contact.address}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Trust list */}
              <div className="pt-4 space-y-2 border-t border-gray-200">
                {["Licensed (#917275) & Insured", "Same-Day Service Available", "Transparent Pricing", "Free Consultations"].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-primary">✓</span> {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {status === "sent" ? (
                <div className="card-glow bg-gray-50 rounded-xl p-10 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 mb-6">
                    Thanks for reaching out. We&apos;ll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-primary underline text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card-glow bg-gray-50 p-8 rounded-xl space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelClass}>Name *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass}
                        placeholder="(951) 555-1234"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className={labelClass}>Service Needed</label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={inputClass + " cursor-pointer"}
                      >
                        <option value="">Select a service</option>
                        {siteConfig.services.map((s, i) => (
                          <option key={i} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>Message *</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={inputClass + " resize-none"}
                      placeholder="Describe your HVAC issue or what you need..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                      Something went wrong. Please call us directly at {siteConfig.contact.phone}.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
