"use client";

import Bishop from "@/components/UI/Icons/ChessPieces/Bishop";
import King from "@/components/UI/Icons/ChessPieces/King";
import Knight from "@/components/UI/Icons/ChessPieces/Knight";
import Pawn from "@/components/UI/Icons/ChessPieces/Pawn";
import Queen from "@/components/UI/Icons/ChessPieces/Queen";
import Rook from "@/components/UI/Icons/ChessPieces/Rook";

export const getChessboardPieces = () => {
  return {
    wK: () => <King className="fill-chess-pieces-white" />,
    wQ: () => <Queen className="fill-chess-pieces-white" />,
    wR: () => <Rook className="fill-chess-pieces-white" />,
    wB: () => <Bishop className="fill-chess-pieces-white" />,
    wN: () => <Knight className="fill-chess-pieces-white" />,
    wP: () => <Pawn className="fill-chess-pieces-white" />,
    bK: () => <King className="fill-chess-pieces-black" />,
    bQ: () => <Queen className="fill-chess-pieces-black" />,
    bR: () => <Rook className="fill-chess-pieces-black" />,
    bB: () => <Bishop className="fill-chess-pieces-black" />,
    bN: () => <Knight className="fill-chess-pieces-black" />,
    bP: () => <Pawn className="fill-chess-pieces-black" />,
  };
};
