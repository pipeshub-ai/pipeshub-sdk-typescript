# ConversationTitleUpdateRequest

## Example Usage

```typescript
import { ConversationTitleUpdateRequest } from "@pipeshub-ai/sdk/models";

let value: ConversationTitleUpdateRequest = {
  title: "ABC News Follow-up",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | New title for the conversation. Surrounding whitespace is trimmed; a<br/>blank title is refused.<br/> | ABC News Follow-up                                                                            |