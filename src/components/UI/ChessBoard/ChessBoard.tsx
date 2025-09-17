"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import useChessPlayback from "./hooks/useChessPlayback";
import { getChessboardPieces } from "./utils";

const ReactChessboard = dynamic(
  () => import("react-chessboard").then((mod) => mod.Chessboard),
  { ssr: false }
);

type ChessBoardProps = {
  notations: string;
  className?: string;
};

const ChessBoard = ({ notations, className }: ChessBoardProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { game } = useChessPlayback({
    notations,
    containerRef,
    intervalMs: 1500,
  });

  return (
    <div ref={containerRef} className={className}>
      <ReactChessboard
        key="chessboard"
        options={{
          animationDurationInMs: 800,
          position: game.fen(),
          allowDragging: false,
          boardStyle: {
            pointerEvents: "none",
          },
          pieces: getChessboardPieces(),
          darkSquareStyle: {
            backgroundColor: "var(--color-chess-board-dark-square)",
          },
          lightSquareStyle: {
            backgroundColor: "var(--color-chess-board-light-square)",
          },
          showNotation: false,
        }}
      />
    </div>
  );
};

export default ChessBoard;
