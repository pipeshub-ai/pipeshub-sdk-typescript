# AIModelProviderConfig

## Example Usage

```typescript
import { AIModelProviderConfig } from "@pipeshub-ai/sdk/models";

let value: AIModelProviderConfig = {
  provider: "<value>",
  configuration: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `provider`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | AI provider name                                                                                 |
| `configuration`                                                                                  | [models.AIModelProviderConfigConfiguration](../models/ai-model-provider-config-configuration.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `isMultimodal`                                                                                   | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether the model supports multimodal input                                                      |
| `isReasoning`                                                                                    | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether the model supports reasoning                                                             |
| `isDefault`                                                                                      | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Whether this should be the default model                                                         |
| `contextLength`                                                                                  | *number*                                                                                         | :heavy_minus_sign:                                                                               | Context length for the model                                                                     |
| `modelKey`                                                                                       | *string*                                                                                         | :heavy_minus_sign:                                                                               | Unique identifier for this model configuration                                                   |