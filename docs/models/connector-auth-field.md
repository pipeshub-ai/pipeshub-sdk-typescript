# ConnectorAuthField

One field of an auth form. Send its value in `config.auth` under `name`.

## Example Usage

```typescript
import { ConnectorAuthField } from "@pipeshub-ai/sdk/models";

let value: ConnectorAuthField = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `name`                                                        | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `displayName`                                                 | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `placeholder`                                                 | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `description`                                                 | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `fieldType`                                                   | *string*                                                      | :heavy_minus_sign:                                            | Input type, for example TEXT, PASSWORD, URL, SELECT, CHECKBOX |
| `required`                                                    | *boolean*                                                     | :heavy_minus_sign:                                            | N/A                                                           |
| `usage`                                                       | *string*                                                      | :heavy_minus_sign:                                            | N/A                                                           |
| `defaultValue`                                                | *any*                                                         | :heavy_minus_sign:                                            | Default value; its type follows `fieldType`                   |
| `validation`                                                  | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |
| `isSecret`                                                    | *boolean*                                                     | :heavy_minus_sign:                                            | Stored values come back masked                                |
| `options`                                                     | *any*[]                                                       | :heavy_minus_sign:                                            | N/A                                                           |