import BaseContainer from "@/components/Containers/BaseContainer";
import { cn } from "@/utils";
import { JSX } from "react";

import styles from "./index.module.css";

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
    <BaseContainer as={as} className={cn(styles.baseContainer, className)}>
      {children}
    </BaseContainer>
  );
};

export default ContentContainer;
