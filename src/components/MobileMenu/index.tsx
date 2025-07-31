"use client";

import heroWaving from "@/assets/heroes/waving.png";
import CloseButton from "@/components/Buttons/CloseButton";
import GhostButton from "@/components/Buttons/GhostButton";
import SocialButton from "@/components/Buttons/SocialButton";
import { Ripple } from "@/components/Effects";
import { SOCIALS } from "@/constants/socials";
import useBreakpoint from "@/hooks/useBreakpoints";
import { cn } from "@/utils";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import MobileNav from "./MobileNav";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "./Sheet";

type MobileMenuProps = {
  className?: string;
};

const MobileMenu = ({ className }: MobileMenuProps) => {
  const t = useTranslations();
  const isMd = useBreakpoint("md");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isMd) {
      setOpen(false);
    }
  }, [isMd]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <GhostButton className={cn(className)}>
          <Bars3BottomRightIcon className="size-6 stroke-current" />
        </GhostButton>
      </SheetTrigger>
      <SheetContent>
        <div className="sr-only">
          <SheetTitle>{t("containers.navBar.mobileMenu.title")}</SheetTitle>
          <SheetDescription>
            {t("containers.navBar.mobileMenu.description")}
          </SheetDescription>
        </div>
        <div className={styles.backgroundWrapper}>
          <Ripple numCircles={3} className={styles.ripple} />
          <div className={styles.contentWrapper}>
            <Image
              src={heroWaving}
              alt={t("containers.navBar.mobileMenu.avatar")}
              className={styles.heroWaving}
              width={200}
            />
            <CloseButton
              className={styles.closeButton}
              label={t("containers.navBar.mobileMenu.close")}
              onClick={() => setOpen(false)}
              type="sheet"
            />
            <MobileNav className={styles.mobileNav} />
          </div>
        </div>
        <SheetFooter>
          <div className={styles.socialsWrapper}>
            {SOCIALS.map((social) => (
              <SocialButton
                key={social.id}
                social={social}
                hoverDirection="up"
              />
            ))}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
