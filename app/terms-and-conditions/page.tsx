import { readFileSync } from 'fs'
import { join } from 'path'
import type { Metadata } from 'next'
import PageContent from '../PageContent'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Read our Terms and Conditions to understand the terms of use for our services.',
  openGraph: {
    type: 'website',
    title: 'Terms and Conditions',
    description: 'Read our Terms and Conditions to understand the terms of use for our services.',
    images: [
      {
        url: 'https://framerusercontent.com/images/O78khdZifFQhu4ZGM5UfiliQvU.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions',
    description: 'Read our Terms and Conditions to understand the terms of use for our services.',
    images: ['https://framerusercontent.com/images/O78khdZifFQhu4ZGM5UfiliQvU.png'],
  },
}

let bodyHTML: string = ''

try {
  bodyHTML = readFileSync(join(process.cwd(), 'app/terms-and-conditions/page-body.html'), 'utf-8')
} catch (e) {
  console.error('Failed to load terms body HTML:', e)
}

export default function TermsAndConditionsPage() {
  return <PageContent html={bodyHTML} />
}

