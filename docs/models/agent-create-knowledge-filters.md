# AgentCreateKnowledgeFilters

The source's limit, as an object or its JSON text. An empty string or an empty
array means no limit. A non-empty array, `null`, or text that is not the JSON of
an object is refused with `400` (`VALIDATION_ERROR`, "Knowledge filters must be
an object, with recordGroups and records as lists of ids").



## Supported Types

### `models.AgentKnowledgeFiltersParsed`

```typescript
const value: models.AgentKnowledgeFiltersParsed = {};
```

### `string`

```typescript
const value: string = "<value>";
```

### `any[]`

```typescript
const value: any[] = [
  "<value 1>",
  "<value 2>",
  "<value 3>",
];
```

