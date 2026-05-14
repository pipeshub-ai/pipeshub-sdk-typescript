# AddMessageStreamRequest

## Example Usage

```typescript
import { AddMessageStreamRequest } from "@pipeshub-ai/sdk/models/operations";

let value: AddMessageStreamRequest = {
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

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `conversationId`                                                                                                              | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | Identifier of the conversation to append the message to. The<br/>conversation must belong to the caller and must not be deleted.<br/> |
| `body`                                                                                                                        | [models.AddMessageRequest](../../models/add-message-request.md)                                                               | :heavy_check_mark:                                                                                                            | Request payload                                                                                                               |