"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { IconX } from "@/components/Icons";
import Link from "next/link";

// Gallery images - replace with real client photos
// Put images in /public/images/gallery/ and update paths
const galleryImages: { src: string; alt: string; category: string }[] = [];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories = siteConfig.galleryCategories;
  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Page Header */}
      <section className="glow-bg relative bg-secondary text-white py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-glow text-4xl md:text-5xl font-extrabold mb-4">Our Work</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real jobs, real results - across Riverside and the Inland Empire.
          </p>
        </div>
      </section>

      <div className="glow-divider" />

      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Filter */}
          {categories.length > 0 && galleryImages.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-[0_0_12px_rgba(30,144,255,0.4)]"
                      : "bg-white/5 border border-white/10 text-gray-400 hover:border-primary/40 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Image Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxImage(img.src)}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer card-glow"
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </button>
              ))}
            </div>
          ) : (
            /* Empty state - coming soon */
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔧</div>
              <h2 className="text-2xl font-bold text-white mb-3">Photos Coming Soon</h2>
              <p className="text-text-light max-w-md mx-auto mb-8">
                We&apos;re loading up our portfolio with real job photos. In the meantime, give us a call to hear about our work.
              </p>
              <Link
                href="/contact"
                className="btn-glow inline-block px-8 py-4 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-all"
              >
                Get a Free Quote
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <IconX className="w-8 h-8" />
          </button>
        </div>
      )}
    </>
  );
}
