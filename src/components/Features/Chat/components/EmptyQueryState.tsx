"use client";

import jackImage from "@/assets/heroes/jack.png";
import ChatContentContainer from "@/components/UI/Containers/ChatContentContainer";
import { useChat } from "@/providers/ChatProvider";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AIChatForm from "./AIChatForm";
import ErrorBubble from "./ConversationInterface/componentts/ErrorBubble";
import QuickQuestions from "./QuickQuestions";

const EmptyQueryState = () => {
  const { error } = useChat();
  const t = useTranslations("chat.emptyState");
  const errorCode = error ? JSON.parse(error.message).code : null;
  return (
    <ChatContentContainer className="flex flex-col items-center justify-center gap-6 py-12">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:items-end md:gap-8">
          <Image
            height={200}
            width={200}
            src={jackImage.src}
            alt={t("jackAlt")}
            className="size-24"
          />
          <h1 className="font-montserrat text-accent text-3xl font-black md:text-4xl">
            {t("greeting")}
          </h1>
        </div>
        <p>{t("description")}</p>
        {errorCode === 429 && (
          <ErrorBubble errorCode={429} className="mr-0 rounded-bl-3xl" />
        )}
      </div>
      <AIChatForm />
      <QuickQuestions />
    </ChatContentContainer>
  );
};

export default EmptyQueryState;
