# AuthenticateMultiStepResponse

Current authentication step succeeded; additional MFA steps remain

## Example Usage

```typescript
import { AuthenticateMultiStepResponse } from "@pipeshub-ai/sdk/models";

let value: AuthenticateMultiStepResponse = {
  status: "success",
  nextStep: 606493,
  allowedMethods: [],
  authProviders: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `status`                                                                                           | [models.AuthenticateMultiStepResponseStatus](../models/authenticate-multi-step-response-status.md) | :heavy_check_mark:                                                                                 | Step completion status                                                                             |
| `nextStep`                                                                                         | *number*                                                                                           | :heavy_check_mark:                                                                                 | Next authentication step index                                                                     |
| `allowedMethods`                                                                                   | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | Allowed method types for the next step                                                             |
| `authProviders`                                                                                    | [models.AuthProviders](../models/auth-providers.md)                                                | :heavy_check_mark:                                                                                 | Configuration for external authentication providers (returned when those methods are allowed)      |