# GetAvailableModelsByTypeMetadata

Per-field validation detail from Zod.

## Example Usage

```typescript
import { GetAvailableModelsByTypeMetadata } from "@pipeshub-ai/sdk/models/operations";

let value: GetAvailableModelsByTypeMetadata = {
  errors: [
    {
      field: "params.modelType",
      message:
        "Invalid enum value. Expected 'ocr' | 'embedding' | 'llm' | 'slm' | 'reasoning' | 'multiModal' | 'imageGeneration' | 'tts' | 'stt', received 'llmr'",
      code: "INVALID_ENUM",
      value: "",
    },
  ],
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `errors`                                                                | [operations.MetadataError](../../models/operations/metadata-error.md)[] | :heavy_check_mark:                                                      | N/A                                                                     |