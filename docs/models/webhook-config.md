# WebhookConfig

Configuration for webhook-based sync

## Example Usage

```typescript
import { WebhookConfig } from "@pipeshub-ai/sdk/models";

let value: WebhookConfig = {
  events: [
    "file.created",
    "file.modified",
    "file.deleted",
  ],
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `webhookUrl`                                        | *string*                                            | :heavy_minus_sign:                                  | URL to receive webhook events (auto-generated)      |                                                     |
| `events`                                            | *string*[]                                          | :heavy_minus_sign:                                  | Subscribed event types                              | [<br/>"file.created",<br/>"file.modified",<br/>"file.deleted"<br/>] |