# ShareSearchRequest

## Example Usage

```typescript
import { ShareSearchRequest } from "@pipeshub-ai/sdk/models/operations";

let value: ShareSearchRequest = {
  searchId: "<value>",
  body: {},
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `searchId`                                                                                | *string*                                                                                  | :heavy_check_mark:                                                                        | Unique search identifier                                                                  |
| `body`                                                                                    | [operations.ShareSearchRequestBody](../../models/operations/share-search-request-body.md) | :heavy_check_mark:                                                                        | Request payload                                                                           |