# MessageFeedback

Comprehensive feedback on an AI response. Feedback helps improve
the AI's performance and response quality over time.


## Example Usage

```typescript
import { MessageFeedback } from "@pipeshub-ai/sdk/models";

let value: MessageFeedback = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `isHelpful`                                                 | *boolean*                                                   | :heavy_minus_sign:                                          | Overall helpfulness rating                                  |
| `ratings`                                                   | [models.Ratings](../models/ratings.md)                      | :heavy_minus_sign:                                          | N/A                                                         |
| `categories`                                                | [models.Category](../models/category.md)[]                  | :heavy_minus_sign:                                          | Categories of issues identified                             |
| `comments`                                                  | [models.Comments](../models/comments.md)                    | :heavy_minus_sign:                                          | N/A                                                         |
| `citationFeedback`                                          | [models.CitationFeedback](../models/citation-feedback.md)[] | :heavy_minus_sign:                                          | Feedback on individual citations                            |
| `followUpQuestionsHelpful`                                  | *boolean*                                                   | :heavy_minus_sign:                                          | Were the suggested follow-up questions helpful              |