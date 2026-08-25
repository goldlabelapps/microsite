"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { siteConfig } from "@/config/site.config";
import { detectUserOS, DetectedOS } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
  Terminal,
  Copy,
  Check,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function DownloadBanner() {
  const [detectedOS] = useState<DetectedOS>(() => detectUserOS());
  const [copied, setCopied] = useState(false);

  const handleDownloadClick = () => {
    // Trigger celebratory liftoff particle confetti
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.85 },
      colors: ["#3186FF", "#FBBC04", "#FC413D", "#00B95C", "#749BFF"],
    });
  };

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.downloadSection.cliQuickInstall.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section id="download" className="py-24 sm:py-36 relative bg-[#07080b] overflow-hidden">
      {/* Radiant ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-purple-600/10 rounded-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Curved Banner Container */}
        <div className="rounded-3xl sm:rounded-[40px] bg-gradient-to-b from-[#151821] via-[#101218] to-[#0a0b0e] border border-white/15 p-8 sm:p-14 lg:p-20 shadow-2xl relative overflow-hidden text-center">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-6 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Ready for Liftoff</span>
          </div>

          {/* Banner Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            {siteConfig.downloadSection.title}
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.downloadSection.subtitle}
          </p>

          {/* Platform Download Cards Grid */}
          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {siteConfig.downloadSection.platforms.map((platform) => {
              const isRecommended =
                (detectedOS === "macos-silicon" && platform.os === "macos-silicon") ||
                (detectedOS === "macos-intel" && platform.os === "macos-intel") ||
                (detectedOS === "windows" && platform.os === "windows") ||
                (detectedOS === "linux" && platform.os === "linux");

              return (
                <div
                  key={platform.os}
                  className={cn(
                    "flex flex-col justify-between p-5 sm:p-6 rounded-2xl transition-all duration-200 text-left border relative",
                    isRecommended
                      ? "bg-gradient-to-b from-[#1b1f2b] to-[#12141c] border-blue-500/50 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500/30"
                      : "bg-[#13151b]/80 border-white/[0.08] hover:border-white/20 hover:bg-[#161820]"
                  )}
                >
                  {isRecommended && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-blue-600 text-[10px] font-semibold text-white uppercase tracking-wider shadow-sm">
                      Recommended
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-neutral-400">{platform.version}</span>
                      {platform.fileSize && (
                        <span className="text-[11px] text-neutral-500">{platform.fileSize}</span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{platform.name}</h4>
                    {platform.chipDetail && (
                      <p className="text-[11px] text-neutral-400 line-clamp-2 mb-6">
                        {platform.chipDetail}
                      </p>
                    )}
                  </div>

                  <Button
                    href={platform.downloadUrl}
                    onClick={handleDownloadClick}
                    variant={isRecommended ? "primary" : "secondary"}
                    size="sm"
                    className="w-full justify-center text-xs"
                    icon="Download"
                  >
                    Download
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Quick CLI Shell Command Box */}
          <div className="mt-12 sm:mt-16 max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm text-neutral-400 mb-3">
              {siteConfig.downloadSection.cliQuickInstall.label}
            </p>
            <div className="flex items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-[#090b0e] border border-neutral-800 text-left font-mono text-xs sm:text-sm text-neutral-200 shadow-inner overflow-hidden">
              <div className="flex items-center gap-2 overflow-x-auto select-all">
                <Terminal className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="text-neutral-300">{siteConfig.downloadSection.cliQuickInstall.command}</span>
              </div>
              <button
                onClick={handleCopyCommand}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors shrink-0 text-xs font-sans font-medium"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Verified Guarantee Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-neutral-400">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Cryptographically signed binaries • Zero telemetric data lock-in</span>
          </div>
        </div>
      </div>
    </section>
  );
}
