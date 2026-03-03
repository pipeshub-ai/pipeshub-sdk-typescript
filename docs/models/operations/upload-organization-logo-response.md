# UploadOrganizationLogoResponse

Logo uploaded successfully

## Example Usage

```typescript
import { UploadOrganizationLogoResponse } from "@pipeshub-ai/sdk/models/operations";

let value: UploadOrganizationLogoResponse = {
  success: true,
  logoUrl: "https://storage.pipeshub.com/org/507f1f77bcf86cd799439011/logo.png",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `success`                                                          | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                | true                                                               |
| `logoUrl`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | URL to access the uploaded logo                                    | https://storage.pipeshub.com/org/507f1f77bcf86cd799439011/logo.png |