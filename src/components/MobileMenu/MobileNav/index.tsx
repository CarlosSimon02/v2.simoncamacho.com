import GhostButton from "@/components/Buttons/GhostButton";
import { NAV_ITEMS } from "@/constants/navigation";
import { Link } from "@/i18n/navigation";
import { cn } from "@/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";
import styles from "./index.module.css";

type MobileNavProps = {
  className?: string;
};

const MobileNav = ({ className }: MobileNavProps) => {
  const t = useTranslations();

  return (
    <nav aria-label={t("common.mainNavigation")} className={cn(className)}>
      <ul className={styles.list}>
        {NAV_ITEMS.map(({ href, id, icon: Icon }) => (
          <li key={id} className="w-fit">
            <DialogClose asChild>
              <GhostButton asChild color="secondary" hoverDirection="right">
                <Link href={href} className={styles.iconLabel}>
                  <Icon className="size-6" />
                  <span>{t(`containers.navBar.links.${id}`)}</span>
                </Link>
              </GhostButton>
            </DialogClose>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
