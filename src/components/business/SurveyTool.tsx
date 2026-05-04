import SectionLabel from "@/components/shared/SectionLabel";
import FadeInSection from "@/components/shared/FadeInSection";
import Button from "@/components/shared/Button";

interface SurveyToolProps {
  label: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta: string;
  secondaryCtaHref: string;
  trendoName: string;
  trendoRole: string;
  userMessage: string;
  aiMessage: string;
}

export default function SurveyTool({
  label,
  title,
  subtitle,
  primaryCta,
  primaryCtaHref,
  secondaryCta,
  secondaryCtaHref,
  trendoName,
  trendoRole,
  userMessage,
  aiMessage,
}: SurveyToolProps) {
  return (
    <section className="py-20 max-md:py-14" id="survey-tool">
      <div className="bg-navy rounded-[32px] mx-6 max-lg:mx-4 relative overflow-hidden hero-box-rays">
        <div className="relative z-[2] px-14 py-[72px] max-lg:px-6 max-lg:py-10 max-sm:px-4 max-sm:py-8 grid grid-cols-2 max-lg:grid-cols-1 gap-12 items-center max-lg:text-center">
          <FadeInSection>
            <div>
              <div className="mb-5">
                <SectionLabel variant="hero">
                  <span>✨</span> {label}
                </SectionLabel>
              </div>

              <h2 className="text-[clamp(26px,4vw,38px)] font-bold text-white mb-4 leading-tight">
                {title}
              </h2>

              <p className="text-base text-white/65 leading-relaxed mb-9">
                {subtitle}
              </p>

              <div className="flex gap-3 max-lg:justify-center flex-wrap">
                <Button
                  variant="green"
                  href={primaryCtaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {primaryCta}
                </Button>
                <Button variant="outline-white" href={secondaryCtaHref}>
                  {secondaryCta}
                </Button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-white rounded-[20px] p-6 shadow-hero-card max-w-[380px] w-full mx-auto">
              <div className="flex items-center gap-2.5 mb-4 pb-3.5 border-b border-gray-100">
                <div className="w-[52px] h-[52px] rounded-[14px] bg-gradient-to-br from-[#E8F7EF] to-[#D1FAE5] flex items-center justify-center flex-shrink-0 overflow-visible">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/mascot.png"
                    alt={trendoName}
                    className="w-16 h-16 object-contain -mt-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                  />
                </div>
                <div>
                  <div className="font-bold text-navy text-[15px]">
                    {trendoName}
                  </div>
                  <div className="text-xs text-gray-400">{trendoRole}</div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="bg-green text-white py-3 px-4 rounded-[14px] rounded-br-[4px] rtl:rounded-br-[14px] rtl:rounded-bl-[4px] text-sm leading-relaxed max-w-[85%] ltr:self-end rtl:self-start">
                  {userMessage}
                </div>
                <div className="bg-ice text-gray-700 py-3 px-4 rounded-[14px] rounded-bl-[4px] rtl:rounded-bl-[14px] rtl:rounded-br-[4px] text-sm leading-relaxed max-w-[85%] ltr:self-start rtl:self-end">
                  {aiMessage}
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
