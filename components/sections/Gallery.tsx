import Image from "next/image";
import { GlossyButton } from "@/components/ui/GlossyButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { GALLERY_ITEMS } from "@/lib/constants";

// TODO: Replace placeholder images in /public/gallery/ with real portfolio work
// Images should be 1200x800px for best display quality

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 px-4 border-t border-white/[0.05]"
      aria-labelledby="gallery-heading"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-glow-radial opacity-30"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="mb-16 flex justify-center">
          <SectionHeading
            eyebrow="Our Work"
            title="Finished to perfection."
            description="A selection of recent installs across automotive, residential, and commercial projects."
            id="gallery-heading"
          />
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {GALLERY_ITEMS.map((item, i) => (
            <StaggerItem key={item.src}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority={i < 3}
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs text-white font-medium">{item.caption}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <GlossyButton as="a" href="#contact" size="md">
            Inquire About Your Project
          </GlossyButton>
        </Reveal>
      </div>
    </section>
  );
}
