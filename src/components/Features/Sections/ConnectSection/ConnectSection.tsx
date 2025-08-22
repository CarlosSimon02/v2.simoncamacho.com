import femProject1 from "@/assets/femProjects/femProject1.png";
import femProject2 from "@/assets/femProjects/femProject2.png";
import femProject3Desktop from "@/assets/femProjects/femProject3Desktop.png";
import femProject3Mobile from "@/assets/femProjects/femProject3Mobile.png";
import ContactForm from "@/components/Features/ContactForm";
import ContentContainer from "@/components/UI/Containers/ContentContainer";
import SectionTitle from "@/components/UI/SectionTitle";
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
            <div className="grid basis-[60%] gap-3 max-md:max-w-xl sm:grid-cols-3 sm:grid-rows-2">
              <Image
                src={femProject3Mobile.src}
                alt="Frontend Mentor Project 1"
                className="row-span-2 aspect-[15/20] h-full rounded-2xl object-cover max-sm:hidden"
                width={400}
                height={400}
              />
              <Image
                src={femProject1.src}
                alt="Frontend Mentor Project 1"
                className="col-span-2 aspect-[20/9] rounded-2xl object-cover max-sm:w-full sm:h-full"
                width={400}
                height={400}
              />
              <Image
                src={femProject2.src}
                alt="Frontend Mentor Project 1"
                className="col-span-2 aspect-[20/9] rounded-2xl object-cover max-sm:w-full sm:h-full"
                width={400}
                height={400}
              />
              <Image
                src={femProject3Desktop.src}
                alt="Frontend Mentor Project 1"
                className="col-span-2 aspect-[20/9] rounded-2xl object-cover max-sm:w-full sm:hidden sm:h-full"
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
              <ChessBoard
                notations={
                  "1. Nf3 Nf6 2. c4 g6 3. Nc3 Bg7 4. d4 O-O 5. Bf4 d5 6. Qb3 dxc4 7. Qxc4 c6 8. e4 Nbd7 9. Rd1 Nb6 10. Qc5 Bg4 11. Bg5 Na4 12. Qa3 Nxc3 13. bxc3 Nxe4 14. Bxe7 Qb6 15. Bc4 Nxc3 16. Bc5 Rfe8+ 17. Kf1 Be6 18. Bxb6 Bxc4+ 19. Kg1 Ne2+ 20. Kf1 Nxd4+ 21. Kg1 Ne2+ 22. Kf1 Nc3+ 23. Kg1 axb6 24. Qb4 Ra4 25. Qxb6 Nxd1 26. h3 Rxa2 27. Kh2 Nxf2 28. Re1 Rxe1 29. Qd8+ Bf8 30. Nxe1 Bd5 31. Nf3 Ne4 32. Qb8 b5 33. h4 h5 34. Ne5 Kg7 35. Kg1 Bc5+ 36. Kf1 Ng3+ 37. Ke1 Bb4+ 38. Kd1 Bb3+ 39. Kc1 Ne2+ 40. Kb1 Nc3+ 41. Kc1 Rc2#"
                }
              />
            </div>
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default ConnectSection;
