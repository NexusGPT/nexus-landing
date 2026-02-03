import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";
import { Button, FadeInUp } from "@/components/ui";
import { CTASection } from "@/components/sections";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return createPageMetadata({
    title: `${post.title} | Nexus Blog`,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.tags && post.tags.length > 0 ? [...post.tags, "AI", "enterprise"] : ["AI", "enterprise"],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
    },
  });
}

const mdxComponents = {
  h1: (props: any) => (
    <h1
      className="font-pp-fragment text-3xl lg:text-4xl font-normal text-nexus-black mb-6 mt-8 first:mt-0"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="font-pp-fragment text-2xl lg:text-3xl font-normal text-nexus-black mb-4 mt-8 first:mt-0"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="font-pp-fragment text-xl lg:text-2xl font-normal text-nexus-black mb-3 mt-6 first:mt-0"
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className="font-sans text-base lg:text-lg text-nexus-black leading-relaxed mb-6 font-thin"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul
      className="font-sans text-base lg:text-lg text-nexus-black leading-relaxed mb-6 ml-6 list-disc font-thin"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="font-sans text-base lg:text-lg text-nexus-black leading-relaxed mb-6 ml-6 list-decimal font-thin"
      {...props}
    />
  ),
  li: (props: any) => <li className="mb-2 font-thin" {...props} />,
  strong: (props: any) => <strong className="font-medium" {...props} />,
  em: (props: any) => <em className="italic" {...props} />,
  a: (props: any) => (
    <a className="text-nexus-orange hover:underline" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-nexus-grey-light pl-4 italic text-nexus-grey-medium my-6 font-thin"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-nexus-grey-light/10 px-2 py-1 rounded font-mono text-sm"
      {...props}
    />
  ),
  img: (props: any) => {
    // Handle both markdown images and JSX img tags
    const src = props.src || props.srcSet;
    const alt = props.alt || "";
    return (
      <div className="my-8 w-[110%] max-w-[845px] -mx-[5%] lg:-mx-[5%]">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="w-full h-auto"
        />
      </div>
    );
  },
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post || !post.content) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="min-h-screen bg-nexus-white">
      {/* Hero Section */}
      <section className="w-full pt-24 lg:pt-32 px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <FadeInUp>
              <nav className="mb-8">
                <Link
                  href="/blog"
                  className="font-sans text-sm text-nexus-grey-medium hover:text-nexus-orange transition-colors inline-flex items-center gap-2 group"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="rotate-180"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="relative">
                    Back to articles
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nexus-orange transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </nav>
            </FadeInUp>

            {/* Featured Image */}
            {post.image && (
              <FadeInUp delay={0.1}>
                <div className="max-w-3xl mx-auto overflow-visible mb-12">
                  <div className="relative w-[110%] -mx-[5%] aspect-video overflow-hidden bg-nexus-grey-light/10">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                  </div>
                </div>
              </FadeInUp>
            )}
            {/* Title */}
            <FadeInUp delay={0.2}>
              <h1 className="font-pp-fragment text-4xl lg:text-5xl font-normal text-nexus-black leading-tight mb-8">
                {post.title}
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                {post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
                  <>
                    {post.tags.map((tag, index) => (
                      <span
                        key={tag}
                        className="font-sans text-xs font-medium text-nexus-grey-medium uppercase tracking-wide"
                      >
                        {tag}
                        {index < post.tags.length - 1 && (
                          <span className="text-nexus-grey-light mx-2">•</span>
                        )}
                      </span>
                    ))}
                    <span className="text-nexus-grey-light">•</span>
                  </>
                )}
                <time className="font-sans text-sm text-nexus-grey-medium">
                  {formatDate(post.date)}
                </time>
              </div>
            </FadeInUp>
          </div>

          {/* Category and Date */}
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-8 lg:py-12 pt-0 px-8 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mx-auto">
            <FadeInUp delay={0.1}>
              <p className="font-sans text-xl lg:text-2xl text-nexus-black leading-relaxed mb-8 font-thin">
                {post.description}
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="prose prose-lg max-w-none">
                <MDXRemote
                  source={post.content}
                  components={mdxComponents}
                  options={{ parseFrontmatter: false }}
                />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </article>
  );
}
