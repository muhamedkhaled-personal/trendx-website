import SectionHeader from "@/components/shared/SectionHeader";
import FadeInSection from "@/components/shared/FadeInSection";
import Container from "@/components/shared/Container";
import type { StepCard } from "@/types";

interface HowItWorksProps {
  label: string;
  title: string;
  subtitle?: string;
  steps: StepCard[];
}

export default function HowItWorks({
  label,
  title,
  subtitle,
  steps,
}: HowItWorksProps) {
  return (
    <section className="py-20">
      <Container>
        <FadeInSection>
          <div className="bg-white rounded-3xl mx-0 p-16 max-md:p-8 shadow-card relative overflow-hidden">
            <SectionHeader label={label} title={title} subtitle={subtitle} />

            <div className="flex items-stretch justify-center gap-5 max-md:flex-col max-md:items-center">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="contents"
                >
                  {/* Step card */}
                  <div className="flex-1 max-w-[260px] max-md:max-w-full bg-ice rounded-2xl p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-green text-white text-lg font-bold flex items-center justify-center mx-auto mb-3.5">
                      {step.number}
                    </div>
                    <h3 className="text-[17px] font-bold text-navy mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector arrow (not after last step) */}
                  {i < steps.length - 1 && (
                    <div className="flex items-center text-xl text-green font-bold max-md:rotate-90 rtl:scale-x-[-1]">
                      &rarr;
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
