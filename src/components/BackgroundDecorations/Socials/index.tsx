"use client";

import SocialButton from "@/components/Buttons/SocialButton";
import { SOCIALS } from "@/constants/socials";
import { cn } from "@/utils";
import { SOCIAL_STYLE } from "./constants";
import useSocialsAnimation from "./useSocialsAnimation";

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
        <li className={SOCIAL_STYLE} key={social.id}>
          <SocialButton social={social} hoverDirection="left" color="subtle" />
        </li>
      ))}
    </ul>
  );
};

export default Socials;
