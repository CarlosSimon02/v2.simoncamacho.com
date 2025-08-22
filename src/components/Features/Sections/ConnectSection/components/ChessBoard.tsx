"use client";

import dynamic from "next/dynamic";

const ReactChessboard = dynamic(
  () => import("react-chessboard").then((mod) => mod.Chessboard),
  {
    ssr: false,
  }
);

const ChessBoard = () => {
  return (
    <ReactChessboard
      key="chessboard"
      options={{
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
