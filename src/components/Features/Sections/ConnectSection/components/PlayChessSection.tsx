import InlineLink from "@/components/UI/Buttons/InlineLink";
import { CubeDecoration } from "@/components/UI/Effects/Cube";
import { CHESS_GAMES } from "@/data/chessGames";
import { cn } from "@/utils";
import { getTranslations } from "next-intl/server";
import { lazy } from "react";
import {
  CHESS_BOARD_STYLE,
  PLAY_CHESS_CUBE_STYLE,
  PLAY_CHESS_STYLE,
} from "../constants";

const ChessBoard = lazy(() => import("@/components/UI/ChessBoard"));

const PlayChessSection = async () => {
  const t = await getTranslations("connectSection.playChess");

  return (
    <div className="flex flex-col items-center gap-[2rem] md:flex-row md:gap-12">
      <div className={cn("grid basis-[60%] gap-3 md:gap-8", PLAY_CHESS_STYLE)}>
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
              className={PLAY_CHESS_CUBE_STYLE}
              positionClass="max-md:!hidden"
            />
          </div>
        </div>
      </div>

      <div
        className={cn(
          "aspect-square w-full max-w-lg basis-[40%]",
          CHESS_BOARD_STYLE
        )}
      >
        <ChessBoard notations={CHESS_GAMES.ANDERSSEN_VS_KIESERITZKY_1851} />
      </div>
    </div>
  );
};

export default PlayChessSection;
