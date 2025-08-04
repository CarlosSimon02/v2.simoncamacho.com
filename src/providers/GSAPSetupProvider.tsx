"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger as GSAPScrollTrigger } from "gsap/ScrollTrigger";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

export const GSAPSetupProvider = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {
  gsap.registerPlugin(useGSAP, GSAPScrollTrigger);

  return <>{children}</>;
};
