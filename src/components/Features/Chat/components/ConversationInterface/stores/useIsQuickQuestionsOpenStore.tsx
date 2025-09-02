import { create } from "zustand";

type IsQuickQuestionsOpenState = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useIsQuickQuestionsOpenStore = create<IsQuickQuestionsOpenState>(
  (set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
  })
);
