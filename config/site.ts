import { SiteConfig } from "@/types"
import userConfig from "./config"
import { defaultConfig } from "./defaultConfig"

// TODO types
export const siteConfig: SiteConfig = {
  ...defaultConfig,
  ...userConfig,
}
