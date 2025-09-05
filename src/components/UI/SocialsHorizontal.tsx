import { SOCIALS } from "@/data/socials";
import { cn } from "@/utils";
import SocialButton from "./Buttons/SocialButton";

type SocialsHorizontalProps = {
  className?: string;
};

const SocialsHorizontal = ({ className }: SocialsHorizontalProps) => {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-[17rem] flex-wrap justify-center gap-6",
        className
      )}
    >
      {SOCIALS.map((social) => (
        <SocialButton key={social.id} social={social} hoverDirection="up" />
      ))}
    </div>
  );
};

export default SocialsHorizontal;
