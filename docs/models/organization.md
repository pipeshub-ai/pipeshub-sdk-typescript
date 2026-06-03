# Organization

## Example Usage

```typescript
import { Organization } from "@pipeshub-ai/sdk/models";

let value: Organization = {
  id: "<value>",
  slug: "<value>",
  registeredName: "<value>",
  domain: "ugly-coliseum.name",
  contactEmail: "Florida80@yahoo.com",
  accountType: "individual",
  onBoardingStatus: "notConfigured",
  v: 21117,
  createdAt: new Date("2025-10-03T12:50:59.985Z"),
  updatedAt: new Date("2026-07-07T03:03:05.898Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique organization identifier                                                                |
| `slug`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Unique slug for the organization                                                              |
| `registeredName`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | Registered name                                                                               |
| `shortName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Short name or display name                                                                    |
| `domain`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Organization domain                                                                           |
| `contactEmail`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | Contact email address                                                                         |
| `accountType`                                                                                 | [models.AccountType](../models/account-type.md)                                               | :heavy_check_mark:                                                                            | Type of account                                                                               |
| `permanentAddress`                                                                            | [models.Address](../models/address.md)                                                        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `onBoardingStatus`                                                                            | [models.OnBoardingStatus](../models/on-boarding-status.md)                                    | :heavy_check_mark:                                                                            | Onboarding status                                                                             |
| `isDeleted`                                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Soft delete flag                                                                              |
| `v`                                                                                           | *number*                                                                                      | :heavy_check_mark:                                                                            | Document version (MongoDB)                                                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp (ISO 8601)                                                                 |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last update timestamp (ISO 8601)                                                              |