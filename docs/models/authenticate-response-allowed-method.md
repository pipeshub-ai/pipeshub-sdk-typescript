# AuthenticateResponseAllowedMethod

## Example Usage

```typescript
import { AuthenticateResponseAllowedMethod } from "@pipeshub-ai/sdk/models";

let value: AuthenticateResponseAllowedMethod = "microsoft";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"samlSso" | "otp" | "password" | "google" | "microsoft" | "azureAd" | "oauth" | Unrecognized<string>
```