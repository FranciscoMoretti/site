'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query'

export function NavigationEvents() {
  const pathname = usePathname()
  const queryClient = useQueryClient()

  useEffect(() => {
    // TODO: create simpler logic
    const slug = pathname?.split('/blog/').slice(1).join('/').split('#')[0]

    if (slug && process.env.NODE_ENV === 'production') {
      fetch('/api/posts/' + slug, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      })
        .then((response) => {
          queryClient.invalidateQueries({ queryKey: ['postViews', slug] })
          return response
        })
        .catch((error) => console.error(error))
    }
  }, [pathname, queryClient])

  return null
}
