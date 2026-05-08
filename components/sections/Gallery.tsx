import Link from "next/link";
import { GlossyButton } from "@/components/ui/GlossyButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PortfolioSlideshow } from "@/components/ui/PortfolioSlideshow";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 px-4 border-t border-white/[0.05]"
      aria-labelledby="gallery-heading"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-glow-radial opacity-30"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="mb-16 flex justify-center">
          <SectionHeading
            eyebrow="Our Work"
            title="We tint everything."
            description="From exotic supercars to commercial storefronts to your home — if it has glass, we can tint it."
            id="gallery-heading"
          />
        </Reveal>

        {/* ── Portfolio Slideshow ───────────────────────────────────────── */}
        <Reveal className="mb-6">
          <div className="max-w-4xl mx-auto">
            <PortfolioSlideshow slides={PORTFOLIO_ITEMS} />
          </div>
        </Reveal>

        {/* ── View Full Gallery link ───────────────────────────────────── */}
        <Reveal delay={0.15} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm text-brand-gold hover:text-white transition-colors duration-200 group"
          >
            View Full Gallery
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <span className="hidden sm:block text-white/10">·</span>
          <a
            href="https://meetings-na2.hubspot.com/will-m"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
          >
            Book a Free Estimate
          </a>
        </Reveal>
      </div>
    </section>
  );
}


