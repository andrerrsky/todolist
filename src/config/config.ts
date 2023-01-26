import Config from "./config.types";

const config: Config = {
  apiURL: process.env.NEXT_PUBLIC_API_URL ?? "",
  appName: "To Do List",
  locale: "pt-BR",
};

export default config;
