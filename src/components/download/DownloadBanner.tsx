"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/Button";
import {
  Terminal,
  Copy,
  Check,
  Sparkles,
  ShieldCheck,
  Mail,
  CheckCircle2,
} from "lucide-react";

export function DownloadBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Trigger celebratory Goldlabel particle confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.85 },
      colors: ["#FFD849", "#364450", "#f0c930", "#e5c03e", "#2c3741"],
    });

    setSubmitted(true);
  };

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.authCta.cliQuickInstall.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section id="signup" className="py-24 sm:py-36 relative bg-white dark:bg-[#364450] overflow-hidden transition-colors duration-200">
      {/* Radiant ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-gradient-to-tr from-[#FFD849]/15 via-[#364450]/10 to-[#FFD849]/15 dark:from-[#FFD849]/15 dark:via-[#2c3741]/30 rounded-full blur-3xl opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Curved Banner Container */}
        <div className="rounded-3xl sm:rounded-[40px] bg-gradient-to-b from-[#f7f9fa] via-white to-[#f7f9fa] dark:from-[#2d3943] dark:via-[#252f38] dark:to-[#1f262d] border border-neutral-200 dark:border-white/15 p-8 sm:p-14 lg:p-20 shadow-xl relative overflow-hidden text-center">
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#0000000a_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFD849]/20 border border-[#FFD849]/40 text-xs font-bold text-[#2c2c2a] dark:text-[#FFD849] mb-6 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#e5c03e] dark:text-[#FFD849]" />
            <span>{siteConfig.authCta.badge}</span>
          </div>

          {/* Banner Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2c2c2a] dark:text-white tracking-tight max-w-3xl mx-auto leading-tight">
            {siteConfig.authCta.title}
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#5e6d7a] dark:text-[#cbd5e1] max-w-2xl mx-auto leading-relaxed">
            {siteConfig.authCta.subtitle}
          </p>

          {/* Interactive Sign Up Email Form */}
          <div className="mt-10 max-w-lg mx-auto">
            {submitted ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 flex items-center justify-center gap-3 text-sm font-semibold animate-in fade-in zoom-in-95 duration-200">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Welcome! Access link sent to {email}. Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-2.5 p-1.5 rounded-full bg-white dark:bg-[#1f262d] border border-neutral-300 dark:border-white/15 shadow-md">
                <div className="flex-1 flex items-center pl-4 gap-2.5">
                  <Mail className="h-4 w-4 text-[#5e6d7a] dark:text-neutral-400 shrink-0" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email..."
                    className="w-full bg-transparent text-xs sm:text-sm text-[#2c2c2a] dark:text-white placeholder-[#5e6d7a] dark:placeholder-neutral-400 focus:outline-none py-2"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#FFD849] hover:bg-[#f0c930] text-[#2c2c2a] font-bold text-xs sm:text-sm shadow-sm transition-all duration-200 cursor-pointer active:scale-95 shrink-0"
                >
                  <span>Get Started</span>
                </button>
              </form>
            )}

            {/* Direct SSO Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button
                href={siteConfig.authCta.primaryCta.href}
                variant="primary"
                size="md"
                className="font-bold shadow-md"
              >
                <span>{siteConfig.authCta.primaryCta.label}</span>
              </Button>

              <Button
                href={siteConfig.authCta.secondaryCta.href}
                variant="outline"
                size="md"
                className="font-bold"
              >
                <span>{siteConfig.authCta.secondaryCta.label}</span>
              </Button>
            </div>
          </div>

          {/* Quick CLI Shell Command Box */}
          <div className="mt-12 sm:mt-16 max-w-xl mx-auto">
            <p className="text-xs sm:text-sm text-[#5e6d7a] dark:text-[#cbd5e1] mb-3">
              {siteConfig.authCta.cliQuickInstall.label}
            </p>
            <div className="flex items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-[#1f262d] border border-neutral-700 text-left font-mono text-xs sm:text-sm text-neutral-200 shadow-inner overflow-hidden">
              <div className="flex items-center gap-2 overflow-x-auto select-all">
                <Terminal className="h-4 w-4 text-[#FFD849] shrink-0" />
                <span className="text-neutral-200 font-mono">{siteConfig.authCta.cliQuickInstall.command}</span>
              </div>
              <button
                onClick={handleCopyCommand}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-200 hover:text-white transition-colors shrink-0 text-xs font-sans font-bold cursor-pointer"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Verified Guarantee Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#5e6d7a] dark:text-[#cbd5e1]">
            <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>{siteConfig.authCta.trustBadge}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Named alias for semantic consistency
export const AuthCtaBanner = DownloadBanner;
