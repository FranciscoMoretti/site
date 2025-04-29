'use client'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Image, { type ImageProps } from 'next/image'

export default function PostContentImage({ src, alt, ...rest }: ImageProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="m-0 w-full cursor-pointer rounded-xl bg-muted/80 p-2">
          <Image className="m-0 w-full rounded-lg" alt={alt || ''} src={src} {...rest} />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-card sm:max-w-[80vw]">
        <div className="m-0 w-full rounded-xl bg-card p-2">
          <Image className="w-full rounded-lg object-contain" alt={alt || ''} src={src} {...rest} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
