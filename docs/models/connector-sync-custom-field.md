# ConnectorSyncCustomField

A connector-specific sync setting. Send its value in `config.sync` under `name`.

## Example Usage

```typescript
import { ConnectorSyncCustomField } from "@pipeshub-ai/sdk/models";

let value: ConnectorSyncCustomField = {};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `name`                | *string*              | :heavy_minus_sign:    | N/A                   |
| `displayName`         | *string*              | :heavy_minus_sign:    | N/A                   |
| `description`         | *string*              | :heavy_minus_sign:    | N/A                   |
| `fieldType`           | *string*              | :heavy_minus_sign:    | N/A                   |
| `required`            | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `defaultValue`        | *any*                 | :heavy_minus_sign:    | N/A                   |
| `validation`          | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |
| `isSecret`            | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `nonEditable`         | *boolean*             | :heavy_minus_sign:    | N/A                   |
| `options`             | *string*[]            | :heavy_minus_sign:    | N/A                   |