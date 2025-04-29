'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Copy, Check } from 'lucide-react'

interface CopyAsMarkdownButtonProps {
  markdownForCopy?: string
}

export default function CopyAsMarkdownButton({ markdownForCopy }: CopyAsMarkdownButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (!markdownForCopy) return // Guard clause if field is missing
    navigator.clipboard.writeText(markdownForCopy).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
    })
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="gap-1 text-xs text-muted-foreground"
      onClick={handleCopy}
      disabled={!markdownForCopy} // Disable if field is missing
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {/* {copied ? 'Copied Markdown!' : 'Copy as Markdown'} */}
    </Button>
  )
}
