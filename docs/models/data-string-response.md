# DataStringResponse

Generic success payload with a single string field (e.g. password reset email, token reset)

## Example Usage

```typescript
import { DataStringResponse } from "@pipeshub-ai/sdk/models";

let value: DataStringResponse = {
  data: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `data`             | *string*           | :heavy_check_mark: | N/A                |