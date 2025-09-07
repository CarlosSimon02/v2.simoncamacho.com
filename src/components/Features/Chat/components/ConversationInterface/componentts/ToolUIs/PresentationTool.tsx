import simonImage from "@/assets/heroes/simon.jpg";
import { Skeleton } from "@/components/Primitives/Skeleton";
import { cn } from "@/utils";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";

export const PresentationToolLoading = () => {
  return (
    <div className={cn("flex w-full min-w-0 flex-wrap gap-6 md:gap-8")}>
      {/* Image Skeleton */}
      <Skeleton className="aspect-square size-36 rounded-xl md:size-48 lg:size-56" />

      {/* Info Section */}
      <div className="flex flex-col gap-5 md:gap-7 lg:gap-9">
        <div className="flex flex-col gap-2 md:gap-3">
          <div className="flex items-center gap-1">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-8 w-40 md:h-10 md:w-52 lg:h-12 lg:w-64" />
          <Skeleton className="h-6 w-32 md:h-7 md:w-44 lg:h-8 lg:w-56" />
          <Skeleton className="mt-2 h-1 w-12 rounded-full" />
        </div>
      </div>
    </div>
  );
};

const PresentationTool = () => {
  const t = useTranslations();

  return (
    <div className={cn("flex w-full min-w-0 flex-wrap gap-6 md:gap-8")}>
      <Zoom>
        <Image
          src={simonImage.src}
          width={1000}
          height={1000}
          alt={t("heroSection.heroImageAlt")}
          className="border-border aspect-square size-36 rounded-xl border md:size-48 lg:size-56"
        />
      </Zoom>
      <div className="flex flex-col gap-5 md:gap-7 lg:gap-9">
        <div className="after:bg-accent flex flex-col gap-2 md:gap-3">
          <div className={cn("flex items-center gap-1")}>
            <MapPinIcon className="stroke-foreground-2 size-5" />
            <span>{t("info.location")}</span>
          </div>
          <h1
            className={cn(
              "font-montserrat text-accent text-3xl leading-none font-black md:text-4xl lg:text-5xl"
            )}
          >
            {t("info.name")}
          </h1>
          <h2 className={cn("subheading")}>{t("info.title")}</h2>
          <div className={cn("bg-accent mt-2 h-1 w-12 rounded-full")}></div>
        </div>
      </div>
    </div>
  );
};

export default PresentationTool;
