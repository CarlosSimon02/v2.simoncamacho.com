import { simulateReadableStream, streamText } from "ai";
import { MockLanguageModelV2 } from "ai/test";
// import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  const result = streamText({
    // model: openai("gpt-5-nano"),
    model: new MockLanguageModelV2({
      doStream: async () => ({
        stream: simulateReadableStream({
          chunkDelayInMs: 1000,
          chunks: [
            { type: "text-start", id: `text-1` },
            {
              type: "text-delta",
              id: "text-1",
              delta:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            },
            {
              type: "text-delta",
              id: "text-1",
              delta:
                "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            },
            {
              type: "text-delta",
              id: "text-1",
              delta:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            { type: "text-end", id: "text-1" },
            {
              type: "finish",
              finishReason: "stop",
              logprobs: undefined,
              usage: { inputTokens: 3, outputTokens: 42, totalTokens: 45 },
            },
          ],
        }),
      }),
    }),
    prompt: "Hello, world!",
  });

  return result.toUIMessageStreamResponse();
}
