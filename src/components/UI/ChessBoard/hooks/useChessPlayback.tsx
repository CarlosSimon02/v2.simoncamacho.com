"use client";

import { Chess } from "chess.js";
import { useEffect, useMemo, useRef, useState } from "react";

type UseChessPlaybackIOOptions = {
  notations: string;
  containerRef: React.RefObject<HTMLElement | null>;
  intervalMs?: number;
  threshold?: number | number[];
  rootMargin?: string;
};

const useChessPlayback = ({
  notations,
  containerRef,
  intervalMs = 1500,
  threshold = 0.5,
  rootMargin = "0px",
}: UseChessPlaybackIOOptions) => {
  const moves = useMemo(() => {
    return notations
      .split(/\d+\./)
      .join(" ")
      .trim()
      .split(/\s+/)
      .filter((m) => m !== "");
  }, [notations]);

  const [game, setGame] = useState<Chess>(new Chess());
  const gameRef = useRef<Chess>(game);
  useEffect(() => {
    gameRef.current = game;
  }, [game]);

  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const moveIndexRef = useRef<number>(currentMoveIndex);
  useEffect(() => {
    moveIndexRef.current = currentMoveIndex;
  }, [currentMoveIndex]);

  const intervalRef = useRef<number | null>(null);

  const startPlayback = () => {
    if (intervalRef.current != null) return;

    intervalRef.current = window.setInterval(() => {
      const idx = moveIndexRef.current;
      if (idx >= moves.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        return;
      }

      const curFen = gameRef.current.fen();
      const chess = new Chess(curFen);

      try {
        const result = chess.move(moves[idx]);
        if (!result) throw new Error("invalid move");
        setGame(chess);
        setCurrentMoveIndex((p) => p + 1);
      } catch (e) {
        console.error("Invalid move:", moves[idx], e);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    }, intervalMs);
  };

  const pausePlayback = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            startPlayback();
          } else {
            pausePlayback();
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
      observer.disconnect();
      pausePlayback();
    };
  }, [containerRef.current, threshold, rootMargin, intervalMs]);

  useEffect(() => {
    return () => {
      pausePlayback();
    };
  }, []);

  return {
    game,
    currentMoveIndex,
    startPlayback,
    pausePlayback,
  };
};

export default useChessPlayback;
