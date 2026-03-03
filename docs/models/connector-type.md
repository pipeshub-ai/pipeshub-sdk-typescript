# ConnectorType

A connector type from the registry. Represents an available integration
that can be configured as a connector instance.


## Example Usage

```typescript
import { ConnectorType } from "@pipeshub-ai/sdk/models";

let value: ConnectorType = {
  connectorType: "google-drive",
  displayName: "Google Drive",
  supportedScopes: [
    "team",
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `connectorType`                                                | *string*                                                       | :heavy_minus_sign:                                             | Unique identifier for this connector type                      | google-drive                                                   |
| `displayName`                                                  | *string*                                                       | :heavy_minus_sign:                                             | Human-readable name                                            | Google Drive                                                   |
| `description`                                                  | *string*                                                       | :heavy_minus_sign:                                             | What this connector does                                       |                                                                |
| `appGroupId`                                                   | *string*                                                       | :heavy_minus_sign:                                             | Application group identifier                                   |                                                                |
| `appGroup`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Application group name (e.g., "Google Workspace")              |                                                                |
| `authTypes`                                                    | [models.ConnectorAuthType](../models/connector-auth-type.md)[] | :heavy_minus_sign:                                             | Supported authentication methods                               |                                                                |
| `supportedScopes`                                              | [models.ConnectorScope](../models/connector-scope.md)[]        | :heavy_minus_sign:                                             | Supported scope types                                          |                                                                |
| `supportsSync`                                                 | *boolean*                                                      | :heavy_minus_sign:                                             | Whether connector supports data synchronization                |                                                                |
| `supportsAgent`                                                | *boolean*                                                      | :heavy_minus_sign:                                             | Whether connector supports AI agent integration                |                                                                |
| `supportsRealtime`                                             | *boolean*                                                      | :heavy_minus_sign:                                             | Whether connector supports real-time updates                   |                                                                |
| `iconPath`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Path to connector icon                                         |                                                                |
| `categories`                                                   | *string*[]                                                     | :heavy_minus_sign:                                             | Categories (e.g., "Storage", "Communication")                  |                                                                |
| `isBeta`                                                       | *boolean*                                                      | :heavy_minus_sign:                                             | Whether this is a beta connector                               |                                                                |