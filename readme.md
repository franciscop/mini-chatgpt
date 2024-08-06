# Mini ChatGPT

A tiny (< 1kb) library to talk to ChatGPT. Just ask the question and get the answer, and it loads the configuration from the environment (preferred) or manually (optional):

```js
import ask from "./index.js";
const reply = await ask("What is the color of the sky? Single word");
console.log(reply);
// "Blue."
```

The options can be loaded from the environment (might need [dotenv](https://www.npmjs.com/package/dotenv)) or as the second parameter:

| Name            | .env key             | option key    | Default           |
| --------------- | -------------------- | ------------- | ----------------- |
| Organization \* | `OPENAI_ORG`         | `org`         | `null` (required) |
| Project \*      | `OPENAI_PROJECT`     | `project`     | `null` (required) |
| Key \*          | `OPENAI_KEY`         | `key`         | `null` (required) |
| Model           | `OPENAI_MODEL`       | `model`       | `'gpt-4o-mini'`   |
| Temperature     | `OPENAI_TEMPERATURE` | `temperature` | `0.7`             |

```js
const reply = await ask(prompt, {
  org: "",
  project: "",
  key: "",
  model: "gpt-4o-mini",
  temperature: 0.7,
});
```

```js
# Mandatory
OPENAI_ORG=
OPENAI_PROJECT=
OPENAI_KEY=

# Optional
OPENAI_MODEL=
OPENAI_TEMPERATURE=
```
