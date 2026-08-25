"use client";

import React from "react";
import { siteConfig } from "@/config/site.config";

export function StatementSection() {
  return (
    <section className="relative py-24 sm:py-36 overflow-hidden border-y border-black/[0.06] dark:border-white/[0.06] bg-[#f8f9fa] dark:bg-[#0c0d11] transition-colors duration-200">
      {/* Radiant ambient center glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-amber-500/5 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-amber-600/5 rounded-full blur-3xl opacity-70" />

      {/* Floating Animated Badges / Glyphs */}
      <div className="pointer-events-none absolute inset-0 max-w-7xl mx-auto overflow-hidden">
        {siteConfig.statement.floatingIcons.map((icon, idx) => (
          <div
            key={idx}
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              animationDelay: `${icon.delay || 0}s`,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-2xl bg-white/90 border border-black/5 dark:bg-white/[0.03] dark:border-white/[0.08] backdrop-blur-md p-3.5 shadow-lg dark:shadow-xl transition-transform duration-700 hover:scale-110 animate-bounce"
          >
            <span
              style={{ color: icon.color || "#fff", fontSize: `${icon.size || 24}px` }}
              className="font-mono font-bold select-none leading-none"
            >
              {icon.symbol}
            </span>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {siteConfig.statement.badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-6 uppercase tracking-wider">
            <span>{siteConfig.statement.badge}</span>
          </div>
        )}

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 dark:text-white tracking-tight leading-snug sm:leading-tight">
          {siteConfig.statement.headline}
        </h2>

        {siteConfig.statement.subtext && (
          <p className="mt-6 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.statement.subtext}
          </p>
        )}
      </div>
    </section>
  );
}
