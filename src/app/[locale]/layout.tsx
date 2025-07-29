import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import Background from "@/components/Background";
import TailwindScreenIndicator from "@/components/TailwindScreenIndicator";
import { LEXEND, MONTSERRAT, OSWALD } from "@/constants/fonts";
import "@/styles/index.css";
import { cn } from "@/utils";

const fontClasses = cn(MONTSERRAT.variable, OSWALD.variable, LEXEND.variable);

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
    <html lang={locale} className={fontClasses}>
      <body>
        <NextIntlClientProvider>
          <Background />
          {children}
          <TailwindScreenIndicator />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
