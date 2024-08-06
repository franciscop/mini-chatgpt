type Options = {
  org?: string;
  project?: string;
  key?: string;
  model?: string;
  temperature?: number;
};
export default function (prompt: string, options?: Options): Promise<string>;
export {};
