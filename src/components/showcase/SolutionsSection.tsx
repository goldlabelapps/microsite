"use client";

import React from "react";
import { siteConfig } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check, Sparkles, Building, Code } from "lucide-react";
import { cn } from "@/lib/utils";

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 sm:py-32 relative bg-[#090a0e] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4 uppercase tracking-wider">
            <span>Solutions & Tiers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {siteConfig.solutions.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            {siteConfig.solutions.subtitle}
          </p>
        </div>

        {/* Pricing / Solution Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {siteConfig.solutions.cards.map((card) => {
            const isHighlighted = card.highlighted;

            return (
              <Card
                key={card.id}
                variant={isHighlighted ? "glow" : "default"}
                className={cn(
                  "p-8 sm:p-10 flex flex-col justify-between rounded-3xl relative transition-all duration-300 border",
                  isHighlighted
                    ? "border-blue-500/40 bg-gradient-to-b from-[#171a22] to-[#0f1117] ring-1 ring-blue-500/20"
                    : "border-white/[0.08] bg-[#121419]"
                )}
              >
                <div>
                  {/* Top Badge & Tier */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/25">
                      {card.badge}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      {card.tier}
                    </span>
                  </div>

                  {/* Heading & Subtext */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {card.heading}
                  </h3>
                  <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Included features list */}
                  <div className="space-y-3 pt-6 border-t border-white/[0.08] mb-8">
                    <div className="text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                      What&apos;s included:
                    </div>
                    {card.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 shrink-0">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Action */}
                <Button
                  href={card.cta.href}
                  variant={card.cta.variant === "primary" ? "primary" : "secondary"}
                  size="lg"
                  className="w-full justify-center font-semibold"
                  icon="ArrowRight"
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
