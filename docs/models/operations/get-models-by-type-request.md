# GetModelsByTypeRequest

## Example Usage

```typescript
import { GetModelsByTypeRequest } from "@pipeshub-ai/sdk/models/operations";

let value: GetModelsByTypeRequest = {
  modelType: "ocr",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `modelType`                                    | [models.ModelType](../../models/model-type.md) | :heavy_check_mark:                             | Type of AI model                               |