import submitMessageAction from "./actions/submitMessageAction";

export type SubmitMessageActionResponse = Awaited<
  ReturnType<typeof submitMessageAction>
>;
