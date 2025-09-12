import { CubeDecoration } from "@/components/UI/Effects/Cube";
import { cn } from "@/utils";
import { getTranslations } from "next-intl/server";
import ContactFormWrapper from "./components/ContactFormWrapper";
import GetInTouchAnimation from "./components/GetInTouchAnimation";
import { GET_IN_TOUCH_CUBES_STYLE, GET_IN_TOUCH_STYLE } from "./constants";

const GetInTouch = async () => {
  const t = await getTranslations("connectSection.getInTouch");

  return (
    <>
      <GetInTouchAnimation />
      <div className="flex flex-col items-center justify-stretch gap-[2rem] md:flex-row md:gap-16">
        <div className={cn("relative basis-1/2", GET_IN_TOUCH_STYLE)}>
          <div className="absolute -top-30 right-10">
            <CubeDecoration
              size={100}
              angle={{ x: 80, y: 10 }}
              className={GET_IN_TOUCH_CUBES_STYLE}
              positionClass="max-md:!hidden"
            />
          </div>
          <h3 className="subheading mb-4 md:mb-5">{t("title")}</h3>
          <p>{t("description")}</p>

          <div className="absolute -bottom-30 left-0 mt-14 ml-8">
            <CubeDecoration
              size={60}
              angle={{ x: 10, y: 180 }}
              className={GET_IN_TOUCH_CUBES_STYLE}
              positionClass="max-md:!hidden"
            />
          </div>
        </div>
        <ContactFormWrapper />
      </div>
    </>
  );
};

export default GetInTouch;
