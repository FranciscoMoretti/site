import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}
export function contentParamsToKey(contentParams: {
  slug: string
  type: string
}) {
  const sortedParams = Object.keys(contentParams)
    .sort()
    .reduce((obj, key) => {
      obj[key] = contentParams[key]
      return obj
    }, {} as { [key: string]: string })
  return JSON.stringify(sortedParams)
}
