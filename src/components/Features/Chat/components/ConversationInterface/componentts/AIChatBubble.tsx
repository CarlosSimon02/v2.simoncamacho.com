import { cn } from "@/utils";
import { UIDataTypes, UIMessagePart, UITools } from "ai";
import { memo } from "react";
import { Streamdown } from "streamdown";
import AIChatAvatar from "./AIChatAvatar";
import ErrorBubble from "./ErrorBubble";
import ToolRenderer from "./ToolRenderer";

type ChatBubbleProps = {
  parts: UIMessagePart<UIDataTypes, UITools>[];
  className?: string;
};

const streamdownClassName = cn(
  "min-w-0 [&_*]:wrap-break-word [&>*:first-child]:mt-0 [&>*:last-child]:mb-0",
  "[&_*]:!border-border [&_*]:!border-t-border [&_*]:!border-b-border [&_*]:!border-l-border [&_*]:!border-r-border",
  "[&_h1,h2,h3,h4,h5,h6,th]:text-fg-secondary [&_h1,h2,h3,h4,h5,h6,th]:font-oswald"
);

const RenderStreamdown = ({ text }: { text: string }) => (
  <Streamdown className={streamdownClassName}>{text}</Streamdown>
);

const AIChatBubble = ({ className, parts }: ChatBubbleProps) => {
  return (
    <div className={cn("flex items-start gap-3 md:gap-6", className)}>
      <AIChatAvatar />
      <div className="flex min-w-0 flex-col gap-10">
        {parts.map((part, i) => {
          if (part.type.startsWith("tool-")) {
            return <ToolRenderer key={i} part={part} />;
          }

          if (part.type === "text") {
            if (part.text.startsWith("Error:")) {
              const errorJson = part.text.replace("Error:", "").trim();
              try {
                const errorObj = JSON.parse(errorJson);
                return <ErrorBubble key={i} errorCode={errorObj.code} />;
              } catch {
                return <RenderStreamdown text={part.text} key={i} />;
              }
            }

            return <RenderStreamdown text={part.text} key={i} />;
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default memo(AIChatBubble);
