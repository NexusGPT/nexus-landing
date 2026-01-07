# Nexus - Next.js Migration

This project has been migrated from a static Framer HTML export to a Next.js 14+ application with full SEO optimization while preserving all UI elements and animations exactly as they were.

## Project Structure

```
nexus-copy/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Homepage
│   ├── PageContent.tsx           # Client component for rendering HTML
│   ├── globals.css               # Global styles and fonts
│   ├── privacy-policy/
│   │   └── page.tsx              # Privacy Policy page
│   ├── terms-and-conditions/
│   │   └── page.tsx              # Terms and Conditions page
│   ├── sitemap.ts                # Sitemap generation
│   └── robots.ts                 # Robots.txt generation
├── components/
│   ├── FramerAnimatorWrapper.tsx # Server wrapper for animator
│   ├── FramerAnimatorClient.tsx  # Client component for animator
│   └── FramerAppear.tsx          # Appear animation handler
├── hooks/
│   └── useFramerLinks.ts         # Framer link handling
├── lib/                          # Framer animation scripts
│   ├── framer-animator.js        # Extracted animator script
│   ├── framer-appear-config.json # Animation configurations
│   ├── framer-breakpoints.json   # Breakpoint configurations
│   └── framer-links.js           # Link handling script
└── public/                       # Static assets
    └── lib/                      # Public scripts
```

## Features

- **Preserved Framer Animations**: All Framer animations and interactions work exactly as before
- **SEO Optimized**: Full metadata API implementation with Open Graph and Twitter Cards
- **Server-Side Rendering**: All pages are server-rendered for optimal SEO
- **TypeScript**: Full TypeScript support
- **Next.js 14+ App Router**: Modern Next.js architecture

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Key Implementation Details

### Animation System
- Framer's custom animator script is loaded via `beforeInteractive` strategy
- Appear animations are initialized after the animator loads
- All `data-framer-appear-id` attributes are preserved

### SEO
- Metadata API used for all pages
- Sitemap automatically generated at `/sitemap.xml`
- Robots.txt automatically generated at `/robots.txt`
- Open Graph and Twitter Card metadata included

### Asset Handling
- Images from `framerusercontent.com` are configured in `next.config.js`
- Fonts are loaded from Framer CDN (can be optimized later)
- SVG templates are preserved inline

## Environment Variables

Set `NEXT_PUBLIC_BASE_URL` for production deployment:
```
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

## Notes

- All HTML content is preserved exactly as exported from Framer
- Scripts are loaded in the correct order to ensure animations work
- The project maintains 100% visual fidelity with the original HTML export

