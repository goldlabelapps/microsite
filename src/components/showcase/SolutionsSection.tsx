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
    <section id="solutions" className="py-24 sm:py-32 relative bg-[#090a0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4 uppercase tracking-wider">
            <span>Built for Teams of All Sizes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {siteConfig.solutions.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
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
                    ? "bg-gradient-to-b from-[#181b24] to-[#101217] border-blue-500/40 shadow-2xl shadow-blue-500/10 ring-1 ring-blue-500/20"
                    : "bg-[#111318]/80 border-white/10"
                )}
              >
                <div>
                  {/* Top Badge & Tier Name */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      {card.tier}
                    </span>
                    {isFeatured && (
                      <span className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-semibold">
                        {card.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                    {card.heading}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-8">
                    {card.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3.5 pt-4 border-t border-white/[0.08] mb-10">
                    {card.features.map((feat: string, fIdx: number) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
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
