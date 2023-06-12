"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function NavigationEvents() {
  const pathname = usePathname()

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      console.log("prod")
    }
    // TODO: create simpler logic
    const slug = pathname?.split("/blog/").slice(1).join("/")
    console.log("slug:", slug)
    if (slug) {
      const response = fetch("/api/posts/" + slug, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      })
        .then((response) => response)
        .catch((error) => console.error(error))

      console.log("response: ", response)
    }
  }, [pathname])

  return null
}
