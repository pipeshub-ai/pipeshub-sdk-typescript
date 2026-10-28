# ConversationModelInfo1

AI model configuration used

## Example Usage

```typescript
import { ConversationModelInfo1 } from "@pipeshub-ai/sdk/models";

let value: ConversationModelInfo1 = {};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `modelKey`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `modelName`                                                                      | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `modelFriendlyName`                                                              | *string*                                                                         | :heavy_minus_sign:                                                               | Friendly display name of the selected model                                      |
| `modelProvider`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `chatMode`                                                                       | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `reasoningEffort`                                                                | [models.ConversationReasoningEffort](../models/conversation-reasoning-effort.md) | :heavy_minus_sign:                                                               | Reasoning effort requested for the turn, when one was set.                       |