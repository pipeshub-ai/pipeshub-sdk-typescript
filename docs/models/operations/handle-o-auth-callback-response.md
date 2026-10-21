# HandleOAuthCallbackResponse

Result of exchanging the code. `success` is false when the provider refused it.

## Example Usage

```typescript
import { HandleOAuthCallbackResponse } from "@pipeshub-ai/sdk/models/operations";

let value: HandleOAuthCallbackResponse = {
  success: false,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `success`                                  | *boolean*                                  | :heavy_check_mark:                         | N/A                                        |
| `redirectUrl`                              | *string*                                   | :heavy_minus_sign:                         | Where the web app would send the user next |
| `error`                                    | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `errorMessage`                             | *string*                                   | :heavy_minus_sign:                         | N/A                                        |