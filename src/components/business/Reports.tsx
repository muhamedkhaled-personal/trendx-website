import SectionHeader from "@/components/shared/SectionHeader";
import FadeInSection from "@/components/shared/FadeInSection";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import type { ReportCard } from "@/types";

interface ReportsProps {
  label: string;
  title: string;
  subtitle: string;
  cards: ReportCard[];
  ctaLabel: string;
  ctaHref: string;
}

export default function Reports({
  label,
  title,
  subtitle,
  cards,
  ctaLabel,
  ctaHref,
}: ReportsProps) {
  const featured = cards.find((c) => c.featured);
  const others = cards.filter((c) => !c.featured);

  return (
    <section className="py-20 max-md:py-14" id="reports">
      <Container>
        <FadeInSection>
          <SectionHeader label={label} title={title} subtitle={subtitle} />
        </FadeInSection>

        <FadeInSection>
          <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-6">
            {featured && (
              <a
                href={featured.href}
                target="_blank"
                rel="noopener noreferrer"
                className="row-span-2 max-[900px]:row-span-1 rounded-3xl overflow-hidden relative min-h-[480px] max-[900px]:min-h-[320px] flex items-end transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,.15)] text-white no-underline"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.image}
                  alt={featured.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />

                <div className="relative z-[2] p-8">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-green text-white text-xs font-semibold mb-3">
                    {featured.tag}
                  </span>
                  <h3 className="text-[clamp(20px,3vw,28px)] font-bold text-white mb-2 leading-snug">
                    {featured.title}
                  </h3>
                  <div className="text-[13px] text-white/60">
                    {featured.date}
                  </div>
                </div>
              </a>
            )}

            {others.map((card, i) => (
              <a
                key={i}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-black/[0.04] rounded-2xl overflow-hidden flex max-[520px]:flex-col shadow-card transition-all duration-300 hover:shadow-[0_8px_28px_rgba(0,0,0,.08)] hover:-translate-y-0.5 no-underline text-inherit"
              >
                <div className="w-40 max-[520px]:w-full max-[520px]:h-[180px] min-h-[140px] flex-shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col justify-center flex-1">
                  <span className="inline-block w-fit px-3 py-0.5 rounded-full bg-green-light text-green text-[11px] font-semibold mb-2">
                    {card.tag}
                  </span>
                  <h4 className="text-base font-bold text-navy mb-1.5 leading-snug">
                    {card.title}
                  </h4>
                  {card.description && (
                    <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2 mb-2">
                      {card.description}
                    </p>
                  )}
                  <div className="text-[12px] text-gray-400">{card.date}</div>
                </div>
              </a>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="text-center mt-10">
            <Button
              href={ctaHref}
              variant="navy"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ctaLabel}
            </Button>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
