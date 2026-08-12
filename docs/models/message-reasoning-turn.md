# MessageReasoningTurn

One model turn's chain-of-thought. Persisted only when reasoning
persistence is enabled; the array is empty otherwise.


## Example Usage

```typescript
import { MessageReasoningTurn } from "@pipeshub-ai/sdk/models";

let value: MessageReasoningTurn = {
  content: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `messageId`        | *string*           | :heavy_minus_sign: | N/A                |
| `turnIndex`        | *number*           | :heavy_minus_sign: | N/A                |
| `content`          | *string*           | :heavy_check_mark: | N/A                |