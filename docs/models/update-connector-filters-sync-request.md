# UpdateConnectorFiltersSyncRequest

At least one of `sync` and `filters`. `filters.sync` and `filters.indexing` replace the saved ones.

## Example Usage

```typescript
import { UpdateConnectorFiltersSyncRequest } from "@pipeshub-ai/sdk/models";

let value: UpdateConnectorFiltersSyncRequest = {};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sync`                                                                                                                                            | [models.ConnectorSyncConfig](../models/connector-sync-config.md)                                                                                  | :heavy_minus_sign:                                                                                                                                | Sync strategy plus connector-specific sync settings, flat: send each field listed under `sync.customFields` in the registry schema by its `name`. |
| `filters`                                                                                                                                         | [models.ConnectorFiltersConfig](../models/connector-filters-config.md)                                                                            | :heavy_minus_sign:                                                                                                                                | N/A                                                                                                                                               |