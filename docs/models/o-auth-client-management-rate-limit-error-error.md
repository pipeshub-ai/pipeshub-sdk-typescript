# OAuthClientManagementRateLimitErrorError

## Example Usage

```typescript
import { OAuthClientManagementRateLimitErrorError } from "@pipeshub-ai/sdk/models";

let value: OAuthClientManagementRateLimitErrorError = {
  code: "TOO_MANY_REQUESTS",
  message: "Too many OAuth client requests. Please try again later.",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `code`                                                                              | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 | TOO_MANY_REQUESTS                                                                   |
| `message`                                                                           | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 | Too many OAuth client requests. Please try again later.                             |
| `retryAfter`                                                                        | *number*                                                                            | :heavy_minus_sign:                                                                  | Seconds until the limit window resets (when `Retry-After` is present); may be null. |                                                                                     |