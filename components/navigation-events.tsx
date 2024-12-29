'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function NavigationEvents() {
  const pathname = usePathname()

  useEffect(() => {
    // TODO: create simpler logic
    const slug = pathname?.split('/blog/').slice(1).join('/')

    if (slug && process.env.NODE_ENV === 'production') {
      const response = fetch('/api/posts/' + slug, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      })
        .then((response) => response)
        .catch((error) => console.error(error))

      console.log('response: ', response)
    }
  }, [pathname])

  return null
}
