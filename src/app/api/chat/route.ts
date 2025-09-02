import { simulateReadableStream, streamText } from "ai";
import { MockLanguageModelV2 } from "ai/test";

export async function POST(req: Request) {
  const result = streamText({
    model: new MockLanguageModelV2({
      doStream: async () => ({
        stream: simulateReadableStream({
          chunkDelayInMs: 1000,
          initialDelayInMs: 1000,
          chunks: [
            { type: "text-start", id: "text-1" },
            {
              type: "text-delta",
              id: "text-1",
              delta:
                "# Markdown Example\n\n## Code Block\n\n```javascript\nconst greet = (name) => {\n  console.log(`Hello ${name}!`);\n};\n\ngreet('World');\n```\n\n",
            },
            {
              type: "text-delta",
              id: "text-1",
              delta:
                "## Table Example\n\n| Header 1 | Header 2 |\n|----------|----------|\n| Cell 1   | Cell 2   |\n| Cell 3   | Cell 4   |\n\n",
            },
            {
              type: "text-delta",
              id: "text-1",
              delta:
                "## List Example\n\n- Item 1\n- Item 2\n  - Nested Item 2.1\n  - Nested Item 2.2\n\n1. Ordered Item 1\n2. Ordered Item 2\n\n",
            },
            {
              type: "text-delta",
              id: "text-1",
              delta:
                "## Other Elements\n\n**Bold text** *Italic text* ~~Strikethrough~~\n\n> Blockquote example\n\n---\n\n[Link example](https://example.com)",
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
    prompt: "Generate markdown with various elements",
  });

  return result.toUIMessageStreamResponse();
}
