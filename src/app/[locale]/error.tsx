"use client";

import AnimatedChatButton from "@/components/Features/AnimatedChatButton";
import Header from "@/components/Features/Header";
import PillButton from "@/components/UI/Buttons/PillButton";
import StatusPage from "@/components/UI/StatusPage";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ErrorPage = () => {
  const t = useTranslations("errorPage");

  return (
    <>
      <Header />
      <StatusPage
        code={500}
        subtitle={t("subtitle")}
        description={t("description")}
        actions={
          <div className="flex gap-3">
            <PillButton variant="primary" asChild>
              <Link href="/">{t("goHome")}</Link>
            </PillButton>
          </div>
        }
      />
      <AnimatedChatButton className="fixed right-5 bottom-5 z-10 md:right-10 md:bottom-10 lg:right-16 lg:bottom-16 " />
    </>
  );
};

export default ErrorPage;
