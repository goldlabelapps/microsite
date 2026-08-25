"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { FeatureItem } from "@/config/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Terminal,
  Code2,
  Layers,
  Cpu,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
  Bot,
  Sparkles,
  GitBranch,
  PlayCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function FeatureExplorer() {
  const [activeFeatureId, setActiveFeatureId] = useState(siteConfig.features.items[0].id);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const activeFeature =
    siteConfig.features.items.find((f) => f.id === activeFeatureId) ||
    siteConfig.features.items[0];

  const handleCopyCode = async (code: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <section id="features" className="py-24 sm:py-32 relative bg-[#090a0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4 uppercase tracking-wider">
            <span>{siteConfig.features.sectionTitle || "Product Toolchain"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Built for developers for the agent-first era
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            {siteConfig.features.subtitle}
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {siteConfig.features.items.map((item) => {
            const isActive = item.id === activeFeatureId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveFeatureId(item.id)}
                className={cn(
                  "flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border",
                  isActive
                    ? "bg-white text-neutral-950 border-white shadow-lg shadow-white/10 scale-105"
                    : "bg-neutral-900/60 text-neutral-400 border-white/[0.08] hover:text-white hover:bg-neutral-800"
                )}
              >
                {item.id === "antigravity-2" && <Layers className="h-4 w-4" />}
                {item.id === "antigravity-cli" && <Terminal className="h-4 w-4" />}
                {item.id === "antigravity-ide" && <Code2 className="h-4 w-4" />}
                {item.id === "antigravity-sdk" && <Cpu className="h-4 w-4" />}
                <span>{item.title}</span>
                {item.badge && (
                  <span
                    className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded-full",
                      isActive
                        ? "bg-neutral-200 text-neutral-900"
                        : "bg-blue-500/20 text-blue-300"
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Feature Detail Card (Bento Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-gradient-to-b from-[#14161c] to-[#0d0e12] border border-white/10 p-6 sm:p-10 shadow-2xl">
          {/* Left Column: Description & CTAs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
              <span>{activeFeature.tag}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              {activeFeature.title}
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              {activeFeature.description}
            </p>

            {activeFeature.cta && (
              <div className="pt-2">
                <Button
                  href={activeFeature.cta.href}
                  variant="primary"
                  size="md"
                  icon="ArrowRight"
                >
                  {activeFeature.cta.label}
                </Button>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Mockup / Terminal / Code */}
          <div className="lg:col-span-7">
            {activeFeature.previewType === "terminal" && activeFeature.terminalSnippet && (
              <div className="rounded-2xl bg-[#090b0e] border border-neutral-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
                {/* Terminal topbar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#11141a] border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs text-neutral-400">zsh — Antigravity CLI</span>
                  </div>
                  <button
                    onClick={() =>
                      handleCopyCode(
                        activeFeature.terminalSnippet?.commands.map((c) => c.cmd || c.output).join("\n") || "",
                        1
                      )
                    }
                    className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    {copiedIndex === 1 ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedIndex === 1 ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                {/* Terminal Body */}
                <div className="p-5 sm:p-6 space-y-3 overflow-x-auto text-neutral-300">
                  {activeFeature.terminalSnippet.commands.map((step, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      {step.cmd && (
                        <div className="flex items-start gap-2 text-emerald-400">
                          <span className="select-none text-neutral-500">{activeFeature.terminalSnippet?.prompt || "$"}</span>
                          <span className="text-white font-medium">{step.cmd}</span>
                        </div>
                      )}
                      {step.output && (
                        <div className="text-neutral-400 pl-4 border-l-2 border-blue-500/30 text-xs sm:text-sm">
                          {step.output}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeFeature.previewType === "code" && activeFeature.codeSnippet && (
              <div className="rounded-2xl bg-[#090b0e] border border-neutral-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
                <div className="flex items-center justify-between px-4 py-3 bg-[#11141a] border-b border-neutral-800">
                  <div className="flex items-center gap-2 text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    <span>{activeFeature.codeSnippet.filename || "agent.py"}</span>
                  </div>
                  <button
                    onClick={() => handleCopyCode(activeFeature.codeSnippet?.code || "", 2)}
                    className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                  >
                    {copiedIndex === 2 ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedIndex === 2 ? "Copied" : "Copy code"}</span>
                  </button>
                </div>
                <pre className="p-5 sm:p-6 overflow-x-auto text-neutral-200 leading-relaxed font-mono">
                  <code>{activeFeature.codeSnippet.code}</code>
                </pre>
              </div>
            )}

            {activeFeature.previewType === "interactive-ui" && (
              <div className="rounded-2xl bg-[#0e1015] border border-white/10 p-5 sm:p-7 shadow-2xl space-y-4">
                {/* Simulated App Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
                      ✦
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Project: E-Commerce Cloud Migration</div>
                      <div className="text-[11px] text-neutral-400">3 Workspaces • 8 Parallel Sessions</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
                    Healthy (All agents synced)
                  </span>
                </div>

                {/* Subagents Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-semibold text-neutral-200">Subagent: DB Migration</span>
                      <span className="text-[10px] text-blue-400 font-mono">step 5/7</span>
                    </div>
                    <p className="text-[11px] text-neutral-400">
                      Generating Prisma schema & PostgreSQL foreign keys
                    </p>
                    <div className="mt-3 h-1.5 w-full rounded-full bg-neutral-800 overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full w-3/4" />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/40 transition-colors">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-semibold text-neutral-200">Subagent: Security Audit</span>
                      <span className="text-[10px] text-purple-400 font-mono">running</span>
                    </div>
                    <p className="text-[11px] text-neutral-400">
                      Verifying JWT claims and role permission middleware
                    </p>
                    <div className="mt-3 h-1.5 w-full rounded-full bg-neutral-800 overflow-hidden">
                      <div className="h-full bg-purple-500 rounded-full w-1/2 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Bottom Verification Status */}
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.08] text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5 text-neutral-300">
                    <Sparkles className="h-3.5 w-3.5 text-amber-400" /> Auto-Verification: 142/142 unit tests passed
                  </span>
                  <span className="font-mono text-[11px] text-neutral-500">Autonomous loop: ACTIVE</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
