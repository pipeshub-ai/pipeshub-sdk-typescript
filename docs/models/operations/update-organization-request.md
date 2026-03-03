# UpdateOrganizationRequest

Request payload

## Example Usage

```typescript
import { UpdateOrganizationRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateOrganizationRequest = {
  registeredName: "Acme Corporation Inc.",
  shortName: "Acme Corp",
  phoneNumber: "+15551234567",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `registeredName`                            | *string*                                    | :heavy_minus_sign:                          | Official registered/legal name              | Acme Corporation Inc.                       |
| `shortName`                                 | *string*                                    | :heavy_minus_sign:                          | Short display name for UI                   | Acme Corp                                   |
| `phoneNumber`                               | *string*                                    | :heavy_minus_sign:                          | Contact phone number (international format) | +15551234567                                |
| `permanentAddress`                          | [models.Address](../../models/address.md)   | :heavy_minus_sign:                          | N/A                                         |                                             |