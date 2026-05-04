import Image from "next/image";
import Button from "@/components/shared/Button";
import FadeInSection from "@/components/shared/FadeInSection";
import Container from "@/components/shared/Container";

interface CTASectionProps {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  trustText: string;
}

export default function CTASection({
  title,
  subtitle,
  ctaPrimary,
  trustText,
}: CTASectionProps) {
  return (
    <section className="py-20" id="cta">
      <Container>
        <FadeInSection>
          <div className="bg-navy rounded-[32px] text-center text-white relative overflow-hidden">
            {/* Decorative green circles */}
            <div
              className="absolute w-[350px] h-[350px] rounded-full pointer-events-none"
              style={{
                top: '-80px',
                left: '-80px',
                background: 'rgba(47,166,106,.08)',
              }}
            />
            <div
              className="absolute w-[280px] h-[280px] rounded-full pointer-events-none"
              style={{
                bottom: '-60px',
                right: '-60px',
                background: 'rgba(47,166,106,.06)',
              }}
            />

            <div className="relative z-[2] p-[72px_48px] max-md:p-[36px_16px]">
              {/* Mascot character — positioned bottom-left */}
              <div className="absolute bottom-0 left-[40px] max-lg:left-[10px] max-md:hidden z-[3] pointer-events-none">
                <Image
                  src="/images/mascot.png"
                  alt="TrendX Mascot"
                  width={180}
                  height={220}
                  className="w-auto h-[220px] max-lg:h-[160px] object-contain"
                />
              </div>

              <h2 className="text-[clamp(26px,4.5vw,40px)] font-bold mb-4">
                {title}
              </h2>

              <p className="text-[17px] text-white/65 mb-9 max-w-[500px] mx-auto">
                {subtitle}
              </p>

              <div className="flex gap-3 justify-center flex-wrap mb-5">
                <Button
                  variant="green"
                  href="https://stage.survey.trendx.co/auth/login"
                >
                  {ctaPrimary}
                </Button>
              </div>

              <p className="text-sm text-white/40">{trustText}</p>
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
