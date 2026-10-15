# LocalFsDesktopRefusalError

409 body returned when a Local FS connector cannot sync because of its
owner device.


## Example Usage

```typescript
import { LocalFsDesktopRefusalError } from "@pipeshub-ai/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `success`                                                                                                              | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | false                                                                                                                  |
| `code`                                                                                                                 | [models.Code](../../models/code.md)                                                                                    | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `message`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    | No desktop is connected for connector conn_abc123. Open the Pipeshub desktop app on the machine that owns this folder. |
| `details`                                                                                                              | [models.Details](../../models/details.md)                                                                              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |