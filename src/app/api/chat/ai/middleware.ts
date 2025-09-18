import {
  type LanguageModelV2,
  type LanguageModelV2StreamPart,
} from "@ai-sdk/provider";
import { Redis } from "@upstash/redis";
import { type LanguageModelMiddleware, simulateReadableStream } from "ai";

const redis = Redis.fromEnv();

export const cacheMiddleware: LanguageModelMiddleware = {
  wrapGenerate: async ({ doGenerate, params: { prompt } }) => {
    // find the last user message
    const lastPrompt = [...prompt][prompt.length - 1];
    const cacheKey = JSON.stringify(lastPrompt);

    const cached = (await redis.get(cacheKey)) as Awaited<
      ReturnType<LanguageModelV2["doGenerate"]>
    > | null;

    if (cached !== null) {
      return {
        ...cached,
        response: {
          ...cached.response,
          timestamp: cached?.response?.timestamp
            ? new Date(cached?.response?.timestamp)
            : undefined,
        },
      };
    }

    const result = await doGenerate();

    // redis.set(cacheKey, result);

    return result;
  },
  wrapStream: async ({ doStream, params: { prompt } }) => {
    const lastPrompt = [...prompt][prompt.length - 1];
    const cacheKey = JSON.stringify(lastPrompt);

    const cached = await redis.get(cacheKey);

    if (cached !== null) {
      const formattedChunks = (cached as LanguageModelV2StreamPart[]).map(
        (p) => {
          if (p.type === "response-metadata" && p.timestamp) {
            return { ...p, timestamp: new Date(p.timestamp) };
          } else return p;
        }
      );
      return {
        stream: simulateReadableStream({
          initialDelayInMs: 0,
          chunkDelayInMs: 10,
          chunks: formattedChunks,
        }),
      };
    }

    const { stream, ...rest } = await doStream();

    const fullResponse: LanguageModelV2StreamPart[] = [];

    const transformStream = new TransformStream<
      LanguageModelV2StreamPart,
      LanguageModelV2StreamPart
    >({
      transform(chunk, controller) {
        fullResponse.push(chunk);
        controller.enqueue(chunk);
      },
      flush() {
        // redis.set(cacheKey, fullResponse);
      },
    });

    return {
      stream: stream.pipeThrough(transformStream),
      ...rest,
    };
  },
};
