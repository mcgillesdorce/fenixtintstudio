import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HubspotForm } from "@/components/ui/HubspotForm";
import { Reveal } from "@/components/ui/Reveal";
import { BUSINESS } from "@/lib/constants";
import { getPortalId, getFormId } from "@/lib/hubspot";

export function Contact() {
  const portalId = getPortalId();
  const formId = getFormId();
  const mapsEmbedUrl =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.01928386751!2d-122.41941508468208!3d37.774929279759065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus";

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-4 border-t border-white/[0.05]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16 flex justify-center">
          <SectionHeading
            eyebrow="Get In Touch"
            title="We'd love to hear from you."
            id="contact-heading"
          />
        </Reveal>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Contact info */}
          <Reveal>
            <GlassCard className="p-6 flex flex-col gap-4">
              <h3 className="text-sm font-medium text-white">Contact</h3>
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${BUSINESS.phone.replace(/\s|\(|\)|-/g, "")}`}
                  className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors group focus-visible:ring-1 focus-visible:ring-white/40 rounded"
                >
                  <Phone size={14} className="text-zinc-600 group-hover:text-white transition-colors" aria-hidden="true" />
                  {BUSINESS.phone}
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 text-sm text-zinc-400 hover:text-white transition-colors group focus-visible:ring-1 focus-visible:ring-white/40 rounded"
                >
                  <Mail size={14} className="text-zinc-600 group-hover:text-white transition-colors" aria-hidden="true" />
                  {BUSINESS.email}
                </a>
              </div>
            </GlassCard>
          </Reveal>

          {/* Hours */}
          <Reveal delay={0.1}>
            <GlassCard className="p-6 flex flex-col gap-4">
              <h3 className="text-sm font-medium text-white flex items-center gap-2">
                <Clock size={14} className="text-zinc-600" aria-hidden="true" />
                Hours
              </h3>
              <div className="flex flex-col gap-2">
                {BUSINESS.hours.map((item) => (
                  <div key={item.days} className="flex justify-between gap-4">
                    <span className="text-sm text-zinc-500">{item.days}</span>
                    <span className="text-sm text-zinc-400 text-right">{item.hours}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          {/* Address */}
          <Reveal delay={0.2}>
            <GlassCard className="p-6 flex flex-col gap-4">
              <h3 className="text-sm font-medium text-white flex items-center gap-2">
                <MapPin size={14} className="text-zinc-600" aria-hidden="true" />
                Location
              </h3>
              <address className="not-italic flex flex-col gap-0.5 text-sm text-zinc-400">
                <span>{BUSINESS.address.street}</span>
                <span>
                  {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
                  {BUSINESS.address.zip}
                </span>
              </address>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-500 hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white/40 rounded"
              >
                Get directions →
              </a>
            </GlassCard>
          </Reveal>
        </div>

        {/* Map + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Map */}
          <Reveal>
            <GlassCard className="overflow-hidden p-1 h-80 lg:h-auto min-h-[320px]">
              {/* TODO: Replace with your Google Maps Embed URL (set NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL) */}
              <iframe
                src={mapsEmbedUrl}
                title="Fenix Tint Studio location on Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[320px] border-0 rounded-[14px]"
                style={{ filter: "grayscale(1) invert(0.9) contrast(0.85)" }}
              />
            </GlassCard>
          </Reveal>

          {/* HubSpot form */}
          <Reveal delay={0.1}>
            <GlassCard className="p-6 flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-medium text-white">
                  Send us a message
                </h3>
                <p className="text-sm text-zinc-500">
                  General inquiries, quotes, or just to say hello.
                </p>
              </div>
              <HubspotForm portalId={portalId} formId={formId} />
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
