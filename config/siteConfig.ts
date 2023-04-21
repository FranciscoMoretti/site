import userConfig from "./config.mjs"
import { defaultConfig } from "./defaultConfig"

// TODO types
export const siteConfig: any = {
  ...defaultConfig,
  ...userConfig,
}
