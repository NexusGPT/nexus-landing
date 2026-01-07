'use client'

import Script from 'next/script'
import { readFileSync } from 'fs'
import { join } from 'path'

let animatorScript: string = ''

if (typeof window === 'undefined') {
  try {
    animatorScript = readFileSync(join(process.cwd(), 'lib/framer-animator.js'), 'utf-8')
  } catch (e) {
    console.error('Failed to load animator script:', e)
  }
}

export default function FramerAnimator() {
  if (!animatorScript) {
    return null
  }

  return (
    <Script
      id="framer-animator"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: animatorScript }}
    />
  )
}

