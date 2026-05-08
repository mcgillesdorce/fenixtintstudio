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

export const GALLERY_ITEMS = [
  { src: "/gallery/work-01.svg", alt: "Ceramic tint on luxury sedan", caption: "Sedan — Ceramic Film" },
  { src: "/gallery/work-02.svg", alt: "SUV with dark window tint", caption: "SUV — 20% VLT" },
  { src: "/gallery/work-03.svg", alt: "Office storefront tinting", caption: "Commercial Storefront" },
  { src: "/gallery/work-04.svg", alt: "Sports car with precision tint", caption: "Sports Car — 35% VLT" },
  { src: "/gallery/work-05.svg", alt: "Residential sunroom film", caption: "Residential — Sunroom" },
  { src: "/gallery/work-06.svg", alt: "Truck with full window tint", caption: "Truck — Full Package" },
  { src: "/gallery/work-07.svg", alt: "Luxury SUV tinting detail", caption: "Luxury SUV — Nano-Ceramic" },
  { src: "/gallery/work-08.svg", alt: "Office building window film", caption: "Commercial Office" },
  { src: "/gallery/work-09.svg", alt: "Custom decorative window film", caption: "Custom — Decorative Film" },
];
