import { Lexend, Montserrat, Oswald } from "next/font/google";

export const MONTSERRAT = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  preload: false,
});

export const OSWALD = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const LEXEND = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  preload: false,
});
