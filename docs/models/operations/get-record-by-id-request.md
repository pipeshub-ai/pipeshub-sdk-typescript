# GetRecordByIdRequest

## Example Usage

```typescript
import { GetRecordByIdRequest } from "@pipeshub-ai/sdk/models/operations";

let value: GetRecordByIdRequest = {
  recordId: "<id>",
  convertTo: "txt",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `recordId`                             | *string*                               | :heavy_check_mark:                     | Record ID                              |                                        |
| `convertTo`                            | *string*                               | :heavy_minus_sign:                     | Optional format to convert the file to | txt                                    |