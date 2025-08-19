"use client";

import heroWaving from "@/assets/heroes/waving.png";
import CloseButton from "@/components/UI/Buttons/CloseButton";
import GhostButton from "@/components/UI/Buttons/GhostButton";
import SocialButton from "@/components/UI/Buttons/SocialButton";
import Ripple from "@/components/UI/Effects/Ripple";
import { SOCIALS } from "@/data/socials";
import useBreakpoint from "@/hooks/useBreakpoints";
import { cn } from "@/utils";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import MobileNav from "./components/MobileNav";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "./components/Sheet";

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
        <GhostButton className={cn(className)} color="secondary">
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
        <div className="absolute inset-0 overflow-hidden">
          <Ripple
            numCircles={3}
            className="absolute -top-7 -left-7 size-[12.5rem]"
          />
          <div className="absolute inset-0 overflow-y-auto p-6">
            <Image
              src={heroWaving}
              alt={t("containers.navBar.mobileMenu.avatar")}
              className="absolute -top-[8.25rem] -left-24 h-auto w-[12.5rem] rotate-[130deg]"
              width={200}
              priority
            />
            <CloseButton
              className="absolute top-4 right-4 z-10"
              label={t("containers.navBar.mobileMenu.close")}
              onClick={() => setOpen(false)}
              type="sheet"
            />
            <MobileNav className="pt-[11.5rem] pb-12" />
          </div>
        </div>
        <SheetFooter>
          <div className="mx-auto flex w-full max-w-[17rem] flex-wrap justify-center gap-6">
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
