import { create } from "zustand";

type CurrentSectionState = {
  currentSection: string;
  setCurrentSection: (section: string) => void;
};

export const useCurrentSectionStore = create<CurrentSectionState>((set) => ({
  currentSection: "home",
  setCurrentSection: (height) => set({ currentSection: height }),
}));
