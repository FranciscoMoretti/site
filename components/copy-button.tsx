'use client'

import * as React from 'react'

import { Icons } from '@/components/icons'

import { Button } from './ui/button'
import { cn } from './lib/utils'

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string
  src?: string
}

async function copyToClipboardWithMeta(value: string) {
  navigator.clipboard.writeText(value)
}

export function CopyButton({ value, className, src, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn(
        'z-10 m-auto h-7 w-7 p-1.5 text-neutral-50 hover:bg-neutral-700 hover:text-neutral-50',
        className
      )}
      onClick={() => {
        copyToClipboardWithMeta(value)
        setHasCopied(true)
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <Icons.check className="m-auto h-4 w-4" />
      ) : (
        <Icons.copy className="m-auto h-4 w-4" />
      )}
    </Button>
  )
}
