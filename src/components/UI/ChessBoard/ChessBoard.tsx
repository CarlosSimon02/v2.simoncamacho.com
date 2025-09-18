"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import useChessPlayback from "./hooks/useChessPlayback";
import { getChessboardPieces } from "./utils";

const ReactChessboard = dynamic(
  () => import("react-chessboard").then((mod) => mod.Chessboard),
  { ssr: false }
);

type ChessBoardProps = {
  notations: string;
  className?: string;
  disableButtonTabIndex?: boolean;
};

const ChessBoard = ({
  notations,
  className,
  disableButtonTabIndex = true,
}: ChessBoardProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prevTabIndex = useRef<Map<Element, string | null>>(new Map());

  useEffect(() => {
    if (!disableButtonTabIndex) return;

    const container = containerRef.current;
    if (!container) return;

    const disableEl = (el: Element) => {
      if (!el.matches || !el.matches('div[role="button"]')) return;
      if (!prevTabIndex.current.has(el)) {
        prevTabIndex.current.set(el, el.getAttribute("tabindex"));
      }
      (el as HTMLElement).setAttribute("tabindex", "-1");
    };

    const disableExisting = () => {
      container
        .querySelectorAll<HTMLElement>('div[role="button"]')
        .forEach((el) => disableEl(el));
    };

    disableExisting();

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          const el = node as Element;

          if (el.matches && el.matches('div[role="button"]')) disableEl(el);

          el.querySelectorAll &&
            el
              .querySelectorAll('div[role="button"]')
              .forEach((child) => disableEl(child));
        });
      }
    });

    mo.observe(container, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      prevTabIndex.current.forEach((prev, el) => {
        if (!el) return;
        if (prev === null) el.removeAttribute("tabindex");
        else el.setAttribute("tabindex", prev);
      });
      prevTabIndex.current.clear();
    };
  }, [disableButtonTabIndex]);

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
