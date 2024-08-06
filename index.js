const errors = {
  NO_ENV: `No options loaded, if you are using the .env please make sure your runtime loads them, you might need to import "dotenv/config";`,
  NO_ORG: `Organization not defined. Add OPENAI_ORG to your environment variables, or pass the option "org"`,
  NO_PROJECT: `Project not defined. Add OPENAI_PROJECT to your environment variables, or pass the option "project"`,
  NO_KEY: `Key not defined. Add OPENAI_KEY to your environment variables, or pass the option "key"`,
};

export default async function ask(content, opts = {}) {
  // Environment variables in many different possible runtimes
  const env =
    typeof process !== "undefined"
      ? process.env
      : typeof import.meta?.env !== "undefined"
      ? import.meta.env
      : typeof Netlify !== "undefined"
      ? Netlify.env.toObject()
      : null;

  const model = opts.model || env.OPENAI_MODEL || "gpt-4o-mini";
  const temperature =
    opts.temperature || parseFloat(env.OPENAI_TEMPERATURE) || 0.7;
  const url = "https://api.openai.com/v1/chat/completions";
  const org = opts.org || env.OPENAI_ORG;
  const project = opts.project || env.OPENAI_PROJECT;
  const key = opts.key || env.OPENAI_KEY;

  if (!org && !project && !key) throw new Error(errors.NO_ENV);
  if (!org) throw new Error(errors.NO_ORG);
  if (!project) throw new Error(errors.NO_PROJECT);
  if (!key) throw new Error(errors.NO_KEY);

  const headers = {
    accepts: "application/json",
    "content-type": "application/json",
    Authorization: `Bearer ${key}`,
    "OpenAI-Organization": org,
    "OpenAI-Project": project,
  };

  const body = JSON.stringify({
    model,
    temperature,
    messages: [{ role: "user", content }],
  });

  const res = await fetch(url, { method: "POST", body, headers });

  if (!res.ok) throw new Error(res.statusText);
  const data = await res.json();
  return data?.choices?.[0]?.message?.content;
}
