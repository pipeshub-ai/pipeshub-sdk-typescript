# Changelog

## 1.7.0

Compatible with PipesHub [v0.9.1](https://github.com/pipeshub-ai/pipeshub-ai/releases/tag/v0.9.1).

> **1.7.0 is a minor version, but it contains breaking changes.** Read this list before you upgrade.

### Breaking changes and how to fix them

#### Renaming a conversation no longer returns `messages`

`updateConversationTitle` returns only the updated conversation fields. Read the messages with a second call.

```ts
// ❌ 1.6.0
// const res = await sdk.conversations.updateConversationTitle({ conversationId, body: { title } });
// const messages = res.conversation.messages;

// ✅ 1.7.0
await sdk.conversations.updateConversationTitle({ conversationId, body: { title } });
const { conversation } = await sdk.conversations.getConversationById({ conversationId });
const messages = conversation?.messages ?? [];
```

#### Deleting an agent conversation: `conversation` can be empty

`conversation` is now a stored conversation, an empty object, or `null`. Check it before you read a field.

```ts
const res = await sdk.agents.deleteAgentConversationById({ agentKey, conversationId });

// ❌ 1.6.0
// console.log(res.conversation.id);

// ✅ 1.7.0
if (res.conversation && "id" in res.conversation) {
  console.log(res.conversation.id);
}
```

#### Some type names changed

Use the new name. The data inside is the same.

| Old name | New name | Import from |
|---|---|---|
| `Meta` | `MessageFeedbackUpdateResponseMeta` | `@pipeshub-ai/sdk/models` |
| `ModelInfo` | `ConversationListItemModelInfo` | `@pipeshub-ai/sdk/models` |
| `IsArchived` | `ListAgentConversationsIsArchived` | `@pipeshub-ai/sdk/models/operations` |
| `GetConversationByIdMessage` | `Message` | `@pipeshub-ai/sdk/models/operations` |
| `GetConversationByIdMessageMessageType` | `MessageMessageType` | `@pipeshub-ai/sdk/models/operations` |
| `GetConversationByIdContentFormat` | `ContentFormat` | `@pipeshub-ai/sdk/models/operations` |
| `GetConversationByIdReferenceDatum` | `ReferenceDatum` | `@pipeshub-ai/sdk/models/operations` |
| `GetConversationByIdAppliedFilters` | `AppliedFilters` | `@pipeshub-ai/sdk/models/operations` |

The `UpdateConversationTitle*` message types are removed, because renaming a conversation no longer returns messages.

```ts
// ❌ 1.6.0
// import { Meta, ModelInfo } from "@pipeshub-ai/sdk/models";
// import { IsArchived, GetConversationByIdMessage } from "@pipeshub-ai/sdk/models/operations";

// ✅ 1.7.0
import { MessageFeedbackUpdateResponseMeta, ConversationListItemModelInfo } from "@pipeshub-ai/sdk/models";
import { ListAgentConversationsIsArchived, Message } from "@pipeshub-ai/sdk/models/operations";
```

#### Two errors have a new error class

A `500` from `knowledgeBase.uploadRecords` is now thrown as `ErrorResponse`. A `410` from `userAccount.authenticate` is no longer an `ErrorResponse`. Both classes extend `PipeshubError`, so catch the parent class and check the status code.

```ts
import * as errors from "@pipeshub-ai/sdk/models/errors";

try {
  await sdk.knowledgeBase.uploadRecords(request);
} catch (e) {
  if (e instanceof errors.PipeshubError && e.statusCode === 500) {
    // handle the server error
  } else {
    throw e;
  }
}
```

### Behavior notes (not breaking)

- **A user token on 22 endpoints.** OAuth apps, personal access tokens, user info, org auth config and reset password now send only the user token. If you set up only an app token, add a user token:
  ```ts
  const sdk = new Pipeshub({ security: { bearerAuth: userToken } });
  ```
- **Stream event `data` stays a string.** Code that calls `JSON.parse(event.data)` keeps working.
