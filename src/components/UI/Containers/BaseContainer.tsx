import { cn } from "@/utils";
import React, { JSX } from "react";

type BaseContainerProps = {
  children?: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  name?: string;
};

const BaseContainer = ({
  children,
  className,
  as: Component = "div",
  name,
}: BaseContainerProps) => {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[90rem] px-[1rem] sm:px-[2rem] lg:px-[3rem]",
        className
      )}
      id={name}
    >
      {children}
    </Component>
  );
};

export default BaseContainer;
