import { DEFAULT_LANG_CODE, LANGUAGES } from "@/constants/languages";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: LANGUAGES.map((lang) => lang.code),
  defaultLocale: DEFAULT_LANG_CODE,
});
