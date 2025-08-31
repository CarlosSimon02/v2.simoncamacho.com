"use client";

import { useChat, UseChatHelpers, UseChatOptions } from "@ai-sdk/react";
import { UIDataTypes, UIMessage, UITools } from "ai";
import React, { createContext, ReactNode, useContext } from "react";

type DefaultUIMessage = UIMessage<unknown, UIDataTypes, UITools>;

type ChatContextType = UseChatHelpers<DefaultUIMessage>;

const ChatContext = createContext<ChatContextType | undefined>(undefined);

type ChatProviderProps = UseChatOptions<DefaultUIMessage> & {
  children: ReactNode;
};

export const ChatProvider: React.FC<ChatProviderProps> = ({
  children,
  ...props
}) => {
  const chat = useChat(props);

  return <ChatContext.Provider value={chat}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};
