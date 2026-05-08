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
    <svg
      width="36"
      height="36"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      {/* Outer hexagon flat-top */}
      <polygon
        points="96,50 73,10.2 27,10.2 4,50 27,89.8 73,89.8"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Inner border */}
      <polygon
        points="90,50 69,15.4 31,15.4 10,50 31,84.6 69,84.6"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.9"
        strokeLinejoin="round"
        opacity={0.5}
      />
      {/* Left wing */}
      <path
        d="M 47,50 C 42,47 33,44 22,46 C 29,41 39,43 46,48 C 38,40 29,37 18,38 C 26,33 37,37 45,44 Z"
        fill="#C9A84C"
      />
      {/* Right wing */}
      <path
        d="M 53,50 C 58,47 67,44 78,46 C 71,41 61,43 54,48 C 62,40 71,37 82,38 C 74,33 63,37 55,44 Z"
        fill="#C9A84C"
      />
      {/* Body */}
      <ellipse cx="50" cy="56" rx="3.5" ry="6" fill="#C9A84C" />
      {/* Head */}
      <circle cx="50" cy="45" r="3" fill="#C9A84C" />
      {/* Crown */}
      <path d="M 48.5,42 L 50,38.5 L 51.5,42 Z" fill="#C9A84C" />
      {/* Tail feathers */}
      <path d="M 50,62 C 48,69 46,77 44,84 C 47,77 49,69 50,64 Z" fill="#C9A84C" opacity={0.85} />
      <path d="M 50,62 C 52,69 54,77 56,84 C 53,77 51,69 50,64 Z" fill="#C9A84C" opacity={0.85} />
      <path d="M 49,63 C 45,72 39,81 34,89 C 40,80 47,70 49,63 Z" fill="#C9A84C" opacity={0.55} />
      <path d="M 51,63 C 55,72 61,81 66,89 C 60,80 53,70 51,63 Z" fill="#C9A84C" opacity={0.55} />
      {/* Mini car above */}
      <path d="M 38,37 C 39.5,32 43,29.5 47,29 L 53,29 C 57,29.5 60.5,32 62,37 Z" fill="#C9A84C" opacity={0.9} />
      <path d="M 43,29 C 44.5,26 47,25 50,25 C 53,25 55.5,26 57,29 Z" fill="#C9A84C" opacity={0.9} />
    </svg>
  );
}
