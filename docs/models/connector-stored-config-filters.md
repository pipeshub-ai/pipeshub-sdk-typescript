# ConnectorStoredConfigFilters

Saved filter selections

## Example Usage

```typescript
import { ConnectorStoredConfigFilters } from "@pipeshub-ai/sdk/models";

let value: ConnectorStoredConfigFilters = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `sync`                                                                               | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | What to fetch from the source. Selections are under `values`, keyed by filter name.  |
| `indexing`                                                                           | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | Which fetched records to index. Selections are under `values`, keyed by filter name. |
| `additionalProperties`                                                               | Record<string, *any*>                                                                | :heavy_minus_sign:                                                                   | N/A                                                                                  |