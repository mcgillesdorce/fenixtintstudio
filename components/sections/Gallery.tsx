import Image from "next/image";
import { GlossyButton } from "@/components/ui/GlossyButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
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
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {WORK_CATEGORIES.map((cat) => (
            <StaggerItem key={cat.id}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface aspect-[4/3]">
                <Image
                  src={cat.src}
                  alt={cat.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Persistent dark vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Content pinned to bottom-left */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <p className="text-[10px] text-brand-gold/60 tracking-[0.2em] uppercase mb-1">
                    {cat.description}
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide">
                    {cat.label}
                  </h3>
                </div>
                {/* Gold top-left corner accent */}
                <span
                  className="absolute top-4 left-4 block w-5 h-5 border-t border-l border-brand-gold/30 rounded-tl"
                  aria-hidden="true"
                />
                <span
                  className="absolute bottom-4 right-4 block w-5 h-5 border-b border-r border-brand-gold/30 rounded-br"
                  aria-hidden="true"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── Portfolio grid (shown only when photos have been added) ──── */}
        {PORTFOLIO_ITEMS.length > 0 && (
          <div className="mt-16">
            <Reveal className="mb-10 flex justify-center">
              <SectionHeading
                eyebrow="Completed Projects"
                title="Recent installs."
                description="A selection of finished work from our shop."
              />
            </Reveal>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PORTFOLIO_ITEMS.map((item) => (
                <StaggerItem key={item.src}>
                  <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface aspect-[4/3]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-xs text-white font-medium">{item.caption}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <GlossyButton as="a" href="#contact" size="md">
            Inquire About Your Project
          </GlossyButton>
        </Reveal>
      </div>
    </section>
  );
}

