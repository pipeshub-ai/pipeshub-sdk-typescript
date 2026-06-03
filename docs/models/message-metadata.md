# MessageMetadata

## Example Usage

```typescript
import { MessageMetadata } from "@pipeshub-ai/sdk/models";

let value: MessageMetadata = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `processingTimeMs`                              | *number*                                        | :heavy_minus_sign:                              | Time taken to generate response in milliseconds |
| `modelVersion`                                  | *string*                                        | :heavy_minus_sign:                              | Version of the AI model used                    |
| `aiTransactionId`                               | *string*                                        | :heavy_minus_sign:                              | Transaction ID for tracking in AI backend       |
| `reason`                                        | *string*                                        | :heavy_minus_sign:                              | Additional context or reasoning                 |