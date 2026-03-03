# GetTokenFromCodeRequest

## Example Usage

```typescript
import { GetTokenFromCodeRequest } from "@pipeshub-ai/sdk/models/operations";

let value: GetTokenFromCodeRequest = {
  tempCode: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `tempCode`                                                     | *string*                                                       | :heavy_check_mark:                                             | Google OAuth authorization code received from the consent flow |