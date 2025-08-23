"use client";

import Bishop from "@/components/UI/Icons/ChessPieces/Bishop";
import King from "@/components/UI/Icons/ChessPieces/King";
import Knight from "@/components/UI/Icons/ChessPieces/Knight";
import Pawn from "@/components/UI/Icons/ChessPieces/Pawn";
import Queen from "@/components/UI/Icons/ChessPieces/Queen";
import Rook from "@/components/UI/Icons/ChessPieces/Rook";
import { Chess } from "chess.js";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactChessboard = dynamic(
  () => import("react-chessboard").then((mod) => mod.Chessboard),
  { ssr: false }
);

type ChessBoardProps = {
  notations: string;
};

const ChessBoard = ({ notations }: ChessBoardProps) => {
  const [game, setGame] = useState<Chess>(new Chess());
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);

  const moves = notations
    .split(/\d+\./)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter((move) => move !== "");

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentMoveIndex < moves.length) {
        const chess = new Chess(game.fen());

        try {
          chess.move(moves[currentMoveIndex]);
          setGame(chess);
          setCurrentMoveIndex((prev) => prev + 1);
        } catch (e) {
          console.error("Invalid move:", moves[currentMoveIndex]);
          clearInterval(interval);
        }
      } else {
        clearInterval(interval);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [currentMoveIndex, game, moves]);

  return (
    <ReactChessboard
      key="chessboard"
      options={{
        animationDurationInMs: 800,
        position: game.fen(),
        allowDragging: false,
        boardStyle: {
          pointerEvents: "none",
        },
        pieces: {
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
        },
        darkSquareStyle: {
          backgroundColor: "var(--color-chess-board-dark-square)",
        },
        lightSquareStyle: {
          backgroundColor: "var(--color-chess-board-light-square)",
        },
        showNotation: false,
      }}
    />
  );
};

export default ChessBoard;
