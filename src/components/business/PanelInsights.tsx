import SectionHeader from "@/components/shared/SectionHeader";
import FadeInSection from "@/components/shared/FadeInSection";
import Container from "@/components/shared/Container";
import type { PanelStatItem, DemoBarItem } from "@/types";

interface DemoCard {
  icon: string;
  title: string;
  bars?: DemoBarItem[];
  tags?: string[];
}

interface PanelInsightsProps {
  label: string;
  title: string;
  subtitle: string;
  stats: PanelStatItem[];
  demographics: {
    gender: DemoCard;
    age: DemoCard;
    interests: DemoCard;
  };
}

function DemoBarGroup({ bars }: { bars: DemoBarItem[] }) {
  return (
    <div className="flex flex-col gap-3.5">
      {bars.map((bar, i) => (
        <div key={i} className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center text-[13px] text-white/60">
            <span>{bar.label}</span>
            <span className="text-white font-semibold">{bar.value}</span>
          </div>
          <div className="w-full h-2 bg-white/[0.08] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-green to-[#7DDBA3] transition-[width] duration-800"
              style={{ width: `${bar.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PanelInsights({
  label,
  title,
  subtitle,
  stats,
  demographics,
}: PanelInsightsProps) {
  return (
    <section className="bg-navy py-20 max-md:py-14 max-sm:py-10" id="panel-insights">
      <Container>
        <FadeInSection>
          <SectionHeader
            label={label}
            title={title}
            subtitle={subtitle}
            dark
          />
        </FadeInSection>

        {/* Hero stats */}
        <FadeInSection>
          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6 mb-12">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center py-7 px-4 bg-white/[0.06] border border-white/[0.08] rounded-2xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
              >
                <div className="text-[clamp(28px,4vw,40px)] font-bold text-white leading-tight mb-1">
                  {stat.prefix}<span className="text-[#7DDBA3]">{stat.highlight}</span>{stat.suffix}
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Demographics breakdown */}
        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-6">
          {/* Gender */}
          <FadeInSection>
            <div className="bg-white/[0.06] border border-white/[0.08] rounded-2xl p-7 max-sm:p-5">
              <h4 className="text-[15px] font-bold text-white mb-5 flex items-center gap-2.5">
                <span className="text-xl">{demographics.gender.icon}</span>
                {demographics.gender.title}
              </h4>
              {demographics.gender.bars && (
                <DemoBarGroup bars={demographics.gender.bars} />
              )}
            </div>
          </FadeInSection>

          {/* Age Groups */}
          <FadeInSection>
            <div className="bg-white/[0.06] border border-white/[0.08] rounded-2xl p-7 max-sm:p-5">
              <h4 className="text-[15px] font-bold text-white mb-5 flex items-center gap-2.5">
                <span className="text-xl">{demographics.age.icon}</span>
                {demographics.age.title}
              </h4>
              {demographics.age.bars && (
                <DemoBarGroup bars={demographics.age.bars} />
              )}
            </div>
          </FadeInSection>

          {/* Interests & Attributes */}
          <FadeInSection>
            <div className="bg-white/[0.06] border border-white/[0.08] rounded-2xl p-7 max-sm:p-5">
              <h4 className="text-[15px] font-bold text-white mb-5 flex items-center gap-2.5">
                <span className="text-xl">{demographics.interests.icon}</span>
                {demographics.interests.title}
              </h4>
              {demographics.interests.tags && (
                <div className="flex flex-wrap gap-2">
                  {demographics.interests.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-full text-[13px] font-medium bg-white/[0.08] text-white/60 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </FadeInSection>
        </div>
      </Container>
    </section>
  );
}
