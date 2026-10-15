# AuthField

## Example Usage

```typescript
import { AuthField } from "@pipeshub-ai/sdk/models";

let value: AuthField = {
  name: "clientId",
  displayName: "Osbaldo.White90",
  placeholder: "<value>",
  description:
    "regarding quash near if ack impeccable adventurously physical mothball",
  fieldType: "URL",
  required: true,
  usage: "CONFIGURE",
  defaultValue: "<value>",
  validation: {},
  isSecret: true,
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `name`                                       | *string*                                     | :heavy_check_mark:                           | N/A                                          | clientId                                     |
| `displayName`                                | *string*                                     | :heavy_check_mark:                           | N/A                                          |                                              |
| `placeholder`                                | *string*                                     | :heavy_check_mark:                           | N/A                                          |                                              |
| `description`                                | *string*                                     | :heavy_check_mark:                           | N/A                                          |                                              |
| `fieldType`                                  | [models.FieldType](../models/field-type.md)  | :heavy_check_mark:                           | N/A                                          |                                              |
| `required`                                   | *boolean*                                    | :heavy_check_mark:                           | N/A                                          |                                              |
| `usage`                                      | [models.Usage](../models/usage.md)           | :heavy_check_mark:                           | N/A                                          |                                              |
| `defaultValue`                               | *string*                                     | :heavy_check_mark:                           | N/A                                          |                                              |
| `validation`                                 | [models.Validation](../models/validation.md) | :heavy_check_mark:                           | N/A                                          |                                              |
| `isSecret`                                   | *boolean*                                    | :heavy_check_mark:                           | N/A                                          |                                              |
| `options`                                    | *string*[]                                   | :heavy_minus_sign:                           | Present on SELECT fields                     |                                              |