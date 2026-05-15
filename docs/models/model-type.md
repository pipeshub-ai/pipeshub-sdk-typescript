# ModelType

Type of AI model

## Example Usage

```typescript
import { ModelType } from "@pipeshub-ai/sdk/models";

let value: ModelType = "ocr";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"llm" | "embedding" | "ocr" | "slm" | "reasoning" | "multiModal" | "imageGeneration" | "tts" | "stt" | Unrecognized<string>
```