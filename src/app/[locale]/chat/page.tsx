import Chat from "@/components/Features/Chat";
import Decorations from "@/components/Features/Decorations";
import { ChatProvider } from "@/providers/ChatProvider";

const HomePage = async () => {
  return (
    <>
      <Decorations />
      <main id="main" className="flex h-full flex-1">
        <ChatProvider>
          <Chat />
        </ChatProvider>
      </main>
    </>
  );
};

export default HomePage;
