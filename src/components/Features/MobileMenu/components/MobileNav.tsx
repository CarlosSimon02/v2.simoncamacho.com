import SectionLinkButton from "@/components/UI/Buttons/SectionLinkButton";
import { NAV_ITEMS } from "@/constants/navigation";
import { useCurrentSectionStore } from "@/stores/useCurrentSectionStore";
import { cn } from "@/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";

type MobileNavProps = {
  className?: string;
};

const MobileNav = ({ className }: MobileNavProps) => {
  const t = useTranslations();
  const { currentSection } = useCurrentSectionStore();

  return (
    <nav aria-label={t("common.mainNavigation")} className={cn(className)}>
      <ul className="flex flex-col gap-6">
        {NAV_ITEMS.map(({ href, id, icon: Icon }) => (
          <li key={id} className="w-fit">
            <SectionLinkButton
              href={`/${href}`}
              id={id}
              color={currentSection === id ? "secondary" : "primary"}
              hoverDirection="right"
            >
              <DialogClose className="font-oswald flex items-center gap-3">
                <Icon className="size-6" />
                <span>{t(`containers.navBar.links.${id}`)}</span>
              </DialogClose>
            </SectionLinkButton>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
