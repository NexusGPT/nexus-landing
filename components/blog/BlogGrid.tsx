"use client";

import { useState, useMemo } from "react";
import { BlogPost } from "@/lib/blog";
import BlogCard from "./BlogCard";
import { FadeInUp } from "@/components/ui";

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return posts;
    }

    const query = searchQuery.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        (post.tags && Array.isArray(post.tags) && post.tags.some(tag => tag.toLowerCase().includes(query)))
    );
  }, [posts, searchQuery]);

  return (
    <section className="w-full px-8 lg:px-20 py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Search Bar */}
        <FadeInUp>
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md px-4 py-3 border border-nexus-grey-light/20 font-sans text-sm text-nexus-black placeholder-nexus-grey-medium focus:outline-none focus:ring-2 focus:ring-nexus-black focus:border-transparent"
            />
          </div>
        </FadeInUp>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPosts.map((post, index) => (
              <FadeInUp key={post.slug} delay={0.05 + (index % 6) * 0.05}>
                <BlogCard post={post} />
              </FadeInUp>
            ))}
          </div>
        ) : (
          <FadeInUp delay={0.1}>
            <div className="text-center py-12">
              <p className="font-sans text-lg text-nexus-grey-medium">
                {searchQuery
                  ? "No articles found matching your search."
                  : "No articles found."}
              </p>
            </div>
          </FadeInUp>
        )}
      </div>
    </section>
  );
}
