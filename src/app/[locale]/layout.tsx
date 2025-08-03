import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import Background from "@/components/Background";
import TailwindScreenIndicator from "@/components/TailwindScreenIndicator";
import { LEXEND, MONTSERRAT, OSWALD } from "@/constants/fonts";
import "@/styles/index.css";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ThemeProvider } from "next-themes";

const fontClasses = cn(MONTSERRAT.variable, OSWALD.variable, LEXEND.variable);

gsap.registerPlugin(useGSAP);

const LocaleLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) => {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={fontClasses} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="system"
            storageKey="theme"
            enableSystem
          >
            <Background />
            {children}
            <TailwindScreenIndicator />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
