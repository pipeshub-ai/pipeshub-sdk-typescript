# AuthenticateRequest

## Example Usage

```typescript
import { AuthenticateRequest } from "@pipeshub-ai/sdk/models/operations";

let value: AuthenticateRequest = {
  xSessionToken: "<value>",
  body: {
    method: "otp",
    credentials: {
      password: "qCFV90YVCVoXX0r",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `xSessionToken`                                                    | *string*                                                           | :heavy_check_mark:                                                 | Session token received from `/initAuth` endpoint                   |
| `body`                                                             | [models.AuthenticateRequest](../../models/authenticate-request.md) | :heavy_check_mark:                                                 | Request payload                                                    |