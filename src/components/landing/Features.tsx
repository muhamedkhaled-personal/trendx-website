import Image from "next/image";
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
    <section className="py-24 max-md:py-16" id="features">
      <Container>
        <FadeInSection>
          <SectionHeader label={label} title={title} subtitle={subtitle} />
        </FadeInSection>

        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-16 max-lg:gap-10 items-center mt-4">
            {/* Phone showcase */}
            <div className="relative flex justify-center max-lg:order-2">
              {/* Decorative ambient glow behind the phone */}
              <div
                className="absolute inset-0 -z-0 m-auto w-[420px] h-[420px] max-lg:w-[320px] max-lg:h-[320px] rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(47,166,106,0.18) 0%, rgba(47,166,106,0.05) 45%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              {/* Phone */}
              <div className="relative z-[1] w-[280px] max-lg:w-[240px] max-sm:w-[210px] aspect-[230/470] rounded-[36px] overflow-hidden shadow-[0_30px_80px_rgba(27,37,89,0.25)]">
                <Image
                  src="/images/phones/community.png"
                  alt="TrendX feed"
                  width={280}
                  height={572}
                  className="w-full h-full object-cover"
                  priority={false}
                />
              </div>
            </div>

            {/* Feature list */}
            <div className="flex flex-col divide-y divide-black/[0.06] max-lg:order-1">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 py-6 first:pt-0 last:pb-0 max-lg:py-5 group"
                >
                  <div className="w-12 h-12 max-sm:w-10 max-sm:h-10 rounded-2xl bg-green-light text-green flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-green group-hover:text-white">
                    <Icon name={card.icon} size={22} strokeWidth={1.75} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy mb-1.5 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-[14.5px] text-gray-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
