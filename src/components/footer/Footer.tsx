"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { NxLogo } from "@/components/navigation/LogoContextMenu";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#f7f9fa] dark:bg-[#2c3741] border-t border-black/[0.06] dark:border-white/[0.1] text-[#5e6d7a] dark:text-[#cbd5e1] text-xs sm:text-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Top Brand & Tagline Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-black/[0.06] dark:border-white/[0.1]">
          <div className="flex items-center gap-3">
            <NxLogo />
            <span className="text-neutral-400 font-mono text-xs">•</span>
            <span className="text-[#2c2c2a] dark:text-neutral-200 font-medium">{siteConfig.footer.tagline}</span>
          </div>
          <div className="text-xs text-[#5e6d7a] dark:text-[#cbd5e1]">
            {siteConfig.footer.address || "Goldlabel Apps Ltd, UK"}
          </div>
        </div>

        {/* Footer Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {siteConfig.footer.columns.map((col, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-xs font-bold text-[#2c2c2a] dark:text-white uppercase tracking-wider">
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
                        className="inline-flex items-center gap-1 text-[#5e6d7a] hover:text-[#2c2c2a] dark:text-[#cbd5e1] dark:hover:text-[#FFD849] transition-colors"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="h-3 w-3 text-neutral-400" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[#5e6d7a] hover:text-[#2c2c2a] dark:text-[#cbd5e1] dark:hover:text-[#FFD849] transition-colors"
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
        <div className="pt-8 border-t border-black/[0.06] dark:border-white/[0.1] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#5e6d7a] dark:text-[#cbd5e1]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {siteConfig.footer.bottomLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-[#2c2c2a] dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="text-[#5e6d7a] dark:text-[#cbd5e1] font-mono">
            {siteConfig.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
