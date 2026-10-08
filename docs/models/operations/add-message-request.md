# AddMessageRequest

## Example Usage

```typescript
import { AddMessageRequest } from "@pipeshub-ai/sdk/models/operations";

let value: AddMessageRequest = {
  conversationId: "<value>",
  body: {
    query: "Can you elaborate on the revenue trends?",
    timezone: "America/New_York",
    currentTime: new Date("2026-04-12T16:00:00+05:30"),
    tools: [
      "jira.create_issue",
      "confluence.search_content",
    ],
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `conversationId`                                                 | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `body`                                                           | [models.AddMessageRequest](../../models/add-message-request.md)  | :heavy_check_mark:                                               | The follow-up question, with optional scope and model overrides. |