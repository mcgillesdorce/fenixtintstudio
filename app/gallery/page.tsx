import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our completed window tint projects — automotive, residential, commercial, and custom installs by Fenix Garage Tint Studio.",
};

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-16 bg-background">
        {/* Page header */}
        <div className="relative border-b border-white/[0.05] py-16 md:py-20 px-4 overflow-hidden">
          {/* Subtle background glow */}
          <div
            className="pointer-events-none absolute inset-0 bg-glow-radial opacity-20"
            aria-hidden="true"
          />
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-zinc-500 tracking-widest uppercase">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-brand-gold/70">Gallery</span>
            </nav>

            <p className="text-[10px] tracking-[0.3em] uppercase text-brand-gold/60 mb-3">
              Our Work
            </p>
            <h1 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
              Completed Projects
            </h1>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed">
              Every install, finished to perfection. Click any photo to view full size.
            </p>

            {/* Stats row */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
              <div>
                <span className="text-brand-gold font-semibold text-lg">{PORTFOLIO_ITEMS.length}</span>
                <span className="text-zinc-500 ml-1.5 text-xs tracking-wider uppercase">Projects</span>
              </div>
              <div className="h-4 w-px bg-white/10" aria-hidden="true" />
              <div>
                <span className="text-brand-gold font-semibold text-lg">4</span>
                <span className="text-zinc-500 ml-1.5 text-xs tracking-wider uppercase">Service Types</span>
              </div>
              <div className="h-4 w-px bg-white/10" aria-hidden="true" />
              <div>
                <span className="text-brand-gold font-semibold text-lg">5★</span>
                <span className="text-zinc-500 ml-1.5 text-xs tracking-wider uppercase">Rated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <GalleryGrid items={PORTFOLIO_ITEMS} />
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-white/[0.05] py-16 px-4 text-center">
          <p className="text-zinc-400 text-sm mb-6">
            Ready to transform your vehicle, home, or building?
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            Get a Free Estimate
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
