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
    <section id="use-cases" className="py-24 sm:py-32 relative bg-[#07080b] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 mb-3 uppercase tracking-wider">
              <span>Tailored Workflows</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {siteConfig.useCases.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl">
              {siteConfig.useCases.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Previous use case"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
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
                "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border",
                idx === activeIndex
                  ? "bg-white text-black border-white shadow-lg"
                  : "bg-white/5 text-neutral-400 border-white/10 hover:border-white/20 hover:text-neutral-200"
              )}
            >
              <span>{item.role}</span>
            </button>
          ))}
        </div>

        {/* Highlighted Use Case Bento Card */}
        {currentCase && (
          <Card variant="glow" className="p-8 sm:p-12 lg:p-14 bg-[#111319]/90 backdrop-blur-xl border-white/15">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono">
                  <span>{currentCase.role}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                  {currentCase.tagline}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {currentCase.description}
                </p>

                {/* Workflow bullet highlights */}
                {currentCase.keyFeatures && (
                  <div className="space-y-3 pt-2">
                    {currentCase.keyFeatures.map((feat: string, fIdx: number) => (
                      <div key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
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
                  className="group relative aspect-[4/3] rounded-2xl bg-[#161822] border border-white/10 p-6 flex flex-col justify-between overflow-hidden cursor-pointer hover:border-white/25 transition-all duration-300 shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-transparent pointer-events-none group-hover:scale-105 transition-transform duration-500" />

                  <div className="relative z-10 flex items-center justify-between text-xs text-neutral-400 font-mono">
                    <span>Workflow Spotlight</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-white">Video</span>
                  </div>

                  <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                    <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-xl">
                      <Play className="h-7 w-7 fill-white text-white ml-0.5" />
                    </div>
                    <span className="mt-3 text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">
                      Watch case walkthrough
                    </span>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-xs text-neutral-400 border-t border-white/10 pt-3">
                    <span>{currentCase.role}</span>
                    <button className="text-blue-400 font-medium group-hover:underline">
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
