# UpdateAIModelProviderRequest

## Example Usage

```typescript
import { UpdateAIModelProviderRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateAIModelProviderRequest = {
  modelType: "reasoning",
  modelKey: "<value>",
  body: {
    provider: "<value>",
    configuration: {},
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `modelType`                                                                             | [models.ModelType](../../models/model-type.md)                                          | :heavy_check_mark:                                                                      | Type of AI model                                                                        |
| `modelKey`                                                                              | *string*                                                                                | :heavy_check_mark:                                                                      | Unique model key (UUID)                                                                 |
| `body`                                                                                  | [models.UpdateAIModelProviderRequest](../../models/update-ai-model-provider-request.md) | :heavy_check_mark:                                                                      | Request payload                                                                         |