import jackImage from "@/assets/heroes/jack.png";
import { useChat } from "@/providers/ChatProvider";
import { cn } from "@/utils";
import { UIDataTypes, UIMessagePart, UITools } from "ai";
import Image from "next/image";
import { memo } from "react";

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
          switch (part.type) {
            case "text":
              return <span key={i}>{part.text}</span>;
          }
        })}
      </p>
    </div>
  );
};

export default memo(AIChatBubble);
