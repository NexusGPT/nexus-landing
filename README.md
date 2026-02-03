# Nexus Website

This is the marketing website for Nexus - a business-led enterprise AI platform. This README is designed to help non-developers work with AI assistants to make changes to the website.

---

## For AI Assistants: Project Overview

This is a **Next.js 14** website using the App Router, built with:
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **MDX** for blog content
- **Deployed on Vercel**

---

## Project Structure

```
nexus-copy/
├── app/                      # Next.js pages and routes
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout (header, footer, fonts)
│   ├── globals.css           # Global styles and Tailwind config
│   ├── blog/                 # Blog pages
│   │   ├── page.tsx          # Blog listing page
│   │   └── [slug]/page.tsx   # Individual blog post pages
│   └── (legal)/              # Legal pages (privacy, terms)
│
├── components/               # Reusable UI components
│   ├── sections/             # Major page sections
│   │   ├── Hero.tsx          # Hero section with main headline
│   │   ├── EnterpriseSection.tsx  # Use cases for different teams
│   │   ├── EnterpriseFeatures.tsx # Feature showcase
│   │   ├── SolutionSection.tsx    # How it works comparison
│   │   ├── Testimonials.tsx       # Customer testimonials
│   │   ├── ComparisonSection.tsx  # Competitor comparison
│   │   ├── CTASection.tsx         # Call-to-action
│   │   └── TrustBar.tsx           # Customer logos
│   ├── layout/               # Header and Footer
│   ├── blog/                 # Blog-specific components
│   │   ├── BlogCard.tsx      # Blog post card component
│   │   ├── BlogGrid.tsx      # Grid layout for blog posts
│   │   ├── BlogHero.tsx      # Blog page hero section
│   │   ├── CategoryFilter.tsx # Tag filter component (TagFilter)
│   │   └── FeaturedArticle.tsx # Featured post display
│   ├── ui/                   # Basic UI elements
│   │   ├── Button.tsx        # Button component
│   │   ├── FadeInUp.tsx      # Scroll animation component
│   │   ├── LinkButton.tsx    # Link button component
│   │   ├── ProgressBar.tsx   # Progress bar component
│   │   └── RiveAnimation.tsx # Rive animation component
│   ├── icons/                # SVG icon components
│   └── cards/                # Card components (testimonials)
│
├── content/                  # Content files
│   └── blog/                 # Blog posts in MDX format
│
├── lib/                      # Utility functions
│   ├── blog.ts               # Blog post processing
│   ├── metadata.ts           # SEO metadata helpers
│   └── structured-data.ts    # Schema.org structured data
│
├── public/                   # Static assets
│   ├── customers/            # Customer logos
│   ├── compliance/           # Compliance badges (SOC2, ISO)
│   ├── competitors/          # Competitor logos
│   └── blog/                 # Blog images (add images here)
│
└── tailwind.config.ts        # Tailwind CSS configuration
```

---

## Common Tasks for Non-Developers

### 1. Adding a New Blog Post

**Location:** `content/blog/`

To add a new blog post, create a new `.mdx` file in the `content/blog/` folder. Use this template:

```mdx
---
title: "Your Blog Post Title"
date: "2026-02-02"
description: "A brief description of your blog post (shown in previews)"
image: "/blog/your-image.avif"
tags: ["AI", "Enterprise", "Category Name"]
featured: false
---

Your blog content goes here. You can use **bold**, *italic*, and other Markdown formatting.

## Section Heading

Write your paragraphs here.

### Subsection

- Bullet point 1
- Bullet point 2

1. Numbered list item 1
2. Numbered list item 2
```

**Important fields:**
- `title`: The headline of your blog post
- `date`: Publication date in YYYY-MM-DD format
- `description`: Short summary for SEO and previews
- `image`: Path to the blog image (place in `/public/blog/`)
- `tags`: Array of tags for filtering (e.g., `["AI", "Enterprise", "Workflow Automation"]`). You can use multiple tags per post. The system also supports backward compatibility with a single `category` field, but `tags` is preferred.
- `featured`: Set to `true` to feature this post prominently (only one featured post is displayed at a time)

**File naming:** Use lowercase with hyphens: `my-new-blog-post.mdx`

### 2. Editing Existing Blog Posts

Blog posts are located in `content/blog/`. Each `.mdx` file contains both metadata (between `---` marks) and content (after the second `---`).

### 3. Changing Homepage Text

The homepage content is split across multiple component files in `components/sections/`:

| Section | File | What it contains |
|---------|------|------------------|
| Hero | `Hero.tsx` | Main headline, tagline, CTA buttons |
| Trust Bar | `TrustBar.tsx` | Customer logos |
| Use Cases | `EnterpriseSection.tsx` | Features for Executive/Business/Engineering/Compliance teams |
| How It Works | `SolutionSection.tsx` | Comparison diagrams |
| Features | `EnterpriseFeatures.tsx` | Technology, automation, deployment features |
| Testimonials | `Testimonials.tsx` | Customer quotes |
| Comparison | `ComparisonSection.tsx` | Competitor comparison table |
| CTA | `CTASection.tsx` | Final call-to-action |

### 4. Updating Customer Logos

**Location:** `public/customers/`

Add new customer logos to this folder. Supported formats: `.avif`, `.png`, `.svg`

Then update the `TrustBar.tsx` component to include the new logo.

### 5. Updating Testimonials

**Location:** `components/sections/Testimonials.tsx`

Edit the testimonials data array in this file to add, remove, or modify customer testimonials.

### 6. Changing Colors and Styling

**Tailwind Colors:** Defined in `tailwind.config.ts`

Key custom colors:
- `nexus-black`: Main dark color (#1A1A1A)
- `nexus-white`: Background white (#FAFAFA)
- `nexus-orange`: Accent/CTA color (rgb(245, 70, 26))

**Global Styles:** `app/globals.css`

### 7. Updating SEO and Metadata

**Location:** `lib/metadata.ts` and `lib/structured-data.ts`

- Page titles and descriptions are set in each page's `metadata` export
- Company information for search engines is in `structured-data.ts`

### 8. Updating Header/Footer

- **Header:** `components/layout/Header.tsx` - Navigation links, logo
- **Footer:** `components/layout/Footer.tsx` - Footer links, social media, copyright

### 9. Changing Contact/Demo Links

The Calendly demo link appears in several places:
- `components/sections/Hero.tsx`
- `components/sections/CTASection.tsx`
- `components/ui/Button.tsx`

Search for `calendly.com` to find all instances.

---

## Blog System Details

### How Blog Posts Work

1. Blog posts are written in MDX format (Markdown with optional React components)
2. Files are stored in `content/blog/`
3. The `lib/blog.ts` file reads and processes all `.mdx` files
4. Posts are automatically sorted by date (newest first)
5. The blog page at `/blog` displays all posts with tag filtering
6. Individual posts are accessible at `/blog/[slug]` where slug is the filename without `.mdx`
7. Featured posts are displayed prominently at the top of the blog listing
8. Tag filtering allows users to filter posts by topic

### Blog Tags

Blog posts use tags (arrays) for filtering. Current tags in use include:
- AI
- Enterprise
- Workflow Automation
- Automation
- Compliance
- Regulations
- Data Integration
- ROI
- Transformation
- Human-in-the-Loop
- Industry Insights

You can add new tags by simply using them in a post's `tags` array. Tags are automatically collected and displayed as filter buttons on the blog page. Posts can have multiple tags.

### Blog Images

Place blog images in `/public/blog/`. Recommended:
- Format: AVIF or WebP for best performance
- Size: Under 500KB
- Dimensions: 800x600px minimum for cards, 1200x1200px for featured

---

## File Types Explained

| Extension | What it is | When to edit |
|-----------|------------|--------------|
| `.tsx` | React component with TypeScript | UI changes, layout changes |
| `.ts` | TypeScript utility file | Logic changes, data processing |
| `.mdx` | Markdown with components | Blog posts, content |
| `.css` | Stylesheet | Global styles |
| `.avif/.png/.svg` | Images | Visual assets |

---

## Important Notes for AI Assistants

### When Editing Components

1. This project uses **Tailwind CSS** - styles are applied via className strings
2. Components use **TypeScript** - maintain type safety
3. The project uses the **Next.js App Router** - pages are in the `app/` directory
4. Images should use Next.js `<Image>` component for optimization

### Key Styling Patterns

```tsx
// Tailwind classes for text
className="text-nexus-black font-sans text-base"

// Tailwind classes for buttons
className="bg-nexus-orange text-white px-6 py-3 rounded"

// Responsive design (mobile-first)
className="text-sm sm:text-base lg:text-lg"  // sm = 640px, lg = 1024px
```

### Common Tailwind Utilities

- `px-6` = horizontal padding
- `py-4` = vertical padding
- `mt-8` = margin top
- `gap-4` = spacing between flex/grid items
- `text-lg` = larger text
- `font-bold` = bold text
- `hidden lg:block` = hidden on mobile, visible on large screens

---

## Development Commands

For developers or when instructed to run commands:

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

The site runs at `http://localhost:3000` during development.

---

## Quick Reference: What to Edit for Common Requests

| Request | File(s) to Edit |
|---------|-----------------|
| "Change the headline" | `components/sections/Hero.tsx` |
| "Add a blog post" | Create new file in `content/blog/` |
| "Update a testimonial" | `components/sections/Testimonials.tsx` |
| "Change the CTA button text" | `components/sections/CTASection.tsx` or `Hero.tsx` |
| "Add a customer logo" | Add to `public/customers/`, update `TrustBar.tsx` |
| "Update footer links" | `components/layout/Footer.tsx` |
| "Change navigation" | `components/layout/Header.tsx` |
| "Update company info" | `lib/structured-data.ts` and page metadata |
| "Change colors" | `tailwind.config.ts` or `globals.css` |
| "Update the demo link" | Search for `calendly.com` across files |

---

## Additional Resources

- **llm.txt**: A comprehensive overview of Nexus as a company is available at `/public/llm.txt`
- **Blog README**: Specific instructions for blog images in `/content/blog/README.md`
