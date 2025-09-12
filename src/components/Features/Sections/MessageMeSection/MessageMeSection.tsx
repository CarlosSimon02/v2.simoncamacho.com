import GetInTouch from "@/components/Features/GetInTouch/GetInTouch";
import ContentContainer from "@/components/UI/Containers/ContentContainer";
import SectionTitle from "@/components/UI/SectionTitle";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";

type MessageMeSectionProps = {
  className?: string;
};

const MessageMeSection = ({ className }: MessageMeSectionProps) => {
  const t = useTranslations("messageSection");

  return (
    <>
      <ContentContainer
        sectionId="message-me"
        className={cn(className, "flex flex-col gap-12 md:gap-16 md:!pb-40")}
      >
        <SectionTitle title={t("title")} number={3} />
        <GetInTouch />
      </ContentContainer>
    </>
  );
};

export default MessageMeSection;
