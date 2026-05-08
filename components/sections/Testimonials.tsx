import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/constants";

// TODO: Replace placeholder testimonials with real customer reviews

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
          className="text-white/70"
          aria-hidden="true"
        >
          <path d="M6 1l1.39 2.82L10.5 4.18l-2.25 2.19.53 3.13L6 7.77 3.22 9.5l.53-3.13L1.5 4.18l3.11-.36L6 1z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 px-4 border-t border-white/[0.05]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16 flex justify-center">
          <SectionHeading
            eyebrow="Client Stories"
            title="The Fenix difference."
            description="Don't take our word for it — here's what our clients say after their first Fenix install."
            id="testimonials-heading"
          />
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((testimonial, i) => (
            <StaggerItem key={i}>
              <GlassCard className="p-6 flex flex-col gap-4 h-full">
                <StarRow count={testimonial.stars} />
                <blockquote className="flex-1">
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>
                <footer className="flex flex-col gap-0.5">
                  <cite className="not-italic text-sm font-medium text-white">
                    {testimonial.name}
                  </cite>
                  <span className="text-xs text-zinc-500">{testimonial.service}</span>
                </footer>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
