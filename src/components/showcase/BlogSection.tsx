"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { ChevronLeft, ChevronRight, ArrowUpRight, Calendar, Tag } from "lucide-react";
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
      case "Product":
        return "bg-blue-500/15 text-blue-400 border-blue-500/25";
      case "Enterprise":
        return "bg-purple-500/15 text-purple-400 border-purple-500/25";
      case "Model":
        return "bg-amber-500/15 text-amber-400 border-amber-500/25";
      default:
        return "bg-neutral-800 text-neutral-300 border-neutral-700";
    }
  };

  return (
    <section id="blogs" className="py-24 sm:py-32 relative bg-[#0c0d12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3 uppercase tracking-wider">
              <span>Articles & Updates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {siteConfig.blogs.title}
            </h2>
            {siteConfig.blogs.subtitle && (
              <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl">
                {siteConfig.blogs.subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 self-start md:self-end">
            <a
              href={siteConfig.blogs.viewAllCta.href}
              className="text-xs sm:text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors mr-2"
            >
              {siteConfig.blogs.viewAllCta.label} →
            </a>
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Previous blog posts"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Next blog posts"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map((post) => (
            <Card
              key={post.id}
              variant="default"
              className="flex flex-col justify-between p-6 sm:p-7 group hover:border-white/20 transition-all duration-200"
            >
              <div>
                {/* Meta Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={cn(
                      "px-2.5 py-0.5 rounded-full text-[11px] font-medium border",
                      getCategoryColor(post.category)
                    )}
                  >
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                    <Calendar className="h-3.5 w-3.5 text-neutral-500" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 mb-3">
                  {post.title}
                </h3>

                {/* Summary */}
                {post.summary && (
                  <p className="text-xs sm:text-sm text-neutral-400 line-clamp-3 leading-relaxed mb-6">
                    {post.summary}
                  </p>
                )}
              </div>

              {/* Read Link */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-semibold text-neutral-300 group-hover:text-white">
                <span>Read blog</span>
                <ArrowUpRight className="h-4 w-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
