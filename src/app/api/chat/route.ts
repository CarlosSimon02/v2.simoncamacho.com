import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export async function POST() {
  const { text } = await generateText({
    model: openai("gpt-5-nano"),
    prompt: "Write a short poem about the sea.",
  });

  return Response.json({ text });
}
