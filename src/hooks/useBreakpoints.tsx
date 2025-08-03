import { Breakpoint, BREAKPOINTS } from "@/constants/breakpoints";
import { useEffect, useState } from "react";

const useBreakpoint = (breakpoint: Breakpoint) => {
  const [isReached, setIsReached] = useState(false);

  useEffect(() => {
    const checkBreakpoint = () => {
      setIsReached(window.innerWidth >= BREAKPOINTS[breakpoint]);
    };

    // Initial check
    checkBreakpoint();

    // Add event listener
    window.addEventListener("resize", checkBreakpoint);

    // Cleanup
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, [breakpoint]);

  return isReached;
};

export default useBreakpoint;
