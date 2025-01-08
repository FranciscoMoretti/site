'use client'

import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { Giscus } from './Giscus'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)

  if (!siteMetadata.comments?.provider) {
    return null
  }
  return (
    <>
      {loadComments && siteMetadata.comments.provider === 'giscus' ? (
        <Giscus {...siteMetadata.comments.giscusConfig} />
      ) : (
        <button onClick={() => setLoadComments(true)}>Load Comments</button>
      )}
    </>
  )
}
