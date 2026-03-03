# UpdateAIModelProviderRequest

Request to update an existing AI model provider

## Example Usage

```typescript
import { UpdateAIModelProviderRequest } from "@pipeshub-ai/sdk/models";

let value: UpdateAIModelProviderRequest = {
  provider: "<value>",
  configuration: {},
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `provider`                                                                                                      | *string*                                                                                                        | :heavy_check_mark:                                                                                              | Provider name                                                                                                   |
| `configuration`                                                                                                 | [models.UpdateAIModelProviderRequestConfiguration](../models/update-ai-model-provider-request-configuration.md) | :heavy_check_mark:                                                                                              | Updated provider configuration                                                                                  |
| `isMultimodal`                                                                                                  | *boolean*                                                                                                       | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `isReasoning`                                                                                                   | *boolean*                                                                                                       | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `isDefault`                                                                                                     | *boolean*                                                                                                       | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |
| `contextLength`                                                                                                 | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |