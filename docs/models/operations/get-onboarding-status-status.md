# GetOnboardingStatusStatus

Current onboarding status

## Example Usage

```typescript
import { GetOnboardingStatusStatus } from "pipeshub/models/operations";

let value: GetOnboardingStatusStatus = "configured";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"configured" | "notConfigured" | "skipped" | Unrecognized<string>
```