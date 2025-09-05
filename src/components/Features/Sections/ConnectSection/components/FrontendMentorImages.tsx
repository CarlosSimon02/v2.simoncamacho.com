import articlePreviewComponent from "@/assets/femProjects/articlePreviewComponent.png";
import bmiCalculator from "@/assets/femProjects/bmiCalculator.png";
import skilledLandingPageDesktop from "@/assets/femProjects/skilledLandingPageDesktop.png";
import skilledLandingPageMobile from "@/assets/femProjects/skilledLandingPageMobile.png";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FRONTEND_MENTOR_IMAGES_STYLE } from "../constants";

type MediaImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

const MediaImage = ({
  src,
  alt,
  className = "",
  width = 400,
  height = 400,
}: MediaImageProps) => (
  <Image
    src={typeof src === "string" ? src : (src as any).src}
    alt={alt}
    className={cn(className)}
    width={width}
    height={height}
  />
);

const FrontendMentorImages = async () => {
  const t = await useTranslations(
    "connectSection.onFrontendMentor.screenshotsAlt"
  );

  return (
    <div
      className={cn(
        "grid basis-[60%] gap-3 max-md:max-w-xl min-[30em]:grid-cols-3 min-[30em]:grid-rows-2",
        FRONTEND_MENTOR_IMAGES_STYLE
      )}
    >
      <MediaImage
        src={skilledLandingPageMobile.src}
        alt={t("skilledELearningLandingPage")}
        className={cn(
          "row-span-2 aspect-[15/20] h-full rounded-2xl object-cover max-[30em]:hidden",
          "relative top-[4rem] opacity-0"
        )}
      />
      <MediaImage
        src={articlePreviewComponent.src}
        alt={t("articlePreviewComponent")}
        className={cn(
          "col-span-2 aspect-[20/9] rounded-2xl object-cover max-[30em]:w-full min-[30em]:h-full",
          "relative top-[4rem] opacity-0"
        )}
      />
      <MediaImage
        src={bmiCalculator.src}
        alt={t("bmiCalculator")}
        className={cn(
          "col-span-2 aspect-[20/9] rounded-2xl object-cover max-[30em]:w-full min-[30em]:h-full",
          "relative top-[4rem] opacity-0"
        )}
      />
      <MediaImage
        src={skilledLandingPageDesktop.src}
        alt={t("skilledELearningLandingPage")}
        className={cn(
          "col-span-2 aspect-[20/9] rounded-2xl object-cover max-[30em]:w-full min-[30em]:hidden min-[30em]:h-full",
          "relative top-[4rem] opacity-0"
        )}
      />
    </div>
  );
};

export default FrontendMentorImages;
