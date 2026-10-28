# GetConversationByIdSharedWith

## Example Usage

```typescript
import { GetConversationByIdSharedWith } from "@pipeshub-ai/sdk/models/operations";

let value: GetConversationByIdSharedWith = {};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `userId`                                                                                                                          | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | N/A                                                                                                                               |
| `accessLevel`                                                                                                                     | [operations.GetConversationByIdSharedWithAccessLevel](../../models/operations/get-conversation-by-id-shared-with-access-level.md) | :heavy_minus_sign:                                                                                                                | N/A                                                                                                                               |
| `id`                                                                                                                              | *string*                                                                                                                          | :heavy_minus_sign:                                                                                                                | Id of the share entry. The session schema asks for none,<br/>but Mongoose ignores that option and stores one.<br/>                |