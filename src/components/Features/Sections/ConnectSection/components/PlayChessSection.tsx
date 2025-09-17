"use client";

import InlineLink from "@/components/UI/Buttons/InlineLink";
import { CubeDecoration } from "@/components/UI/Effects/Cube";
import { CONDITIONAL_BREAKPOINTS } from "@/constants/breakpoints";
import { CHESS_GAMES } from "@/data/chessGames";
import { cn } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { lazy } from "react";

const PLAY_CHESS_CONTAINER_CLASS = "play-chess";
const PLAY_CHESS_CUBE_CLASS = "play-chess-cube";
const CHESS_BOARD_CLASS = "chess-board";

const ChessBoard = lazy(() => import("@/components/UI/ChessBoard"));

const PlayChessSection = () => {
  const t = useTranslations("connectSection.playChess");

  useGSAP(() => {
    const mm = gsap.matchMedia();

    gsap.to(`.${CHESS_BOARD_CLASS}`, {
      top: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: `.${CHESS_BOARD_CLASS}`,
        start: "top 70%",
      },
    });

    mm.add(
      {
        isMd: CONDITIONAL_BREAKPOINTS.isMd,
        isMaxMd: CONDITIONAL_BREAKPOINTS.isMaxMd,
      },
      (context) => {
        const { isMd } = context.conditions as gsap.Conditions;

        if (!isMd) return;

        gsap.to(`.${PLAY_CHESS_CUBE_CLASS}`, {
          top: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out",
          delay: 1.2,
          scrollTrigger: {
            trigger: `.${PLAY_CHESS_CONTAINER_CLASS}`,
            start: "top 70%",
          },
        });
      }
    );
  });

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-[2rem] md:flex-row md:gap-12",
        PLAY_CHESS_CONTAINER_CLASS
      )}
    >
      <div className={cn("grid basis-[60%] gap-3 md:gap-8")}>
        <div className="relative">
          <h3 className="subheading mb-4 md:mb-5">{t("title")}</h3>
          <p>
            {t.rich("description", {
              chessLink: (chunks) => (
                <InlineLink href="https://www.chess.com/member/simon1129">
                  {chunks}
                </InlineLink>
              ),
            })}
          </p>
          <div className="absolute -bottom-40 left-1/2">
            <CubeDecoration
              size={100}
              angle={{ x: 50, y: 90 }}
              className={cn(PLAY_CHESS_CUBE_CLASS, "from-bottom-sm")}
              positionClass="max-md:!hidden"
            />
          </div>
        </div>
      </div>
      <ChessBoard
        notations={CHESS_GAMES.ANDERSSEN_VS_KIESERITZKY_1851}
        className={cn(
          "from-bottom-sm aspect-square w-full max-w-lg basis-[40%]",
          CHESS_BOARD_CLASS
        )}
      />
    </div>
  );
};

export default PlayChessSection;
