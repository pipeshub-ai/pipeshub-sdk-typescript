# CreateOrganizationData

## Example Usage

```typescript
import { CreateOrganizationData } from "@pipeshub-ai/sdk/models/operations";

let value: CreateOrganizationData = {};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `organization`                                      | [models.Organization](../../models/organization.md) | :heavy_minus_sign:                                  | N/A                                                 |
| `adminUser`                                         | [models.User](../../models/user.md)                 | :heavy_minus_sign:                                  | User account in an organization                     |
| `accessToken`                                       | *string*                                            | :heavy_minus_sign:                                  | JWT token for immediate login                       |