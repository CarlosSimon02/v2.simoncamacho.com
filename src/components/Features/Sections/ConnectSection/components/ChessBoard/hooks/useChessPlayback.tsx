// hooks/useChessPlaybackIO.ts
"use client";

import { Chess } from "chess.js";
import { useEffect, useMemo, useRef, useState } from "react";

type UseChessPlaybackIOOptions = {
  notations: string;
  containerRef: React.RefObject<HTMLElement | null>;
  intervalMs?: number;
  /**
   * IntersectionObserver threshold (0 -> any pixel visible, 1 -> fully visible).
   * Default 0.5 (50% visible).
   */
  threshold?: number | number[];
  /**
   * IntersectionObserver rootMargin to shift the viewport rectangle.
   * Example: "0px 0px -20% 0px"
   */
  rootMargin?: string;
};

const useChessPlayback = ({
  notations,
  containerRef,
  intervalMs = 1500,
  threshold = 0.5,
  rootMargin = "0px",
}: UseChessPlaybackIOOptions) => {
  // parse moves once per notations change
  const moves = useMemo(() => {
    return notations
      .split(/\d+\./)
      .join(" ")
      .trim()
      .split(/\s+/)
      .filter((m) => m !== "");
  }, [notations]);

  // chess state + refs for interval callback to read latest values
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

  // start playback (idempotent)
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
        // preserve original behavior: log and stop playback on invalid move
        // eslint-disable-next-line no-console
        console.error("Invalid move:", moves[idx], e);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    }, intervalMs);
  };

  // pause playback (idempotent)
  const pausePlayback = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // IntersectionObserver to start/pause playback when element enters/leaves viewport
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
    // include options so observer re-creates if they change
  }, [containerRef.current, threshold, rootMargin, intervalMs]);

  // cleanup on unmount
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
