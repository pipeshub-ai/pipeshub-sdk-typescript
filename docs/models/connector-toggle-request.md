# ConnectorToggleRequest

Request to toggle connector active status

## Example Usage

```typescript
import { ConnectorToggleRequest } from "@pipeshub-ai/sdk/models";

let value: ConnectorToggleRequest = {
  type: "sync",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `type`                                                                          | [models.ConnectorToggleRequestType](../models/connector-toggle-request-type.md) | :heavy_check_mark:                                                              | Toggle type: 'sync' for data synchronization, 'agent' for AI agent integration  |