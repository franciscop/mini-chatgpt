type Options = {
  org?: string;
  project?: string;
  key?: string;
  model?: string;
  temperature?: number;
};

// type Chat = {
//   system: string;
//   // ask: (prompt: string, options?: Options) => Promise<string>;
// };
type Chat = {
  system: string;
  ask: (prompt: string, options?: Options) => Promise<string>;
};

declare const chat: Chat;
export default chat;
