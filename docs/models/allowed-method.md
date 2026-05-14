# AllowedMethod

## Example Usage

```typescript
import { AllowedMethod } from "@pipeshub-ai/sdk/models";

let value: AllowedMethod = "microsoft";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"samlSso" | "otp" | "password" | "google" | "microsoft" | "azureAd" | "oauth" | Unrecognized<string>
```