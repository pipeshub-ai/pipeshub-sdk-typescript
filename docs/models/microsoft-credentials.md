# MicrosoftCredentials

Credentials for `microsoft` sign-in. Only `idToken` is read: it is
verified against Microsoft's signing keys, with the saved client ID as audience.
Without it the sign-in answers `400`.


## Example Usage

```typescript
import { MicrosoftCredentials } from "@pipeshub-ai/sdk/models";

let value: MicrosoftCredentials = {
  idToken: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `idToken`                | *string*                 | :heavy_check_mark:       | Microsoft ID token (JWT) |
| `accessToken`            | *string*                 | :heavy_minus_sign:       | Accepted but not read    |