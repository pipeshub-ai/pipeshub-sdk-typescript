# AzureAdAuthConfig

Azure Active Directory authentication configuration

## Example Usage

```typescript
import { AzureAdAuthConfig } from "pipeshub/models";

let value: AzureAdAuthConfig = {
  clientId: "12345678-1234-1234-1234-123456789abc",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `clientId`                                         | *string*                                           | :heavy_minus_sign:                                 | Azure AD application client ID                     | 12345678-1234-1234-1234-123456789abc               |
| `tenantId`                                         | *string*                                           | :heavy_minus_sign:                                 | Azure AD tenant ID (use 'common' for multi-tenant) | common                                             |