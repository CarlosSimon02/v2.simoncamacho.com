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
      <p className="bg-bg-ai-chat text-fg-primary rounded-3xl rounded-bl-none">
        {parts ? (
          parts.map((part, i) => {
            if (part.type !== "text" || !part.text) return null;

            return (
              <Streamdown
                className={cn(
                  "size-full [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
                )}
                key={`${i}`}
                components={{
                  h1: (props) => (
                    <h1
                      className="font-montserrat text-accent text-3xl font-black whitespace-nowrap md:text-4xl"
                      {...props}
                    />
                  ),
                  h2: (props) => <h2 className="subheading" {...props} />,
                  h3: (props) => (
                    <h2 className="subheading text-xl lg:text-2xl" {...props} />
                  ),
                }}
              >
                {part.text}
              </Streamdown>
            );
          })
        ) : (
          <LoadingSpinner className="text-accent" />
        )}
      </p>
    </div>
  );
};

export default memo(AIChatBubble);
