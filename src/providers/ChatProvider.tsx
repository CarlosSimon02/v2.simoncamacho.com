"use client";

import { ChatMessage } from "@/app/api/chat/route";
import { Chat, useChat as useChatAi } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useLocale } from "next-intl";
import React from "react";

type ChatContextValue = Chat<ChatMessage> | null;

const ChatContext = React.createContext<ChatContextValue>(null);

type ChatProviderProps = {
  children: React.ReactNode;
};

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const locale = useLocale();
  const [chat] = React.useState(
    () =>
      new Chat<ChatMessage>({
        transport: new DefaultChatTransport({
          api: `/api/chat/?locale=${locale}`,
        }),
        onError: (error) => {
          console.error(error);
        },
      })
  );

  return <ChatContext.Provider value={chat}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
  const chat = React.useContext(ChatContext);
  if (!chat) throw new Error("ChatProvider is missing");

  return useChatAi<ChatMessage>({ chat });
};
