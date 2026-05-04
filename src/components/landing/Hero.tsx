import Image from "next/image";
import SectionLabel from "@/components/shared/SectionLabel";
import Button from "@/components/shared/Button";
import FadeInSection from "@/components/shared/FadeInSection";
import Container from "@/components/shared/Container";
import type { StatItem } from "@/types";

interface EmojiOption {
  emoji: string;
  label: string;
}

interface HeroCardData {
  avatar: string;
  name: string;
  time: string;
  question: string;
  emojis: EmojiOption[];
}

interface FloatingBadge {
  text: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  animationDuration: string;
  animationDelay: string;
}

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

interface HeroProps {
  badge: string;
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  stats: StatItem[];
  card: HeroCardData;
  floatingBadges: FloatingBadge[];
  floatingAvatars?: FloatingAvatar[];
}

export default function Hero({
  badge,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  stats,
  card,
  floatingBadges,
  floatingAvatars,
}: HeroProps) {
  const topBadge = floatingBadges[0];
  const bottomBadge = floatingBadges[1];

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

            {/* Top floating badge — positioned in hero box */}
            {topBadge && (
              <div
                className="absolute rounded-full px-4 py-2 z-[4] whitespace-nowrap max-lg:hidden hero-float"
                style={{
                  backgroundColor: '#ffffff',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
                  ...(topBadge.top ? { top: topBadge.top } : {}),
                  ...(topBadge.right ? { right: topBadge.right } : {}),
                  ...(topBadge.left ? { left: topBadge.left } : {}),
                  animationDuration: topBadge.animationDuration,
                  animationDelay: topBadge.animationDelay,
                }}
              >
                <span className="text-[13px] font-semibold text-navy">
                  {topBadge.text}
                </span>
              </div>
            )}

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

              {/* Right column — Visual (lg+ only) */}
              <div className="hidden lg:flex justify-center items-end self-end relative">
                {/* Hero card */}
                <div className="bg-white rounded-[20px] p-6 shadow-hero-card w-full max-w-[380px] relative z-10 mb-[-2px]">
                  {/* User row */}
                  <div className="flex gap-3 items-center mb-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green to-[#34D399] flex-shrink-0 overflow-hidden">
                      <Image
                        src={card.avatar}
                        alt={card.name}
                        width={44}
                        height={44}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-navy">
                        {card.name}
                      </div>
                      <div className="text-[13px] text-gray-400">{card.time}</div>
                    </div>
                  </div>

                  {/* Question */}
                  <p className="text-[15px] text-gray-700 font-medium mb-5 leading-[1.7]">
                    {card.question}
                  </p>

                  {/* Emoji options */}
                  <div className="flex gap-2.5 justify-center flex-wrap">
                    {card.emojis.map((opt, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg bg-ice cursor-pointer transition-all duration-200 hover:bg-green-light hover:-translate-y-0.5"
                      >
                        <span className="text-[26px]">{opt.emoji}</span>
                        <span className="text-[11px] text-gray-500 font-medium">
                          {opt.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom floating badge — positioned relative to card wrapper */}
                {bottomBadge && (
                  <div
                    className="absolute rounded-full px-4 py-2 z-20 whitespace-nowrap hero-float"
                    style={{
                      backgroundColor: '#ffffff',
                      boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
                      bottom: '60px',
                      left: '-20px',
                      animationDuration: bottomBadge.animationDuration,
                      animationDelay: bottomBadge.animationDelay,
                    }}
                  >
                    <span className="text-[13px] font-semibold text-navy">
                      {bottomBadge.text}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
