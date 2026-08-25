"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { ParticleCanvas } from "./ParticleCanvas";
import { VideoModal } from "./VideoModal";
import { CustomCursorWrapper } from "@/components/ui/CustomCursor";
import { Button } from "@/components/ui/Button";
import { Play, Terminal, Code2, ShieldCheck, Sparkles } from "lucide-react";

export function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 sm:pt-36 pb-16 overflow-hidden">
      {/* Background Particle Mesh & Ambient Glow */}
      <ParticleCanvas />
      
      {/* Radiant radial gradient background blooms */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-[#FFD849]/15 via-[#364450]/10 to-transparent dark:from-[#FFD849]/15 dark:via-[#2c3741]/20 rounded-full blur-3xl opacity-70" />
      <div className="pointer-events-none absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-[#FFD849]/10 dark:bg-[#FFD849]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Feature Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.04] border border-black/10 text-xs text-[#2c2c2a] dark:bg-white/[0.08] dark:border-white/[0.15] dark:text-white backdrop-blur-md mb-8 hover:bg-black/[0.07] dark:hover:bg-white/[0.12] transition-colors cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-[#FFD849] animate-pulse" />
          <span className="font-semibold">Goldlabel</span>
          <span className="text-neutral-400 dark:text-neutral-400">•</span>
          <span className="text-[#2c2c2a] dark:text-[#FFD849] font-medium flex items-center gap-1">
            <Sparkles className="h-3 w-3 inline text-[#FFD849]" /> Announcing NX° 3.0 Platform
          </span>
        </div>

        {/* Hero Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#2c2c2a] dark:text-white max-w-4xl mx-auto leading-[1.08]">
          Build and operate web apps from one <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-[#FFD849] to-amber-600 dark:from-[#FFD849] dark:via-amber-300 dark:to-yellow-200">unified platform</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#5e6d7a] dark:text-[#cbd5e1] max-w-2xl mx-auto leading-relaxed font-normal">
          {siteConfig.hero.subheadline}
        </p>

        {/* Hero CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Button
            href={siteConfig.hero.primaryCta.href}
            variant="primary"
            size="lg"
            className="shadow-lg shadow-[#FFD849]/20 font-bold"
          >
            <span>{siteConfig.hero.primaryCta.label}</span>
          </Button>

          <Button
            href={siteConfig.hero.secondaryCta.href}
            variant="secondary"
            size="lg"
          >
            <span>{siteConfig.hero.secondaryCta.label}</span>
          </Button>
        </div>

        {/* Hero Video / Product Showcase Frame */}
        <div className="mt-14 sm:mt-20 max-w-5xl mx-auto">
          <CustomCursorWrapper
            cursorLabel={siteConfig.hero.video.hoverText || "Play demo"}
            onClick={() => setIsVideoModalOpen(true)}
            className="border border-black/10 dark:border-white/15 bg-gradient-to-b from-white to-neutral-50 dark:from-[#2d3943] dark:to-[#252f38] shadow-2xl shadow-[#364450]/10 dark:shadow-black/80"
          >
            <div className="relative aspect-[16/9] w-full flex flex-col justify-between p-6 sm:p-10 overflow-hidden group">
              {/* Subtle visual grid & ambient preview interior */}
              <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-60 dark:opacity-40" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD849]/10 dark:bg-[#FFD849]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#364450]/10 dark:bg-[#364450]/25 rounded-full blur-3xl pointer-events-none" />

              {/* Top Window Bar */}
              <div className="relative z-10 flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-[#FFD849]" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-mono text-[#5e6d7a] dark:text-[#cbd5e1] hidden sm:inline-block">
                    nx-monorepo — apps/www & apps/cms
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/5 dark:bg-white/10 dark:border-white/15 text-xs text-[#2c2c2a] dark:text-white font-mono">
                  <span className="h-2 w-2 rounded-full bg-[#FFD849] animate-ping" />
                  <span>Cartridges Active: 4 operational</span>
                </div>
              </div>

              {/* Center Play Button Graphic & Preview Cards */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto py-8">
                <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-[#FFD849] dark:bg-[#FFD849] backdrop-blur-xl border border-black/10 dark:border-white/20 text-[#2c2c2a] shadow-2xl group-hover:scale-110 group-hover:bg-[#f0c930] transition-all duration-300">
                  <Play className="h-8 w-8 sm:h-10 sm:w-10 fill-current ml-1" />
                </div>
                <h3 className="mt-5 text-base sm:text-xl font-bold text-[#2c2c2a] dark:text-white group-hover:text-amber-600 dark:group-hover:text-[#FFD849] transition-colors">
                  {siteConfig.hero.video.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#5e6d7a] dark:text-[#cbd5e1]">
                  Watch YouTube demo from @goldlabelApps (1:42)
                </p>
              </div>

              {/* Bottom Mini Status Bar */}
              <div className="relative z-10 hidden sm:flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/10 text-xs text-[#5e6d7a] dark:text-[#cbd5e1] font-mono">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-[#2c2c2a] dark:text-[#FFD849]">
                    <Terminal className="h-3.5 w-3.5" /> Workspace: goldlabelapps/nx-workspace
                  </span>
                  <span className="flex items-center gap-1 text-[#364450] dark:text-amber-300">
                    <Code2 className="h-3.5 w-3.5" /> Stack: Next.js 16 + React 19
                  </span>
                </div>
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="h-3.5 w-3.5" /> Uberedux State Sync: Connected
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
