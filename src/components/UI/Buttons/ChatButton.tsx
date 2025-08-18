"use client";

import { Link } from "@/i18n/navigation";
import { cn } from "@/utils";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

type ChatButtonProps = {
  className?: string;
};

const ChatButton = ({ className }: ChatButtonProps) => {
  const t = useTranslations();
  return (
    <Link
      href={"/chat"}
      aria-label={t("common.chatButton.open")}
      className={cn(className)}
    >
      <div className="bg-accent rounded-full p-3 text-white shadow-lg">
        <ChatBubbleBottomCenterIcon className="size-6 fill-white md:size-7" />
      </div>
    </Link>
  );
};

export default ChatButton;
