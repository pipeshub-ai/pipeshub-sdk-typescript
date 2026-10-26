# UpdateOAuthConfigRequestBody

Send `oauthInstanceName`, `config`, or both; a body with neither is
refused, even if it carries `baseUrl`.



## Supported Types

### `operations.RequestBody1`

```typescript
const value: operations.RequestBody1 = {
  oauthInstanceName: "<value>",
};
```

### `operations.RequestBody2`

```typescript
const value: operations.RequestBody2 = {
  config: {},
};
```

