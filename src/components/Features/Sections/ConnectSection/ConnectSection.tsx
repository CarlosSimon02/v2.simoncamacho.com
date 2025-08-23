import articlePreviewComponent from "@/assets/femProjects/articlePreviewComponent.png";
import bmiCalculator from "@/assets/femProjects/bmiCalculator.png";
import skilledLandingPageDesktop from "@/assets/femProjects/skilledLandingPageDesktop.png";
import skilledLandingPageMobile from "@/assets/femProjects/skilledLandingPageMobile.png";
import ContactForm from "@/components/Features/ContactForm";
import ContentContainer from "@/components/UI/Containers/ContentContainer";
import SectionTitle from "@/components/UI/SectionTitle";
import { CHESS_GAMES } from "@/data/chessGames";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { lazy } from "react";

const ChessBoard = lazy(() => import("./components/ChessBoard"));

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
            <div className="grid basis-[60%] gap-3 max-md:max-w-xl min-[30em]:grid-cols-3 min-[30em]:grid-rows-2">
              <Image
                src={skilledLandingPageMobile.src}
                alt={t(
                  "onFrontendMentor.screenshotsAlt.skilledELearningLandingPage"
                )}
                className="row-span-2 aspect-[15/20] h-full rounded-2xl object-cover max-[30em]:hidden"
                width={400}
                height={400}
              />
              <Image
                src={articlePreviewComponent.src}
                alt={t(
                  "onFrontendMentor.screenshotsAlt.articlePreviewComponent"
                )}
                className="col-span-2 aspect-[20/9] rounded-2xl object-cover max-[30em]:w-full min-[30em]:h-full"
                width={400}
                height={400}
              />
              <Image
                src={bmiCalculator.src}
                alt={t("onFrontendMentor.screenshotsAlt.bmiCalculator")}
                className="col-span-2 aspect-[20/9] rounded-2xl object-cover max-[30em]:w-full min-[30em]:h-full"
                width={400}
                height={400}
              />
              <Image
                src={skilledLandingPageDesktop.src}
                alt={t(
                  "onFrontendMentor.screenshotsAlt.skilledELearningLandingPage"
                )}
                className="col-span-2 aspect-[20/9] rounded-2xl object-cover max-[30em]:w-full min-[30em]:hidden min-[30em]:h-full"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[2rem] md:flex-row md:gap-12">
            <div className="grid basis-[60%] gap-3 md:gap-8">
              <div>
                <h3 className="subheading mb-4">{t("playChess.title")}</h3>
                <p>{t("playChess.description")}</p>
              </div>
            </div>
            <div className="aspect-square w-full max-w-lg basis-[40%]">
              <ChessBoard notations={CHESS_GAMES.ANDERSSEN_VS_DUFRESNE_1852} />
            </div>
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default ConnectSection;
