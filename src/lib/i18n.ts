import es from "@/locales/es.json";
import en from "@/locales/en.json";

export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export const translations = {
  es,
  en,
} as const;

export function getTranslation(locale: Locale) {
  return translations[locale];
}

