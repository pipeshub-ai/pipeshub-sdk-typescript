# UpdateOnboardingStatusResponse

Onboarding status updated successfully

## Example Usage

```typescript
import { UpdateOnboardingStatusResponse } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateOnboardingStatusResponse = {
  success: true,
  message: "Step 'invite_team' marked as complete",
  isOnboardingComplete: false,
  nextStep: "connect_integrations",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `success`                              | *boolean*                              | :heavy_minus_sign:                     | N/A                                    | true                                   |
| `message`                              | *string*                               | :heavy_minus_sign:                     | N/A                                    | Step 'invite_team' marked as complete  |
| `isOnboardingComplete`                 | *boolean*                              | :heavy_minus_sign:                     | Whether all onboarding is now complete | false                                  |
| `nextStep`                             | *string*                               | :heavy_minus_sign:                     | Next step to complete (null if done)   | connect_integrations                   |