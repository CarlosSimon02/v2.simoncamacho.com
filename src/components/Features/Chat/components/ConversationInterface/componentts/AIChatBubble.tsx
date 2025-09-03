import LoadingSpinner from "@/components/UI/LoadingSpinner";
import { cn } from "@/utils";
import { UIDataTypes, UIMessagePart, UITools } from "ai";
import { memo } from "react";
import { Streamdown } from "streamdown";
import AIChatAvatar from "./AIChatAvatar";

type ChatBubbleProps = {
  parts?: UIMessagePart<UIDataTypes, UITools>[];
  className?: string;
};

const AIChatBubble = ({ className, parts }: ChatBubbleProps) => {
  return (
    <div className={cn("flex items-start gap-3 md:gap-6", className)}>
      <AIChatAvatar />

      {parts ? (
        parts.map((part, i) => {
          if (part.type !== "text" || !part.text) return null;

          return (
            <Streamdown
              className={cn(
                "min-w-0 text-sm md:text-base [&_*]:wrap-break-word [&>*:first-child]:mt-0 [&>*:last-child]:mb-0",
                "[&_*]:!border-border [&_*]:!border-t-border [&_*]:!border-b-border [&_*]:!border-l-border [&_*]:!border-r-border",
                "[&_h1,h2,h3,h4,h5,h6,th]:text-fg-secondary [&_h1,h2,h3,h4,h5,h6,th]:font-oswald"
              )}
              key={`${i}`}
            >
              {part.text}
            </Streamdown>
          );
        })
      ) : (
        <LoadingSpinner className="text-accent" />
      )}
    </div>
  );
};

export default memo(AIChatBubble);
