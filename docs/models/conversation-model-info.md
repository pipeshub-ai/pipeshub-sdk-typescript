# ConversationModelInfo

AI model configuration recorded against a conversation or message.

## Example Usage

```typescript
import { ConversationModelInfo } from "@pipeshub-ai/sdk/models";

let value: ConversationModelInfo = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `modelKey`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Stable identifier of the configured model record               |
| `modelName`                                                    | *string*                                                       | :heavy_minus_sign:                                             | Provider-facing model name (e.g. `gpt-4o-mini`)                |
| `modelProvider`                                                | *string*                                                       | :heavy_minus_sign:                                             | Provider key (e.g. `openai`, `anthropic`)                      |
| `modelFriendlyName`                                            | *string*                                                       | :heavy_minus_sign:                                             | Human-readable display name                                    |
| `chatMode`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Chat mode used for this turn (e.g. `quick`, `internal_search`) |