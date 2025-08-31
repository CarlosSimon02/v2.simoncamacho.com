import { simulateReadableStream, streamText } from "ai";
import { MockLanguageModelV2 } from "ai/test";

export async function POST(req: Request) {
  const result = streamText({
    // model: openai("gpt-5-nano"),
    model: new MockLanguageModelV2({
      doStream: async () => ({
        stream: simulateReadableStream({
          chunkDelayInMs: 1000,
          chunks: [
            { type: "text-start", id: `text-1` },
            { type: "text-delta", id: "text-1", delta: "Hello" },
            { type: "text-delta", id: "text-1", delta: ", " },
            { type: "text-delta", id: "text-1", delta: "world!" },
            { type: "text-end", id: "text-1" },
            {
              type: "finish",
              finishReason: "stop",
              logprobs: undefined,
              usage: { inputTokens: 3, outputTokens: 10, totalTokens: 13 },
            },
          ],
        }),
      }),
    }),
    prompt: "Hello, world!",
  });

  return result.toUIMessageStreamResponse();
}
