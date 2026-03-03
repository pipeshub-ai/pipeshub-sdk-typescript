# CreateToolsetRequest

## Example Usage

```typescript
import { CreateToolsetRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CreateToolsetRequest = {
  name: "<value>",
  auth: {
    type: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `displayName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `type`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `auth`                                                                         | [operations.CreateToolsetAuth](../../models/operations/create-toolset-auth.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `baseUrl`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |