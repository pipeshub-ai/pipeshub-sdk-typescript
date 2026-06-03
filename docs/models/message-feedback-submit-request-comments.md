# MessageFeedbackSubmitRequestComments

Free-text comments grouped by sentiment.

## Example Usage

```typescript
import { MessageFeedbackSubmitRequestComments } from "@pipeshub-ai/sdk/models";

let value: MessageFeedbackSubmitRequestComments = {};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `positive`                        | *string*                          | :heavy_minus_sign:                | What was good about the response. |
| `negative`                        | *string*                          | :heavy_minus_sign:                | What could be improved.           |