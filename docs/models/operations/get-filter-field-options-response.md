# GetFilterFieldOptionsResponse

Filter options

## Example Usage

```typescript
import { GetFilterFieldOptionsResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetFilterFieldOptionsResponse = {
  success: false,
  options: [],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `success`                                                | *boolean*                                                | :heavy_check_mark:                                       | N/A                                                      |
| `options`                                                | [operations.Option](../../models/operations/option.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `page`                                                   | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `limit`                                                  | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `hasMore`                                                | *boolean*                                                | :heavy_minus_sign:                                       | N/A                                                      |
| `cursor`                                                 | *string*                                                 | :heavy_minus_sign:                                       | Pass back to get the next page                           |
| `message`                                                | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |