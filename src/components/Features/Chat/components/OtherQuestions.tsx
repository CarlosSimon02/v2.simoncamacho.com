"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/Primitives/Drawer";
import { useChat } from "@/providers/ChatProvider";
import { useTranslations } from "next-intl";
import { questionCategories } from "../constants";
import { getErrorCode } from "../utils";

type OtherQuestionsProps = {
  children?: React.ReactNode;
  onSend?: () => void;
};

const OtherQuestions = ({ children, onSend }: OtherQuestionsProps) => {
  const { sendMessage, status, error } = useChat();
  const t = useTranslations("chat");
  let errorCode = getErrorCode(error?.message ?? "");

  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent
        className="p-4"
        onCloseAutoFocus={(e) => {
          e.preventDefault();
        }}
        onOpenAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        <DrawerHeader className="from-bg-secondary absolute inset-x-0 -top-[0.0625rem] z-10 flex items-center justify-center gap-4 bg-gradient-to-b from-70% to-transparent p-4">
          <div className="bg-fg-primary h-1 w-12 rounded-full" aria-hidden />
          <DrawerTitle className="sr-only">
            {t("otherQuestions.title")}
          </DrawerTitle>
          <DrawerDescription className="sr-only">
            {t("otherQuestions.description")}
          </DrawerDescription>
        </DrawerHeader>

        <div className="overflow-y max-h-[50vh] overflow-y-auto">
          <div className="mx-auto max-w-lg space-y-6 px-5 py-9">
            {questionCategories.map((category) => (
              <div key={category.id} className="space-y-3">
                <div className="flex items-center gap-4 text-lg font-semibold">
                  <category.icon className="text-accent size-7" />
                  <span className="subheading">
                    {t(`questionCategories.${category.id}.name`)}
                  </span>
                </div>
                <hr className="border-border" />

                <div className="grid gap-2">
                  {t
                    .raw(`questionCategories.${category.id}.questions`)
                    .map((q: string, idx: number) => (
                      <DrawerClose key={idx} asChild>
                        <button
                          className="bg-pill-bg border-pill-border hover:text-accent rounded-[1.3125rem] border px-4 py-2 transition-colors hover:border-current disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:text-current"
                          onClick={() => {
                            sendMessage({ text: q });
                            onSend?.();
                          }}
                          disabled={
                            status === "submitted" ||
                            status === "streaming" ||
                            errorCode === 429
                          }
                        >
                          {q}
                        </button>
                      </DrawerClose>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default OtherQuestions;
