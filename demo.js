// Copy .env.sample into .env and edit the values for this to work
import "dotenv/config";

import ask from "./index.js";

const reply = await ask("What is the color of the sky? Single word");
console.log(reply);
// "Blue."
