# UpdateAuthMethodRequest

Request payload

## Example Usage

```typescript
import { UpdateAuthMethodRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateAuthMethodRequest = {
  authMethod: [],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `authMethod`                                                 | [models.AuthStep](../../models/auth-step.md)[]               | :heavy_check_mark:                                           | Authentication steps to set for the organization (1-3 steps) |