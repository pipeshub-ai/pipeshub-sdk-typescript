# MessageFeedbackSubmitRequest

Gateway request body for submitting message feedback (Zod
`feedbackBodySchema`). All fields are optional; an empty object is
accepted. Matches the first-party chat UI payload shape.


## Example Usage

```typescript
import { MessageFeedbackSubmitRequest } from "@pipeshub-ai/sdk/models";

let value: MessageFeedbackSubmitRequest = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `isHelpful`                                                                                            | *boolean*                                                                                              | :heavy_minus_sign:                                                                                     | Overall helpfulness signal (thumbs up/down).                                                           |
| `categories`                                                                                           | [models.MessageFeedbackSubmitRequestCategory](../models/message-feedback-submit-request-category.md)[] | :heavy_minus_sign:                                                                                     | Issue or positive categories that apply to the response.                                               |
| `comments`                                                                                             | [models.MessageFeedbackSubmitRequestComments](../models/message-feedback-submit-request-comments.md)   | :heavy_minus_sign:                                                                                     | Free-text comments grouped by sentiment.                                                               |