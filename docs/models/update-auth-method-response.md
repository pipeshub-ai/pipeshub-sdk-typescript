# UpdateAuthMethodResponse

Response after updating organization authentication methods

## Example Usage

```typescript
import { UpdateAuthMethodResponse } from "@pipeshub-ai/sdk/models";

let value: UpdateAuthMethodResponse = {
  message: "Auth method updated",
  authMethod: [
    {
      order: 19378,
      allowedMethods: [
        {
          type: "azureAd",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `message`                                                 | *string*                                                  | :heavy_check_mark:                                        | N/A                                                       | Auth method updated                                       |
| `authMethod`                                              | [models.AuthStep](../models/auth-step.md)[]               | :heavy_check_mark:                                        | Updated authentication steps (same shape as request body) |                                                           |