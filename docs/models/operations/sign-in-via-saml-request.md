# SignInViaSAMLRequest

## Example Usage

```typescript
import { SignInViaSAMLRequest } from "@pipeshub-ai/sdk/models/operations";

let value: SignInViaSAMLRequest = {
  email: "Milton5@gmail.com",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                                          | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | User's email address                                                                                                             |
| `sessionToken`                                                                                                                   | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Session token from `/userAccount/initAuth`. Optional but recommended<br/>for maintaining authentication state across the SAML flow.<br/> |