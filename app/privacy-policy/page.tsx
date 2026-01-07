import { readFileSync } from 'fs'
import { join } from 'path'
import type { Metadata } from 'next'
import PageContent from '../PageContent'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read our Privacy Policy to learn how we collect, use, and protect your information.',
  openGraph: {
    type: 'website',
    title: 'Privacy Policy',
    description: 'Read our Privacy Policy to learn how we collect, use, and protect your information.',
    images: [
      {
        url: 'https://framerusercontent.com/images/O78khdZifFQhu4ZGM5UfiliQvU.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy',
    description: 'Read our Privacy Policy to learn how we collect, use, and protect your information.',
    images: ['https://framerusercontent.com/images/O78khdZifFQhu4ZGM5UfiliQvU.png'],
  },
}

let bodyHTML: string = ''

try {
  bodyHTML = readFileSync(join(process.cwd(), 'app/privacy-policy/page-body.html'), 'utf-8')
} catch (e) {
  console.error('Failed to load privacy policy body HTML:', e)
}

export default function PrivacyPolicyPage() {
  return <PageContent html={bodyHTML} />
}

