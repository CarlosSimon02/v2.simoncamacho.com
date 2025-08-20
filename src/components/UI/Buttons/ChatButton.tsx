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
      className={cn(className, "group")}
    >
      <div
        className={cn(
          "bg-accent rounded-full p-3 text-white shadow-lg",
          "relative transition-all duration-150 ease-in-out",
          "translate-y-0 transform",
          "group-hover:-translate-y-1"
        )}
      >
        <ChatBubbleBottomCenterIcon className="size-6 fill-white md:size-7" />
      </div>
    </Link>
  );
};

export default ChatButton;
