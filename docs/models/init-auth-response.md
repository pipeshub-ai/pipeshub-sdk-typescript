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
  authProviders: {},
  jitEnabled: true,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `currentStep`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | Current authentication step (0-indexed). Always 0 for initial response.                       | 0                                                                                             |
| `allowedMethods`                                                                              | [models.AllowedMethod](../models/allowed-method.md)[]                                         | :heavy_check_mark:                                                                            | List of allowed authentication methods for the current step                                   | [<br/>"password",<br/>"google",<br/>"otp"<br/>]                                               |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Response message                                                                              | Authentication initialized                                                                    |
| `authProviders`                                                                               | [models.AuthProviders](../models/auth-providers.md)                                           | :heavy_check_mark:                                                                            | Configuration for external authentication providers (returned when those methods are allowed) |                                                                                               |
| `jitEnabled`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | True when at least one allowed external provider has JIT provisioning enabled                 |                                                                                               |