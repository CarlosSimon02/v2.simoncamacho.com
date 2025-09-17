import { cn } from "@/utils";
import { JSX } from "react";
import BaseContainer from "./BaseContainer";

type ContentContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  sectionId: string;
};

const ContentContainer = ({
  children,
  className,
  sectionId,
  as = "section",
}: ContentContainerProps) => {
  return (
    <BaseContainer
      as={as}
      name={sectionId}
      className={cn(
        "relative scroll-mt-[calc(var(--header-height)-0.0625rem)] overflow-x-clip py-12 lg:py-16 xl:!px-[var(--content-padding-x)] xl:py-20",
        className
      )}
    >
      {children}
    </BaseContainer>
  );
};

export default ContentContainer;
