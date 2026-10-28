# ReIndexRecordGroupResponseSchema

Response returned by POST /knowledgeBase/reindex/record-group/{recordGroupId}.

## Example Usage

```typescript
import { ReIndexRecordGroupResponseSchema } from "@pipeshub-ai/sdk/models";

let value: ReIndexRecordGroupResponseSchema = {
  success: true,
  message: "<value>",
  recordGroupId: "<id>",
  depth: 967671,
  connectorId: "<id>",
  connector: "<value>",
  eventPublished: true,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `success`                                                | *true*                                                   | :heavy_check_mark:                                       | N/A                                                      |
| `message`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `recordGroupId`                                          | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `depth`                                                  | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `connectorId`                                            | *string*                                                 | :heavy_check_mark:                                       | Id of the connector instance the record group belongs to |
| `connector`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `eventPublished`                                         | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |