import "dotenv/config";

import ask from "./index.js";
const reply = await ask("What is the color of the sky? Single word");
console.log(reply);
// "Blue."
