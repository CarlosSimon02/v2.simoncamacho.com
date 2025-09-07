import { LANGUAGES } from "@/constants/languages";
import { routing } from "@/i18n/routing";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import {
  convertToModelMessages,
  InferUITools,
  stepCountIs,
  streamText,
  UIDataTypes,
  UIMessage,
  wrapLanguageModel,
} from "ai";
import { hasLocale } from "next-intl";
import { NextRequest, NextResponse } from "next/server";
import { cacheMiddleware } from "./ai/middleware";
import { model } from "./ai/models";
import { getSystemPrompt } from "./ai/systemPrompt";
import { getCats } from "./tools/getCats";
import { getContact } from "./tools/getContact";
import { getPresentation } from "./tools/getPresentation";
import { getProjects } from "./tools/getProjects";
import { getResume } from "./tools/getResume";
import { getSkills } from "./tools/getSkills";
import { getSports } from "./tools/getSports";

const MAX_HISTORY = 5;

const tools = {
  getProjects,
  getPresentation,
  getResume,
  getContact,
  getSkills,
  getSports,
  getCats,
};

export type ChatTools = InferUITools<typeof tools>;
export type ChatMessage = UIMessage<never, UIDataTypes, ChatTools>;

const wrappedModel = wrapLanguageModel({
  model: model,
  middleware: cacheMiddleware,
});

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.fixedWindow(10, "1d"),
});

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "121.0.0.1";
  const ipFinal = ip.split(/, /)[0];

  const { success } = await ratelimit.limit(ipFinal);

  if (!success) {
    return new Response("Ratelimited!", { status: 429 });
  }

  const { messages }: { messages: ChatMessage[]; ip: string } =
    await req.json();
  const { searchParams } = new URL(req.url);
  const locale = searchParams.get("locale");

  if (!hasLocale(routing.locales, locale)) {
    return NextResponse.json({ error: "Invalid locale" }, { status: 400 });
  }

  const [firstMessage, ...rest] = messages;
  const trimmedMessages = [firstMessage, ...rest.slice(-MAX_HISTORY)];

  const result = streamText({
    tools,
    stopWhen: stepCountIs(2),
    system: getSystemPrompt(
      LANGUAGES.find((l) => l.code === locale)?.name ?? "English"
    ),
    model: wrappedModel,
    messages: convertToModelMessages(trimmedMessages),
  });

  return result.toUIMessageStreamResponse();
}
