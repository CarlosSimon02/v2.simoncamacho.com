import articlePreviewComponent from "@/assets/femProjects/articlePreviewComponent.png";
import bmiCalculator from "@/assets/femProjects/bmiCalculator.png";
import skilledLandingPageDesktop from "@/assets/femProjects/skilledLandingPageDesktop.png";
import skilledLandingPageMobile from "@/assets/femProjects/skilledLandingPageMobile.png";
import ContactForm from "@/components/Features/ContactForm";
import ContentContainer from "@/components/UI/Containers/ContentContainer";
import Cube from "@/components/UI/Effects/Cube";
import SectionTitle from "@/components/UI/SectionTitle";
import { CHESS_GAMES } from "@/data/chessGames";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { lazy } from "react";
import ConnectSectionAnimation from "./components/ConnectSectionAnimation";
import {
  CHESS_BOARD_STYLE,
  CONTACT_FORM_STYLE,
  FRONTEND_MENTOR_IMAGES_STYLE,
  FRONTEND_MENTOR_STYLE,
  GET_IN_TOUCH_STYLE,
  PLAY_CHESS_STYLE,
} from "./constants";

const ChessBoard = lazy(() => import("./components/ChessBoard"));

type ConnectSectionProps = {
  className?: string;
};

const ConnectSection = ({ className }: ConnectSectionProps) => {
  const t = useTranslations("connectSection");

  return (
    <>
      <ConnectSectionAnimation />
      <ContentContainer
        sectionId="about"
        className={cn("flex flex-col gap-12 md:gap-16 md:!pb-40", className)}
      >
        <SectionTitle title={t("title") as string} number={4} />
        <div className="flex flex-col gap-14 md:gap-24">
          <div className="flex flex-col items-center justify-stretch gap-[2rem] md:flex-row md:gap-16">
            <div
              className={cn(
                "relative grid basis-1/2 gap-6",
                GET_IN_TOUCH_STYLE
              )}
            >
              <Cube
                cubeSize={100}
                defaultAngle={{ x: 80, y: 10 }}
                autoRotate={true}
                className="absolute -top-30 right-10 -z-2 max-md:!hidden"
              />
              <h3 className="subheading mb-4">{t("getInTouch.title")}</h3>
              <p>{t("getInTouch.description")}</p>
              <Cube
                cubeSize={60}
                defaultAngle={{ x: 10, y: 180 }}
                autoRotate={true}
                className="absolute -bottom-30 left-0 -z-2 mt-14 ml-8 max-md:!hidden"
              />
            </div>
            <div
              className={cn(
                "w-full max-w-xl basis-1/2 text-start",
                CONTACT_FORM_STYLE
              )}
            >
              <ContactForm className="w-full" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[2rem] md:flex-row-reverse md:gap-12">
            <div
              className={cn(
                "relative grid basis-[40%] gap-3 md:gap-8",
                FRONTEND_MENTOR_STYLE
              )}
            >
              <div>
                <h3 className="subheading mb-4">
                  {t("onFrontendMentor.title")}
                </h3>
                <p>{t("onFrontendMentor.description")}</p>
                <Cube
                  cubeSize={70}
                  defaultAngle={{ x: 50, y: 90 }}
                  autoRotate={true}
                  className="absolute -top-30 right-10 -z-2 max-lg:!hidden"
                />
              </div>
            </div>
            <div
              className={cn(
                "grid basis-[60%] gap-3 max-md:max-w-xl min-[30em]:grid-cols-3 min-[30em]:grid-rows-2",
                FRONTEND_MENTOR_IMAGES_STYLE
              )}
            >
              <Image
                src={skilledLandingPageMobile.src}
                alt={t(
                  "onFrontendMentor.screenshotsAlt.skilledELearningLandingPage"
                )}
                className={cn(
                  "row-span-2 aspect-[15/20] h-full rounded-2xl object-cover max-[30em]:hidden",
                  "relative top-[4rem] opacity-0"
                )}
                width={400}
                height={400}
              />
              <Image
                src={articlePreviewComponent.src}
                alt={t(
                  "onFrontendMentor.screenshotsAlt.articlePreviewComponent"
                )}
                className={cn(
                  "col-span-2 aspect-[20/9] rounded-2xl object-cover max-[30em]:w-full min-[30em]:h-full",
                  "relative top-[4rem] opacity-0"
                )}
                width={400}
                height={400}
              />
              <Image
                src={bmiCalculator.src}
                alt={t("onFrontendMentor.screenshotsAlt.bmiCalculator")}
                className={cn(
                  "col-span-2 aspect-[20/9] rounded-2xl object-cover max-[30em]:w-full min-[30em]:h-full",
                  "relative top-[4rem] opacity-0"
                )}
                width={400}
                height={400}
              />
              <Image
                src={skilledLandingPageDesktop.src}
                alt={t(
                  "onFrontendMentor.screenshotsAlt.skilledELearningLandingPage"
                )}
                className={cn(
                  "col-span-2 aspect-[20/9] rounded-2xl object-cover max-[30em]:w-full min-[30em]:hidden min-[30em]:h-full",
                  "relative top-[4rem] opacity-0"
                )}
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-[2rem] md:flex-row md:gap-12">
            <div
              className={cn(
                "grid basis-[60%] gap-3 md:gap-8",
                PLAY_CHESS_STYLE
              )}
            >
              <div className="relative">
                <h3 className="subheading mb-4">{t("playChess.title")}</h3>
                <p>{t("playChess.description")}</p>
                <Cube
                  cubeSize={100}
                  defaultAngle={{ x: 50, y: 90 }}
                  autoRotate={true}
                  className="absolute -bottom-40 left-1/2 -z-2 max-md:!hidden"
                />
              </div>
            </div>
            <div
              className={cn(
                "aspect-square w-full max-w-lg basis-[40%]",
                CHESS_BOARD_STYLE
              )}
            >
              <ChessBoard
                notations={CHESS_GAMES.ANDERSSEN_VS_KIESERITZKY_1851}
              />
            </div>
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default ConnectSection;
