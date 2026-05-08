// Business constants — update before going live
export const BUSINESS = {
  name: "Fenix Garage Tint Studio",
  shortName: "Fenix Garage",
  tagline: "Precision Tinting. Premium Finish.",
  phone: "+1 (555) 000-0000",
  email: "hello@fenixtintstudio.com",
  address: {
    street: "123 Main Street",
    city: "Your City",
    state: "ST",
    zip: "00000",
  },
  hours: [
    { days: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
    { days: "Saturday", hours: "9:00 AM – 3:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
  social: {
    instagram: "https://instagram.com/fenixtintstudio",
    facebook: "https://facebook.com/fenixtintstudio",
    tiktok: "https://tiktok.com/@fenixtintstudio",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    id: "automotive",
    title: "Automotive Tinting",
    description:
      "Any make, any model. Ceramic and nano-ceramic films that block heat, UV, and glare without compromising visibility.",
    icon: "Car",
    href: "#services",
  },
  {
    id: "residential",
    title: "Residential",
    description:
      "UV protection, privacy, and energy savings for your home. Keep interiors cool and furnishings fade-free.",
    icon: "Home",
    href: "#services",
  },
  {
    id: "commercial",
    title: "Commercial",
    description:
      "Energy efficiency and branding for offices, storefronts, and commercial glass — installed with minimal downtime.",
    icon: "Building2",
    href: "#services",
  },
  {
    id: "custom",
    title: "Custom Requests",
    description:
      "Boats, RVs, specialty glass, and decorative film. If it has glass, we can tint it.",
    icon: "Sparkles",
    href: "#services",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We assess your needs, walk you through film options, and provide a no-obligation estimate.",
  },
  {
    number: "02",
    title: "Precision Install",
    description:
      "Our technicians prepare and install your film with exacting attention to edges, curves, and clarity.",
  },
  {
    number: "03",
    title: "Lifetime Care",
    description:
      "Every installation is backed by our satisfaction guarantee and manufacturer warranty support.",
  },
];

export const TESTIMONIALS = [
  {
    stars: 5,
    quote:
      "Absolutely flawless tint on my Porsche 911. The team at Fenix took their time and the result looks factory — you can't even see an edge.",
    name: "Marcus R.",
    service: "Automotive — Ceramic Tint",
  },
  {
    stars: 5,
    quote:
      "Had three offices done in a single day. Cut our AC usage noticeably and the front glass looks sleek now. Zero disruption to our team.",
    name: "Danielle K.",
    service: "Commercial — Office Suite",
  },
  {
    stars: 5,
    quote:
      "The residential install on our sunroom was perfect. No bubbles, no creases — and the UV block makes a huge difference in the summer.",
    name: "Jason T.",
    service: "Residential — UV Film",
  },
];

// ─── Work categories shown in the gallery section ───────────────────────────
// To add your project photos:
//   1. Drop your image into /public/gallery/categories/
//      Name it: vehicles.jpg (or .png / .webp), commercial.jpg, residential.jpg, custom.jpg
//   2. Update the `src` field below to point to your new file.
//      The placeholder SVGs will show until you replace them.
// Recommended image size: 1200 × 800 px, landscape orientation.
export const WORK_CATEGORIES = [
  {
    id: "vehicles",
    label: "Vehicles",
    description: "Cars · Trucks · Vans · Motorcycles · Boats · RVs",
    // → replace placeholder with your vehicle project photo:
    src: "/gallery/categories/vehicles.svg",
    alt: "Window tint on vehicles of all sizes — cars, trucks, vans",
  },
  {
    id: "commercial",
    label: "Commercial",
    description: "Storefronts · Office Buildings · Warehouses · Retail",
    // → replace placeholder with your commercial project photo:
    src: "/gallery/categories/commercial.svg",
    alt: "Commercial window film on storefronts and office buildings",
  },
  {
    id: "residential",
    label: "Residential",
    description: "Homes · Sunrooms · Sliding Doors · Skylights · Condos",
    // → replace placeholder with your residential project photo:
    src: "/gallery/categories/residential.svg",
    alt: "Residential window film on homes and sunrooms",
  },
  {
    id: "custom",
    label: "Custom Requests",
    description: "Decorative · Frosted · Privacy · Specialty Film · Any Glass",
    // → replace placeholder with your custom project photo:
    src: "/gallery/categories/custom.svg",
    alt: "Custom and specialty window film installations",
  },
] as const;

// ─── Full portfolio grid (added when project photos are ready) ────────────────
// Drop photos into /public/gallery/ and add entries here.
// Format: { src: "/gallery/your-photo.jpg", alt: "...", caption: "..." }
export const PORTFOLIO_ITEMS: { src: string; alt: string; caption: string }[] = [];
