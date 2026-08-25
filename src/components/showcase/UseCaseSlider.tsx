"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { UseCaseItem } from "@/config/types";
import { Card } from "@/components/ui/Card";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Users,
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function UseCaseSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const useCases: UseCaseItem[] = siteConfig.useCases.items;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? useCases.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === useCases.length - 1 ? 0 : prev + 1));
  };

  const currentCase = useCases[activeIndex];

  return (
    <section id="use-cases" className="py-24 sm:py-32 relative bg-[#f7f9fa] dark:bg-[#2c3741] overflow-hidden transition-colors duration-200">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#FFD849]/10 dark:bg-[#FFD849]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD849]/20 border border-[#FFD849]/40 text-xs font-bold text-[#2c2c2a] dark:text-[#FFD849] mb-3 uppercase tracking-wider">
              <Users className="h-3.5 w-3.5" />
              <span>Tailored Workflows</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2c2c2a] dark:text-white tracking-tight leading-tight">
              {siteConfig.useCases.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5e6d7a] dark:text-[#cbd5e1] max-w-xl">
              {siteConfig.useCases.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-black/[0.04] border border-black/10 text-neutral-700 hover:text-neutral-900 hover:bg-black/[0.08] dark:bg-white/10 dark:border-white/15 dark:text-white dark:hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Previous use case"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-black/[0.04] border border-black/10 text-neutral-700 hover:text-neutral-900 hover:bg-black/[0.08] dark:bg-white/10 dark:border-white/15 dark:text-white dark:hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Next use case"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Tabs Strip */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {useCases.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border cursor-pointer",
                idx === activeIndex
                  ? "bg-[#FFD849] text-[#2c2c2a] border-[#FFD849] shadow-md dark:bg-[#FFD849] dark:text-[#2c2c2a]"
                  : "bg-black/[0.03] text-[#5e6d7a] border-black/5 hover:border-black/15 hover:text-[#2c2c2a] dark:bg-white/5 dark:text-[#cbd5e1] dark:border-white/10 dark:hover:text-white"
              )}
            >
              <span>{item.role}</span>
            </button>
          ))}
        </div>

        {/* Highlighted Use Case Bento Card */}
        {currentCase && (
          <Card variant="glow" className="p-8 sm:p-12 lg:p-14 bg-white dark:bg-[#2d3943] backdrop-blur-xl border-neutral-200 dark:border-white/15 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD849]/20 text-[#2c2c2a] dark:text-[#FFD849] text-xs font-mono font-bold">
                  <span>{currentCase.role}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold text-[#2c2c2a] dark:text-white tracking-tight leading-tight">
                  {currentCase.tagline}
                </h3>

                <p className="text-sm sm:text-base text-[#5e6d7a] dark:text-[#cbd5e1] leading-relaxed">
                  {currentCase.description}
                </p>

                {/* Workflow bullet highlights */}
                {currentCase.keyFeatures && (
                  <div className="space-y-3 pt-2">
                    {currentCase.keyFeatures.map((feat: string, fIdx: number) => (
                      <div key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-[#2c2c2a] dark:text-neutral-200">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Workflow Architecture Panel */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-neutral-100 dark:bg-[#1f262d] border border-neutral-200 dark:border-white/10 p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-lg space-y-6">
                  <div className="flex items-center justify-between text-xs text-[#5e6d7a] dark:text-[#cbd5e1] font-mono">
                    <span className="flex items-center gap-1.5 font-bold text-[#2c2c2a] dark:text-white">
                      <Layers className="h-4 w-4 text-[#FFD849]" /> Platform Blueprint
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#FFD849]/20 text-[#2c2c2a] dark:text-[#FFD849] font-bold">Active</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#252f38] border border-neutral-200 dark:border-white/5 space-y-1">
                      <div className="text-xs font-bold text-[#2c2c2a] dark:text-white flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-[#FFD849]" /> Targeted Architecture
                      </div>
                      <p className="text-[11px] text-[#5e6d7a] dark:text-[#cbd5e1] leading-relaxed">
                        Optimized workspace patterns configured for {currentCase.role}.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#252f38] border border-neutral-200 dark:border-white/5 space-y-1">
                      <div className="text-xs font-bold text-[#2c2c2a] dark:text-white flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> Operational Guardrails
                      </div>
                      <p className="text-[11px] text-[#5e6d7a] dark:text-[#cbd5e1] leading-relaxed">
                        Deterministic state synchronization and shared component libraries.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#5e6d7a] dark:text-[#cbd5e1]">{currentCase.role}</span>
                    <a
                      href={currentCase.cta?.href || "https://goldlabel.pro/docs"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#2c2c2a] dark:text-[#FFD849] hover:underline"
                    >
                      <span>{currentCase.cta?.label || "Explore Workflow"}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
}
