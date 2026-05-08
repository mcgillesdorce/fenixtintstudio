"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { GlossyButton } from "@/components/ui/GlossyButton";
import { getMeetingUrl } from "@/lib/hubspot";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const meetingUrl = getMeetingUrl();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 focus-visible:ring-1 focus-visible:ring-white/40 rounded"
          aria-label="Fenix Garage Tint Studio — home"
        >
          <FenixMark />
          <span className="flex flex-col leading-none gap-0.5">
            <span className="text-xs font-bold tracking-[0.14em] uppercase text-white">
              Fenix Garage
            </span>
            <span className="text-[9px] tracking-[0.12em] uppercase text-brand-gold">
              Tint Studio
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-150 focus-visible:ring-1 focus-visible:ring-white/40 rounded"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex">
          <GlossyButton as="a" href={meetingUrl} size="sm">
            Book Free Estimate
          </GlossyButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white focus-visible:ring-1 focus-visible:ring-white/40 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/5 px-4 pb-6">
          <ul className="flex flex-col gap-4 pt-4" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm text-zinc-400 hover:text-white transition-colors py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <GlossyButton as="a" href={meetingUrl} size="sm" className="w-full justify-center">
                Book Free Estimate
              </GlossyButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function FenixMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {/* Outer hexagon flat-top */}
      <polygon points="96,50 73,10.2 27,10.2 4,50 27,89.8 73,89.8" fill="#0D0D0D" stroke="#C9A84C" strokeWidth="3.5" strokeLinejoin="round" />
      {/* Inner border */}
      <polygon points="90,50 69,15.4 31,15.4 10,50 31,84.6 69,84.6" fill="none" stroke="#C9A84C" strokeWidth="0.9" strokeLinejoin="round" opacity={0.45} />

      {/* === PHOENIX === */}

      {/* Crown — three upward feather spikes */}
      <path d="M 50,27 L 44,14 L 48,26 Z" fill="#C9A84C" />
      <path d="M 50,26 L 50,11 L 52,25 Z" fill="#C9A84C" />
      <path d="M 50,27 L 56,14 L 52,26 Z" fill="#C9A84C" />

      {/* Head */}
      <circle cx="50" cy="32" r="5.5" fill="#C9A84C" />
      {/* Eye */}
      <circle cx="52" cy="31" r="1.4" fill="#0A0A0A" />
      {/* Beak */}
      <path d="M 54,33 L 61,34.5 L 54,36 Z" fill="#C9A84C" opacity={0.8} />

      {/* Neck */}
      <path d="M 47,37 C 46,40 46,43 47,45 L 53,45 C 54,43 54,40 53,37 C 52,35 48,35 47,37 Z" fill="#C9A84C" />

      {/* Body */}
      <ellipse cx="50" cy="53" rx="5.5" ry="8" fill="#C9A84C" />

      {/* Left wing — upper primary feathers */}
      <path d="M 46,43 C 40,39 28,36 15,38 C 22,32 35,35 46,42 Z" fill="#C9A84C" />
      {/* Left wing — lower secondary */}
      <path d="M 46,50 C 37,47 25,46 12,49 C 20,43 34,43 46,51 Z" fill="#C9A84C" opacity={0.75} />

      {/* Right wing — upper primary feathers */}
      <path d="M 54,43 C 60,39 72,36 85,38 C 78,32 65,35 54,42 Z" fill="#C9A84C" />
      {/* Right wing — lower secondary */}
      <path d="M 54,50 C 63,47 75,46 88,49 C 80,43 66,43 54,51 Z" fill="#C9A84C" opacity={0.75} />

      {/* Tail — 6 flame plumes spreading downward */}
      {/* Center pair */}
      <path d="M 49,61 C 48,67 46,76 44,87 C 47.5,76 49.5,67 50,63 Z" fill="#C9A84C" />
      <path d="M 51,61 C 52,67 54,76 56,87 C 52.5,76 50.5,67 50,63 Z" fill="#C9A84C" />
      {/* Inner pair */}
      <path d="M 48,62 C 44,71 39,81 35,90 C 40,80 46,70 49,64 Z" fill="#C9A84C" opacity={0.65} />
      <path d="M 52,62 C 56,71 61,81 65,90 C 60,80 54,70 51,64 Z" fill="#C9A84C" opacity={0.65} />
      {/* Outer pair */}
      <path d="M 47,64 C 40,74 33,85 27,92 C 34,82 43,71 48,66 Z" fill="#C9A84C" opacity={0.35} />
      <path d="M 53,64 C 60,74 67,85 73,92 C 66,82 57,71 52,66 Z" fill="#C9A84C" opacity={0.35} />
    </svg>
  );
}
