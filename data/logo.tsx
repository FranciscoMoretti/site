import { cn } from '../components/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={cn('h-6 w-6 stroke-foreground', className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 22V2"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
      <path
        d="M4 2L21 2"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
      <path
        d="M13 13L14 13"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  )
}
