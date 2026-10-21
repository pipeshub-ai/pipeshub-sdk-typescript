# StreamRecordBufferRequest

## Example Usage

```typescript
import { StreamRecordBufferRequest } from "@pipeshub-ai/sdk/models/operations";

let value: StreamRecordBufferRequest = {
  recordId: "<id>",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `recordId`                                                                                                                | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | Record ID                                                                                                                 |
| `convertTo`                                                                                                               | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Target format for conversion                                                                                              |
| `version`                                                                                                                 | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Registry version to pin ARTIFACT record content to. Omit to stream<br/>the latest version. Ignored for non-artifact records.<br/> |