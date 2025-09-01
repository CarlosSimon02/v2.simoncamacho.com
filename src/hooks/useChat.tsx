import { Chat, useChat as useChatAi } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

const chat = new Chat({
  transport: new DefaultChatTransport({
    api: "/api/chat",
  }),
});

const useChat = (props: Parameters<typeof useChatAi>[0] = {}) => {
  return useChatAi({
    chat,
    ...props, // <-- pass the props to useChatAi
  });
};

export default useChat;
