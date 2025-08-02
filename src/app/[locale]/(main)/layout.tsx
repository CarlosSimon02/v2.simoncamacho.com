import Decorations from "@/components/BackgroundDecorations";
import ChatButton from "@/components/Buttons/ChatButton";
import Header from "@/components/Header";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Decorations />
      <main>{children}</main>
      <ChatButton className="fixed right-16 bottom-16 z-10" />
    </>
  );
};

export default MainLayout;
