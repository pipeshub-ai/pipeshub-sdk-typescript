# AuthenticateResponse

Authentication response. Two possible outcomes:
1. **Multi-step in progress**: Returns `status: "success"` with `nextStep` and `allowedMethods`
2. **Fully authenticated**: Returns `message: "Fully authenticated"` with `accessToken` and `refreshToken`


## Example Usage

```typescript
import { AuthenticateResponse } from "@pipeshub-ai/sdk/models";

let value: AuthenticateResponse = {
  message: "Fully authenticated",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `status`                                                                                        | [models.AuthenticateResponseStatus](../models/authenticate-response-status.md)                  | :heavy_minus_sign:                                                                              | Authentication step status (for multi-step auth)                                                |                                                                                                 |
| `message`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | Response message (e.g., "Fully authenticated")                                                  | Fully authenticated                                                                             |
| `nextStep`                                                                                      | *number*                                                                                        | :heavy_minus_sign:                                                                              | Next authentication step number (if multi-step auth continues)                                  |                                                                                                 |
| `allowedMethods`                                                                                | [models.AuthenticateResponseAllowedMethod](../models/authenticate-response-allowed-method.md)[] | :heavy_minus_sign:                                                                              | Allowed methods for next step (if multi-step auth continues)                                    |                                                                                                 |
| `authProviders`                                                                                 | [models.AuthProviders](../models/auth-providers.md)                                             | :heavy_minus_sign:                                                                              | Configuration for external authentication providers (returned when those methods are allowed)   |                                                                                                 |
| `accessToken`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | JWT access token (1 hour expiry). Only returned when fully authenticated.                       |                                                                                                 |
| `refreshToken`                                                                                  | *string*                                                                                        | :heavy_minus_sign:                                                                              | JWT refresh token (7 days expiry). Only returned when fully authenticated.                      |                                                                                                 |