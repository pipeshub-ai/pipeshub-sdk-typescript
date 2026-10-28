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

| Field                                                                                                                                                                                                                | Type                                                                                                                                                                                                                 | Required                                                                                                                                                                                                             | Description                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `connectorId`                                                                                                                                                                                                        | *string*                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                   | Connector instance ID. Unlike `GET` on this path, not checked for<br/>shape: an ID that matches no instance is a `404`. An ID that decodes<br/>to an unsafe path segment is refused with `400` before the token is checked.<br/> |
| `body`                                                                                                                                                                                                               | [models.SaveConnectorFiltersRequest](../../models/save-connector-filters-request.md)                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                   | Request payload                                                                                                                                                                                                      |