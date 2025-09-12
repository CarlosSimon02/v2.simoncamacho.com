import resumeScreenshot from "@/assets/resumeScreenshot.png";
import { Skeleton } from "@/components/Primitives/Skeleton";
import TailedButton from "@/components/UI/Buttons/TailedButton";
import { PDFIcon } from "@/components/UI/Icons/Techs";
import ImageWithGridBg from "@/components/UI/ImageWithGridBg";
import { useTranslations } from "next-intl";

export const ResumeToolLoading = () => {
  return (
    <div className="flex w-full min-w-0 flex-wrap gap-6 md:gap-8">
      {/* Left side (image placeholder) */}
      <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-lg">
        <Skeleton className="h-full w-full" />
        <div className="absolute top-4 left-4">
          <Skeleton className="h-6 w-6 rounded" />
        </div>
      </div>

      {/* Right side (text placeholders) */}
      <div className="flex flex-1 flex-col gap-2 md:gap-4">
        <Skeleton className="h-6 w-40" /> {/* Subheading */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-60" /> {/* Title */}
          <Skeleton className="h-4 w-40" /> {/* File details */}
        </div>
        <Skeleton className="h-4 w-32" /> {/* Button */}
      </div>
    </div>
  );
};

const ResumeTool = () => {
  const tInfo = useTranslations("info");
  const tResume = useTranslations("chat.tools.resume");

  return (
    <div className="flex w-full min-w-0 flex-wrap gap-6 md:gap-8">
      <ImageWithGridBg
        alt="Resume"
        image={resumeScreenshot.src}
        href="/simon_camacho_cv.pdf"
        logo={<PDFIcon className="size-full" />}
        logoAlt={tResume("fileType")}
        isLocal={false}
        className="max-w-md"
      />
      <div className="flex flex-col gap-2 md:gap-4">
        <div className="subheading">{tResume("title")}</div>
        <div className="flex flex-col">
          <p>{tInfo("title")}</p>
          <p>
            {tResume("fileType")} • {tResume("fileSize")} • {tResume("date")}
          </p>
        </div>
        <TailedButton
          href="/simon_camacho_cv.pdf"
          label={tResume("openButton")}
          target="_blank"
        />
      </div>
    </div>
  );
};

export default ResumeTool;
