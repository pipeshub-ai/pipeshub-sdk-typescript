# UnshareSearchRequest

## Example Usage

```typescript
import { UnshareSearchRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UnshareSearchRequest = {
  searchId: "<value>",
  body: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `searchId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique search identifier                                                                      |
| `body`                                                                                        | [operations.UnshareSearchRequestBody](../../models/operations/unshare-search-request-body.md) | :heavy_check_mark:                                                                            | Request payload                                                                               |