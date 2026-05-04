import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import FadeInSection from "@/components/shared/FadeInSection";
import Container from "@/components/shared/Container";
import type { BrandItem } from "@/types";

interface RewardsProps {
  label: string;
  title: string;
  subtitle?: string;
  brands: BrandItem[];
  brandCountLabel: string;
}

export default function Rewards({
  label,
  title,
  subtitle,
  brands,
  brandCountLabel,
}: RewardsProps) {
  return (
    <section className="py-14">
      <Container>
        <FadeInSection>
          <SectionHeader label={label} title={title} subtitle={subtitle} />
        </FadeInSection>

        {/* Brand logos grid */}
        <FadeInSection>
          <div className="flex flex-wrap justify-center items-center gap-6 max-w-[680px] mx-auto">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="w-14 h-14 rounded-xl bg-white border border-black/[0.06] shadow-card flex items-center justify-center p-3 transition hover:-translate-y-1 hover:shadow-card-hover hover:border-green-light"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}

            {/* Count badge */}
            <div className="h-14 px-6 rounded-xl bg-gradient-to-br from-green to-[#27905B] text-white text-sm font-bold inline-flex items-center justify-center shadow-[0_4px_16px_rgba(47,166,106,0.2)]">
              {brandCountLabel}
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
