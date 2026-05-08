import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section
      className="relative py-24 md:py-32 px-4 border-t border-white/[0.05]"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16 flex justify-center">
          <SectionHeading
            eyebrow="How It Works"
            title="Simple process. Exceptional result."
            id="process-heading"
          />
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {PROCESS_STEPS.map((step, index) => (
            <StaggerItem key={step.number}>
              <div className="relative flex flex-col gap-6 px-0 md:px-8">
                {/* Connector line (hidden on last item and mobile) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div
                    className="hidden md:block absolute top-5 left-1/2 w-full h-px bg-gradient-to-r from-white/10 to-transparent"
                    aria-hidden="true"
                  />
                )}

                {/* Step number */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <span className="text-5xl font-light text-white/[0.07] tabular-nums select-none">
                      {step.number}
                    </span>
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-6 h-px bg-white/20" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium text-white">{step.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
