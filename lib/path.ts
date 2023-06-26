export function routepathToSlug(routepath: string) {
  if (routepath.startsWith("/")) {
    // remove first /
    routepath = routepath.slice(1)
  }
  return routepath.split("/").slice(1).join("/")
}
