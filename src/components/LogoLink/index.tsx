import GhostButton from "@/components/Buttons/GhostButton";
import { SimonCamacho } from "@/components/Icons/Logos";
import Link from "next/link";

type LogoLinkProps = {
  className?: string;
};

const LogoLink = ({ className }: LogoLinkProps) => {
  return (
    <GhostButton className={className}>
      <Link href="/">
        <SimonCamacho className="fill-accent size-8 md:size-10" />
      </Link>
    </GhostButton>
  );
};

export default LogoLink;
