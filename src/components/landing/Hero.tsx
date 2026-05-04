import Image from "next/image";
import SectionLabel from "@/components/shared/SectionLabel";
import Button from "@/components/shared/Button";
import FadeInSection from "@/components/shared/FadeInSection";
import Container from "@/components/shared/Container";
import LivePollCard from "@/components/landing/LivePollCard";
import type { StatItem } from "@/types";
import type { Locale } from "@/lib/i18n";

interface FloatingAvatar {
  src: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: number;
  animationDuration: string;
  animationDelay: string;
}

interface PollData {
  location: string;
  trendingLabel: string;
  question: string;
  options: string[];
  votesSuffix: string;
  rewardLabel: string;
}

interface HeroProps {
  badge: string;
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  stats: StatItem[];
  poll: PollData;
  floatingAvatars?: FloatingAvatar[];
  locale: Locale;
}

export default function Hero({
  badge,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  stats,
  poll,
  floatingAvatars,
  locale,
}: HeroProps) {
  return (
    <section className="bg-ice pt-[140px] pb-0">
      <Container>
        <FadeInSection>
          <div className="hero-box-rays bg-gradient-to-br from-navy-dark via-navy to-navy-light rounded-[32px] p-[72px_56px_0] max-lg:p-[48px_24px_0] relative overflow-hidden min-h-[520px] max-sm:min-h-[auto]">
            {/* Floating avatars */}
            {floatingAvatars?.map((avatar, i) => (
              <div
                key={`fa-${i}`}
                className="absolute rounded-full border-[3px] border-white/35 overflow-hidden z-[3] shadow-[0_4px_12px_rgba(0,0,0,0.15)] max-lg:hidden hero-float"
                style={{
                  width: avatar.size,
                  height: avatar.size,
                  ...(avatar.top ? { top: avatar.top } : {}),
                  ...(avatar.bottom ? { bottom: avatar.bottom } : {}),
                  ...(avatar.left ? { left: avatar.left } : {}),
                  ...(avatar.right ? { right: avatar.right } : {}),
                  animationDuration: avatar.animationDuration,
                  animationDelay: avatar.animationDelay,
                }}
              >
                <Image
                  src={avatar.src}
                  alt=""
                  width={avatar.size}
                  height={avatar.size}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left column — Text */}
              <div className="max-lg:text-center">
                <div className="mb-5">
                  <SectionLabel variant="hero">
                    <span>✦</span> {badge}
                  </SectionLabel>
                </div>

                <h1 className="text-hero-title font-bold text-white mb-5">
                  {title}
                </h1>

                <p className="text-[17px] text-white/70 max-w-[480px] leading-relaxed mb-8 max-lg:mx-auto">
                  {subtitle}
                </p>

                <div className="flex gap-3 flex-wrap max-lg:justify-center">
                  <Button variant="green" href={ctaPrimary.href}>
                    {ctaPrimary.label}
                  </Button>
                  <Button variant="outline-white" href={ctaSecondary.href}>
                    {ctaSecondary.label}
                  </Button>
                </div>

                <div className="flex gap-10 mt-10 max-lg:justify-center max-sm:flex-wrap max-sm:gap-5 pb-10">
                  {stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-[28px] font-bold text-white leading-tight">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/50">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column — Live poll card (lg+ only) */}
              <div className="hidden lg:flex justify-center items-end self-end relative pb-12">
                <LivePollCard {...poll} locale={locale} />
              </div>
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
