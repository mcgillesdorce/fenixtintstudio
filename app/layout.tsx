import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Using a system/Google fallback for display font — swap with Clash Display if you have the file
const bricolage = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fenixtintstudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fenix Garage Tint Studio — Precision Tinting. Premium Finish.",
    template: "%s | Fenix Garage Tint Studio",
  },
  description:
    "Professional window tinting for automotive, residential, and commercial clients. Ceramic & nano-ceramic films, expert installation, lifetime care. Book your free estimate today.",
  keywords: [
    "window tinting",
    "automotive tinting",
    "car tinting",
    "residential window film",
    "commercial window tinting",
    "ceramic tint",
    "nano-ceramic tint",
    "Fenix Garage",
    "Fenix Garage Tint Studio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Fenix Garage Tint Studio",
    title: "Fenix Garage Tint Studio — Precision Tinting. Premium Finish.",
    description:
      "Professional window tinting for automotive, residential, and commercial clients. Ceramic & nano-ceramic films, expert installation, lifetime care.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fenix Tint Studio — Precision Tinting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fenix Garage Tint Studio — Precision Tinting. Premium Finish.",
    description:
      "Professional window tinting for automotive, residential, and commercial clients.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fenix Garage Tint Studio",
  description:
    "Professional window tinting for automotive, residential, and commercial clients.",
  url: siteUrl,
  telephone: "+1-555-000-0000",
  email: "hello@fenixtintstudio.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main Street",
    addressLocality: "Your City",
    addressRegion: "ST",
    postalCode: "00000",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "15:00",
    },
  ],
  priceRange: "$$",
  image: `${siteUrl}/og-image.jpg`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-background text-white antialiased">{children}</body>
    </html>
  );
}
