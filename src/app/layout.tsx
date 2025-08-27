import "@/styles/main.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger as GSAPScrollTrigger } from "gsap/ScrollTrigger";
import { generateMetadata as _generateMetadata } from "./metadata";

gsap.registerPlugin(useGSAP, GSAPScrollTrigger);

export const generateMetadata = _generateMetadata;

const LocaleLayout = async ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LocaleLayout;
