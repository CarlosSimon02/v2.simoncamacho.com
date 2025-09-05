import { Skeleton } from "@/components/Primitives/Skeleton";
import ChessBoard from "@/components/UI/ChessBoard";
import { CHESS_GAMES } from "@/data/chessGames";

export const SportToolLoading = () => {
  return (
    <div className="w-full max-w-xs">
      <Skeleton className="aspect-square w-full" />
    </div>
  );
};

const SportTool = () => {
  return (
    <div className="w-full max-w-xs">
      <ChessBoard notations={CHESS_GAMES.ANDERSSEN_VS_DUFRESNE_1852} />
    </div>
  );
};

export default SportTool;
