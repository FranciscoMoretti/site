import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto flex w-full max-w-[620px] flex-1 flex-col px-6 sm:px-8">
      {children}
    </section>
  )
}
