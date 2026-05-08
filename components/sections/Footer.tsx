import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { BUSINESS, NAV_LINKS, SERVICES } from "@/lib/constants";

function FenixMark() {
  return (
    <svg width="34" height="34" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <polygon
        points="96,50 73,10.2 27,10.2 4,50 27,89.8 73,89.8"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <polygon
        points="90,50 69,15.4 31,15.4 10,50 31,84.6 69,84.6"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.9"
        strokeLinejoin="round"
        opacity={0.5}
      />
      <path d="M 47,50 C 42,47 33,44 22,46 C 29,41 39,43 46,48 C 38,40 29,37 18,38 C 26,33 37,37 45,44 Z" fill="#C9A84C" />
      <path d="M 53,50 C 58,47 67,44 78,46 C 71,41 61,43 54,48 C 62,40 71,37 82,38 C 74,33 63,37 55,44 Z" fill="#C9A84C" />
      <ellipse cx="50" cy="56" rx="3.5" ry="6" fill="#C9A84C" />
      <circle cx="50" cy="45" r="3" fill="#C9A84C" />
      <path d="M 48.5,42 L 50,38.5 L 51.5,42 Z" fill="#C9A84C" />
      <path d="M 50,62 C 48,69 46,77 44,84 C 47,77 49,69 50,64 Z" fill="#C9A84C" opacity={0.85} />
      <path d="M 50,62 C 52,69 54,77 56,84 C 53,77 51,69 50,64 Z" fill="#C9A84C" opacity={0.85} />
      <path d="M 49,63 C 45,72 39,81 34,89 C 40,80 47,70 49,63 Z" fill="#C9A84C" opacity={0.55} />
      <path d="M 51,63 C 55,72 61,81 66,89 C 60,80 53,70 51,63 Z" fill="#C9A84C" opacity={0.55} />
      <path d="M 38,37 C 39.5,32 43,29.5 47,29 L 53,29 C 57,29.5 60.5,32 62,37 Z" fill="#C9A84C" opacity={0.9} />
      <path d="M 43,29 C 44.5,26 47,25 50,25 C 53,25 55.5,26 57,29 Z" fill="#C9A84C" opacity={0.9} />
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
