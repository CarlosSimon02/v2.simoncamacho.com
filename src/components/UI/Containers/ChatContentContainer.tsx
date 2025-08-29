import { cn } from "@/utils";
import { JSX } from "react";
import BaseContainer from "./BaseContainer";

type ChatContentContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

const ChatContentContainer = ({
  children,
  className,
  as = "div",
}: ChatContentContainerProps) => {
  return (
    <BaseContainer as={as} className={cn("!max-w-[60rem]", className)}>
      {children}
    </BaseContainer>
  );
};

export default ChatContentContainer;
