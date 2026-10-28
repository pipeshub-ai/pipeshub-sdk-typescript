# AgentCreateWebSearchUnion

Web-search attachment for an agent. Accepts a provider string, an object
with at least a `provider` field, or `null`. The provider string and
`provider` are trimmed; an empty or blank value is refused with `400`.



## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `models.AgentCreateWebSearch`

```typescript
const value: models.AgentCreateWebSearch = {
  provider: "<value>",
};
```

