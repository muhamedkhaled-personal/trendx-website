import SectionLabel from "@/components/shared/SectionLabel";
import Button from "@/components/shared/Button";
import FadeInSection from "@/components/shared/FadeInSection";
import Container from "@/components/shared/Container";
import type { StatItem } from "@/types";

interface BizHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  stats: StatItem[];
}

export default function BizHero({
  badge,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  stats,
}: BizHeroProps) {
  return (
    <section className="bg-ice pt-[140px] pb-0">
      <Container>
        <FadeInSection>
          <div className="hero-box-rays bg-gradient-to-br from-navy-dark via-navy to-navy-light rounded-[32px] p-[72px_56px] max-lg:p-[48px_24px] max-sm:p-[36px_16px] relative overflow-hidden">
            {/* Content */}
            <div className="relative z-[2] text-center max-w-[700px] mx-auto text-white">
              {/* Badge */}
              <div className="mb-6">
                <SectionLabel variant="hero">{badge}</SectionLabel>
              </div>

              {/* Title */}
              <h1 className="text-hero-title font-bold text-white mb-5">
                {title}
              </h1>

              {/* Subtitle */}
              <p className="text-[17px] text-white/70 leading-[1.8] mb-9 max-w-[560px] mx-auto">
                {subtitle}
              </p>

              {/* CTA buttons */}
              <div className="flex gap-3 justify-center flex-wrap">
                <Button variant="green" href={ctaPrimary.href}>
                  {ctaPrimary.label}
                </Button>
                <Button variant="outline-white" href={ctaSecondary.href}>
                  {ctaSecondary.label}
                </Button>
              </div>

              {/* Stats */}
              <div className="flex gap-10 mt-10 justify-center flex-wrap max-sm:gap-5">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-[28px] font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative green blob */}
            <div className="absolute -bottom-[40%] -right-[20%] w-[60%] h-[120%] bg-[radial-gradient(ellipse,rgba(47,166,106,.08)_0%,transparent_70%)] pointer-events-none" />
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
