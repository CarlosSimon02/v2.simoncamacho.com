import SocialButton from "@/components/Buttons/SocialButton";
import { SOCIALS } from "@/constants/socials";
import { cn } from "@/utils";

type SocialsProps = {
  className?: string;
};

const Socials = ({ className }: SocialsProps) => {
  return (
    <ul
      className={cn(
        "pointer-events-auto flex flex-col items-center gap-6",
        className
      )}
    >
      {SOCIALS.map((social) => (
        <SocialButton
          key={social.id}
          social={social}
          hoverDirection="right"
          color="subtle"
        />
      ))}
    </ul>
  );
};

export default Socials;
