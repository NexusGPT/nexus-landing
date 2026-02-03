import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-nexus-white border border-nexus-grey-light/20 overflow-hidden relative transition-all duration-300"
    >
      <div className="relative w-full h-48 lg:h-64 overflow-hidden bg-nexus-grey-light/10">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
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
          <time className="font-sans text-xs text-nexus-grey-medium">
            {formatDate(post.date)}
          </time>
        </div>
        <h3 className="font-pp-fragment text-xl lg:text-2xl font-normal text-nexus-black mb-3 group-hover:text-nexus-orange transition-colors overflow-hidden text-ellipsis line-clamp-2 leading-[1.3]">
          {post.title}
        </h3>
        <p className="font-sans text-sm lg:text-base text-nexus-grey-medium leading-relaxed line-clamp-3">
          {post.description}
        </p>
      </div>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nexus-orange transition-all duration-500 [transition-timing-function:cubic-bezier(1,0.17,0.16,0.88)] group-hover:w-full z-10"></span>
    </Link>
  );
}
