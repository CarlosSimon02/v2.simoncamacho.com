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
      <ChatButton className="fixed right-5 bottom-5 z-10 md:right-10 md:bottom-10 lg:right-16 lg:bottom-16" />
    </>
  );
};

export default MainLayout;
