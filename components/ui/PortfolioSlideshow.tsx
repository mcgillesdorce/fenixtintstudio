"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
  caption?: string;
}

interface Props {
  slides: readonly Slide[];
  autoPlayMs?: number;
}

export function PortfolioSlideshow({ slides, autoPlayMs = 5000 }: Props) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 8000);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, autoPlayMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, paused, autoPlayMs]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-surface"
      style={{ aspectRatio: "16/9" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Portfolio slideshow"
      role="region"
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
            className="object-cover"
            priority={i === 0}
          />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Prev arrow */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 border border-white/10 text-white/70 hover:bg-black/70 hover:text-white transition-all duration-150 focus-visible:ring-1 focus-visible:ring-white/40"
        aria-label="Previous photo"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L6 8l4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 border border-white/10 text-white/70 hover:bg-black/70 hover:text-white transition-all duration-150 focus-visible:ring-1 focus-visible:ring-white/40"
        aria-label="Next photo"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 3l4 5-4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Counter + caption bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between px-4 pb-4">
        <span className="text-xs text-white/50 tracking-widest font-light">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        {slides[current].caption && (
          <span className="text-xs text-white/80 bg-black/40 px-3 py-1 rounded-full border border-white/10">
            {slides[current].caption}
          </span>
        )}
      </div>

      {/* Dot strip — uses thin lines instead of circles for cleaner look with 20 images */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-0.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 bg-brand-gold"
                : "w-1.5 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Auto-play progress bar */}
      {!paused && (
        <div className="absolute top-0 left-0 right-0 z-20 h-px overflow-hidden">
          <div
            key={current}
            className="h-full bg-brand-gold/60 animate-[progress_5s_linear_forwards]"
            style={{ animation: `progress ${autoPlayMs}ms linear forwards` }}
          />
        </div>
      )}
    </div>
  );
}
