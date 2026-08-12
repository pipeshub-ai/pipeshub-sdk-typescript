# AgentCreateToolsetName

Registered toolset name (lowercase) accepted by the create-agent gateway.

## Example Usage

```typescript
import { AgentCreateToolsetName } from "@pipeshub-ai/sdk/models";

let value: AgentCreateToolsetName = "lumos";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"calendar" | "clickup" | "confluence" | "confluencedatacenter" | "drive" | "github" | "gmail" | "jira" | "jiradatacenter" | "lumos" | "mariadb" | "onedrive" | "outlook" | "redshift" | "salesforce" | "sharepoint" | "slack" | "teams" | "zoom" | Unrecognized<string>
```