import { cn } from "@/utils";
import { getTranslations } from "next-intl/server";
import {
  FRONTEND_MENTOR_CUBE_STYLE,
  FRONTEND_MENTOR_STYLE,
} from "../constants";
import CubeDecoration from "./CubeDecoration";

const FrontendMentorCard = async () => {
  const t = await getTranslations("connectSection.onFrontendMentor");

  return (
    <div
      className={cn(
        "relative grid basis-[40%] gap-3 md:gap-8",
        FRONTEND_MENTOR_STYLE
      )}
    >
      <div>
        <h3 className="subheading mb-4 md:mb-5">{t("title")}</h3>
        <p>{t("description")}</p>
        <div className="absolute -top-30 right-10">
          <CubeDecoration
            size={70}
            angle={{ x: 50, y: 90 }}
            className={FRONTEND_MENTOR_CUBE_STYLE}
            positionClass="max-lg:!hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default FrontendMentorCard;
