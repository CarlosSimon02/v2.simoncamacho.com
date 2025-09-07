import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // Google Form Configuration
    GOOGLE_FORM_URL: z.url(),
    GOOGLE_FORM_NAME_ENTRY_ID: z.string().min(1),
    GOOGLE_FORM_EMAIL_ENTRY_ID: z.string().min(1),
    GOOGLE_FORM_MESSAGE_ENTRY_ID: z.string().min(1),
    GOOGLE_FORM_USP: z.string().min(1),
    GOOGLE_FORM_SUBMIT_LABEL: z.string().min(1),

    // OpenAI API
    OPENAI_API_KEY: z.string().min(1),

    // Mux Configuration
    MUX_TOKEN_ID: z.string().min(1),
    MUX_TOKEN_SECRET: z.string().min(1),

    // KV/R2 Storage (Vercel)
    KV_URL: z.string().min(1),
    KV_REST_API_URL: z.string().min(1),
    KV_REST_API_TOKEN: z.string().min(1),
    KV_REST_API_READ_ONLY_TOKEN: z.string().min(1),

    // Redis
    REDIS_URL: z.url(),
  },
  client: {
    // Site URL
    NEXT_PUBLIC_SITE_URL: z.string().min(1),
  },
  runtimeEnv: {
    // Google Form
    GOOGLE_FORM_URL: process.env.GOOGLE_FORM_URL,
    GOOGLE_FORM_NAME_ENTRY_ID: process.env.GOOGLE_FORM_NAME_ENTRY_ID,
    GOOGLE_FORM_EMAIL_ENTRY_ID: process.env.GOOGLE_FORM_EMAIL_ENTRY_ID,
    GOOGLE_FORM_MESSAGE_ENTRY_ID: process.env.GOOGLE_FORM_MESSAGE_ENTRY_ID,
    GOOGLE_FORM_USP: process.env.GOOGLE_FORM_USP,
    GOOGLE_FORM_SUBMIT_LABEL: process.env.GOOGLE_FORM_SUBMIT_LABEL,

    // OpenAI
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,

    // Mux
    MUX_TOKEN_ID: process.env.MUX_TOKEN_ID,
    MUX_TOKEN_SECRET: process.env.MUX_TOKEN_SECRET,

    // KV
    KV_URL: process.env.KV_URL,
    KV_REST_API_URL: process.env.KV_REST_API_URL,
    KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
    KV_REST_API_READ_ONLY_TOKEN: process.env.KV_REST_API_READ_ONLY_TOKEN,

    // Redis
    REDIS_URL: process.env.REDIS_URL,

    // Client
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
});
