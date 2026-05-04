"use client";

import Image from "next/image";
import SectionLabel from "@/components/shared/SectionLabel";
import FadeInSection from "@/components/shared/FadeInSection";
import Container from "@/components/shared/Container";

interface FloatingBadgeData {
  emoji: string;
  text: string;
  subText?: string;
}

interface AppSectionProps {
  badge: string;
  title: string;
  subtitle: string;
  features: string[];
  floatingBadges: FloatingBadgeData[];
}

export default function AppSection({
  badge,
  title,
  subtitle,
  features,
  floatingBadges,
}: AppSectionProps) {
  const topBadge = floatingBadges[0];
  const bottomBadge = floatingBadges[1];

  return (
    <section className="bg-ice py-20" id="app">
      <Container>
        <FadeInSection>
          <div className="bg-gradient-to-br from-navy-dark via-navy to-navy-light rounded-[32px] p-[64px_56px] max-md:p-[40px_24px] relative overflow-hidden">
            {/* Decorative green circles */}
            <div className="absolute w-[300px] h-[300px] rounded-full top-[-80px] left-[-80px]" style={{ background: 'rgba(47,166,106,.1)' }} />
            <div className="absolute w-[220px] h-[220px] rounded-full bottom-[-60px] right-[-60px]" style={{ background: 'rgba(47,166,106,.05)' }} />

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-[2]">
              {/* Text side */}
              <div className="max-lg:text-center">
                <div className="mb-5">
                  <SectionLabel variant="dark">{badge}</SectionLabel>
                </div>

                <h2 className="text-hero-title font-bold text-white mb-4 leading-[1.3]">
                  {title}
                </h2>

                <p className="text-[16px] text-white/65 leading-[1.8] mb-8 max-w-[460px] max-lg:mx-auto">
                  {subtitle}
                </p>

                {/* Feature checklist */}
                <div className="flex flex-col gap-3 mb-8 max-lg:items-center">
                  {features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex gap-2.5 items-center"
                    >
                      <div className="w-6 h-6 rounded-full bg-green/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#7DDBA3] text-xs font-bold">
                          ✓
                        </span>
                      </div>
                      <span className="text-white/80 text-[15px] font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* App store badges */}
                <div className="flex gap-3.5 flex-wrap max-lg:justify-center">
                  <a
                    href="https://play.google.com/store/apps/details?id=app.trend.trendx&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-[10px] overflow-hidden transition-all duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
                  >
                    <Image
                      src="/images/badges/google-play-badge.svg"
                      alt="Google Play"
                      width={140}
                      height={48}
                      className="h-12 w-auto block"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/eg/app/trendx/id6744624434"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-[10px] overflow-hidden transition-all duration-[250ms] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
                  >
                    <Image
                      src="/images/badges/app-store-badge.svg"
                      alt="App Store"
                      width={140}
                      height={48}
                      className="h-12 w-auto block"
                    />
                  </a>
                </div>
              </div>

              {/* Phone side */}
              <div className="flex justify-center items-center max-lg:mt-4" style={{ perspective: '1200px' }}>
                <div className="phone-showcase relative w-[380px] h-[520px] max-md:w-[320px] max-md:h-[440px] max-sm:w-[260px] max-sm:h-[380px]">
                  {/* Green glow behind phones */}
                  <div
                    className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full z-0 pointer-events-none"
                    style={{
                      transform: 'translate(-50%, -50%)',
                      background: 'radial-gradient(circle, rgba(47,166,106,0.2) 0%, transparent 70%)',
                    }}
                  />

                  {/* Left phone - Rewards/Gift card */}
                  <div className="phone-device phone-left absolute bottom-[30px] z-[2] w-[200px] h-[410px] max-md:w-[170px] max-md:h-[350px] max-sm:hidden rounded-[28px] overflow-hidden"
                    style={{
                      left: '-20px',
                      transform: 'rotate(8deg) translateZ(-20px)',
                      opacity: 0.88,
                      boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
                      transition: 'transform .4s ease, box-shadow .4s ease',
                    }}
                  >
                    <Image
                      src="/images/phones/details.png"
                      alt="TrendX Rewards"
                      width={200}
                      height={410}
                      className="w-full h-full object-cover block"
                    />
                  </div>

                  {/* Main phone - Home screen (center) */}
                  <div className="phone-device phone-main absolute bottom-0 left-1/2 z-[3] w-[230px] h-[470px] max-md:w-[200px] max-md:h-[410px] max-sm:w-[180px] max-sm:h-[370px] rounded-[28px] overflow-hidden"
                    style={{
                      transform: 'translateX(-50%)',
                      boxShadow: '0 30px 70px rgba(0,0,0,0.35)',
                      transition: 'transform .4s ease, box-shadow .4s ease',
                    }}
                  >
                    <Image
                      src="/images/phones/community.png"
                      alt="TrendX Community"
                      width={230}
                      height={470}
                      className="w-full h-full object-cover block"
                    />
                  </div>

                  {/* Right phone - Points earned */}
                  <div className="phone-device phone-right absolute bottom-[30px] z-[2] w-[200px] h-[410px] max-md:w-[170px] max-md:h-[350px] max-sm:hidden rounded-[28px] overflow-hidden"
                    style={{
                      right: '-20px',
                      transform: 'rotate(-8deg) translateZ(-20px)',
                      opacity: 0.88,
                      boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
                      transition: 'transform .4s ease, box-shadow .4s ease',
                    }}
                  >
                    <Image
                      src="/images/phones/answer.png"
                      alt="TrendX Points"
                      width={200}
                      height={410}
                      className="w-full h-full object-cover block"
                    />
                  </div>

                  {/* Top floating badge */}
                  {topBadge && (
                    <div
                      className="phone-float-badge absolute z-[5] bg-white rounded-2xl flex items-center gap-2 whitespace-nowrap max-md:hidden"
                      style={{
                        top: '10px',
                        right: '10px',
                        padding: '10px 16px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                        animation: 'phoneBadgeFloat 3.5s ease-in-out infinite',
                      }}
                    >
                      <span className="text-xl">{topBadge.emoji}</span>
                      <div>
                        <div className="text-xs font-semibold text-navy">
                          {topBadge.text}
                        </div>
                        {topBadge.subText && (
                          <div className="text-[10px] text-gray-400">
                            {topBadge.subText}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Bottom floating badge */}
                  {bottomBadge && (
                    <div
                      className="phone-float-badge absolute z-[5] bg-white rounded-2xl flex items-center gap-2 whitespace-nowrap max-md:hidden"
                      style={{
                        bottom: '60px',
                        left: '-10px',
                        padding: '10px 16px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                        animation: 'phoneBadgeFloat 3.5s ease-in-out infinite',
                        animationDelay: '1.5s',
                      }}
                    >
                      <span className="text-xl">{bottomBadge.emoji}</span>
                      <div>
                        <div className="text-xs font-semibold text-navy">
                          {bottomBadge.text}
                        </div>
                        {bottomBadge.subText && (
                          <div className="text-[10px] text-gray-400">
                            {bottomBadge.subText}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
