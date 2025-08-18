import { SECTION_TITLE_CONTAINER_CLASS } from "./constants";

export const getSectionTitleContainerStyle = (title: string) => {
  return `${SECTION_TITLE_CONTAINER_CLASS}-${title} from-bottom-xs`;
};
