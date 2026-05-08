import Image from "next/image";
import Link from "next/link";
import { GlossyButton } from "@/components/ui/GlossyButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { PortfolioSlideshow } from "@/components/ui/PortfolioSlideshow";
import { WORK_CATEGORIES, PORTFOLIO_ITEMS } from "@/lib/constants";

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

        {/* ── 4 Category Cards ─────────────────────────────────────────── */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
          {WORK_CATEGORIES.map((cat) => (
            <StaggerItem key={cat.id}>
              <div className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-surface aspect-[3/2]">
                <Image
                  src={cat.src}
                  alt={cat.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-sm font-semibold text-white tracking-wide leading-tight">
                    {cat.label}
                  </h3>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── Portfolio Slideshow ───────────────────────────────────────── */}
        <Reveal className="mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-white/[0.06]" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-brand-gold/60">
              Recent Projects
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>
          <PortfolioSlideshow slides={PORTFOLIO_ITEMS} />
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
          <GlossyButton as="a" href="#contact" size="md">
            Inquire About Your Project
          </GlossyButton>
        </Reveal>
      </div>
    </section>
  );
}


