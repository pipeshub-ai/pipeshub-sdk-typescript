# DeleteRecordResponseSchema

Response returned by DELETE /knowledgeBase/record/{recordId}.

## Example Usage

```typescript
import { DeleteRecordResponseSchema } from "@pipeshub-ai/sdk/models";

let value: DeleteRecordResponseSchema = {
  success: false,
  message: "<value>",
  recordId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `success`          | *boolean*          | :heavy_check_mark: | N/A                |
| `message`          | *string*           | :heavy_check_mark: | N/A                |
| `recordId`         | *string*           | :heavy_check_mark: | N/A                |
| `connector`        | *string*           | :heavy_minus_sign: | N/A                |
| `timestamp`        | *number*           | :heavy_minus_sign: | N/A                |