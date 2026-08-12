# PatListItem

A personal access token as seen by its own creator (one element of
`GET /personal-access-tokens`'s `tokens` array, or the `token` object
returned by `POST /personal-access-tokens` before `accessToken` is added).


## Example Usage

```typescript
import { PatListItem } from "@pipeshub-ai/sdk/models";

let value: PatListItem = {
  id: "<id>",
  name: "<value>",
  scopes: [
    "<value 1>",
  ],
  createdAt: new Date("2025-01-28T08:57:45.658Z"),
  expiresAt: new Date("2026-01-11T15:19:54.539Z"),
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Token ID                                                                                                                                                                   |
| `name`                                                                                                                                                                     | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Token name                                                                                                                                                                 |
| `scopes`                                                                                                                                                                   | *string*[]                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                         | Granted scopes                                                                                                                                                             |
| `createdAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `expiresAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Expiry timestamp. A `"never"`-expiry token is stored as a<br/>~100-year-out date, not a literal null — treat anything decades<br/>out as "never" rather than a real deadline.<br/> |
| `lastUsedAt`                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_minus_sign:                                                                                                                                                         | Last time this token successfully authenticated a request.<br/>Throttled server-side to update at most once per 5 minutes per<br/>token; absent if the token has never been used.<br/> |