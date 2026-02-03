"use client";

import { useState, useMemo } from "react";
import { BlogPost } from "@/lib/blog";
import { TagFilter, FeaturedArticle, BlogGrid } from "@/components/blog";

interface BlogContentProps {
  allPosts: BlogPost[];
  tags: string[];
  featuredPost: BlogPost | null;
}

export default function BlogContent({
  allPosts,
  tags,
  featuredPost,
}: BlogContentProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    // Filter out featured posts first
    const nonFeaturedPosts = allPosts.filter((post) => !post.featured);
    
    // Then filter by tag if one is selected
    if (!selectedTag) {
      return nonFeaturedPosts;
    }
    
    return nonFeaturedPosts.filter((post) => 
      post.tags && Array.isArray(post.tags) && post.tags.includes(selectedTag)
    );
  }, [selectedTag, allPosts]);

  return (
    <>
      <TagFilter
        tags={tags}
        selectedTag={selectedTag}
        onTagChange={setSelectedTag}
      />
      {featuredPost && <FeaturedArticle post={featuredPost} />}
      <BlogGrid posts={filteredPosts} />
    </>
  );
}
