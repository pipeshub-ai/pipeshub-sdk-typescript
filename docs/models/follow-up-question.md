# FollowUpQuestion

AI-suggested follow-up question

## Example Usage

```typescript
import { FollowUpQuestion } from "@pipeshub-ai/sdk/models";

let value: FollowUpQuestion = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `question`                           | *string*                             | :heavy_minus_sign:                   | The suggested question text          |
| `confidence`                         | *string*                             | :heavy_minus_sign:                   | Confidence level for this suggestion |
| `reasoning`                          | *string*                             | :heavy_minus_sign:                   | Why this question might be relevant  |