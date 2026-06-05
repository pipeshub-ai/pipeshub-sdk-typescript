# AgentListItemWebSearch

Web-search provider attachment for this agent, or `null` when none is attached.

For `GET /agents`, the response formatter always emits `provider`.
It may also emit `providerKey` and `providerLabel` when those values
were present on the stored attachment. It does not emit `iconPath`
on this response path.


## Example Usage

```typescript
import { AgentListItemWebSearch } from "@pipeshub-ai/sdk/models";

let value: AgentListItemWebSearch = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `provider`         | *string*           | :heavy_minus_sign: | N/A                |
| `providerKey`      | *string*           | :heavy_minus_sign: | N/A                |
| `providerLabel`    | *string*           | :heavy_minus_sign: | N/A                |