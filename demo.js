// Copy .env.sample into .env and edit the values for this to work
import "dotenv/config";

import chat from "./index.js";

chat.system = `Answer the questions with a symple word, no punctuation`;

const reply = await chat.ask("What is the color of the sky?");
console.log(reply);
// "Blue"
