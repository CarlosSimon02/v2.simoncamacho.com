import { LANGUAGES } from "@/constants/languages";

// Extract the locale codes from the LANGUAGES constant
export type Locale = (typeof LANGUAGES)[number]["code"];

// Type guard to check if a string is a valid locale
export function isValidLocale(value: string): value is Locale {
  return LANGUAGES.some((lang) => lang.code === value);
}

// Get all available locales
export const AVAILABLE_LOCALES: Locale[] = LANGUAGES.map((lang) => lang.code);
