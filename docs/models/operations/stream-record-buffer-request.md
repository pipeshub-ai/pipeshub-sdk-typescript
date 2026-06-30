# StreamRecordBufferRequest

## Example Usage

```typescript
import { StreamRecordBufferRequest } from "@pipeshub-ai/sdk/models/operations";

let value: StreamRecordBufferRequest = {
  recordId: "<id>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `recordId`                   | *string*                     | :heavy_check_mark:           | Record ID                    |
| `convertTo`                  | *string*                     | :heavy_minus_sign:           | Target format for conversion |