# GetAvailableModelsByTypeRequest

## Example Usage

```typescript
import { GetAvailableModelsByTypeRequest } from "@pipeshub-ai/sdk/models/operations";

let value: GetAvailableModelsByTypeRequest = {
  modelType: "embedding",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `modelType`                                    | [models.ModelType](../../models/model-type.md) | :heavy_check_mark:                             | Type of AI model                               |