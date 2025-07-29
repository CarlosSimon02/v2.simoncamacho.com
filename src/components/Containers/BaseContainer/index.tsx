import { cn } from "@/utils";
import React, { JSX } from "react";
import styles from "./index.module.css";

type BaseContainerProps = {
  children?: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

const BaseContainer = ({
  children,
  className,
  as: Component = "div",
}: BaseContainerProps) => {
  return (
    <Component className={cn(styles.baseContainer, className)}>
      {children}
    </Component>
  );
};

export default BaseContainer;
