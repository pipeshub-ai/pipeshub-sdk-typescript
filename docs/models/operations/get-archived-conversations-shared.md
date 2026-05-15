# GetArchivedConversationsShared

## Example Usage

```typescript
import { GetArchivedConversationsShared } from "@pipeshub-ai/sdk/models/operations";

let value: GetArchivedConversationsShared = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `values`                                       | *string*[]                                     | :heavy_minus_sign:                             | Allowed values for the `shared` filter         |
| `description`                                  | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `current`                                      | *string*                                       | :heavy_minus_sign:                             | Current value supplied by the caller, or null  |
| `applied`                                      | *boolean*                                      | :heavy_minus_sign:                             | Whether this filter was applied on the request |