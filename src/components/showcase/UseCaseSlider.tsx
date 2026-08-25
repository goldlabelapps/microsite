"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CustomCursorWrapper } from "@/components/ui/CustomCursor";
import { VideoModal } from "@/components/hero/VideoModal";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  CheckCircle2,
  ExternalLink,
  Code,
  Building,
  Monitor,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function UseCaseSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalVideo, setActiveModalVideo] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
  }>({
    isOpen: false,
    url: "",
    title: "",
  });

  const items = siteConfig.useCases.items;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="use-cases" className="py-24 sm:py-32 relative bg-[#0d0e13] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-3 uppercase tracking-wider">
              <span>Developer Workflows</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              {siteConfig.useCases.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              {siteConfig.useCases.subtitle}
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
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

        {/* Carousel Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const isCurrent = idx === currentIndex;

            return (
              <Card
                key={item.id}
                variant="glow"
                className={cn(
                  "flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 border",
                  isCurrent
                    ? "border-blue-500/40 ring-1 ring-blue-500/30"
                    : "border-white/[0.08]"
                )}
              >
                <div>
                  {/* Thumbnail Video Card with Custom Cursor */}
                  <CustomCursorWrapper
                    cursorLabel="Watch case"
                    onClick={() =>
                      setActiveModalVideo({
                        isOpen: true,
                        url: item.youtubeEmbedUrl || "https://www.youtube.com/embed/SVCBA-pBgt0",
                        title: `${item.role} — Story`,
                      })
                    }
                    className="mb-6 aspect-video bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 relative flex items-center justify-center group"
                  >
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-tr opacity-50 group-hover:opacity-70 transition-opacity",
                        item.thumbnailGradient || "from-blue-600/20 to-purple-600/20"
                      )}
                    />
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 fill-white text-white ml-0.5" />
                    </div>
                  </CustomCursorWrapper>

                  {/* Role Header */}
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1.5">
                    {item.role}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {item.tagline}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Key feature bullet points */}
                  {item.keyFeatures && (
                    <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.08]">
                      {item.keyFeatures.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    onClick={() =>
                      setActiveModalVideo({
                        isOpen: true,
                        url: item.youtubeEmbedUrl || "https://www.youtube.com/embed/SVCBA-pBgt0",
                        title: `${item.role} — Demo`,
                      })
                    }
                    variant="outline"
                    size="sm"
                    className="w-full justify-center"
                    icon="Play"
                    iconPosition="left"
                  >
                    {item.cta.label}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Video Modal Lightbox */}
      <VideoModal
        isOpen={activeModalVideo.isOpen}
        onClose={() => setActiveModalVideo((prev) => ({ ...prev, isOpen: false }))}
        videoUrl={activeModalVideo.url}
        title={activeModalVideo.title}
      />
    </section>
  );
}
