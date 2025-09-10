import { cn } from "@/utils";
import Link from "next/link";

type TailedButtonProps = {
  className?: string;
  isLocal?: boolean;
  href: string;
  label: string;
  target?: string;
};

const TailedButton = ({
  className,
  isLocal = true,
  href,
  label,
  target,
}: TailedButtonProps) => {
  const Wrapper = isLocal ? Link : "a";

  return (
    <Wrapper
      href={href}
      className={cn(
        "text-accent font-oswald flex w-fit cursor-pointer items-center justify-start gap-2 text-lg",
        "before:bg-accent before:h-[0.0625rem] before:w-10 before:transition-all before:duration-700 hover:before:w-20 before:hover:duration-150",
        className
      )}
      target={target}
    >
      {label}
    </Wrapper>
  );
};

export default TailedButton;
