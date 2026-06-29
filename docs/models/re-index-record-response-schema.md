# ReIndexRecordResponseSchema

Response returned by POST /knowledgeBase/reindex/record/{recordId}.

## Example Usage

```typescript
import { ReIndexRecordResponseSchema } from "@pipeshub-ai/sdk/models";

let value: ReIndexRecordResponseSchema = {
  success: false,
  message: "<value>",
  eventPublished: false,
  depth: 250382,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `success`          | *boolean*          | :heavy_check_mark: | N/A                |
| `message`          | *string*           | :heavy_check_mark: | N/A                |
| `recordId`         | *string*           | :heavy_minus_sign: | N/A                |
| `recordName`       | *string*           | :heavy_minus_sign: | N/A                |
| `connector`        | *string*           | :heavy_minus_sign: | N/A                |
| `eventPublished`   | *boolean*          | :heavy_check_mark: | N/A                |
| `userRole`         | *string*           | :heavy_minus_sign: | N/A                |
| `depth`            | *number*           | :heavy_check_mark: | N/A                |