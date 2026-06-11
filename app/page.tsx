import siteMetadata from '@/data/siteMetadata'
import { Home } from './Home'

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteMetadata.author,
  url: siteMetadata.siteUrl,
  jobTitle: 'Frontend Product Engineer',
  description: siteMetadata.description,
  sameAs: [siteMetadata.github, siteMetadata.linkedin, siteMetadata.x],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Home />
    </>
  )
}
