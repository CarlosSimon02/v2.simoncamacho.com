"use client";

import SocialButton from "@/components/UI/Buttons/SocialButton";
import { SOCIALS } from "@/data/socials";
import { cn } from "@/utils";
import { SOCIAL_ITEM_CLASS } from "./constants";
import useSocialsAnimation from "./hooks/useSocialsAnimation";

type SocialsProps = {
  className?: string;
};

const Socials = ({ className }: SocialsProps) => {
  const { socialsRef } = useSocialsAnimation();

  return (
    <ul
      className={cn(
        "pointer-events-auto flex flex-col items-center gap-6",
        className
      )}
      ref={socialsRef}
    >
      {SOCIALS.map((social) => (
        <li className={cn("from-right-xs", SOCIAL_ITEM_CLASS)} key={social.id}>
          <SocialButton social={social} hoverDirection="left" color="subtle" />
        </li>
      ))}
    </ul>
  );
};

export default Socials;
