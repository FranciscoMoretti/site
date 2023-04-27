import logo from "@/public/favicon.svg"
import Image from "next/image"

export function Logo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <div className={className}>
      <Image src={logo} alt="Logo" />
    </div>
  )
}
