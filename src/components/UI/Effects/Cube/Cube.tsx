"use client";

import { cn } from "@/utils";
import gsap from "gsap";
import { PointerEvent, useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles/Cube.module.css";

// Define prop types
interface CubeProps {
  cubeSize?: number;
  maxTiltAngle?: number;
  defaultAngle?: { x: number; y: number };
  autoRotate?: boolean;
  rotationSpeed?: { x: number; y: number };
  className?: string;
}

const Cube = ({
  cubeSize = 200,
  maxTiltAngle = 20,
  defaultAngle = { x: 0, y: 0 },
  autoRotate = false,
  rotationSpeed = { x: 10, y: 10 },
  className,
}: CubeProps) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Set initial rotation
  useEffect(() => {
    if (!cubeRef.current) return;
    gsap.set(cubeRef.current, {
      rotationX: defaultAngle.x,
      rotationY: defaultAngle.y,
    });
  }, [defaultAngle]);

  // Handle auto-rotation
  useEffect(() => {
    if (!autoRotate || !cubeRef.current || isHovering) return;

    animationRef.current = gsap.to(cubeRef.current, {
      rotationX: `+=${360 * (Math.sign(rotationSpeed.x) || 1)}`,
      rotationY: `+=${360 * (Math.sign(rotationSpeed.y) || 1)}`,
      duration: 360 / Math.abs(rotationSpeed.x),
      repeat: -1,
      ease: "none",
    });

    return () => {
      animationRef.current?.kill();
      animationRef.current = null;
    };
  }, [autoRotate, rotationSpeed, isHovering]);

  const onPointerMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (!cubeRef.current || !sceneRef.current) return;

      setIsHovering(true);
      animationRef.current?.pause();

      const rect = sceneRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotX = (0.5 - y) * 2 * maxTiltAngle;
      const rotY = (x - 0.5) * 2 * maxTiltAngle;

      gsap.to(cubeRef.current, {
        rotationX: defaultAngle.x + rotX,
        rotationY: defaultAngle.y + rotY,
        duration: 0.3,
        ease: "power3.out",
      });
    },
    [maxTiltAngle, defaultAngle]
  );

  const onPointerLeave = useCallback(() => {
    setIsHovering(false);

    if (!cubeRef.current) return;

    gsap.to(cubeRef.current, {
      rotationX: defaultAngle.x,
      rotationY: defaultAngle.y,
      duration: 0.6,
      ease: "power3.out",
      onComplete: () => {
        if (autoRotate && animationRef.current) {
          animationRef.current.play();
        }
      },
    });
  }, [autoRotate, defaultAngle]);

  const sceneStyle: React.CSSProperties = {
    width: cubeSize,
    height: cubeSize,
  };

  return (
    <div className={cn(className, styles.container)}>
      <div
        ref={sceneRef}
        className={styles.scene}
        style={sceneStyle}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <div ref={cubeRef} className={styles.cube}>
          <div className={`${styles.face} ${styles.faceTop}`} />
          <div className={`${styles.face} ${styles.faceBottom}`} />
          <div className={`${styles.face} ${styles.faceLeft}`} />
          <div className={`${styles.face} ${styles.faceRight}`} />
          <div className={`${styles.face} ${styles.faceFront}`} />
          <div className={`${styles.face} ${styles.faceBack}`} />
        </div>
      </div>
    </div>
  );
};

export default Cube;
