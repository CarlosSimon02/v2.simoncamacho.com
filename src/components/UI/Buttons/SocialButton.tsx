import { SOCIALS } from "@/constants/socials";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import GhostButton from "./GhostButton";

type SocialButtonProps = {
  social: (typeof SOCIALS)[number];
  className?: string;
  hoverDirection?: "up" | "bottom" | "left" | "right";
  size?: "sm" | "md";
  color?: "primary" | "secondary" | "accent" | "subtle";
  active?: boolean;
};

const SocialButton = ({
  social,
  className,
  hoverDirection,
  size = "sm",
  color = "primary",
  active,
}: SocialButtonProps) => {
  const t = useTranslations();
  return (
    <GhostButton
      color={active ? "primary" : color}
      hoverDirection={hoverDirection}
      className={cn(className)}
      asChild
    >
      <Link href={social.href}>
        <div>
          <social.icon
            className={cn(
              "fill-current",
              size === "sm" && "size-5",
              size === "md" && "size-6"
            )}
          />
          <span className="sr-only">
            {t(`common.socialLinks.${social.id}`)}
          </span>
        </div>
      </Link>
    </GhostButton>
  );
};

export default SocialButton;
