import { Barlow_Condensed, Lexend, Montserrat, Oswald } from "next/font/google";

export const MONTSERRAT = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  preload: false,
});

export const OSWALD = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  preload: false,
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const LEXEND = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  preload: false,
});

export const ROBOTO_CONDENSED = Barlow_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  preload: false,
  weight: ["900"],
});
