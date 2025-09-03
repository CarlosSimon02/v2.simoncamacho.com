import { cn } from "@/utils";
import { UIDataTypes, UIMessagePart, UITools } from "ai";
import { memo } from "react";

type UserChatBubbleProps = {
  parts: UIMessagePart<UIDataTypes, UITools>[];
  className?: string;
};

const UserChatBubble = ({ parts, className }: UserChatBubbleProps) => {
  return (
    <div className={cn("flex w-full justify-end pb-10", className)}>
      <p className="bg-bg-user-chat text-fg-secondary ml-10 max-w-2xl rounded-3xl rounded-br-none px-5 py-3">
        {parts.map((part, i) => {
          switch (part.type) {
            case "text":
              return <span key={i}>{part.text}</span>;
          }
        })}
      </p>
    </div>
  );
};

export default memo(UserChatBubble);
