import { readFileSync } from 'fs'
import { join } from 'path'
import FramerAnimatorClient from './FramerAnimatorClient'

let animatorScript: string = ''

try {
  animatorScript = readFileSync(join(process.cwd(), 'lib/framer-animator.js'), 'utf-8')
} catch (e) {
  console.error('Failed to load animator script:', e)
}

export default function FramerAnimatorWrapper() {
  return <FramerAnimatorClient script={animatorScript} />
}

