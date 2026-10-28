# UpdateConnectorFiltersSyncRequest1

## Example Usage

```typescript
import { UpdateConnectorFiltersSyncRequest1 } from "@pipeshub-ai/sdk/models";

let value: UpdateConnectorFiltersSyncRequest1 = {
  sync: {},
};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sync`                                                                                                                                            | [models.ConnectorSyncConfig](../models/connector-sync-config.md)                                                                                  | :heavy_check_mark:                                                                                                                                | Sync strategy plus connector-specific sync settings, flat: send each field listed under `sync.customFields` in the registry schema by its `name`. |
| `filters`                                                                                                                                         | [models.ConnectorFiltersConfig](../models/connector-filters-config.md)                                                                            | :heavy_minus_sign:                                                                                                                                | N/A                                                                                                                                               |