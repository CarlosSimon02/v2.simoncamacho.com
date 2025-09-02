import jackImage from "@/assets/heroes/jack.png";
import { useChat } from "@/providers/ChatProvider";
import { cn } from "@/utils";
import { UIDataTypes, UIMessagePart, UITools } from "ai";
import Image from "next/image";
import { memo } from "react";
import { Streamdown } from "streamdown";

type ChatBubbleProps = {
  parts: UIMessagePart<UIDataTypes, UITools>[];
  className?: string;
};

const AIChatBubble = ({ className, parts }: ChatBubbleProps) => {
  const { setMessages } = useChat();

  return (
    <div className={cn("flex items-start gap-3 md:gap-6", className)}>
      <button
        onClick={() => setMessages([])}
        className="size-10 shrink-0 md:size-12"
      >
        <Image
          height={100}
          width={100}
          src={jackImage.src}
          alt="Jack"
          className="size-full"
        />
      </button>
      <p className="bg-bg-ai-chat text-fg-primary rounded-3xl rounded-bl-none">
        {parts.map((part, i) => {
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
        })}
      </p>
    </div>
  );
};

export default memo(AIChatBubble);
