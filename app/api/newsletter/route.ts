import { NewsletterAPI } from 'pliny/newsletter'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

const handler = siteMetadata.newsletter?.provider
  ? NewsletterAPI({
      provider: siteMetadata.newsletter.provider,
    })
  : {
      GET: () => new Response('Newsletter not configured', { status: 404 }),
      POST: () => new Response('Newsletter not configured', { status: 404 }),
    }

export { handler as GET, handler as POST }
