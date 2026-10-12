# ModelType

Type of AI model

## Example Usage

```typescript
import { ModelType } from "@pipeshub-ai/sdk/models";

let value: ModelType = "ocr";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"llm" | "embedding" | "ocr" | "slm" | "reasoning" | "multiModal" | "imageGeneration" | "tts" | "stt" | Unrecognized<string>
```