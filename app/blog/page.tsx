import type { Metadata } from "next";
import { getAllPosts, getAllTags, getFeaturedPost } from "@/lib/blog";
import { BlogHero } from "@/components/blog";
import { CTASection } from "@/components/sections";
import { createPageMetadata } from "@/lib/metadata";
import BlogContent from "./BlogContent";

export const metadata: Metadata = createPageMetadata({
  title: "Blog | Nexus",
  description:
    "Insights on AI transformation, enterprise solutions, and the future of work. Learn how businesses are leveraging AI to transform their workflows.",
  path: "/blog",
  keywords: ["AI", "enterprise", "blog", "artificial intelligence", "workflow automation"],
});

export default function BlogPage() {
  const allPosts = getAllPosts();
  const tags = getAllTags();
  const featuredPost = getFeaturedPost();

  return (
    <div className="min-h-screen bg-nexus-white">
      <BlogHero />
      <BlogContent
        allPosts={allPosts}
        tags={tags}
        featuredPost={featuredPost}
      />
      <CTASection />
    </div>
  );
}
