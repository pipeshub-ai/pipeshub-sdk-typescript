# Credentials

Credentials based on the authentication method; the shape each method needs is
listed above. The validator only checks that this is a non-empty string or an
object whose `password`, `otp`, `token`, `code`, `accessToken` and `idToken`,
when present, are strings; other fields of the object are passed through. An
object without the field its method needs is refused later as a failed sign-in,
not as a validation error: `microsoft` without `idToken` answers `400`, and a Google
token that is not a JWT answers `500`.



## Supported Types

### `models.PasswordCredentials`

```typescript
const value: models.PasswordCredentials = {
  password: "eyEM1KYBsdIr7Mv",
};
```

### `models.OtpCredentials`

```typescript
const value: models.OtpCredentials = {
  otp: "123456",
};
```

### `models.GoogleCredentials`

```typescript
const value: models.GoogleCredentials = {
  credential: "<value>",
};
```

### `models.MicrosoftCredentials`

```typescript
const value: models.MicrosoftCredentials = {
  idToken: "<value>",
};
```

### `string`

```typescript
const value: string = "<value>";
```

