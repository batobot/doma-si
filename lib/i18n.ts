export const locales = ['en', 'hr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocale(locale: string): Locale {
  return isValidLocale(locale) ? locale : defaultLocale;
}
