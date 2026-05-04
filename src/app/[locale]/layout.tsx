import { IBM_Plex_Sans_Arabic } from "next/font/google";
import type { Locale } from "@/lib/i18n";
import "../globals.css";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-arabic",
  display: "swap",
});

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dir = params.locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={params.locale} dir={dir} className={ibmPlexSansArabic.variable}>
      <body className="font-sans text-gray-800 bg-ice leading-relaxed overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
