# InitAuthResponse

## Example Usage

```typescript
import { InitAuthResponse } from "@pipeshub-ai/sdk/models/operations";

let value: InitAuthResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    currentStep: 0,
    allowedMethods: [
      "password",
      "google",
      "otp",
    ],
    message: "Authentication initialized",
    authProviders: {},
    jitEnabled: false,
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `headers`                                                     | Record<string, *string*[]>                                    | :heavy_check_mark:                                            | N/A                                                           |
| `result`                                                      | [models.InitAuthResponse](../../models/init-auth-response.md) | :heavy_check_mark:                                            | N/A                                                           |