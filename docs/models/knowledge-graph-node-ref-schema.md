# KnowledgeGraphNodeRefSchema

Minimal identity reference for a node in the knowledge graph.

## Example Usage

```typescript
import { KnowledgeGraphNodeRefSchema } from "@pipeshub-ai/sdk/models";

let value: KnowledgeGraphNodeRefSchema = {
  id: "<id>",
  name: "<value>",
  nodeType: "<value>",
  subType: "<value>",
  isRecord: true,
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                  | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | Node identifier. Pass it back as `nodeId` to open this node. When `is_record` is true it is also the Record ID accepted by GET /connectors/record/{recordId}/content. |
| `name`                                                                                                                                                                | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | N/A                                                                                                                                                                   |
| `nodeType`                                                                                                                                                            | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | One of `app`, `recordGroup`, `folder`, `record`.                                                                                                                      |
| `subType`                                                                                                                                                             | *string*                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                    | e.g. `TICKET`, `CONFLUENCE_PAGE`, `PROJECT`, `COLLECTION`.                                                                                                            |
| `isRecord`                                                                                                                                                            | *boolean*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                    | True for record and folder nodes — the nodes whose content can be read via GET /connectors/record/{recordId}/content.                                                 |