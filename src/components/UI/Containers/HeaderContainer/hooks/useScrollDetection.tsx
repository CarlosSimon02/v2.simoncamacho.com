import { useEffect, useState } from "react";

const useScrollDetection = (threshold: number) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > threshold);
    };

    handleScroll();

    const scrollOptions: AddEventListenerOptions & EventListenerOptions = {
      passive: true,
    };

    window.addEventListener("scroll", handleScroll, scrollOptions);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return hasScrolled;
};

export default useScrollDetection;
