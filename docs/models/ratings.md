# Ratings

## Example Usage

```typescript
import { Ratings } from "@pipeshub-ai/sdk/models";

let value: Ratings = {};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `accuracy`                             | *number*                               | :heavy_minus_sign:                     | How accurate was the information (1-5) |
| `relevance`                            | *number*                               | :heavy_minus_sign:                     | How relevant was the response (1-5)    |
| `completeness`                         | *number*                               | :heavy_minus_sign:                     | How complete was the answer (1-5)      |
| `clarity`                              | *number*                               | :heavy_minus_sign:                     | How clear was the explanation (1-5)    |