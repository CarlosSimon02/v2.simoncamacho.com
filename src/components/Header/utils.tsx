import { cn } from "@/utils";
import { HEADER_ITEM_CLASS, HEADER_ITEM_MOBILE_CLASS } from "./constants";

export const headerItemStyle = (showsOnMobile: boolean) => {
  return cn(
    `${HEADER_ITEM_CLASS} header-item-desktop relative bottom-[12.5rem] opacity-0`,
    showsOnMobile && HEADER_ITEM_MOBILE_CLASS
  );
};
