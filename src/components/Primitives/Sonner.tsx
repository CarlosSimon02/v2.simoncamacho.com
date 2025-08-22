"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps, toast as sonnerToast } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      // duration={Infinity}
      theme={theme as ToasterProps["theme"]}
      closeButton={true}
      richColors
      className="toaster group bg-bg-secondary text-fg-primary"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-bg-secondary group-[.toaster]:text-fg-primary group-[.toaster]:border-border group-[.toaster]:shadow-lg backdrop-blur-md border",
          description: "group-[.toast]:text-fg-primary",
          actionButton:
            "group-[.toast]:bg-bg-primary group-[.toast]:text-fg-secondary",
          cancelButton:
            "group-[.toast]:bg-bg-primary group-[.toast]:text-fg-primary",
          closeButton:
            "group-[.toast]:bg-bg-secondary group-[.toast]:text-fg-primary",
          success:
            "group-[.toast]:bg-green-500/20 group-[.toast]:border-green-500/30",
          error:
            "group-[.toast]:bg-red-500/20 group-[.toast]:border-red-500/30",
          info: "group-[.toast]:bg-blue-500/20 group-[.toast]:border-blue-500/30",
          warning:
            "group-[.toast]:bg-yellow-500/20 group-[.toast]:border-yellow-500/30",
        },
      }}
      {...props}
    />
  );
};

const toast = {
  success: (message: string) => {
    const successAudio = new Audio("./audios/success.mp3");
    successAudio.play();
    sonnerToast.success(message);
  },
  error: (message: string) => {
    const errorAudio = new Audio("./audios/error.mp3");
    errorAudio.play();
    sonnerToast.error(message);
  },
};

export { Toaster, toast };
