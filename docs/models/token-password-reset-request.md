# TokenPasswordResetRequest

Request to reset password using email token

## Example Usage

```typescript
import { TokenPasswordResetRequest } from "@pipeshub-ai/sdk/models";

let value: TokenPasswordResetRequest = {
  password: "m4ilD96WLpv9o6z",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `password`                                      | *string*                                        | :heavy_check_mark:                              | New password (must meet password requirements)<br/> |