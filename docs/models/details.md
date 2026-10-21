# Details

## Example Usage

```typescript
import { Details } from "@pipeshub-ai/sdk/models";

let value: Details = {
  code: "DESKTOP_UNCLAIMED",
  connectorId: "<id>",
  retryable: true,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `code`                                                | [models.DetailsCode](../models/details-code.md)       | :heavy_check_mark:                                    | N/A                                                   |
| `connectorId`                                         | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `retryable`                                           | *boolean*                                             | :heavy_check_mark:                                    | N/A                                                   |
| `ownerDeviceName`                                     | *string*                                              | :heavy_minus_sign:                                    | Name of the owner device, when the connector has one. |