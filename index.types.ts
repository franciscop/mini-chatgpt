import chat from "./index.js";

chat.system = "test";

(async () => {
  await chat.ask("hello");
  await chat.ask("hello", {});
  await chat.ask("hello", { model: "abc" });
})();
