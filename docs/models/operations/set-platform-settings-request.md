# SetPlatformSettingsRequest

Request body for Update platform settings

## Example Usage

```typescript
import { SetPlatformSettingsRequest } from "@pipeshub-ai/sdk/models/operations";

let value: SetPlatformSettingsRequest = {
  fileUploadMaxSizeBytes: 31457280,
  featureFlags: {
    "ENABLE_BETA_CONNECTORS": false,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `fileUploadMaxSizeBytes`                                                 | *number*                                                                 | :heavy_check_mark:                                                       | Maximum file upload size in bytes                                        | 31457280                                                                 |
| `featureFlags`                                                           | Record<string, *boolean*>                                                | :heavy_check_mark:                                                       | Key-value map of feature flags. Set to true to enable, false to disable. | {<br/>"ENABLE_BETA_CONNECTORS": false<br/>}                              |