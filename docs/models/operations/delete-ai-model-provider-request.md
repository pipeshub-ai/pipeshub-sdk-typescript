# DeleteAIModelProviderRequest

## Example Usage

```typescript
import { DeleteAIModelProviderRequest } from "@pipeshub-ai/sdk/models/operations";

let value: DeleteAIModelProviderRequest = {
  modelType: "reasoning",
  modelKey: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `modelType`                                    | [models.ModelType](../../models/model-type.md) | :heavy_check_mark:                             | Type of AI model                               |
| `modelKey`                                     | *string*                                       | :heavy_check_mark:                             | N/A                                            |