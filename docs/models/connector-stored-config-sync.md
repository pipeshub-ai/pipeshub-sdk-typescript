# ConnectorStoredConfigSync

Sync strategy plus connector-specific sync settings

## Example Usage

```typescript
import { ConnectorStoredConfigSync } from "@pipeshub-ai/sdk/models";

let value: ConnectorStoredConfigSync = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `selectedStrategy`                                   | *string*                                             | :heavy_minus_sign:                                   | `MANUAL`, `SCHEDULED` or `WEBHOOK`                   |
| `scheduledConfig`                                    | Record<string, *any*>                                | :heavy_minus_sign:                                   | Schedule used when `selectedStrategy` is `SCHEDULED` |
| `customValues`                                       | Record<string, *any*>                                | :heavy_minus_sign:                                   | Values of the connector's own sync fields            |
| `additionalProperties`                               | Record<string, *any*>                                | :heavy_minus_sign:                                   | N/A                                                  |