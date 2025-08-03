export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export type Breakpoint = keyof typeof BREAKPOINTS;

export const CONDITIONAL_BREAKPOINTS = {
  isSm: `(min-width: ${BREAKPOINTS.sm}px)`,
  isMd: `(min-width: ${BREAKPOINTS.md}px)`,
  isLg: `(min-width: ${BREAKPOINTS.lg}px)`,
  isXl: `(min-width: ${BREAKPOINTS.xl}px)`,
  is2xl: `(min-width: ${BREAKPOINTS.xl}px)`,
  isMaxSm: `(max-width: ${BREAKPOINTS.sm - 1}px)`,
  isMaxMd: `(max-width: ${BREAKPOINTS.md - 1}px)`,
  isMaxLg: `(max-width: ${BREAKPOINTS.lg - 1}px)`,
  isMaxXl: `(max-width: ${BREAKPOINTS.xl - 1}px)`,
  isMax2xl: `(max-width: ${BREAKPOINTS.xl - 1}px)`,
  reduceMotion: "(prefers-reduced-motion: reduce)",
};
