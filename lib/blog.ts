import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
  content?: string;
}

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const frontmatter = data as BlogPostFrontmatter & { category?: string };
      
      // Backward compatibility: convert category to tags if tags don't exist
      let tags: string[] = [];
      if (frontmatter.tags && Array.isArray(frontmatter.tags)) {
        tags = frontmatter.tags;
      } else if (frontmatter.category) {
        tags = [frontmatter.category];
      }

      return {
        slug,
        content,
        ...frontmatter,
        tags,
      } as BlogPost;
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    
    const frontmatter = data as BlogPostFrontmatter & { category?: string };
    
    // Backward compatibility: convert category to tags if tags don't exist
    let tags: string[] = [];
    if (frontmatter.tags && Array.isArray(frontmatter.tags)) {
      tags = frontmatter.tags;
    } else if (frontmatter.category) {
      tags = [frontmatter.category];
    }

    return {
      slug,
      content,
      ...frontmatter,
      tags,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((post) => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag) => tags.add(tag));
    }
  });
  return Array.from(tags).sort();
}

export function getPostsByTag(tag: string | null): BlogPost[] {
  const allPosts = getAllPosts();
  if (!tag) {
    return allPosts;
  }
  return allPosts.filter((post) => 
    post.tags && Array.isArray(post.tags) && post.tags.includes(tag)
  );
}

export function getFeaturedPost(): BlogPost | null {
  const posts = getAllPosts();
  const featured = posts.find((post) => post.featured === true);
  return featured || null;
}

export function getNonFeaturedPosts(): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter((post) => !post.featured);
}
