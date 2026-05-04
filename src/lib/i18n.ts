export type Locale = "ar" | "en";

export const locales: Locale[] = ["ar", "en"];
export const defaultLocale: Locale = "ar";

const dictionaries = {
  ar: () => import("@/lib/dictionaries/ar.json").then((m) => m.default),
  en: () => import("@/lib/dictionaries/en.json").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
