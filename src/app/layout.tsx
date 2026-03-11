import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.companyName} | HVAC Services in Riverside, CA`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: siteConfig.description,
  keywords: [
    "HVAC Riverside CA",
    "air conditioning repair Riverside",
    "heating repair Riverside",
    "AC installation Riverside",
    "furnace repair Riverside CA",
    "HVAC contractor Inland Empire",
    "Even Flow Heating Air",
    "AC repair Corona CA",
    "heating Moreno Valley",
    "HVAC maintenance Riverside",
  ],
  openGraph: {
    title: `${siteConfig.companyName} | HVAC Services in Riverside, CA`,
    description: siteConfig.description,
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.companyName,
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.seo.siteUrl,
  },
};

// JSON-LD structured data for local business SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Even Flow Heating & Air INC",
  description: siteConfig.description,
  url: siteConfig.seo.siteUrl,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riverside",
    addressRegion: "CA",
    postalCode: "92506",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "33.9533",
    longitude: "-117.3962",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:00",
    closes: "17:00",
  },
  areaServed: [
    { "@type": "City", name: "Riverside" },
    { "@type": "City", name: "Corona" },
    { "@type": "City", name: "Moreno Valley" },
  ],
  foundingDate: "2008-09-06",
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "HVAC Services",
    itemListElement: siteConfig.services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
      },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
