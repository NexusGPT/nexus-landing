import type { Metadata } from 'next'
import './globals.css'
import FramerAnimatorWrapper from '@/components/FramerAnimatorWrapper'
import FramerAppear from '@/components/FramerAppear'
import { FramerLinks } from '@/hooks/useFramerLinks'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Nexus',
  description: 'Reliable agents build by business teams',
  generator: 'Framer 7f789f4',
  icons: {
    icon: [
      {
        url: 'https://framerusercontent.com/images/dJgBbIDwV1X1jmRmheqXS0hecc4.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'https://framerusercontent.com/images/Y82hQltZSGxMv2KT88WY3vRH0TY.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: 'https://framerusercontent.com/images/HfoMWDSSYzWrNhQfaiX3KRrVuY.png',
  },
  openGraph: {
    type: 'website',
    title: 'Nexus',
    description: 'Reliable agents build by business teams',
    images: [
      {
        url: 'https://framerusercontent.com/assets/O78khdZifFQhu4ZGM5UfiliQvU.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus',
    description: 'Reliable agents build by business teams',
    images: ['https://framerusercontent.com/assets/O78khdZifFQhu4ZGM5UfiliQvU.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="framer-search-index" content="https://framerusercontent.com/sites/vIfmZM7LGTXdUfa1iZ6r4/searchIndex-9MmQyTYCkfH9.json" />
        <meta name="framer-search-index-fallback" content="https://framerusercontent.com/sites/vIfmZM7LGTXdUfa1iZ6r4/searchIndex-zQqux8K5prOK.json" />
        <meta name="framer-html-plugin" content="disable" />
      </head>
      <body>
        <ErrorBoundary>
          <FramerAnimatorWrapper />
          <FramerAppear />
          <FramerLinks />
          <Script
            id="framer-analytics"
            src="https://events.framer.com/script?v=2"
            data-fid="978adeca50b8bc62774bd37a3754fbfa878b8ca1f1d0b198067f6a3637b8181d"
            data-no-nt
            strategy="afterInteractive"
          />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}

