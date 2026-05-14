# AppliedFilterNode

A single filter node selected by the user (used for display/persistence of active filters)

## Example Usage

```typescript
import { AppliedFilterNode } from "@pipeshub-ai/sdk/models";

let value: AppliedFilterNode = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_minus_sign:                             | Unique identifier of the filter node           |
| `name`                                         | *string*                                       | :heavy_minus_sign:                             | Display name of the filter node                |
| `nodeType`                                     | *string*                                       | :heavy_minus_sign:                             | Type of the node (e.g. app, kb)                |
| `connector`                                    | *string*                                       | :heavy_minus_sign:                             | Connector identifier associated with this node |