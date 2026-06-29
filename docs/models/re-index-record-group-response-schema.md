# ReIndexRecordGroupResponseSchema

Response returned by POST /knowledgeBase/reindex/record-group/{recordGroupId}.

## Example Usage

```typescript
import { ReIndexRecordGroupResponseSchema } from "@pipeshub-ai/sdk/models";

let value: ReIndexRecordGroupResponseSchema = {
  success: false,
  message: "<value>",
  recordGroupId: "<id>",
  depth: 812309,
  eventPublished: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `success`          | *boolean*          | :heavy_check_mark: | N/A                |
| `message`          | *string*           | :heavy_check_mark: | N/A                |
| `recordGroupId`    | *string*           | :heavy_check_mark: | N/A                |
| `depth`            | *number*           | :heavy_check_mark: | N/A                |
| `connector`        | *string*           | :heavy_minus_sign: | N/A                |
| `eventPublished`   | *boolean*          | :heavy_check_mark: | N/A                |