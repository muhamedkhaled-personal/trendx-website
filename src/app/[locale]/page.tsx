import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/i18n";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import WhyTrendX from "@/components/landing/WhyTrendX";
import HowItWorks from "@/components/landing/HowItWorks";
import Rewards from "@/components/landing/Rewards";
import AppSection from "@/components/landing/AppSection";
import ForBusiness from "@/components/landing/ForBusiness";
import CTASection from "@/components/landing/CTASection";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.landing.meta.title,
    description: dict.landing.meta.description,
    openGraph: {
      title: dict.landing.meta.title,
      description: dict.landing.meta.description,
      images: ["/images/og-cover.png"],
      locale: params.locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      siteName: "TrendX",
    },
    twitter: {
      card: "summary_large_image",
      site: "@TrndXco",
      title: dict.landing.meta.title,
      description: dict.landing.meta.description,
      images: ["/images/og-cover.png"],
    },
  };
}

export default async function LandingPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  return (
    <>
      <TopBar {...dict.landing.topBar} />
      <Navbar
        links={dict.landing.navLinks}
        signInText={dict.shared.navbar.signInText}
        signInHref={dict.shared.navbar.signInHref}
        locale={params.locale}
        langToggleLabel={dict.shared.navbar.langToggleLabel}
      />
      <Hero {...dict.landing.hero} />
      <Features {...dict.landing.features} />
      <WhyTrendX {...dict.landing.whyTrendX} />
      <HowItWorks {...dict.landing.howItWorks} />
      <Rewards {...dict.landing.rewards} />
      <AppSection {...dict.landing.appSection} />
      <ForBusiness {...dict.landing.forBusiness} locale={params.locale} />
      <CTASection {...dict.landing.ctaSection} />
      <Footer
        brandDescription={dict.shared.footer.brandDescription}
        columns={dict.shared.footer.columns}
        copyright={dict.shared.footer.copyright}
        locale={params.locale}
      />
    </>
  );
}
