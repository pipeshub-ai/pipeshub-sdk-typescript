# AppliedFilterNode

A single filter node selected by the user (used for display/persistence of active filters)

## Example Usage

```typescript
import { AppliedFilterNode } from "@pipeshub-ai/sdk/models";

let value: AppliedFilterNode = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *string*                                                       | :heavy_minus_sign:                                             | Unique identifier of the filter node                           |
| `name`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Display name of the filter node                                |
| `nodeType`                                                     | *string*                                                       | :heavy_minus_sign:                                             | Type of the node (e.g. app, recordGroup, folder, record)       |
| `connector`                                                    | *string*                                                       | :heavy_minus_sign:                                             | Connector identifier associated with this node                 |
| `extension`                                                    | *string*                                                       | :heavy_minus_sign:                                             | File extension of a record node, for its icon                  |
| `mimeType`                                                     | *string*                                                       | :heavy_minus_sign:                                             | MIME type of a record node, for its icon                       |
| `mentioned`                                                    | *boolean*                                                      | :heavy_minus_sign:                                             | True when the node was picked with an @ mention in the message |