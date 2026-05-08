import { Check } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HubspotMeeting } from "@/components/ui/HubspotMeeting";
import { Reveal } from "@/components/ui/Reveal";
import { getMeetingUrl } from "@/lib/hubspot";

const BENEFITS = [
  "Free, no-obligation estimate",
  "Mobile service available — we come to you",
  "Ceramic & nano-ceramic film options",
  "Licensed, insured technicians",
  "Satisfaction guarantee on every install",
  "Manufacturer warranty support",
];

export function Booking() {
  const meetingUrl = getMeetingUrl();

  return (
    <section
      id="booking"
      className="relative py-24 md:py-32 px-4 border-t border-white/[0.05]"
      aria-labelledby="booking-heading"
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-72 bg-glow-top opacity-40"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: copy */}
          <Reveal className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Book Your Appointment"
              title="Ready for the Fenix Finish?"
              description="Schedule your free estimate in minutes. We'll assess your vehicle or property and walk you through the best film options at no cost."
              align="left"
              id="booking-heading"
            />

            <ul className="flex flex-col gap-3" role="list">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Check size={11} strokeWidth={2} className="text-white/70" aria-hidden="true" />
                  </div>
                  <span className="text-sm text-zinc-400">{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right: meeting iframe */}
          <Reveal delay={0.15}>
            <GlassCard className="overflow-hidden p-1">
              <HubspotMeeting meetingUrl={meetingUrl} />
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
