// ============================================================
// SITE CONFIGURATION - Even Flow Heating & Air INC
// ============================================================

export const siteConfig = {
  // Company Info
  companyName: "Even Flow Heating & Air",
  tagline: "Comfort You Can Count On.",
  description: "Even Flow Heating & Air INC provides expert HVAC installation, repair, and maintenance in Riverside, CA and the surrounding Inland Empire. Licensed (#917275), insured, with 17+ years of trusted service. Free consultations available.",
  foundedYear: "2008",
  founderName: "",

  // Contact Info
  contact: {
    email: "evenflowair@yahoo.com",
    phone: "(951) 684-4979",
    address: "Riverside, CA 92506",
  },

  // Social Media Links (leave empty string to hide)
  social: {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    youtube: "",
    tiktok: "",
    yelp: "",
    google: "",
  },

  // Brand Colors - warm orange theme for HVAC warmth and reliability
  colors: {
    primary: "#ea580c",        // Vivid orange (brand)
    primaryDark: "#c2410c",    // Darker orange (hover)
    primaryLight: "#fb923c",   // Light orange (highlights)
    secondary: "#070707",      // Near black (background)
    accent: "#ea580c",         // Same as primary
    background: "#070707",
    surface: "#0e0e0e",        // Dark card/section background
    text: "#e8e8e8",           // Light text on dark bg
    textLight: "#888888",      // Muted gray
  },

  // Navigation Links
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  // Services
  services: [
    {
      title: "AC Installation & Replacement",
      description: "Beat the Riverside heat with a new, energy-efficient air conditioning system. We size, install, and test your unit for peak performance - residential and commercial.",
      icon: "wrench",
    },
    {
      title: "Heating & Furnace Services",
      description: "Stay warm when temperatures drop. We install, repair, and maintain furnaces, heat pumps, and heating systems for homes and businesses throughout the Inland Empire.",
      icon: "shield",
    },
    {
      title: "HVAC Repair & Diagnostics",
      description: "Is your system blowing warm air or making strange noises? Our certified technicians diagnose and fix the problem fast - often same day.",
      icon: "star",
    },
    {
      title: "Maintenance & Tune-Ups",
      description: "Regular maintenance extends equipment life and prevents costly breakdowns. Our tune-up includes filter change, coil cleaning, and full system inspection.",
      icon: "paintbrush",
    },
    {
      title: "Indoor Air Quality",
      description: "Breathe easier with air purifiers, UV lights, and filtration upgrades. We help remove allergens, dust, and contaminants from your home or business.",
      icon: "globe",
    },
    {
      title: "Commercial HVAC",
      description: "We service businesses and commercial properties throughout Riverside, Corona, and Moreno Valley. Keep your workplace comfortable for staff and customers year-round.",
      icon: "building",
    },
  ],

  // About Page
  about: {
    story: "Even Flow Heating & Air INC has been serving Riverside, CA and the surrounding Inland Empire since 2008. Built on a foundation of honest work and fair pricing, Even Flow has earned the trust of homeowners and businesses across the region. With over 17 years of hands-on HVAC experience, the team delivers reliable comfort solutions - from emergency repairs to full system installations - with the kind of personal attention you only get from a local company that cares.",
    mission: "To provide Riverside and the Inland Empire with honest, certified HVAC service that keeps families and businesses comfortable in every season - with transparent pricing and no surprises.",
    highlights: [
      { label: "Years in Business", value: "17+" },
      { label: "License Number", value: "#917275" },
      { label: "Service Areas", value: "3+ Cities" },
      { label: "Est.", value: "2008" },
    ],
  },

  // Homepage Hero
  hero: {
    headline: "Comfort You Can Count On.",
    subheadline: "Expert HVAC installation, repair, and maintenance for homes and businesses in Riverside, CA and the Inland Empire. Licensed, certified, and trusted since 2008.",
    ctaText: "Get a Free Consultation",
    ctaLink: "/contact",
    secondaryCtaText: "Our Services",
    secondaryCtaLink: "/services",
  },

  // Testimonials
  testimonials: [
    {
      quote: "Even Flow came out the same day we called. They diagnosed the problem quickly, gave us an honest price, and had our AC running before dinner. Great local company.",
      author: "Mike R.",
      company: "Riverside Homeowner",
    },
    {
      quote: "We have used Even Flow for years - maintenance, repairs, and a full system replacement. Always professional, always fair. Highly recommend them to anyone in the area.",
      author: "Lisa T.",
      company: "Corona Business Owner",
    },
    {
      quote: "After getting quotes from three other companies, Even Flow was the most honest and affordable. No pressure, no upselling - just good work at a fair price.",
      author: "James P.",
      company: "Moreno Valley Homeowner",
    },
  ],

  // Gallery Categories
  galleryCategories: ["All", "AC Installation", "Heating", "Commercial", "Maintenance"],

  // SEO
  seo: {
    siteUrl: "https://even-flow-air.vercel.app",
    ogImage: "/images/og-image.jpg",
    twitterHandle: "",
    googleAnalyticsId: "",
  },

  // Footer
  footer: {
    credit: true,
  },
};

// Type export for use throughout the app
export type SiteConfig = typeof siteConfig;
