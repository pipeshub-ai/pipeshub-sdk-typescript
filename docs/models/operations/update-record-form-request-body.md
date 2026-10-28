# UpdateRecordFormRequestBody

Request payload. Optional: without one nothing changes.

## Example Usage

```typescript
import { UpdateRecordFormRequestBody } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateRecordFormRequestBody = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `recordName`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | New name for the record (rename only; a file needs the multipart form). |