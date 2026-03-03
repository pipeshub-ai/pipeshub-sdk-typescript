# SaveConnectorFiltersRequest

Request to save filter selections for a connector

## Example Usage

```typescript
import { SaveConnectorFiltersRequest } from "@pipeshub-ai/sdk/models";

let value: SaveConnectorFiltersRequest = {
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
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              | Example                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `filters`                                                                                                                                                                | Record<string, *any*>                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                       | Filter values to save (structure depends on connector's filter schema)                                                                                                   | {<br/>"folders": [<br/>{<br/>"id": "folder_123",<br/>"name": "Documents"<br/>},<br/>{<br/>"id": "folder_456",<br/>"name": "Reports"<br/>}<br/>],<br/>"fileTypes": [<br/>"pdf",<br/>"docx"<br/>],<br/>"modifiedAfter": "2024-01-01"<br/>} |