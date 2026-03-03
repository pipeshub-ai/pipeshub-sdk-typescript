# ConnectorFiltersConfig

Filter configuration to control what data is synced (sync filters and indexing filters)

## Example Usage

```typescript
import { ConnectorFiltersConfig } from "@pipeshub-ai/sdk/models";

let value: ConnectorFiltersConfig = {
  sync: {
    values: {
      "folders": [
        "folder_id_1",
        "folder_id_2",
      ],
      "fileTypes": [
        "pdf",
        "docx",
        "xlsx",
      ],
      "includeShared": true,
    },
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `sync`                                                                          | [models.ConnectorFiltersConfigSync](../models/connector-filters-config-sync.md) | :heavy_minus_sign:                                                              | Sync filter selections                                                          |
| `indexing`                                                                      | [models.Indexing](../models/indexing.md)                                        | :heavy_minus_sign:                                                              | Indexing filter selections                                                      |