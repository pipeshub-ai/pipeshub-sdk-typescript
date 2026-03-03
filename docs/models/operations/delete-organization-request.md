# DeleteOrganizationRequest

## Example Usage

```typescript
import { DeleteOrganizationRequest } from "@pipeshub-ai/sdk/models/operations";

let value: DeleteOrganizationRequest = {
  confirm: "DELETE",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `confirm`                                                | [operations.Confirm](../../models/operations/confirm.md) | :heavy_check_mark:                                       | Must be "DELETE" to confirm deletion                     |