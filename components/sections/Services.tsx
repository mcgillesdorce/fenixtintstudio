import { Car, Home, Building2, Sparkles, type LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Car,
  Home,
  Building2,
  Sparkles,
};

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 px-4"
      aria-labelledby="services-heading"
    >
      {/* Subtle top glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-glow-top opacity-50"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="mb-16 flex justify-center">
          <SectionHeading
            eyebrow="What We Do"
            title="Every surface. Every structure."
            description="From your daily driver to your corner office, Fenix Tint Studio delivers ceramic-grade performance and a finish that speaks for itself."
            id="services-heading"
          />
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <StaggerItem key={service.id}>
                <GlassCard hover className="p-6 h-full flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center bg-white/[0.04]">
                    {Icon && <Icon size={18} strokeWidth={1.5} className="text-zinc-300" />}
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="text-base font-medium text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <a
                    href={service.href}
                    className="text-xs text-zinc-500 hover:text-white transition-colors duration-150 focus-visible:ring-1 focus-visible:ring-white/40 rounded flex items-center gap-1 group"
                  >
                    Learn more
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 6h7M6.5 3.5L9 6l-2.5 2.5"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
