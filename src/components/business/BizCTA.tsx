import FadeInSection from "@/components/shared/FadeInSection";
import Button from "@/components/shared/Button";
import type { Locale } from "@/lib/i18n";

interface BizCTAProps {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  trustText: string;
  locale: Locale;
}

export default function BizCTA({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  trustText,
  locale,
}: BizCTAProps) {
  return (
    <section className="py-20 max-md:py-14" id="biz-cta">
      <div className="bg-navy rounded-[32px] mx-6 max-lg:mx-4 text-white text-center relative overflow-hidden cta-decor">
        <FadeInSection>
          <div className="relative z-[2] py-[72px] px-12 max-md:py-12 max-md:px-6 max-sm:py-9 max-sm:px-4">
            <h2 className="text-cta-title font-bold mb-4">{title}</h2>

            <p className="text-[17px] text-white/65 mb-9 max-w-[500px] mx-auto">
              {subtitle}
            </p>

            <div className="flex gap-3 justify-center flex-wrap mb-5">
              <Button variant="green" href="#contact">
                {ctaPrimary}
              </Button>
              <Button
                variant="outline-white"
                href={locale === "ar" ? "/ar" : "/en"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {ctaSecondary}
              </Button>
            </div>

            <p className="text-sm text-white/40">{trustText}</p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
