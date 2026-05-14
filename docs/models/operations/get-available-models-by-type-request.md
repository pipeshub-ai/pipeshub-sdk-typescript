# GetAvailableModelsByTypeRequest

## Example Usage

```typescript
import { GetAvailableModelsByTypeRequest } from "@pipeshub-ai/sdk/models/operations";

let value: GetAvailableModelsByTypeRequest = {
  modelType: "ocr",
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `modelType`                                                                                                                                       | [models.ModelType](../../models/model-type.md)                                                                                                    | :heavy_check_mark:                                                                                                                                | Category of AI model to retrieve.<br/><br/>Must be one of: `llm`, `embedding`, `ocr`, `slm`, `reasoning`, `multiModal`, `imageGeneration`, `tts`, `stt`.<br/> |