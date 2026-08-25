"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { FeatureItem } from "@/config/types";
import {
  Terminal,
  Code2,
  Copy,
  Check,
  Zap,
  Sparkles,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function FeatureExplorer() {
  const items = siteConfig.features.items;
  const [activeItemId, setActiveItemId] = useState(items[0]?.id || "");
  const [copiedCode, setCopiedCode] = useState(false);

  const activeItem: FeatureItem =
    items.find((t) => t.id === activeItemId) || items[0];

  const handleCopyCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section id="features" className="py-24 sm:py-32 relative bg-white dark:bg-[#364450] overflow-hidden transition-colors duration-200">
      {/* Background glow lines */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FFD849]/10 dark:bg-[#FFD849]/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD849]/20 border border-[#FFD849]/40 text-xs font-bold text-[#2c2c2a] dark:text-[#FFD849] mb-4 backdrop-blur-md">
            <Zap className="h-3.5 w-3.5" />
            <span>Monorepo Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2c2c2a] dark:text-white tracking-tight">
            {siteConfig.features.sectionTitle || "The NX° Product Foundation"}
          </h2>
          {siteConfig.features.subtitle && (
            <p className="mt-4 text-base sm:text-lg text-[#5e6d7a] dark:text-[#cbd5e1]">
              {siteConfig.features.subtitle}
            </p>
          )}
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-100 border border-neutral-200 dark:bg-[#2d3943] dark:border-white/10 shadow-sm max-w-full">
            {items.map((tab) => {
              const isActive = tab.id === activeItemId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveItemId(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap cursor-pointer",
                    isActive
                      ? "bg-[#FFD849] text-[#2c2c2a] shadow-md"
                      : "text-[#5e6d7a] hover:text-[#2c2c2a] hover:bg-white/60 dark:text-[#cbd5e1] dark:hover:text-white dark:hover:bg-white/10"
                  )}
                >
                  <span>{tab.title}</span>
                  {tab.badge && (
                    <span
                      className={cn(
                        "text-[10px] px-2 py-0.5 rounded-full font-extrabold uppercase tracking-wider",
                        isActive ? "bg-[#2c2c2a]/15 text-[#2c2c2a]" : "bg-[#FFD849]/20 text-[#2c2c2a] dark:text-[#FFD849]"
                      )}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Preview Display */}
        {activeItem && (
          <div className="rounded-3xl border border-neutral-200 dark:border-white/15 bg-[#f7f9fa] dark:bg-[#2d3943]/90 backdrop-blur-2xl p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Description Column */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/5 dark:bg-white/5 dark:border-white/10 text-xs font-mono text-[#2c2c2a] dark:text-[#cbd5e1] mb-3">
                    <span>{activeItem.tag}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#2c2c2a] dark:text-white tracking-tight">
                    {activeItem.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#5e6d7a] dark:text-[#cbd5e1] leading-relaxed font-normal">
                  {activeItem.description}
                </p>

                {activeItem.cta && (
                  <div className="pt-2">
                    <a
                      href={activeItem.cta.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#2c2c2a] dark:text-[#FFD849] hover:underline transition-colors"
                    >
                      <span>{activeItem.cta.label}</span>
                      <span>→</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Right Interactive Code / Terminal Visual Column */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-neutral-800 bg-[#1f262d] shadow-2xl overflow-hidden">
                  {/* Terminal / Code Editor Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#181e24] border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#FC413D]" />
                      <div className="h-3 w-3 rounded-full bg-[#FFD849]" />
                      <div className="h-3 w-3 rounded-full bg-[#00B95C]" />
                      <span className="ml-2 text-xs font-mono text-neutral-300 flex items-center gap-1.5">
                        {activeItem.previewType === "terminal" ? (
                          <>
                            <Terminal className="h-3.5 w-3.5 text-[#FFD849]" />
                            <span>nx-console — zsh</span>
                          </>
                        ) : activeItem.codeSnippet ? (
                          <>
                            <Code2 className="h-3.5 w-3.5 text-emerald-400" />
                            <span>{activeItem.codeSnippet?.filename || "cartridge.ts"}</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="h-3.5 w-3.5 text-[#FFD849]" />
                            <span>goldlabel-design-system — theme tokens</span>
                          </>
                        )}
                      </span>
                    </div>

                    {activeItem.codeSnippet && (
                      <button
                        onClick={() => handleCopyCode(activeItem.codeSnippet!.code)}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-neutral-200 hover:text-white transition-colors text-xs font-mono cursor-pointer"
                      >
                        {copiedCode ? (
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                        <span>{copiedCode ? "Copied" : "Copy Code"}</span>
                      </button>
                    )}
                  </div>

                  {/* Code / Output Window */}
                  <div className="p-5 font-mono text-xs sm:text-sm text-neutral-200 overflow-x-auto leading-relaxed">
                    {activeItem.terminalSnippet && (
                      <div className="space-y-2">
                        {activeItem.terminalSnippet.commands.map((cmd, cIdx) => (
                          <div key={cIdx}>
                            {cmd.cmd && (
                              <div className="flex items-center justify-between gap-2 text-[#FFD849]">
                                <div className="flex items-center gap-2">
                                  <span className="text-neutral-400 select-none">$</span>
                                  <span>{cmd.cmd}</span>
                                </div>
                                <button
                                  onClick={() => handleCopyCode(cmd.cmd!)}
                                  className="p-1 rounded hover:bg-white/10 text-neutral-400 hover:text-white cursor-pointer"
                                  title="Copy command"
                                >
                                  <Copy className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            )}
                            {cmd.output && (
                              <div className="text-neutral-300 pl-4 font-mono">{cmd.output}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {activeItem.codeSnippet && (
                      <pre className="text-neutral-200 whitespace-pre font-mono">
                        <code>{activeItem.codeSnippet.code}</code>
                      </pre>
                    )}

                    {activeItem.previewType === "interactive-ui" && !activeItem.codeSnippet && !activeItem.terminalSnippet && (
                      <div className="p-4 space-y-3 font-sans">
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.06] border border-white/10">
                          <div className="flex items-center gap-2.5">
                            <div className="h-2 w-2 rounded-full bg-[#FFD849] animate-pulse" />
                            <span className="text-xs font-mono font-bold text-white">NX° Design Tokens</span>
                          </div>
                          <span className="text-[11px] font-mono text-[#2c2c2a] bg-[#FFD849] px-2 py-0.5 rounded-full font-bold">
                            Light & Dark Synced
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                            <div className="flex items-center gap-1.5 text-[#FFD849] font-mono mb-1">
                              <Sparkles className="h-3 w-3" />
                              <span className="font-bold">Primary Gold Accent</span>
                            </div>
                            <p className="text-[11px] text-neutral-300 font-mono">#FFD849 • High contrast</p>
                          </div>
                          <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                            <div className="flex items-center gap-1.5 text-slate-300 font-mono mb-1">
                              <Layers className="h-3 w-3" />
                              <span className="font-bold">Slate Paper Canvas</span>
                            </div>
                            <p className="text-[11px] text-neutral-300 font-mono">#364450 • Deep theme</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
