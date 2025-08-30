import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    GOOGLE_FORM_URL: z.url(),
    GOOGLE_FORM_NAME_ENTRY_ID: z.string().min(1),
    GOOGLE_FORM_EMAIL_ENTRY_ID: z.string().min(1),
    GOOGLE_FORM_MESSAGE_ENTRY_ID: z.string().min(1),
    GOOGLE_FORM_USP: z.string().min(1),
    GOOGLE_FORM_SUBMIT_LABEL: z.string().min(1),
    OPENAI_API_KEY: z.string().min(1),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().min(1),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    GOOGLE_FORM_URL: process.env.GOOGLE_FORM_URL,
    GOOGLE_FORM_NAME_ENTRY_ID: process.env.GOOGLE_FORM_NAME_ENTRY_ID,
    GOOGLE_FORM_EMAIL_ENTRY_ID: process.env.GOOGLE_FORM_EMAIL_ENTRY_ID,
    GOOGLE_FORM_MESSAGE_ENTRY_ID: process.env.GOOGLE_FORM_MESSAGE_ENTRY_ID,
    GOOGLE_FORM_USP: process.env.GOOGLE_FORM_USP,
    GOOGLE_FORM_SUBMIT_LABEL: process.env.GOOGLE_FORM_SUBMIT_LABEL,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
});
