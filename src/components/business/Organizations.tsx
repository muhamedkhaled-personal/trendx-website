import SectionLabel from "@/components/shared/SectionLabel";
import FadeInSection from "@/components/shared/FadeInSection";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";
import type { OrgCard } from "@/types";

interface OrganizationsProps {
  label: string;
  title: string;
  subtitle: string;
  description: string;
  cards: OrgCard[];
}

export default function Organizations({
  label,
  title,
  description,
  cards,
}: OrganizationsProps) {
  return (
    <section className="py-20 max-md:py-14" id="organizations">
      <Container>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-12 items-center max-lg:text-center">
          {/* Text content */}
          <FadeInSection>
            <div>
              <div className="mb-5">
                <SectionLabel>{label}</SectionLabel>
              </div>

              <h2 className="text-section-title font-bold text-navy mb-4">
                {title}
              </h2>

              <p className="text-base text-gray-500 mb-7 leading-relaxed">
                {description}
              </p>

              <div className="flex gap-3 flex-wrap max-lg:justify-center">
                <Button
                  variant="green"
                  href="https://stage.survey.trendx.co/auth/login"
                  target="_blank"
                >
                  {description.includes("منظمة")
                    ? "أنشئ صفحة منظمتك"
                    : "Create Organization Page"}
                </Button>
                <Button variant="outline" href="#reports">
                  {description.includes("منظمة")
                    ? "شاهد أعمالنا السابقة"
                    : "See Our Past Work"}
                </Button>
              </div>
            </div>
          </FadeInSection>

          {/* Org cards grid */}
          <FadeInSection>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3.5">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="bg-white border border-black/[0.04] rounded-2xl p-6 text-center shadow-card transition-all duration-300 hover:shadow-[0_8px_28px_rgba(0,0,0,.06)] hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 max-sm:w-10 max-sm:h-10 rounded-xl bg-green-light text-green flex items-center justify-center mx-auto mb-2.5">
                    <Icon name={card.icon} size={24} strokeWidth={1.75} />
                  </div>
                  <h4 className="text-[15px] font-bold text-navy mb-1">
                    {card.title}
                  </h4>
                  <p className="text-[13px] text-gray-500">{card.description}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </Container>
    </section>
  );
}
