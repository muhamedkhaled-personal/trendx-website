import SectionHeader from "@/components/shared/SectionHeader";
import FadeInSection from "@/components/shared/FadeInSection";
import Container from "@/components/shared/Container";
import Icon from "@/components/shared/Icon";

interface WhyCard {
  icon: string;
  title: string;
  description: string;
}

interface WhyTrendXProps {
  label: string;
  title: string;
  cards: WhyCard[];
}

export default function WhyTrendX({ label, title, cards }: WhyTrendXProps) {
  return (
    <section className="bg-navy py-20 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(47,166,106,0.08) 0%, transparent 70%)",
        }}
      />

      <Container>
        <FadeInSection>
          <SectionHeader label={label} title={title} dark />
        </FadeInSection>

        <div className="flex gap-5 max-lg:flex-col">
          {cards.map((card, i) => (
            <FadeInSection key={i} className="flex-1">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm transition hover:-translate-y-1 h-full">
                <div className="w-12 h-12 rounded-xl bg-green/15 text-[#7DDBA3] flex items-center justify-center mb-4">
                  <Icon name={card.icon} size={24} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
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
