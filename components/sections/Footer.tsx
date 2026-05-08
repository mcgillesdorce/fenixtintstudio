import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { BUSINESS, NAV_LINKS, SERVICES } from "@/lib/constants";

function FenixMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <polygon points="96,50 73,10.2 27,10.2 4,50 27,89.8 73,89.8" fill="#0D0D0D" stroke="#C9A84C" strokeWidth="3.5" strokeLinejoin="round" />
      <polygon points="90,50 69,15.4 31,15.4 10,50 31,84.6 69,84.6" fill="none" stroke="#C9A84C" strokeWidth="0.9" strokeLinejoin="round" opacity={0.45} />
      {/* Crown */}
      <path d="M 50,27 L 44,14 L 48,26 Z" fill="#C9A84C" />
      <path d="M 50,26 L 50,11 L 52,25 Z" fill="#C9A84C" />
      <path d="M 50,27 L 56,14 L 52,26 Z" fill="#C9A84C" />
      {/* Head */}
      <circle cx="50" cy="32" r="5.5" fill="#C9A84C" />
      <circle cx="52" cy="31" r="1.4" fill="#0A0A0A" />
      <path d="M 54,33 L 61,34.5 L 54,36 Z" fill="#C9A84C" opacity={0.8} />
      {/* Neck */}
      <path d="M 47,37 C 46,40 46,43 47,45 L 53,45 C 54,43 54,40 53,37 C 52,35 48,35 47,37 Z" fill="#C9A84C" />
      {/* Body */}
      <ellipse cx="50" cy="53" rx="5.5" ry="8" fill="#C9A84C" />
      {/* Left wing */}
      <path d="M 46,43 C 40,39 28,36 15,38 C 22,32 35,35 46,42 Z" fill="#C9A84C" />
      <path d="M 46,50 C 37,47 25,46 12,49 C 20,43 34,43 46,51 Z" fill="#C9A84C" opacity={0.75} />
      {/* Right wing */}
      <path d="M 54,43 C 60,39 72,36 85,38 C 78,32 65,35 54,42 Z" fill="#C9A84C" />
      <path d="M 54,50 C 63,47 75,46 88,49 C 80,43 66,43 54,51 Z" fill="#C9A84C" opacity={0.75} />
      {/* Tail flames */}
      <path d="M 49,61 C 48,67 46,76 44,87 C 47.5,76 49.5,67 50,63 Z" fill="#C9A84C" />
      <path d="M 51,61 C 52,67 54,76 56,87 C 52.5,76 50.5,67 50,63 Z" fill="#C9A84C" />
      <path d="M 48,62 C 44,71 39,81 35,90 C 40,80 46,70 49,64 Z" fill="#C9A84C" opacity={0.65} />
      <path d="M 52,62 C 56,71 61,81 65,90 C 60,80 54,70 51,64 Z" fill="#C9A84C" opacity={0.65} />
      <path d="M 47,64 C 40,74 33,85 27,92 C 34,82 43,71 48,66 Z" fill="#C9A84C" opacity={0.35} />
      <path d="M 53,64 C 60,74 67,85 73,92 C 66,82 57,71 52,66 Z" fill="#C9A84C" opacity={0.35} />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.05] bg-surface" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link
              href="#home"
              className="flex items-center gap-3 w-fit focus-visible:ring-1 focus-visible:ring-white/40 rounded"
              aria-label="Fenix Garage Tint Studio home"
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
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Precision window tinting for automotive, residential, and commercial clients. Ceramic films, expert hands, lifetime care.
            </p>            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 transition-all focus-visible:ring-1 focus-visible:ring-white/40"
                aria-label="Fenix Tint Studio on Instagram"
              >
                <Instagram size={14} aria-hidden="true" />
              </a>
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 transition-all focus-visible:ring-1 focus-visible:ring-white/40"
                aria-label="Fenix Tint Studio on Facebook"
              >
                <Facebook size={14} aria-hidden="true" />
              </a>
              {/* TikTok */}
              <a
                href={BUSINESS.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 transition-all focus-visible:ring-1 focus-visible:ring-white/40"
                aria-label="Fenix Tint Studio on TikTok"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.24 8.24 0 0 0 4.82 1.55V6.79a4.85 4.85 0 0 1-1.05-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white/40 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium">
              Services
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href="#services"
                    className="text-sm text-zinc-400 hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white/40 rounded"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            © {currentYear} Fenix Tint Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors focus-visible:ring-1 focus-visible:ring-white/40 rounded"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors focus-visible:ring-1 focus-visible:ring-white/40 rounded"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
