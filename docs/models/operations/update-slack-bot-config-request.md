# UpdateSlackBotConfigRequest

## Example Usage

```typescript
import { UpdateSlackBotConfigRequest } from "@pipeshub-ai/sdk/models/operations";

let value: UpdateSlackBotConfigRequest = {
  configId: "<id>",
  body: {},
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `configId`                                                                                                    | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `body`                                                                                                        | [operations.UpdateSlackBotConfigRequestBody](../../models/operations/update-slack-bot-config-request-body.md) | :heavy_check_mark:                                                                                            | Request payload                                                                                               |