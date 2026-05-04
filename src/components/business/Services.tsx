import SectionHeader from "@/components/shared/SectionHeader";
import FadeInSection from "@/components/shared/FadeInSection";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import { Check } from "lucide-react";
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

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          {cards.map((card, i) => (
            <FadeInSection key={i}>
              <div className="relative overflow-hidden bg-white border border-black/[0.06] rounded-3xl p-9 max-sm:p-7 h-full flex flex-col shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
                {/* Trendo mascot — peeks from the end-side bottom corner */}
                {card.mascot && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/images/mascot.png"
                    alt=""
                    aria-hidden="true"
                    className="absolute bottom-0 end-4 h-[140px] w-auto object-contain pointer-events-none z-0 opacity-90 max-md:hidden"
                  />
                )}
                {/* Tag pill */}
                <span className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-light text-green text-[12px] font-semibold tracking-wide mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green" />
                  {card.tag}
                </span>

                {/* Title */}
                <h3 className="text-[22px] font-bold text-navy mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-3 mb-8">
                  {card.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-[14px] text-gray-700 leading-relaxed"
                    >
                      <span className="w-5 h-5 rounded-full bg-green-light text-green flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA — pinned to bottom */}
                <div className="mt-auto">
                  <Button
                    variant={card.highlight ? "green" : "outline"}
                    href={card.cta.href}
                    {...(card.cta.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {card.cta.label}
                  </Button>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
