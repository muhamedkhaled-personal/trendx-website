import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/i18n";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BizHero from "@/components/business/BizHero";
import Partners from "@/components/business/Partners";
import Services from "@/components/business/Services";
import PanelInsights from "@/components/business/PanelInsights";
import Reports from "@/components/business/Reports";
import SurveyTool from "@/components/business/SurveyTool";
import Organizations from "@/components/business/Organizations";
import BizCTA from "@/components/business/BizCTA";
import ContactForm from "@/components/landing/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.business.meta.title,
    description: dict.business.meta.description,
    openGraph: {
      title: dict.business.meta.title,
      description: dict.business.meta.description,
      images: ["/images/og-cover.png"],
      locale: params.locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      siteName: "TrendX",
    },
    twitter: {
      card: "summary_large_image",
      site: "@TrndXco",
      title: dict.business.meta.title,
      description: dict.business.meta.description,
      images: ["/images/og-cover.png"],
    },
  };
}

export default async function BusinessPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  return (
    <>
      <TopBar {...dict.business.topBar} />
      <Navbar
        links={dict.business.navLinks}
        signInText={dict.shared.navbar.signInText}
        signInHref={dict.shared.navbar.signInHref}
        locale={params.locale}
        langToggleLabel={dict.shared.navbar.langToggleLabel}
      />
      <BizHero {...dict.business.hero} ticker={dict.business.ticker} />
      <Partners label={dict.business.partners.label} locale={params.locale} />
      <PanelInsights {...dict.business.panelInsights} />
      <Reports {...dict.business.reports} />
      <Services {...dict.business.services} />
      <SurveyTool {...dict.business.surveyTool} />
      <Organizations {...dict.business.organizations} />
      <ContactForm {...dict.shared.contactForm} />
      <BizCTA {...dict.business.bizCta} locale={params.locale} />
      <Footer
        brandDescription={dict.shared.footer.brandDescription}
        columns={dict.shared.footer.columns}
        copyright={dict.shared.footer.copyright}
        locale={params.locale}
      />
    </>
  );
}
