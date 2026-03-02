# ListOAuthScopesResponse

List of available scopes

## Example Usage

```typescript
import { ListOAuthScopesResponse } from "pipeshub/models/operations";

let value: ListOAuthScopesResponse = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `scopes`                                                               | Record<string, [operations.Scope](../../models/operations/scope.md)[]> | :heavy_minus_sign:                                                     | Scopes grouped by category                                             |