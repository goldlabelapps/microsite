"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { ChevronLeft, ChevronRight, ArrowUpRight, Calendar, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";

export function BlogSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const posts = siteConfig.blogs.posts;
  const itemsPerPage = 3;
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const visiblePosts = posts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Architecture":
        return "bg-[#FFD849]/20 text-[#2c2c2a] border-[#FFD849]/40 dark:text-[#FFD849]";
      case "Enterprise":
        return "bg-slate-100 text-slate-800 border-slate-300 dark:bg-white/10 dark:text-slate-200 dark:border-white/20";
      case "Product":
        return "bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/30";
      default:
        return "bg-neutral-100 text-neutral-800 border-neutral-200 dark:bg-white/10 dark:text-neutral-200";
    }
  };

  return (
    <section id="blogs" className="py-24 sm:py-32 relative bg-[#f7f9fa] dark:bg-[#2c3741] border-t border-black/[0.06] dark:border-white/[0.1] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD849]/20 border border-[#FFD849]/40 text-xs font-bold text-[#2c2c2a] dark:text-[#FFD849] mb-3 uppercase tracking-wider">
              <Newspaper className="h-3.5 w-3.5" />
              <span>Articles & Updates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2c2c2a] dark:text-white tracking-tight leading-tight">
              {siteConfig.blogs.title}
            </h2>
            {siteConfig.blogs.subtitle && (
              <p className="mt-3 text-sm sm:text-base text-[#5e6d7a] dark:text-[#cbd5e1] max-w-xl">
                {siteConfig.blogs.subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 self-start md:self-end">
            <a
              href={siteConfig.blogs.viewAllCta.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs sm:text-sm font-bold text-[#2c2c2a] dark:text-[#FFD849] hover:underline transition-colors mr-2"
            >
              {siteConfig.blogs.viewAllCta.label} →
            </a>
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.04] border border-black/10 text-neutral-700 hover:text-neutral-900 hover:bg-black/[0.08] dark:bg-white/10 dark:border-white/15 dark:text-white dark:hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Previous blog posts"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.04] border border-black/10 text-neutral-700 hover:text-neutral-900 hover:bg-black/[0.08] dark:bg-white/10 dark:border-white/15 dark:text-white dark:hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Next blog posts"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="block group"
            >
              <Card
                variant="default"
                className="h-full flex flex-col justify-between p-6 sm:p-7 bg-white border-neutral-200 hover:border-[#FFD849] shadow-sm dark:bg-[#2d3943] dark:border-white/[0.1] dark:hover:border-[#FFD849]/50 transition-all duration-200"
              >
                <div>
                  {/* Meta Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={cn(
                        "px-2.5 py-0.5 rounded-full text-[11px] font-bold border",
                        getCategoryColor(post.category)
                      )}
                    >
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[#5e6d7a] dark:text-[#cbd5e1] font-mono">
                      <Calendar className="h-3.5 w-3.5 text-neutral-400" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#2c2c2a] dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#FFD849] transition-colors line-clamp-2 mb-3">
                    {post.title}
                  </h3>

                  {/* Summary */}
                  {post.summary && (
                    <p className="text-xs sm:text-sm text-[#5e6d7a] dark:text-[#cbd5e1] line-clamp-3 leading-relaxed mb-6">
                      {post.summary}
                    </p>
                  )}
                </div>

                {/* Read Link */}
                <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.1] flex items-center justify-between text-xs font-bold text-[#2c2c2a] dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#FFD849]">
                  <span>Read article</span>
                  <ArrowUpRight className="h-4 w-4 text-neutral-400 group-hover:text-amber-600 dark:group-hover:text-[#FFD849] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
