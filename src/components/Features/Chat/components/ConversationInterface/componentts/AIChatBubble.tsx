import jackImage from "@/assets/heroes/jack.png";
import { cn } from "@/utils";
import { UIDataTypes, UIMessagePart, UITools } from "ai";
import Image from "next/image";
import { useChatContext } from "../../../providers/ChatProvider";

type ChatBubbleProps = {
  parts: UIMessagePart<UIDataTypes, UITools>[];
  className?: string;
};

const ChatBubble = ({ className, parts }: ChatBubbleProps) => {
  const { setMessages } = useChatContext();

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

export default ChatBubble;
