import ChatHeader from "@/components/Features/ChatHeader";
import { generateMetadata as _generateMetadata } from "./metadata";

export const generateMetadata = _generateMetadata;

type ChatLayoutProps = {
  children?: React.ReactNode;
};

const ChatLayout = ({ children }: ChatLayoutProps) => {
  return (
    <>
      <ChatHeader />
      {children}
    </>
  );
};

export default ChatLayout;
