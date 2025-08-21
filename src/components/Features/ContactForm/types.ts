import submitMessageAction from "./submitMessageAction";

export type SubmitMessageActionResponse = Awaited<
  ReturnType<typeof submitMessageAction>
>;
