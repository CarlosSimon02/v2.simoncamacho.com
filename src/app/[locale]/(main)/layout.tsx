import Decorations from "@/components/BackgroundDecorations";
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
    </>
  );
};

export default MainLayout;
