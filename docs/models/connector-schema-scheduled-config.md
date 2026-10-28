# ConnectorSchemaScheduledConfig

## Example Usage

```typescript
import { ConnectorSchemaScheduledConfig } from "@pipeshub-ai/sdk/models";

let value: ConnectorSchemaScheduledConfig = {
  timezone: "UTC",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `intervalMinutes`  | *number*           | :heavy_minus_sign: | N/A                |                    |
| `cronExpression`   | *string*           | :heavy_minus_sign: | N/A                |                    |
| `timezone`         | *string*           | :heavy_minus_sign: | N/A                | UTC                |
| `startTime`        | *number*           | :heavy_minus_sign: | N/A                |                    |
| `nextTime`         | *number*           | :heavy_minus_sign: | N/A                |                    |
| `endTime`          | *number*           | :heavy_minus_sign: | N/A                |                    |
| `maxRepetitions`   | *number*           | :heavy_minus_sign: | N/A                |                    |
| `repetitionCount`  | *number*           | :heavy_minus_sign: | N/A                |                    |