# SemanticSearchLinkedRecord

## Example Usage

```typescript
import { SemanticSearchLinkedRecord } from "@pipeshub-ai/sdk/models";

let value: SemanticSearchLinkedRecord = {
  relation: "linksTo",
  recordId: "<id>",
  recordName: "<value>",
  recordType: "<value>",
  connector: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `relation`                                            | [models.Relation](../models/relation.md)              | :heavy_check_mark:                                    | N/A                                                   |
| `recordId`                                            | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `recordName`                                          | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `recordType`                                          | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `connector`                                           | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `status`                                              | *string*                                              | :heavy_minus_sign:                                    | The linked record's `statusSummary`, when it has one. |