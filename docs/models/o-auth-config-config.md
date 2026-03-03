# OAuthConfigConfig

OAuth credentials (admin-only view)

## Example Usage

```typescript
import { OAuthConfigConfig } from "@pipeshub-ai/sdk/models";

let value: OAuthConfigConfig = {};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `clientId`                     | *string*                       | :heavy_minus_sign:             | N/A                            |
| `clientSecret`                 | *string*                       | :heavy_minus_sign:             | Redacted for non-admin users   |
| `tenantId`                     | *string*                       | :heavy_minus_sign:             | For Microsoft/Azure connectors |