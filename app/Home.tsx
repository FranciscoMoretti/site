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
    <p>
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
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  return (
    <li>
      <Link href={href} className="plain-link text-base font-semibold">
        {title}
      </Link>
      <span> - {description}</span>
    </li>
  )
}

export function Home() {
  return (
    <main className="pb-20 pt-28 sm:pt-32">
      <article className="space-y-7 text-lg leading-8 text-foreground">
        <h1 className="text-3xl font-semibold leading-10">Francisco Moretti</h1>

        <div className="space-y-5">
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

        <section className="space-y-4">
          <p>Some selected open-source projects include:</p>
          <ul className="list-inside list-[square] space-y-1">
            {projectsData.map((project) => (
              <ProjectRow
                key={project.title}
                title={project.title}
                description={project.description}
                href={project.href}
              />
            ))}
          </ul>
        </section>

        <ProfileLinks />
      </article>
    </main>
  )
}
