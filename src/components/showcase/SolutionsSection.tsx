"use client";

import React from "react";
import { siteConfig } from "@/config/site.config";
import { SolutionCard } from "@/config/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check, ShieldCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 sm:py-32 relative bg-white dark:bg-[#364450] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFD849]/20 border border-[#FFD849]/40 text-xs font-bold text-[#2c2c2a] dark:text-[#FFD849] mb-4 uppercase tracking-wider">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Built for Teams of All Sizes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2c2c2a] dark:text-white tracking-tight">
            {siteConfig.solutions.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5e6d7a] dark:text-[#cbd5e1]">
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
                    ? "bg-white border-[#FFD849]/50 shadow-xl ring-1 ring-[#FFD849]/30 dark:bg-[#2d3943] dark:border-[#FFD849]/40 dark:shadow-2xl"
                    : "bg-[#f7f9fa] border-neutral-200 dark:bg-[#2c3741] dark:border-white/10"
                )}
              >
                <div>
                  {/* Top Badge & Tier Name */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono text-[#5e6d7a] dark:text-[#cbd5e1] uppercase tracking-wider font-bold">
                      {card.tier}
                    </span>
                    {isFeatured && (
                      <span className="px-3 py-1 rounded-full bg-[#FFD849] text-[#2c2c2a] text-xs font-extrabold shadow-sm">
                        {card.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#2c2c2a] dark:text-white tracking-tight mb-2">
                    {card.heading}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5e6d7a] dark:text-[#cbd5e1] leading-relaxed mb-8">
                    {card.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3.5 pt-4 border-t border-black/[0.06] dark:border-white/[0.1] mb-10">
                    {card.features.map((feat: string, fIdx: number) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#2c2c2a] dark:text-neutral-200">
                        <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
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
                  className="w-full justify-center text-sm font-bold shadow-sm"
                >
                  <span>{card.cta.label}</span>
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
