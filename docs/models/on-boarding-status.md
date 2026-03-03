# OnBoardingStatus

Onboarding status

## Example Usage

```typescript
import { OnBoardingStatus } from "@pipeshub-ai/sdk/models";

let value: OnBoardingStatus = "notConfigured";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"configured" | "notConfigured" | "skipped" | Unrecognized<string>
```