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
              delta: `# GitHub Flavored Markdown Features

GFM extends standard Markdown with powerful features. Here's a comprehensive demo:

## Tables

| Feature | Standard MD | GFM |
|---------|------------|-----|
| Tables | ❌ | ✅ |
| Task Lists | ❌ | ✅ |
| Strikethrough | ❌ | ✅ |

## Task Lists

- [x] Implement authentication
- [x] Add database models
- [ ] Write unit tests
- [ ] Deploy to production

## Strikethrough

~~Old approach~~ → New approach with AI models
`,
            },
            {
              type: "text-delta",
              id: "text-1",
              delta: `
\`\`\`tsx
import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    type="button"
    className="button"
    onClick={onClick}
    aria-label={label}
  >
    {label}
  </button>
);
\`\`\`
`,
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
