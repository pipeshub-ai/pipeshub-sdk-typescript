# UpdateOnboardingStatusRequest

Request payload

## Example Usage

```typescript
import { UpdateOnboardingStatusRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateOnboardingStatusRequest = {
  stepId: "invite_team",
  action: "complete",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `stepId`                                               | *string*                                               | :heavy_check_mark:                                     | ID of the step to update                               | invite_team                                            |
| `action`                                               | [operations.Action](../../models/operations/action.md) | :heavy_check_mark:                                     | Action to perform on the step                          | complete                                               |