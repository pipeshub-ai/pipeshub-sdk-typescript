# SaveConnectorFiltersRequest

## Example Usage

```typescript
import { SaveConnectorFiltersRequest } from "@pipeshub-ai/sdk/models/operations";

let value: SaveConnectorFiltersRequest = {
  connectorId: "<id>",
  body: {
    filters: {
      "folders": [
        {
          "id": "folder_123",
          "name": "Documents",
        },
        {
          "id": "folder_456",
          "name": "Reports",
        },
      ],
      "fileTypes": [
        "pdf",
        "docx",
      ],
      "modifiedAfter": "2024-01-01",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `connectorId`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `body`                                                                               | [models.SaveConnectorFiltersRequest](../../models/save-connector-filters-request.md) | :heavy_check_mark:                                                                   | Request payload                                                                      |