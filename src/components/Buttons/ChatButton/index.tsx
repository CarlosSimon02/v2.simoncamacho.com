import { cn } from "@/utils";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";

type ChatButtonProps = {
  className?: string;
};

const ChatButton = ({ className }: ChatButtonProps) => {
  return (
    <button
      className={cn(
        "bg-accent rounded-full p-3 text-white shadow-lg",
        className
      )}
    >
      <ChatBubbleBottomCenterIcon className="size-7 fill-white" />
    </button>
  );
};

export default ChatButton;
