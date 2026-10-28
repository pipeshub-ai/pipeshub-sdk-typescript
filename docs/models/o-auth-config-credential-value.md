# OAuthConfigCredentialValue

A stored credential value, returned exactly as it was sent on create or update. Usually a
string, boolean, number or list of strings, but the value is not checked, so `null`, a
nested object or an array of other items comes back as well.



## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `boolean`

```typescript
const value: boolean = true;
```

### `number`

```typescript
const value: number = 1284.03;
```

### `any[]`

```typescript
const value: any[] = [
  "<value 1>",
  "<value 2>",
  "<value 3>",
];
```

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "key": "<value>",
  "key1": "<value>",
  "key2": "<value>",
};
```

