"use client";

import { GlossyButton } from "@/components/ui/GlossyButton";
import { Reveal } from "@/components/ui/Reveal";
import { getMeetingUrl } from "@/lib/hubspot";

export function Hero() {
  const meetingUrl = getMeetingUrl();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16"
      aria-label="Hero"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Radial glow */}
        <div className="absolute inset-0 bg-glow-radial opacity-80" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid opacity-100"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, transparent 80%)",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto gap-8">
        <Reveal delay={0}>
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Window Tinting Specialists
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white text-balance leading-none">
            Precisio Tinting.
            <br />
            <span className="text-zinc-400">Premium Finish.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl">
            Fenix Tint Studio brings exacting craftsmanship to every pane —
            automotive, residential, and commercial tinting done right the first time.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <GlossyButton as="a" href={meetingUrl} size="lg" variant="solid">
              Book Free Estimate
            </GlossyButton>
            <GlossyButton as="a" href="#gallery" size="lg" variant="glossy">
              View Our Work
            </GlossyButton>
          </div>
        </Reveal>

        {/* Scroll hint */}
        <Reveal delay={0.5}>
          <div className="flex flex-col items-center gap-2 mt-8 opacity-40">
            <span className="text-xs uppercase tracking-widest text-zinc-500">
              Scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
          </div>
        </Reveal>
      </div>

      {/* Bottom ellipse glow (mimics underbody car glow) */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 blur-3xl opacity-10 rounded-full bg-white"
        aria-hidden="true"
      />
    </section>
  );
}
