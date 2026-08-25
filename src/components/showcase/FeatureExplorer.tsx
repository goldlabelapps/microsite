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
    <section id="features" className="py-24 sm:py-32 relative bg-[#090a0e] overflow-hidden">
      {/* Background glow lines */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4 backdrop-blur-md">
            <Zap className="h-3.5 w-3.5" />
            <span>Developer Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {siteConfig.features.sectionTitle || "Explore Products"}
          </h2>
          {siteConfig.features.subtitle && (
            <p className="mt-4 text-base sm:text-lg text-neutral-400">
              {siteConfig.features.subtitle}
            </p>
          )}
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#12141a] border border-white/10 shadow-xl max-w-full">
            {items.map((tab) => {
              const isActive = tab.id === activeItemId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveItemId(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap",
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-neutral-400 hover:text-neutral-200 hover:bg-white/5"
                  )}
                >
                  <span>{tab.title}</span>
                  {tab.badge && (
                    <span
                      className={cn(
                        "text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider",
                        isActive ? "bg-white/20 text-white" : "bg-blue-500/10 text-blue-400"
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
          <div className="rounded-3xl border border-white/10 bg-[#101217]/90 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Description Column */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 mb-3">
                    <span>{activeItem.tag}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {activeItem.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                  {activeItem.description}
                </p>

                {activeItem.cta && (
                  <div className="pt-2">
                    <a
                      href={activeItem.cta.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>{activeItem.cta.label}</span>
                      <span>→</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Right Interactive Code / Terminal Visual Column */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-white/15 bg-[#0b0c10] shadow-2xl overflow-hidden">
                  {/* Terminal / Code Editor Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#13151b] border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#FC413D]" />
                      <div className="h-3 w-3 rounded-full bg-[#FBBC04]" />
                      <div className="h-3 w-3 rounded-full bg-[#00B95C]" />
                      <span className="ml-2 text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                        {activeItem.previewType === "terminal" ? (
                          <>
                            <Terminal className="h-3.5 w-3.5 text-blue-400" />
                            <span>agy-cli — bash</span>
                          </>
                        ) : (
                          <>
                            <Code2 className="h-3.5 w-3.5 text-emerald-400" />
                            <span>{activeItem.codeSnippet?.filename || "agent.py — python"}</span>
                          </>
                        )}
                      </span>
                    </div>

                    {activeItem.codeSnippet && (
                      <button
                        onClick={() => handleCopyCode(activeItem.codeSnippet!.code)}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors text-xs font-mono"
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
                              <div className="flex items-center justify-between gap-2 text-emerald-400">
                                <div className="flex items-center gap-2">
                                  <span className="text-neutral-500 select-none">$</span>
                                  <span>{cmd.cmd}</span>
                                </div>
                                <button
                                  onClick={() => handleCopyCode(cmd.cmd!)}
                                  className="p-1 rounded hover:bg-white/10 text-neutral-400 hover:text-white"
                                  title="Copy command"
                                >
                                  <Copy className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            )}
                            {cmd.output && (
                              <div className="text-neutral-400 pl-4">{cmd.output}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {activeItem.codeSnippet && (
                      <pre className="text-neutral-300 whitespace-pre font-mono">
                        <code>{activeItem.codeSnippet.code}</code>
                      </pre>
                    )}

                    {activeItem.previewType === "interactive-ui" && !activeItem.codeSnippet && !activeItem.terminalSnippet && (
                      <div className="p-6 text-center text-neutral-400">
                        <p className="text-sm font-sans">{activeItem.description}</p>
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
