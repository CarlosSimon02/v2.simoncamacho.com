import GetInTouch from "@/components/Features/GetInTouch/GetInTouch";
import ContentContainer from "@/components/UI/Containers/ContentContainer";
import SectionTitle from "@/components/UI/SectionTitle";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import ConnectSectionAnimation from "./components/ConnectSectionAnimation";
import FrontendMentorCard from "./components/FrontendMentorCard";
import FrontendMentorImages from "./components/FrontendMentorImages";
import PlayChessSection from "./components/PlayChessSection";

type ConnectSectionProps = {
  className?: string;
};

const ConnectSection = ({ className }: ConnectSectionProps) => {
  const t = useTranslations();

  return (
    <>
      <ConnectSectionAnimation />
      <ContentContainer
        sectionId="connect"
        className={cn("flex flex-col gap-12 md:gap-16 md:!pb-40", className)}
      >
        <SectionTitle title={t("connectSection.title") as string} number={4} />
        <div className="flex flex-col gap-14 md:gap-24">
          <GetInTouch />
          <div className="flex flex-col items-center gap-[2rem] md:flex-row-reverse md:gap-12">
            <FrontendMentorCard />
            <FrontendMentorImages />
          </div>
          <PlayChessSection />
        </div>
      </ContentContainer>
    </>
  );
};

export default ConnectSection;
