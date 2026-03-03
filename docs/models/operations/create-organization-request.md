# CreateOrganizationRequest

Request payload

## Example Usage

```typescript
import { CreateOrganizationRequest } from "@pipeshub-ai/sdk/models/operations";

let value: CreateOrganizationRequest = {
  accountType: "business",
  shortName: "Acme",
  registeredName: "Acme Corporation Inc.",
  contactEmail: "admin@acme.com",
  adminFullName: "John Smith",
  password: "SecurePassword123!",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `accountType`                                                     | [operations.AccountType](../../models/operations/account-type.md) | :heavy_check_mark:                                                | Type of organization account                                      | business                                                          |
| `shortName`                                                       | *string*                                                          | :heavy_minus_sign:                                                | Short display name for the organization                           | Acme                                                              |
| `registeredName`                                                  | *string*                                                          | :heavy_minus_sign:                                                | Official registered name (for business accounts)                  | Acme Corporation Inc.                                             |
| `contactEmail`                                                    | *string*                                                          | :heavy_check_mark:                                                | Primary contact email (also used as admin email)                  | admin@acme.com                                                    |
| `adminFullName`                                                   | *string*                                                          | :heavy_check_mark:                                                | Full name of the first admin user                                 | John Smith                                                        |
| `password`                                                        | *string*                                                          | :heavy_check_mark:                                                | Password for the admin account (min 8 chars)                      | SecurePassword123!                                                |