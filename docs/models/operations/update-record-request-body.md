# UpdateRecordRequestBody

Request payload. Optional: without one nothing changes.

## Example Usage

```typescript
import { UpdateRecordRequestBody } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateRecordRequestBody = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `recordName`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | New name for the record (rename only; a file needs the multipart form). |