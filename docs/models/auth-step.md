# AuthStep

A single step in multi-factor authentication flow

## Example Usage

```typescript
import { AuthStep } from "@pipeshub-ai/sdk/models";

let value: AuthStep = {
  order: 267349,
  allowedMethods: [
    {
      type: "azureAd",
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `order`                                                                                              | *number*                                                                                             | :heavy_check_mark:                                                                                   | Order of the authentication step (1-3, must be unique across steps)                                  |
| `allowedMethods`                                                                                     | [models.AuthMethod](../models/auth-method.md)[]                                                      | :heavy_check_mark:                                                                                   | List of allowed authentication methods for this step. User can choose any one method from this list. |