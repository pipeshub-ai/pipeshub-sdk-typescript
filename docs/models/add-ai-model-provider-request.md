# AddAIModelProviderRequest

Request to add a new AI model provider

## Example Usage

```typescript
import { AddAIModelProviderRequest } from "@pipeshub-ai/sdk/models";

let value: AddAIModelProviderRequest = {
  modelType: "slm",
  provider: "openai",
  configuration: {
    model: "gpt-4",
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `modelType`                                                                                               | [models.ModelType](../models/model-type.md)                                                               | :heavy_check_mark:                                                                                        | Type of AI model                                                                                          |                                                                                                           |
| `provider`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Provider name (e.g., openai, anthropic, azure-openai, aws-bedrock)                                        | openai                                                                                                    |
| `configuration`                                                                                           | [models.AddAIModelProviderRequestConfiguration](../models/add-ai-model-provider-request-configuration.md) | :heavy_check_mark:                                                                                        | Provider-specific configuration                                                                           |                                                                                                           |
| `isMultimodal`                                                                                            | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Whether the model supports multimodal inputs                                                              |                                                                                                           |
| `isReasoning`                                                                                             | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Whether this is a reasoning model                                                                         |                                                                                                           |
| `isDefault`                                                                                               | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Set as default model for this type                                                                        |                                                                                                           |
| `contextLength`                                                                                           | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | Maximum context length (tokens)                                                                           |                                                                                                           |