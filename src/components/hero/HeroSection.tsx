"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { ParticleCanvas } from "./ParticleCanvas";
import { VideoModal } from "./VideoModal";
import { CustomCursorWrapper } from "@/components/ui/CustomCursor";
import { Button } from "@/components/ui/Button";
import { Play, Terminal, Code2, ShieldCheck } from "lucide-react";

export function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 sm:pt-36 pb-16 overflow-hidden">
      {/* Background Particle Mesh & Ambient Glow */}
      <ParticleCanvas />
      
      {/* Radiant radial gradient background blooms */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent dark:from-blue-600/15 dark:via-purple-600/10 rounded-full blur-3xl opacity-60" />
      <div className="pointer-events-none absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Feature Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.04] border border-black/10 text-xs text-neutral-700 dark:bg-white/[0.06] dark:border-white/[0.1] dark:text-neutral-300 backdrop-blur-md mb-8 hover:bg-black/[0.07] dark:hover:bg-white/[0.09] transition-colors cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-medium text-neutral-800 dark:text-neutral-200">Introducing Antigravity 2.0</span>
          <span className="text-neutral-400 dark:text-neutral-500">•</span>
          <span className="text-blue-600 dark:text-blue-400 font-medium">Read announcement →</span>
        </div>

        {/* Hero Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white max-w-4xl mx-auto leading-[1.08]">
          Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">liftoff</span> with the next-gen agent platform
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal">
          {siteConfig.hero.subheadline}
        </p>

        {/* Hero CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Button
            href={siteConfig.hero.primaryCta.href}
            variant="primary"
            size="lg"
            icon={siteConfig.hero.primaryCta.icon}
            className="shadow-lg shadow-blue-600/20 font-semibold"
          >
            {siteConfig.hero.primaryCta.label}
          </Button>

          <Button
            href={siteConfig.hero.secondaryCta.href}
            variant="secondary"
            size="lg"
            icon={siteConfig.hero.secondaryCta.icon}
          >
            {siteConfig.hero.secondaryCta.label}
          </Button>
        </div>

        {/* Hero Video / Product Showcase Frame */}
        <div className="mt-14 sm:mt-20 max-w-5xl mx-auto">
          <CustomCursorWrapper
            cursorLabel={siteConfig.hero.video.hoverText || "Play intro"}
            onClick={() => setIsVideoModalOpen(true)}
            className="border border-black/10 dark:border-white/15 bg-gradient-to-b from-white to-neutral-50 dark:from-[#181b22] dark:to-[#0f1116] shadow-2xl shadow-blue-500/5 dark:shadow-black/80"
          >
            <div className="relative aspect-[16/9] w-full flex flex-col justify-between p-6 sm:p-10 overflow-hidden group">
              {/* Subtle visual grid & ambient preview interior */}
              <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-60 dark:opacity-40" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Top Window Bar */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 hidden sm:inline-block">
                    antigravity-orchestrator — gemini-3.7-flash
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/5 dark:bg-white/5 dark:border-white/10 text-xs text-neutral-700 dark:text-neutral-300 font-mono">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
                  <span>Fleet: 4 active subagents</span>
                </div>
              </div>

              {/* Center Play Button Graphic & Preview Cards */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto py-8">
                <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-black/[0.05] dark:bg-white/10 backdrop-blur-xl border border-black/10 dark:border-white/20 text-neutral-900 dark:text-white shadow-2xl group-hover:scale-110 group-hover:bg-black/[0.08] dark:group-hover:bg-white/20 transition-all duration-300">
                  <Play className="h-8 w-8 sm:h-10 sm:w-10 fill-current ml-1" />
                </div>
                <h3 className="mt-5 text-base sm:text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                  {siteConfig.hero.video.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                  Click anywhere to watch the product overview (1:42)
                </p>
              </div>

              {/* Bottom Mini Status Bar */}
              <div className="relative z-10 hidden sm:flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/10 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                    <Terminal className="h-3.5 w-3.5" /> Workspace: goldlabelapps/microsite
                  </span>
                  <span className="flex items-center gap-1 text-purple-600 dark:text-purple-400">
                    <Code2 className="h-3.5 w-3.5" /> Branch: feat/agentic-liftoff
                  </span>
                </div>
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="h-3.5 w-3.5" /> Sandboxed Execution: Active
                </span>
              </div>
            </div>
          </CustomCursorWrapper>
        </div>
      </div>

      {/* Video Modal Lightbox */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={siteConfig.hero.video.youtubeEmbedUrl}
        title={siteConfig.hero.video.title}
      />
    </section>
  );
}
