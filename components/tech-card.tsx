import Image from "next/image"
import Link from "next/link"
import javaScriptIcon from "@/assets/logos/javascript.svg"
import nextJsIcon from "@/assets/logos/nextjs-icon.svg"
import reactIcon from "@/assets/logos/react.svg"
import tailwindIcon from "@/assets/logos/tailwindcss-icon.svg"
import typeScriptIcon from "@/assets/logos/typescript-icon.svg"
import vsCodeIcon from "@/assets/logos/visual-studio-code.svg"
import { FORMAT_H3 } from "@/styles/format"

import { cn } from "@/lib/utils"

const ICONS = {
  "Next.js": nextJsIcon,
  JavaScript: javaScriptIcon,
  TypeScript: typeScriptIcon,
  "VS Code": vsCodeIcon,
  React: reactIcon,
  TailwindCSS: tailwindIcon,
}

export function TechCard({
  name,
  description,
  link,
}: {
  name: string
  description: string
  link: string
}) {
  return (
    <Link href={link}>
      <div className="relative animate-border overflow-hidden rounded-lg bg-gradient-to-r from-border via-primary to-border bg-[length:400%_400%] p-[1px] ">
        <span className="block rounded-md bg-background hover:bg-accent">
          <div className="flex h-44 flex-col justify-between rounded-md p-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src={ICONS[name]}
                  alt={`${name} icon`}
                  className="h-8 w-8"
                />
                <h3 className={cn(FORMAT_H3, "mt-0")}>{name}</h3>
              </div>
              <p className="line-clamp-4 text-sm text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </span>
      </div>
    </Link>
  )
}
