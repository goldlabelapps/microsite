"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Sparkles, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { DropdownItem } from "@/config/types";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (label: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-2 rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-black/[0.05] dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-[60px] bottom-0 z-40 bg-white/98 dark:bg-[#364450]/98 backdrop-blur-2xl border-b border-black/10 dark:border-white/10 overflow-y-auto p-5 animate-in fade-in duration-200 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Studio Highlight */}
            {siteConfig.navigation.remoteControlBadge?.enabled && (
              <a
                href={siteConfig.navigation.remoteControlBadge.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-[#FFD849]/15 border border-[#FFD849]/30 text-[#2c2c2a] dark:text-white text-xs font-semibold"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#e5c03e] dark:text-[#FFD849]" />
                  <span>{siteConfig.navigation.remoteControlBadge.label}</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-neutral-400" />
              </a>
            )}

            {/* Navigation links */}
            <div className="space-y-1">
              {siteConfig.navigation.links.map((item, idx) => {
                const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
                const isExpanded = expandedSections[item.label];

                if (hasDropdown) {
                  const dropdownItems = (item.dropdown || []) as DropdownItem[];
                  return (
                    <div key={idx} className="border-b border-black/[0.06] dark:border-white/5 pb-1">
                      <button
                        onClick={() => toggleSection(item.label)}
                        className="flex w-full items-center justify-between py-3 text-sm font-semibold text-neutral-800 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-neutral-900 dark:text-white" : "text-neutral-400 dark:text-neutral-500"
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="pl-3 pb-2 space-y-2">
                          {dropdownItems.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              href={sub.href}
                              target={sub.external ? "_blank" : undefined}
                              rel={sub.external ? "noreferrer" : undefined}
                              onClick={() => setIsOpen(false)}
                              className="block py-1.5 text-xs text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                            >
                              <div className="font-medium text-neutral-800 dark:text-neutral-200">{sub.title}</div>
                              {sub.description && (
                                <div className="text-[11px] text-neutral-500 line-clamp-1">{sub.description}</div>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={idx}
                    href={item.href || "#"}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-sm font-semibold text-neutral-800 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white border-b border-black/[0.06] dark:border-white/5"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom Actions: Theme Toggle, Sign In & Sign Up */}
          <div className="pt-6 pb-4 space-y-3">
            <div className="flex items-center justify-between p-3 rounded-2xl bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10">
              <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300">Theme</span>
              <ThemeToggle showLabel />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button
                href={siteConfig.navigation.secondaryCta?.href || "https://goldlabel.pro/signin"}
                variant="outline"
                size="md"
                className="justify-center text-xs"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Button>

              <Button
                href={siteConfig.navigation.primaryCta.href}
                variant="primary"
                size="md"
                className="justify-center text-xs font-bold"
                onClick={() => setIsOpen(false)}
              >
                <span>{siteConfig.navigation.primaryCta.label}</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
