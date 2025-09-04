"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/Primitives/Drawer";
import { useChat } from "@/providers/ChatProvider";
import { questionsByCategory } from "../constants";

type OtherQuestionsProps = {
  children?: React.ReactNode;
};

const OtherQuestions = ({ children }: OtherQuestionsProps) => {
  const { sendMessage, status } = useChat();

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
        <DrawerHeader className="from-bg-secondary absolute inset-x-3 top-0 z-10 flex items-center justify-center gap-4 bg-gradient-to-b from-70% to-transparent p-4">
          <div className="bg-fg-primary h-1 w-12 rounded-full" aria-hidden />
          <DrawerTitle className="sr-only">Other Questions</DrawerTitle>
          <DrawerDescription className="sr-only">
            Not sure what to ask? Pick a question below and I’ll tell you all
            about Simon.
          </DrawerDescription>
        </DrawerHeader>

        <div className="overflow-y max-h-[50vh] overflow-y-auto">
          <div className="mx-auto max-w-lg space-y-6 px-5 py-9">
            {questionsByCategory.map((category) => (
              <div key={category.id} className="space-y-3">
                <div className="flex items-center gap-4 text-lg font-semibold">
                  <category.icon className="text-accent size-7" />
                  <span className="subheading">{category.name}</span>
                </div>
                <hr className="border-border" />

                <div className="grid gap-2">
                  {category.questions.map((q, idx) => (
                    <button
                      key={idx}
                      className="bg-bg-card/50 dark:bg-bg-card border-fg-primary/50 hover:text-accent rounded-[1.3125rem] border px-4 py-2 transition-colors hover:border-current disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:text-current"
                      onClick={() => sendMessage({ text: q })}
                      disabled={
                        status === "submitted" || status === "streaming"
                      }
                    >
                      {q}
                    </button>
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
