"use client";

import dynamic from "next/dynamic";

const ReactChessboard = dynamic(
  () => import("react-chessboard").then((mod) => mod.Chessboard),
  {
    ssr: false,
  }
);

const ChessBoard = () => {
  return <ReactChessboard key="chessboard" />;
};

export default ChessBoard;
