# RecordType

Type of content:
- FILE: Uploaded documents (PDF, DOCX, etc.)
- WEBPAGE: Web pages crawled or bookmarked
- COMMENT: Comments from collaboration tools
- MESSAGE: Chat/messaging content (Slack, Teams)
- EMAIL: Email messages (Gmail, Outlook)
- TICKET: Support tickets (Jira, ServiceNow)
- OTHERS: Miscellaneous content types


## Example Usage

```typescript
import { RecordType } from "@pipeshub-ai/sdk/models";

let value: RecordType = "FILE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"FILE" | "WEBPAGE" | "COMMENT" | "MESSAGE" | "EMAIL" | "TICKET" | "OTHERS" | Unrecognized<string>
```