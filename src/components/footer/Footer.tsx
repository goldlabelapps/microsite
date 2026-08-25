"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { GoogleAntigravityLogo } from "@/components/navigation/LogoContextMenu";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#f8f9fa] dark:bg-[#08090c] border-t border-black/[0.06] dark:border-white/[0.08] text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Top Brand & Tagline Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div className="flex items-center gap-3">
            <GoogleAntigravityLogo className="h-5 w-auto text-neutral-900 dark:text-white" />
            <span className="text-neutral-400 dark:text-neutral-500 font-mono text-xs">•</span>
            <span className="text-neutral-700 dark:text-neutral-300 font-medium">{siteConfig.footer.tagline}</span>
          </div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">
            Next-gen agentic development platform for the agent-first era.
          </div>
        </div>

        {/* Footer Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {siteConfig.footer.columns.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-xs font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="h-3 w-3 text-neutral-400" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {siteConfig.footer.bottomLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-neutral-800 dark:hover:text-neutral-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="text-neutral-500 dark:text-neutral-400 font-mono">
            {siteConfig.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
