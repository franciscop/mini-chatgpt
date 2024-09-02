# Mini ChatGPT [![npm install mini-chatgpt](https://img.shields.io/badge/npm%20install-mini--chatgpt-blue.svg)](https://www.npmjs.com/package/mini-chatgpt) [![gzip size](https://badgen.net/bundlephobia/minzip/mini-chatgpt?label=gzip&color=green)](https://github.com/franciscop/mini-chatgpt/blob/master/index.js)

A tiny (<1kb) library to talk to ChatGPT. Just ask the question and get the answer:

```js
import chat from "mini-chatgpt";
chat.system = "";
const reply = await chat.ask("What is the color of the sky?");
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

From the environment (`.env`):

```js
# Mandatory
OPENAI_ORG=
OPENAI_PROJECT=
OPENAI_KEY=

# Optional
OPENAI_MODEL=
OPENAI_TEMPERATURE=
```

As the second parameter:

```js
const reply = await chat.ask(prompt, {
  org: "",
  project: "",
  key: "",
  model: "gpt-4o-mini",
  temperature: 0.7,
});
```

You shouldn't be hardcoding the key in your code, but you might need to load it dynamically like in Clouflare Workers, so we allow for it to be passed as an option like this:

```js
export default {
  async fetch(ctx, env) {
    const reply = await chat.ask(prompt, {
      org: env.OPENAI_ORG,
      project: env.OPENAI_PROJECT,
      key: env.OPENAI_KEY,
    });
    // ...
  },
};
```

You can add a system prompt like this:

```js
import chat from "mini-chat";

chat.system = "abc";

const res = await chat.ask("some question");
```
