'use client'

import { useEffect } from 'react'

interface FramerAnimatorClientProps {
  script: string
}

export default function FramerAnimatorClient({ script }: FramerAnimatorClientProps) {
  useEffect(() => {
    if (!script) return

    // Check if already loaded
    if (document.getElementById('framer-animator')) {
      return
    }

    // Inject animator script inline - must execute immediately
    const scriptElement = document.createElement('script')
    scriptElement.id = 'framer-animator'
    scriptElement.textContent = script
    scriptElement.async = false
    document.head.appendChild(scriptElement)

    // Ensure animator is available globally
    if (typeof window !== 'undefined') {
      // Wait a tick for script to execute
      setTimeout(() => {
        if (!(window as any).animator) {
          console.warn('Animator script loaded but window.animator not found')
        }
      }, 100)
    }

    return () => {
      const existing = document.getElementById('framer-animator')
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing)
      }
    }
  }, [script])

  return null
}

