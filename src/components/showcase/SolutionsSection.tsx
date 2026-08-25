"use client";

import React from "react";
import { siteConfig } from "@/config/site.config";
import { SolutionCard } from "@/config/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 sm:py-32 relative bg-white dark:bg-[#090a0e] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider">
            <span>Built for Teams of All Sizes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
            {siteConfig.solutions.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            {siteConfig.solutions.subtitle}
          </p>
        </div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {siteConfig.solutions.cards.map((card: SolutionCard) => {
            const isFeatured = card.highlighted;

            return (
              <Card
                key={card.id}
                variant={isFeatured ? "glow" : "default"}
                className={cn(
                  "p-8 sm:p-10 flex flex-col justify-between relative",
                  isFeatured
                    ? "bg-gradient-to-b from-blue-50/60 via-white to-white border-blue-500/30 shadow-xl shadow-blue-500/5 ring-1 ring-blue-500/20 dark:from-[#181b24] dark:to-[#101217] dark:border-blue-500/40 dark:shadow-2xl dark:shadow-blue-500/10 dark:ring-blue-500/20"
                    : "bg-[#f8f9fa] border-neutral-200 dark:bg-[#111318]/80 dark:border-white/10"
                )}
              >
                <div>
                  {/* Top Badge & Tier Name */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                      {card.tier}
                    </span>
                    {isFeatured && (
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:bg-blue-600/20 dark:border-blue-500/30 dark:text-blue-400 text-xs font-semibold">
                        {card.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2">
                    {card.heading}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                    {card.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3.5 pt-4 border-t border-black/[0.06] dark:border-white/[0.08] mb-10">
                    {card.features.map((feat: string, fIdx: number) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                        <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <Button
                  href={card.cta.href}
                  variant={card.cta.variant || (isFeatured ? "primary" : "secondary")}
                  size="lg"
                  className="w-full justify-center text-sm font-semibold"
                  icon={isFeatured ? "Download" : "ArrowRight"}
                >
                  {card.cta.label}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
