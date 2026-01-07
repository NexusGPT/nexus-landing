'use client'

import { useEffect } from 'react'

export function FramerLinks() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/lib/framer-links.js'
    script.type = 'text/javascript'
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return null
}

