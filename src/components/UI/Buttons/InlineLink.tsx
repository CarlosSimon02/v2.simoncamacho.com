import { cn } from "@/utils";
import { AnchorHTMLAttributes } from "react";

type InlineLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const InlineLink = ({ children, className, ...props }: InlineLinkProps) => {
  return (
    <a className={cn("inline-link", className)} target="_blank" {...props}>
      {children}
    </a>
  );
};

export default InlineLink;
