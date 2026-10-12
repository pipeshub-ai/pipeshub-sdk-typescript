# Changelog

## 1.7.0

Compatible with PipesHub [v0.9.1](https://github.com/pipeshub-ai/pipeshub-ai/releases/tag/v0.9.1). This version is generated from the PipesHub v0.9.1 API spec. The changes for all three SDKs are also in the [PipesHub changelog](https://github.com/pipeshub-ai/pipeshub-ai/blob/main/changelog/0.9.0.md#sdks--170-typescript-python-go).

> **1.7.0 is a minor version, but it contains breaking changes.** Read the list below before you upgrade.

### What's new

- **Projects:** a new `projects` namespace. You can create, list, get, update, delete, archive, unarchive, pin and unpin projects. You can also manage project members, the project knowledge base, and a project's conversations. `conversations.setConversationProject`, `conversations.setConversationProjectVisibility`, `projects.setAgentConversationProject` and `projects.setAgentConversationProjectVisibility` move a conversation into a project and set its visibility.
- **Non-streaming chat:** `conversations.createConversation`, `conversations.addMessage`, `agents.createAgentConversation` and `agents.addAgentConversationMessage` return the finished answer as JSON.
- **Stop a running answer:** `conversations.cancelConversationStream` and `agents.cancelAgentConversationStream`.
- **Examples:** `examples/` has one script for each operation.

### Breaking changes and how to fix them

#### Renaming a conversation no longer returns `messages`

Get the messages with a second call.

```ts
await sdk.conversations.updateConversationTitle({ conversationId, body: { title } });
const { conversation } = await sdk.conversations.getConversationById({ conversationId });
conversation.messages;
```

#### Delete agent conversation: `conversation` can be empty

Check that the conversation exists before you read it.

```ts
const res = await sdk.agents.deleteAgentConversationById({ agentKey, conversationId });
if (res.conversation && "id" in res.conversation) console.log(res.conversation.id);
```

#### Some type names changed

Use the new name. The data inside is the same.

| Old name | New name |
|---|---|
| `Meta` | `MessageFeedbackUpdateResponseMeta` |
| `ModelInfo` | `ConversationListItemModelInfo` |
| `IsArchived` | `ListAgentConversationsIsArchived` |
| `GetConversationByIdMessage` | `Message` |
| `GetConversationByIdMessageMessageType` | `MessageMessageType` |
| `GetConversationByIdContentFormat` | `ContentFormat` |
| `GetConversationByIdReferenceDatum` | `ReferenceDatum` |
| `GetConversationByIdAppliedFilters` | `AppliedFilters` |

The `UpdateConversationTitle*` message types are removed, because renaming a conversation no longer returns messages.

#### Two errors have a new error class

A `500` from `knowledgeBase.uploadRecords` is now an `ErrorResponse`. A `410` from `userAccount.authenticate` is now the default `PipeshubError` instead of an `ErrorResponse`. Catch the parent error class, and check the status code.

```ts
import * as errors from "@pipeshub-ai/sdk/models/errors";

try { ... } catch (e) { if (e instanceof errors.PipeshubError && e.statusCode === 500) { ... } }
```

### Behavior notes (not breaking)

- **Login on 22 endpoints** (OAuth apps, access tokens, user info, org auth config, reset password): these calls send only the user token. If you set up only an app token, add a user token.
  ```ts
  const sdk = new Pipeshub({ security: { bearerAuth: userToken } });
  ```
- **Stream event `data` stays a string.** Code that parses `event.data` keeps working.
