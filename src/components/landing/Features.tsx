import SectionHeader from "@/components/shared/SectionHeader";
import FadeInSection from "@/components/shared/FadeInSection";
import Container from "@/components/shared/Container";
import Icon from "@/components/shared/Icon";
import type { FeatureCard } from "@/types";

interface FeaturesProps {
  label: string;
  title: string;
  subtitle?: string;
  cards: FeatureCard[];
}

export default function Features({
  label,
  title,
  subtitle,
  cards,
}: FeaturesProps) {
  return (
    <section className="py-20">
      <Container>
        <FadeInSection>
          <SectionHeader label={label} title={title} subtitle={subtitle} />
        </FadeInSection>

        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
          {cards.map((card, i) => (
            <FadeInSection key={i} className="h-full">
              <div className="bg-white border border-black/[0.04] rounded-2xl p-7 text-center shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 h-full">
                <div className="w-14 h-14 rounded-xl bg-green-light flex items-center justify-center mx-auto mb-4 text-green">
                  <Icon name={card.icon} size={28} strokeWidth={1.75} />
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
