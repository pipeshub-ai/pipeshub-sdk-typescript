# RegenerateAgentConversationMessageRequest

## Example Usage

```typescript
import { RegenerateAgentConversationMessageRequest } from "@pipeshub-ai/sdk/models/operations";

let value: RegenerateAgentConversationMessageRequest = {
  agentKey: "<value>",
  conversationId: "<value>",
  messageId: "<value>",
  body: {
    modelKey: "05438a37-68f2-4641-a8dc-6c47e63278ca",
    modelName: "gpt-5.4-mini",
    modelFriendlyName: "mini",
    chatMode: "quick",
    timezone: "Asia/Calcutta",
    currentTime: new Date("2026-05-11T15:43:21+05:30"),
    tools: [
      "jira.create_issue",
      "confluence.search_content",
    ],
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `agentKey`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | Stable key identifying the agent that owns this conversation.             |
| `conversationId`                                                          | *string*                                                                  | :heavy_check_mark:                                                        | ID of the agent conversation containing the target message.               |
| `messageId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | ID of the bot-response message to regenerate.                             |
| `body`                                                                    | [models.AgentRegenerateRequest](../../models/agent-regenerate-request.md) | :heavy_check_mark:                                                        | Regeneration payload requiring `chatMode: quick`.<br/>                    |