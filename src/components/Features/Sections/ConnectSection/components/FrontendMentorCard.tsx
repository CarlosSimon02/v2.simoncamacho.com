import InlineLink from "@/components/UI/Buttons/InlineLink";
import { CubeDecoration } from "@/components/UI/Effects/Cube";
import { cn } from "@/utils";
import { getTranslations } from "next-intl/server";
import {
  FRONTEND_MENTOR_CUBE_STYLE,
  FRONTEND_MENTOR_STYLE,
} from "../constants";

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
        <p>
          {t.rich("description", {
            femLink: (chunks) => (
              <InlineLink href="https://www.frontendmentor.io/profile/CarlosSimon02">
                {chunks}
              </InlineLink>
            ),
          })}
        </p>
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
