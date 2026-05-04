import Button from "@/components/shared/Button";
import FadeInSection from "@/components/shared/FadeInSection";
import Container from "@/components/shared/Container";

interface ForBusinessProps {
  title: string;
  description: string;
  cta: string;
  locale: string;
}

export default function ForBusiness({
  title,
  description,
  cta,
  locale,
}: ForBusinessProps) {
  return (
    <section className="py-20">
      <Container>
        <FadeInSection>
          <div className="bg-white border border-black/[0.06] rounded-3xl p-12 max-md:p-9 max-sm:p-7 text-center relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            {/* Decorative gradient circle — top right */}
            <div
              className="absolute w-[250px] h-[250px] rounded-full pointer-events-none"
              style={{
                top: '-60px',
                right: '-60px',
                background:
                  "radial-gradient(circle, rgba(47,166,106,0.08) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-[clamp(22px,3.5vw,30px)] font-bold text-navy mb-3">
                {title}
              </h3>

              <p className="text-[16px] text-gray-500 mb-6 max-w-[520px] mx-auto leading-[1.8]">
                {description}
              </p>

              <Button
                variant="green"
                href={`/${locale}/business`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta}
              </Button>
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
