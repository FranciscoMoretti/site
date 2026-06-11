import Link from '@/components/Link'
import projectsData from '@/data/projectsData'
import siteMetadata from '@/data/siteMetadata'

const profileLinks = [
  { title: 'GitHub', href: siteMetadata.github },
  { title: 'LinkedIn', href: siteMetadata.linkedin },
  { title: 'X', href: siteMetadata.x },
]

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="plain-link">
      {children}
    </Link>
  )
}

function ProfileLinks() {
  return (
    <p className="text-base">
      You can find me on{' '}
      {profileLinks.map((link, index) => (
        <span key={link.title}>
          <Link href={link.href} className="plain-link">
            {link.title}
          </Link>
          {index === profileLinks.length - 2
            ? ', or '
            : index < profileLinks.length - 1
              ? ', '
              : ''}
        </span>
      ))}
      .
    </p>
  )
}

function ProjectRow({
  index,
  title,
  description,
  href,
}: {
  index: number
  title: string
  description: string
  href: string
}) {
  return (
    <li className="group grid grid-cols-[2.75rem_1fr]">
      <span
        aria-hidden
        className="pt-0.5 font-mono text-sm leading-7 text-muted-foreground/70 transition-colors duration-200 group-hover:text-[hsl(var(--highlight))]"
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <div>
        <Link href={href} className="plain-link font-semibold">
          {title}
        </Link>
        <p className="text-base leading-7 text-muted-foreground">{description}</p>
      </div>
    </li>
  )
}

export function Home() {
  return (
    <main className="pb-20 pt-28 sm:pt-32">
      <article className="space-y-8 text-lg leading-8 text-foreground">
        <h1 className="reveal reveal-1 text-balance text-4xl font-semibold leading-tight tracking-tight">
          Francisco Moretti
        </h1>

        <div className="reveal reveal-2 space-y-5 text-pretty">
          <p>
            I&apos;m a Frontend Product Engineer specializing in building AI applications. I&apos;m
            based in London and originally from Argentina.
          </p>

          <p>
            I&apos;m currently building an AI law firm at{' '}
            <TextLink href="https://alaro.ai/">Alaro</TextLink>. Previously, I worked at{' '}
            <TextLink href="https://samaya.ai/">Samaya AI</TextLink>, building AI for finance.
          </p>

          <p>
            My open-source work is mostly around the Vercel AI SDK ecosystem. I built{' '}
            <TextLink href="https://chatjs.dev">ChatJS</TextLink> and{' '}
            <TextLink href="https://airegistry.app">AI Registry</TextLink>, and have contributed to{' '}
            <TextLink href="https://github.com/vercel/ai">AI SDK</TextLink>,{' '}
            <TextLink href="https://github.com/vercel/streamdown">Streamdown</TextLink>,{' '}
            <TextLink href="https://github.com/vercel/ai-elements">AI Elements</TextLink>, and{' '}
            <TextLink href="https://github.com/midday-ai/ai-sdk-devtools">AI SDK Devtools</TextLink>
            . That work was selected for{' '}
            <TextLink href="https://rauchg-oss-grants.vercel.app/">
              Guillermo Rauch&apos;s OSS Grants
            </TextLink>
            , and ChatJS, formerly Sparka, was selected for the{' '}
            <TextLink href="https://vercel.com/blog/vercel-open-source-program-fall-2025-cohort#sparka">
              Vercel Open Source Program
            </TextLink>
            .
          </p>
        </div>

        <section className="reveal reveal-3 space-y-5">
          <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Projects
          </h2>
          <ul className="space-y-4">
            {projectsData.map((project, index) => (
              <ProjectRow
                key={project.title}
                index={index}
                title={project.title}
                description={project.description}
                href={project.href}
              />
            ))}
          </ul>
        </section>

        <footer className="reveal reveal-4 border-t border-border/60 pt-6">
          <ProfileLinks />
        </footer>
      </article>
    </main>
  )
}
