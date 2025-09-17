"use client";

import jackImage from "@/assets/heroes/jack.png";
import ChatContentContainer from "@/components/UI/Containers/ChatContentContainer";
import { useChat } from "@/providers/ChatProvider";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { getErrorCode } from "../utils";
import AIChatForm from "./AIChatForm";
import ErrorBubble from "./ConversationInterface/componentts/ErrorBubble";
import QuickQuestions from "./QuickQuestions";

const CHAT_CONTENT_ITEM_CLASS = "chat-content-item";

const EmptyQueryState = () => {
  const { error } = useChat();
  const t = useTranslations("chat.emptyState");
  const errorCode = getErrorCode(error?.message ?? "");

  useGSAP(() => {
    gsap.to(`.${CHAT_CONTENT_ITEM_CLASS}`, {
      top: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.1,
      ease: "power4.out",
    });
  });

  return (
    <ChatContentContainer className="flex flex-col items-center justify-center gap-6 py-12">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <div
          className={cn(
            "from-bottom-sm flex flex-col items-center justify-center gap-6 text-center md:flex-row md:items-end md:gap-8",
            CHAT_CONTENT_ITEM_CLASS
          )}
        >
          <Image
            height={200}
            width={200}
            src={jackImage.src}
            alt={t("jackAlt")}
            className="size-24"
            priority
          />
          <h1 className="font-montserrat text-accent text-3xl font-black md:text-4xl">
            {t("greeting")}
          </h1>
        </div>
        <p className={cn(CHAT_CONTENT_ITEM_CLASS, "from-bottom-sm")}>
          {t("description")}
        </p>
        {errorCode === 429 && (
          <ErrorBubble
            errorCode={429}
            className={cn(
              "from-bottom-sm mr-0 rounded-bl-3xl",
              CHAT_CONTENT_ITEM_CLASS
            )}
          />
        )}
      </div>
      <AIChatForm className={cn(CHAT_CONTENT_ITEM_CLASS, "from-bottom-sm")} />
      <QuickQuestions
        className={cn(CHAT_CONTENT_ITEM_CLASS, "from-bottom-sm")}
      />
    </ChatContentContainer>
  );
};

export default EmptyQueryState;
