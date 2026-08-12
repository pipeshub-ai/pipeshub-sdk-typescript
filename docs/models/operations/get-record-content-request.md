# GetRecordContentRequest

## Example Usage

```typescript
import { GetRecordContentRequest } from "@pipeshub-ai/sdk/models/operations";

let value: GetRecordContentRequest = {
  recordId: "<id>",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `recordId`                                                                                                                       | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Record ID to fetch. Obtain it from a `pipeshub_search` result (`hits[*].recordId`) or a chat citation (`citations[*].recordId`). |