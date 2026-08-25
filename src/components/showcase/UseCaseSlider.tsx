"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { UseCaseItem } from "@/config/types";
import { Card } from "@/components/ui/Card";
import { VideoModal } from "@/components/hero/VideoModal";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  CheckCircle2,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function UseCaseSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
  }>({
    isOpen: false,
    url: "",
    title: "",
  });

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

              {/* Right Video / Case Card Interactive Trigger */}
              <div className="lg:col-span-5">
                <div
                  onClick={() =>
                    setActiveVideoModal({
                      isOpen: true,
                      url: currentCase.youtubeEmbedUrl || "",
                      title: `${currentCase.role} Demo`,
                    })
                  }
                  className="group relative aspect-[4/3] rounded-2xl bg-neutral-100 dark:bg-[#1f262d] border border-neutral-200 dark:border-white/10 p-6 flex flex-col justify-between overflow-hidden cursor-pointer hover:border-[#FFD849]/50 transition-all duration-300 shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD849]/10 via-[#364450]/15 to-transparent pointer-events-none group-hover:scale-105 transition-transform duration-500" />

                  <div className="relative z-10 flex items-center justify-between text-xs text-[#5e6d7a] dark:text-[#cbd5e1] font-mono">
                    <span>YouTube Spotlight</span>
                    <span className="px-2 py-0.5 rounded bg-[#FFD849]/20 text-[#2c2c2a] dark:text-[#FFD849] font-bold">Video</span>
                  </div>

                  <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                    <div className="h-16 w-16 rounded-full bg-[#FFD849] flex items-center justify-center text-[#2c2c2a] group-hover:scale-110 group-hover:bg-[#f0c930] transition-all duration-300 shadow-lg">
                      <Play className="h-7 w-7 fill-current ml-0.5" />
                    </div>
                    <span className="mt-3 text-xs font-bold text-[#2c2c2a] dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#FFD849] transition-colors">
                      Watch workflow walkthrough
                    </span>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-xs text-[#5e6d7a] dark:text-[#cbd5e1] border-t border-black/5 dark:border-white/10 pt-3">
                    <span>{currentCase.role}</span>
                    <button className="text-[#2c2c2a] dark:text-[#FFD849] font-bold group-hover:underline cursor-pointer">
                      View Case →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={activeVideoModal.isOpen}
        onClose={() =>
          setActiveVideoModal({
            isOpen: false,
            url: "",
            title: "",
          })
        }
        videoUrl={activeVideoModal.url}
        title={activeVideoModal.title}
      />
    </section>
  );
}
