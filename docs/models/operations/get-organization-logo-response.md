# GetOrganizationLogoResponse

Logo URL retrieved successfully

## Example Usage

```typescript
import { GetOrganizationLogoResponse } from "@pipeshub-ai/sdk/models/operations";

let value: GetOrganizationLogoResponse = {
  success: true,
  hasLogo: true,
  logoUrl:
    "https://storage.pipeshub.com/org/507f1f77bcf86cd799439011/logo.png?token=...",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `success`                                                                    | *boolean*                                                                    | :heavy_minus_sign:                                                           | N/A                                                                          | true                                                                         |
| `hasLogo`                                                                    | *boolean*                                                                    | :heavy_minus_sign:                                                           | Whether organization has a custom logo                                       | true                                                                         |
| `logoUrl`                                                                    | *string*                                                                     | :heavy_minus_sign:                                                           | Signed URL to access the logo (null if no logo)                              | https://storage.pipeshub.com/org/507f1f77bcf86cd799439011/logo.png?token=... |