import PillButton from "@/components/UI/Buttons/PillButton";
import StatusPage from "@/components/UI/StatusPage";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const NotFound = async () => {
  const t = await getTranslations("notFound");

  return (
    <StatusPage
      code={404}
      subtitle={t("subtitle")}
      description={t("description")}
      actions={
        <PillButton variant="primary" asChild>
          <Link href="/">{t("goHome")}</Link>
        </PillButton>
      }
    />
  );
};

export default NotFound;
