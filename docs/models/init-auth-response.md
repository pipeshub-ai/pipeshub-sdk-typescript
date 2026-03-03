# InitAuthResponse

Response containing available authentication methods and session info

## Example Usage

```typescript
import { InitAuthResponse } from "@pipeshub-ai/sdk/models";

let value: InitAuthResponse = {
  currentStep: 0,
  allowedMethods: [
    "password",
    "google",
    "otp",
  ],
  message: "Authentication initialized",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `currentStep`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | Current authentication step (0-indexed). Always 0 for initial response.                       | 0                                                                                             |
| `allowedMethods`                                                                              | [models.InitAuthResponseAllowedMethod](../models/init-auth-response-allowed-method.md)[]      | :heavy_minus_sign:                                                                            | List of allowed authentication methods for the current step                                   | [<br/>"password",<br/>"google",<br/>"otp"<br/>]                                               |
| `message`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Response message                                                                              | Authentication initialized                                                                    |
| `authProviders`                                                                               | [models.AuthProviders](../models/auth-providers.md)                                           | :heavy_minus_sign:                                                                            | Configuration for external authentication providers (returned when those methods are allowed) |                                                                                               |