# ConnectorToggleRequest

## Example Usage

```typescript
import { ConnectorToggleRequest } from "@pipeshub-ai/sdk/models";

let value: ConnectorToggleRequest = {
  type: "sync",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `type`                                                                          | [models.ConnectorToggleRequestType](../models/connector-toggle-request-type.md) | :heavy_check_mark:                                                              | 'sync' flips data synchronization; 'agent' flips use by agents                  |
| `fullSync`                                                                      | *boolean*                                                                       | :heavy_minus_sign:                                                              | When turning sync on, start from scratch                                        |
| `deviceId`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | Local FS only                                                                   |
| `deviceName`                                                                    | *string*                                                                        | :heavy_minus_sign:                                                              | Local FS only                                                                   |