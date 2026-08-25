"use client";

import React from "react";
import { siteConfig } from "@/config/site.config";
import { ParticleCanvas } from "./ParticleCanvas";
import { Button } from "@/components/ui/Button";
import {
  Terminal,
  ShieldCheck,
  Sparkles,
  Layers,
  Cpu,
  Activity,
  Zap,
} from "lucide-react";

export function HeroSection() {
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

        {/* Hero Interactive Monorepo Console Showcase Frame */}
        <div className="mt-14 sm:mt-20 max-w-5xl mx-auto text-left">
          <div className="rounded-3xl border border-black/10 dark:border-white/15 bg-gradient-to-b from-white to-neutral-50 dark:from-[#2d3943] dark:to-[#252f38] shadow-2xl shadow-[#364450]/10 dark:shadow-black/80 overflow-hidden">
            {/* Top Window Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 dark:border-white/10 bg-neutral-100/70 dark:bg-[#1f262d]/90 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-[#FFD849]" />
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs font-mono text-[#5e6d7a] dark:text-[#cbd5e1] hidden sm:inline-block">
                  nx-monorepo — apps/www & apps/cms
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-400 font-mono font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Operational • 4 Cartridges</span>
              </div>
            </div>

            {/* Showcase Workspace Grid */}
            <div className="p-6 sm:p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. Web Runtime */}
                <div className="p-5 rounded-2xl bg-[#f7f9fa] dark:bg-[#1f262d] border border-neutral-200 dark:border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#5e6d7a] dark:text-[#cbd5e1]">
                    <span className="flex items-center gap-1.5 font-bold text-[#2c2c2a] dark:text-white">
                      <Layers className="h-4 w-4 text-[#FFD849]" /> apps/www
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">200 OK</span>
                  </div>
                  <p className="text-xs text-[#5e6d7a] dark:text-[#cbd5e1]">
                    Customer Next.js 16 runtime with SSR, ISR, and localized routing.
                  </p>
                  <div className="text-[11px] font-mono text-[#5e6d7a] dark:text-[#cbd5e1] pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                    <span>Latency</span>
                    <span className="font-bold text-[#2c2c2a] dark:text-white">&lt; 14ms</span>
                  </div>
                </div>

                {/* 2. Founder Dashboard */}
                <div className="p-5 rounded-2xl bg-[#f7f9fa] dark:bg-[#1f262d] border border-neutral-200 dark:border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#5e6d7a] dark:text-[#cbd5e1]">
                    <span className="flex items-center gap-1.5 font-bold text-[#2c2c2a] dark:text-white">
                      <Cpu className="h-4 w-4 text-[#FFD849]" /> apps/cms
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#FFD849]/20 text-[#2c2c2a] dark:text-[#FFD849] text-[10px] font-bold">Authenticated</span>
                  </div>
                  <p className="text-xs text-[#5e6d7a] dark:text-[#cbd5e1]">
                    Operational control console with live curation and automated CRUD.
                  </p>
                  <div className="text-[11px] font-mono text-[#5e6d7a] dark:text-[#cbd5e1] pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                    <span>Queue Status</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">Idle (Synced)</span>
                  </div>
                </div>

                {/* 3. Uberedux State Engine */}
                <div className="p-5 rounded-2xl bg-[#f7f9fa] dark:bg-[#1f262d] border border-neutral-200 dark:border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#5e6d7a] dark:text-[#cbd5e1]">
                    <span className="flex items-center gap-1.5 font-bold text-[#2c2c2a] dark:text-white">
                      <Zap className="h-4 w-4 text-[#FFD849]" /> uberedux
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold">12 Slices</span>
                  </div>
                  <p className="text-xs text-[#5e6d7a] dark:text-[#cbd5e1]">
                    Deterministic global state engine and cross-tab cache replication.
                  </p>
                  <div className="text-[11px] font-mono text-[#5e6d7a] dark:text-[#cbd5e1] pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                    <span>Sync Mode</span>
                    <span className="font-bold text-[#2c2c2a] dark:text-white">Optimistic</span>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Terminal Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#1f262d] border border-neutral-700 text-xs font-mono text-neutral-200">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-[#FFD849] shrink-0" />
                  <span className="text-neutral-400">pnpm run dev</span>
                  <span className="text-neutral-500">→</span>
                  <span className="text-emerald-400">Ready in 280ms on port 2026</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-[#cbd5e1]">
                  <span className="flex items-center gap-1">
                    <Activity className="h-3.5 w-3.5 text-[#FFD849]" /> HMR Active
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Typecheck Clean
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
