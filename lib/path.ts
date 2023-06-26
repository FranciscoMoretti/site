export function routeToSlug(route: string) {
  if (route.startsWith("/")) {
    // remove first /
    route = route.slice(1)
  }
  return route.split("/").slice(1).join("/")
}
