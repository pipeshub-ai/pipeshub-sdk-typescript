# ConnectorFiltersConfigSync

Sync filter selections

## Example Usage

```typescript
import { ConnectorFiltersConfigSync } from "@pipeshub-ai/sdk/models";

let value: ConnectorFiltersConfigSync = {
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
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `values`                                                                                                       | Record<string, *any*>                                                                                          | :heavy_minus_sign:                                                                                             | Selected filter values (keys are filter field names)                                                           | {<br/>"folders": [<br/>"folder_id_1",<br/>"folder_id_2"<br/>],<br/>"fileTypes": [<br/>"pdf",<br/>"docx",<br/>"xlsx"<br/>],<br/>"includeShared": true<br/>} |