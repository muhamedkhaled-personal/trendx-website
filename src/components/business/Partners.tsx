import Image from "next/image";
import type { Locale } from "@/lib/i18n";

const partnerLogos = [
  { src: "/images/partners/ministry-health.png", alt: "Ministry of Health" },
  { src: "/images/partners/ministry-tourism.png", alt: "Ministry of Tourism" },
  { src: "/images/partners/entertainment.png", alt: "General Entertainment Authority" },
  { src: "/images/partners/ministry-finance.png", alt: "Ministry of Finance" },
  { src: "/images/partners/ministry-commerce.png", alt: "Ministry of Commerce" },
  { src: "/images/partners/ministry-interior.png", alt: "Ministry of Interior" },
];

interface PartnersProps {
  label: string;
  locale: Locale;
}

export default function Partners({ label, locale }: PartnersProps) {
  const isRTL = locale === "ar";

  return (
    <div className="py-12 max-md:py-8 bg-white border-b border-gray-200 overflow-hidden">
      <p className="text-center text-[13px] font-semibold text-gray-400 uppercase tracking-[2px] mb-8">
        {label}
      </p>

      <div className="marquee-mask overflow-hidden">
        <div
          className={`flex items-center gap-14 max-md:gap-10 w-max ${
            isRTL ? "animate-marquee-rtl" : "animate-marquee"
          } hover:[animation-play-state:paused]`}
        >
          {/* Double the logos for seamless loop */}
          {[...partnerLogos, ...partnerLogos].map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={52}
              className="h-[52px] max-md:h-10 w-auto object-contain opacity-55 grayscale-[30%] transition-all duration-400 hover:opacity-100 hover:grayscale-0 hover:scale-[1.08] flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
