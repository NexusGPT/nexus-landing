"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";
import { FadeInUp } from "@/components/ui";

interface FeaturedArticleProps {
  post: BlogPost;
}

export default function FeaturedArticle({ post }: FeaturedArticleProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="w-full px-8 lg:px-20 py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto">
        <FadeInUp>
          <div className="mb-6">
            <span className="font-sans text-xs font-medium text-nexus-grey-medium uppercase">
              Featured
            </span>
          </div>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <Link
          href={`/blog/${post.slug}`}
          className="group block lg:grid lg:grid-cols-2 gap-8 lg:gap-12 bg-nexus-white border border-nexus-grey-light/20 overflow-hidden relative transition-all duration-300"
        >
          <div className="relative w-full h-64 lg:h-full min-h-[400px] overflow-hidden bg-nexus-grey-light/10">
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            )}
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              {post.tags && Array.isArray(post.tags) && post.tags.length > 0 && (
                <>
                  {post.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className="font-sans text-xs font-medium text-nexus-grey-medium uppercase"
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
              <time className="font-sans text-xs text-nexus-grey-medium">
                {formatDate(post.date)}
              </time>
            </div>
            <h2 className="font-pp-fragment text-3xl lg:text-4xl font-normal text-nexus-black mb-4 group-hover:text-nexus-orange transition-colors !leading-tight">
              {post.title}
            </h2>
            <p className="font-sans text-base lg:text-lg text-nexus-grey-medium leading-relaxed mb-6">
              {post.description}
            </p>
            <span className="font-sans text-sm font-medium text-nexus-black group-hover:text-nexus-orange transition-colors inline-flex items-center gap-2">
              Read more
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nexus-orange transition-all duration-500 [transition-timing-function:cubic-bezier(1,0.17,0.16,0.88)] group-hover:w-full z-10"></span>
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}
