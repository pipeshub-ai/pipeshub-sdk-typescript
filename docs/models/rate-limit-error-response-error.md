# RateLimitErrorResponseError

## Example Usage

```typescript
import { RateLimitErrorResponseError } from "@pipeshub-ai/sdk/models";

let value: RateLimitErrorResponseError = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `code`                                     | *string*                                   | :heavy_minus_sign:                         | Error code.                                |
| `message`                                  | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `retryAfter`                               | *number*                                   | :heavy_minus_sign:                         | Suggested seconds to wait before retrying. |