import SectionHeader from "@/components/shared/SectionHeader";
import FadeInSection from "@/components/shared/FadeInSection";
import Container from "@/components/shared/Container";
import type { ServiceCard } from "@/types";

interface ServicesProps {
  label: string;
  title: string;
  subtitle: string;
  cards: ServiceCard[];
}

export default function Services({
  label,
  title,
  subtitle,
  cards,
}: ServicesProps) {
  return (
    <section className="py-20 max-md:py-14" id="services">
      <Container>
        <FadeInSection>
          <SectionHeader label={label} title={title} subtitle={subtitle} />
        </FadeInSection>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5">
          {cards.map((card, i) => (
            <FadeInSection key={i}>
              <div className="bg-white border border-black/[0.04] rounded-3xl p-8 text-center shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-ice flex items-center justify-center mx-auto mb-4 text-[28px]">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
