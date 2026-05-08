"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Item {
  src: string;
  alt: string;
  caption?: string;
}

interface Props {
  items: readonly Item[];
}

export function GalleryGrid({ items }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const lightboxNext = useCallback(() => {
    setLightbox((i) => (i !== null ? (i + 1) % items.length : null));
  }, [items.length]);

  const lightboxPrev = useCallback(() => {
    setLightbox((i) => (i !== null ? (i - 1 + items.length) % items.length : null));
  }, [items.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") lightboxNext();
      if (e.key === "ArrowLeft") lightboxPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, close, lightboxNext, lightboxPrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <>
      {/* ── Masonry Grid ─────────────────────────────────────────────── */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
        {items.map((item, i) => (
          <div
            key={item.src}
            className="break-inside-avoid group relative overflow-hidden rounded-xl border border-white/[0.08] cursor-pointer"
            onClick={() => setLightbox(i)}
            role="button"
            tabIndex={0}
            aria-label={`Open photo ${i + 1} — ${item.alt}`}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setLightbox(i); }}
          >
            <div className="relative w-full" style={{ paddingBottom: i % 3 === 1 ? "75%" : "66.67%" }}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              {/* Expand icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 2h5M2 2v5M14 14H9M14 14V9M2 14v-5M2 14h5M14 2H9M14 2v5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs text-white/90 bg-black/50 px-2 py-1 rounded">
                    {item.caption}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          {/* Image container — stops click propagation so clicking the image doesn't close */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh] mx-auto px-12 py-8 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={items[lightbox].src}
                alt={items[lightbox].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/15 text-white/70 hover:bg-white/20 hover:text-white transition-all"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/15 text-white/70 hover:bg-white/20 hover:text-white transition-all"
            aria-label="Previous photo"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M12 3L7 9l5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/15 text-white/70 hover:bg-white/20 hover:text-white transition-all"
            aria-label="Next photo"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6 3l5 6-5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/40 tracking-widest">
            {String(lightbox + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </div>
        </div>
      )}
    </>
  );
}
