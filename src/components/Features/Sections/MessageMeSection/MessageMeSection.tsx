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
        sectionId="messageMe"
        className={cn(className, "flex flex-col gap-9 md:gap-12")}
      >
        <SectionTitle title={t("title")} number={3} />
      </ContentContainer>
    </>
  );
};

export default MessageMeSection;
