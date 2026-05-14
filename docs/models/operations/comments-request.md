# CommentsRequest

Free-text comments grouped by sentiment.

## Example Usage

```typescript
import { CommentsRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CommentsRequest = {};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `positive`                            | *string*                              | :heavy_minus_sign:                    | What was good about the response.     |
| `negative`                            | *string*                              | :heavy_minus_sign:                    | What could be improved.               |
| `suggestions`                         | *string*                              | :heavy_minus_sign:                    | Specific suggestions for improvement. |