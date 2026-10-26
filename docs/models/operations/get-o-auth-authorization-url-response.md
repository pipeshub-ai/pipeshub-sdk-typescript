# GetOAuthAuthorizationUrlResponse

Provider consent URL

## Example Usage

```typescript
import { GetOAuthAuthorizationUrlResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetOAuthAuthorizationUrlResponse = {
  success: false,
  authorizationUrl: "https://necessary-metal.name",
  state: "Wyoming",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `success`                                          | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |
| `authorizationUrl`                                 | *string*                                           | :heavy_check_mark:                                 | Open in a browser to give consent                  |
| `state`                                            | *string*                                           | :heavy_check_mark:                                 | Pass back with the provider's code to the callback |