# SetDefaultAIModelRequest

## Example Usage

```typescript
import { SetDefaultAIModelRequest } from "@pipeshub-ai/sdk/models/operations";

let value: SetDefaultAIModelRequest = {
  modelType: "ocr",
  modelKey: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `modelType`                                    | [models.ModelType](../../models/model-type.md) | :heavy_check_mark:                             | Type of AI model                               |
| `modelKey`                                     | *string*                                       | :heavy_check_mark:                             | N/A                                            |