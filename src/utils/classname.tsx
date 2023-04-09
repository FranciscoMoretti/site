import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  // Allows overriding a style without conflicts.
  return twMerge(clsx(inputs))
}
