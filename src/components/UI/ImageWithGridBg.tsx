"use client";

import { Link } from "@/i18n/navigation";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { InteractiveGridPattern } from "./Effects/InteractiveGridPattern";

type ImageWithGridBgProps = {
  className?: string;
  href: string;
  image: string;
  logo: string | React.ReactNode;
  alt: string;
  logoAlt: string;
  isLocal?: boolean;
};

const ImageWithGridBg = ({
  alt,
  className,
  href,
  image,
  logo,
  logoAlt,
  isLocal = true,
}: ImageWithGridBgProps) => {
  const t = useTranslations("common.imageAltPostText");

  const Wrapper = isLocal ? Link : "a";

  return (
    <Wrapper
      tabIndex={-1}
      href={href}
      {...(!isLocal && { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "bg-light-gray-200 dark:bg-dark-gray-700 group relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-lg",
        className
      )}
    >
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />

      {/* Background Image */}
      <Image
        src={image}
        alt={t(`screenshot`, { name: alt })}
        width={1000}
        height={1000}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-[scale] duration-5000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
      />

      {/* Logo */}
      {/* <div className="absolute top-4 left-4 size-6">
        {typeof logo === "string" ? (
          <Image
            src={logo}
            alt={t(`logo`, { name: logoAlt })}
            width={100}
            height={100}
          />
        ) : (
          logo
        )}
      </div> */}
    </Wrapper>
  );
};

export default ImageWithGridBg;
