"use client";

import { FadeInUp } from "@/components/ui";

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onTagChange: (tag: string | null) => void;
}

export default function TagFilter({
  tags,
  selectedTag,
  onTagChange,
}: TagFilterProps) {
  return (
    <FadeInUp className="w-full px-8 lg:px-20 py-8 border-b border-nexus-grey-light/20">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => onTagChange(null)}
            className={`font-sans text-sm font-medium px-4 py-2 transition-all flex items-center gap-2 ${
              selectedTag === null
                ? "bg-nexus-orange text-white"
                : "bg-neutral-50 text-nexus-black hover:bg-neutral-50/80"
            }`}
          >
            {selectedTag === null && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M10 3L4.5 8.5L2 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            All
          </button>
          {tags.map((tag, index) => (
            <button
              key={tag}
              onClick={() => onTagChange(tag)}
              className={`font-sans text-sm font-medium px-4 py-2 transition-all ${
                selectedTag === tag
                  ? "bg-nexus-orange text-white"
                  : "bg-neutral-50 text-nexus-black hover:bg-neutral-50/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </FadeInUp>
  );
}
