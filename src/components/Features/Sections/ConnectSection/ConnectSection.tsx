import ContactForm from "@/components/Features/ContactForm";
import ContentContainer from "@/components/UI/Containers/ContentContainer";
import SectionTitle from "@/components/UI/SectionTitle";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";

type ConnectSectionProps = {
  className?: string;
};

const ConnectSection = ({ className }: ConnectSectionProps) => {
  const t = useTranslations("connectSection");

  return (
    <>
      <ContentContainer
        sectionId="about"
        className={cn("flex flex-col gap-12 md:gap-16", className)}
      >
        <SectionTitle title={t("title") as string} number={4} />
        <div className="flex flex-col gap-14 md:gap-24">
          <div className="flex flex-col items-center justify-stretch gap-[2rem] md:flex-row md:gap-16">
            <div className="grid basis-1/2 gap-6">
              <div>
                <h3 className="subheading mb-4">{t("getInTouch.title")}</h3>
                <p>{t("getInTouch.description")}</p>
              </div>
            </div>
            <div className="w-full max-w-xl basis-1/2 text-start">
              <ContactForm className="w-full" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[2rem] md:flex-row-reverse md:gap-12">
            <div className="relative grid basis-[40%] gap-3 md:gap-8">
              <div>
                <h3 className="subheading mb-4">
                  {t("onFrontendMentor.title")}
                </h3>
                <p>{t("onFrontendMentor.description")}</p>
              </div>
            </div>
            <div className="basis-[60%]"></div>
          </div>
          <div className="flex flex-col items-center gap-[2rem] md:flex-row md:gap-12">
            <div className="grid basis-[60%] gap-3 md:gap-8">
              <div>
                <h3 className="subheading mb-4">{t("playChess.title")}</h3>
                <p>{t("playChess.description")}</p>
              </div>
            </div>
            <div className="basis-[40%]"></div>
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default ConnectSection;
