// ============================================================
// SITE CONFIGURATION - Even Flow Heating & Air INC
// ============================================================

export const siteConfig = {
  // Company Info
  companyName: "Even Flow Heating & Air",
  tagline: "Comfort You Can Count On.",
  description: "Even Flow Heating & Air INC provides expert HVAC installation, repair, and maintenance in Riverside, CA and the surrounding Inland Empire. Licensed (#917275), insured, and ranked in the top 9% of California contractors. Trusted since 2008.",
  foundedYear: "2008",
  founderName: "Bryan Edwards",

  // Contact Info
  contact: {
    email: "evenflowair@yahoo.com",
    phone: "(951) 684-4979",
    address: "1700 Century Ave, Riverside, CA 92506",
  },

  // Business Details
  license: "#917275",
  hours: "Mon-Sat 7:00 AM - 5:00 PM",
  serviceAreas: ["Riverside", "Corona", "Moreno Valley", "Inland Empire"],

  // Social Media Links (leave empty string to hide)
  social: {
    facebook: "https://www.facebook.com/p/Even-Flow-Heating-Air-Inc-100063520199556",
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
    primary: "#ea580c",
    primaryDark: "#c2410c",
    primaryLight: "#fb923c",
    secondary: "#ffffff",
    accent: "#ea580c",
    background: "#ffffff",
    surface: "#f5f5f5",
    text: "#1a1a1a",
    textLight: "#6b7280",
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
    story: "Even Flow Heating & Air INC was founded by Bryan Edwards in 2008 right here in Riverside, CA. What started as a commitment to honest, quality HVAC work has grown into nearly two decades of trusted service across the Inland Empire. Bryan and his team - including Henry Galindo and Paul Reese - bring a combined wealth of experience to every job, from routine maintenance to full system installations. Even Flow is ranked in the top 9% of all California contractors by BuildZoom, with 55+ completed permits and a perfect 5-star rating. That track record is not an accident - it is the result of treating every customer like a neighbor and every home like their own.",
    mission: "To provide Riverside and the Inland Empire with honest, certified HVAC service that keeps families and businesses comfortable in every season - with transparent pricing and no surprises.",
    highlights: [
      { label: "Years in Business", value: "17+" },
      { label: "Completed Permits", value: "55+" },
      { label: "Google Rating", value: "5.0 ★" },
      { label: "CA Contractor Rank", value: "Top 9%" },
    ],
  },

  // Team
  team: [
    {
      name: "Bryan Edwards",
      role: "Owner",
      description: "Founded Even Flow in 2008 with a vision of honest, quality HVAC service. Bryan leads every project with integrity and hands-on expertise.",
    },
    {
      name: "Henry Galindo",
      role: "Partner",
      description: "A skilled HVAC technician who ensures every installation and repair meets the highest standards of quality and safety.",
    },
    {
      name: "Paul Reese",
      role: "President / RMO",
      description: "Oversees operations and ensures Even Flow maintains its reputation for reliability and professionalism across every job.",
    },
  ],

  // Homepage Hero
  hero: {
    headline: "Comfort You Can Count On.",
    subheadline: "Ranked in the top 9% of California contractors. Expert HVAC installation, repair, and maintenance for homes and businesses in Riverside, CA. Licensed, certified, and trusted since 2008.",
    ctaText: "Get a Free Consultation",
    ctaLink: "/contact",
    secondaryCtaText: "Our Services",
    secondaryCtaLink: "/services",
  },

  // Testimonials - Real Google Reviews
  testimonials: [
    {
      quote: "I have used this company for several years now for all of our clients HVAC needs. They are honest, thorough and very responsive. I would highly recommend them for any HVAC needs.",
      author: "Nathan Devlin",
      company: "Google Review - Local Guide",
    },
    {
      quote: "Had my AC and furnace moved to the attic. The work was excellent quality and the pricing was very competitive. Would definitely use Even Flow again.",
      author: "Simone Piercy",
      company: "Google Review",
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
