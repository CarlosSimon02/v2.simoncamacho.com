"use client";

import { Chat, useChat as useChatAi } from "@ai-sdk/react";
import { DefaultChatTransport, UIDataTypes, UIMessage, UITools } from "ai";
import { useLocale } from "next-intl";
import React from "react";

type ChatContextValue = Chat<UIMessage<unknown, UIDataTypes, UITools>> | null;

const ChatContext = React.createContext<ChatContextValue>(null);

type ChatProviderProps = {
  children: React.ReactNode;
};

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const locale = useLocale();
  const [chat] = React.useState(
    () =>
      new Chat({
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

  return useChatAi({ chat });
};
