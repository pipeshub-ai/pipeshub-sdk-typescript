# OauthScopes

Provider scopes requested for each way the connector is used

## Example Usage

```typescript
import { OauthScopes } from "@pipeshub-ai/sdk/models";

let value: OauthScopes = {
  personalSync: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  teamSync: [
    "<value 1>",
    "<value 2>",
  ],
  agent: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `personalSync`     | *string*[]         | :heavy_check_mark: | N/A                |
| `teamSync`         | *string*[]         | :heavy_check_mark: | N/A                |
| `agent`            | *string*[]         | :heavy_check_mark: | N/A                |