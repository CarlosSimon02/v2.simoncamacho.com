import GhostButton from "@/components/Buttons/GhostButton";
import { SimonCamacho } from "@/components/Icons/Logos";
import { useTranslations } from "next-intl";
import Link from "next/link";

type LogoLinkProps = {
  className?: string;
};

const LogoLink = ({ className }: LogoLinkProps) => {
  const t = useTranslations("common");

  return (
    <GhostButton className={className} asChild>
      <Link href="/">
        <div>
          <SimonCamacho className="fill-accent size-8 md:size-10" />
          <span className="sr-only">{t("navigateToHome")}</span>
        </div>
      </Link>
    </GhostButton>
  );
};

export default LogoLink;
