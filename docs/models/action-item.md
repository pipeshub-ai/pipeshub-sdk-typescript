# ActionItem

## Example Usage

```typescript
import { ActionItem } from "@pipeshub-ai/sdk/models";

let value: ActionItem = {
  code: "<value>",
  severity: "warning",
  title: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `code`                                                                           | *string*                                                                         | :heavy_check_mark:                                                               | Identifies the item for the connector, e.g. certificate_sign_in                  |
| `severity`                                                                       | [models.Severity](../models/severity.md)                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `title`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `message`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `action`                                                                         | [models.Action](../models/action.md)                                             | :heavy_minus_sign:                                                               | Where in the connector panel it is done; authenticate opens the Authenticate tab |
| `docsUrl`                                                                        | *string*                                                                         | :heavy_minus_sign:                                                               | The setup steps for it, on the docs site                                         |