import { SECTION_TITLE_CONTAINER_CLASS } from "./constants";

export const getSectionTitleContainerStyle = (title: string) => {
  return `${SECTION_TITLE_CONTAINER_CLASS}-${title} relative top-[4rem] opacity-0`;
};
