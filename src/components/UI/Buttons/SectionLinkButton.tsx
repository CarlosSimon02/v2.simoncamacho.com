"use client";

import { Link } from "@/i18n/navigation";
import { useCurrentSectionStore } from "@/stores/useCurrentSectionStore";
import GhostButton, { GhostButtonProps } from "./GhostButton";

type SectionLinkButtonProps = GhostButtonProps & {
  href: string;
  id: string;
};

const SectionLinkButton = ({
  href,
  id,
  children,
  ...props
}: SectionLinkButtonProps) => {
  const { setCurrentSection } = useCurrentSectionStore();

  return (
    <GhostButton {...props} onClick={() => setCurrentSection(id)} asChild>
      <Link href={href}>{children}</Link>
    </GhostButton>
  );
};

export default SectionLinkButton;
