import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import { Toaster } from "@/components/Primitives/Sonner";
import Background from "@/components/UI/Background";
import SkipToContentButton from "@/components/UI/Buttons/SkipToContentButton";
import TailwindScreenIndicator from "@/components/UI/TailwindScreenIndicator";
import { LEXEND, MONTSERRAT, OSWALD } from "@/constants/fonts";
import { GSAPSetup } from "@/providers/GSAPSetup";
import { ScrollObserver } from "@/providers/ScrollObserver";
import "@/styles/main.css";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger as GSAPScrollTrigger } from "gsap/ScrollTrigger";
import { ThemeProvider } from "next-themes";
import { generateMetadata as _generateMetadata } from "../metadata";

const fontClasses = cn(MONTSERRAT.variable, OSWALD.variable, LEXEND.variable);

gsap.registerPlugin(useGSAP, GSAPScrollTrigger);

export const generateMetadata = _generateMetadata;

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
        <GSAPSetup />
        <ScrollObserver />
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="data-theme"
            defaultTheme="system"
            storageKey="theme"
            enableSystem
            disableTransitionOnChange
          >
            <Background />
            <SkipToContentButton className="!absolute top-[var(--header-height)] -left-52 z-9999 opacity-0 duration-500 focus:left-4 focus:opacity-100" />
            <div className="flex min-h-[100dvh] flex-col">{children}</div>
            <Toaster />
            <TailwindScreenIndicator />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
