// hooks/useChessPlayback.ts
"use client";

import { Chess } from "chess.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo, useRef, useState } from "react";

type UseChessPlaybackOptions = {
  notations: string;
  containerRef: React.RefObject<HTMLElement | null>;
  intervalMs?: number;
  scrollTriggerStart?: string;
  scrollTriggerEnd?: string;
};

export function useChessPlayback({
  notations,
  containerRef,
  intervalMs = 1500,
  scrollTriggerStart = "top 80%",
  scrollTriggerEnd = "bottom 20%",
}: UseChessPlaybackOptions) {
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
    const el = containerRef.current;
    if (!el || typeof ScrollTrigger === "undefined") return;

    const st = ScrollTrigger.create({
      trigger: el,
      start: scrollTriggerStart,
      end: scrollTriggerEnd,
      onEnter: () => startPlayback(),
      onEnterBack: () => startPlayback(),
      onLeave: () => pausePlayback(),
      onLeaveBack: () => pausePlayback(),
    });

    return () => {
      st.kill();
      pausePlayback();
    };
  }, [containerRef.current, intervalMs, scrollTriggerStart, scrollTriggerEnd]);

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
}
