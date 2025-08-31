"use client";

import { useSearchParams } from "next/navigation";
import ConversationInterface from "./components/ConversationInterface";
import EmptyQueryState from "./components/EmptyQueryState";

const Chat = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  if (!query || query.trim() === "") {
    return <EmptyQueryState />;
  }

  return <ConversationInterface query={query} />;
};

export default Chat;
