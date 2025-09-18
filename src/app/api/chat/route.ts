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
  try {
    // Rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(/, /)[0] || "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { error: "Rate limit exceeded", code: 429 },
        { status: 429 }
      );
    }

    // Request validation
    let body;
    try {
      body = await req.json();
    } catch (e) {
      return NextResponse.json(
        { error: "Invalid JSON in request body", code: 400 },
        { status: 400 }
      );
    }

    const { messages } = body;
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Missing or invalid messages array", code: 400 },
        { status: 400 }
      );
    }

    // Check message length limit
    const lastMessage = messages[messages.length - 1];

    if (
      lastMessage &&
      lastMessage.role === "user" &&
      lastMessage.parts[0].text.length > 200
    ) {
      return NextResponse.json(
        { error: "Message exceeds 200 character limit", code: 422 },
        { status: 422 }
      );
    }

    // Locale validation
    const { searchParams } = new URL(req.url);
    const locale = searchParams.get("locale");

    if (!locale || !hasLocale(routing.locales, locale)) {
      return NextResponse.json(
        { error: "Invalid or missing locale parameter", code: 400 },
        { status: 400 }
      );
    }

    // Message processing
    const [firstMessage, ...rest] = messages;
    const trimmedMessages = [firstMessage, ...rest.slice(-MAX_HISTORY)];

    // AI response generation
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
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error", code: 500 },
      { status: 500 }
    );
  }
}
