import jackImage from "@/assets/heroes/jack.png";
import { useChat } from "@/providers/ChatProvider";
import Image from "next/image";

const AIChatAvatar = () => {
  const { setMessages } = useChat();
  return (
    <button
      onClick={() => setMessages([])}
      className="size-8 shrink-0 md:size-12"
    >
      <Image
        height={100}
        width={100}
        src={jackImage.src}
        alt="Jack"
        className="size-full"
      />
    </button>
  );
};
export default AIChatAvatar;
