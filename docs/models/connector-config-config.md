# ConnectorConfigConfig

Configuration sections

## Example Usage

```typescript
import { ConnectorConfigConfig } from "@pipeshub-ai/sdk/models";

let value: ConnectorConfigConfig = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `auth`                                                                 | [models.Auth](../models/auth.md)                                       | :heavy_minus_sign:                                                     | Authentication configuration (sensitive data redacted)                 |
| `sync`                                                                 | [models.ConnectorConfigSync](../models/connector-config-sync.md)       | :heavy_minus_sign:                                                     | Sync configuration (schedule, options)                                 |
| `filters`                                                              | [models.ConnectorConfigFilters](../models/connector-config-filters.md) | :heavy_minus_sign:                                                     | Filter selections for data scope                                       |