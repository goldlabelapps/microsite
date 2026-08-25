"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Rocket, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { DropdownItem } from "@/config/types";
import { Button } from "@/components/ui/Button";

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
        className="flex items-center justify-center p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-[60px] bottom-0 z-40 bg-[#0d0f13]/98 backdrop-blur-2xl border-b border-white/10 overflow-y-auto p-5 animate-in fade-in duration-200 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Remote Control Highlight */}
            {siteConfig.navigation.remoteControlBadge?.enabled && (
              <a
                href={siteConfig.navigation.remoteControlBadge.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-white text-xs font-medium"
              >
                <div className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-blue-400" />
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
                    <div key={idx} className="border-b border-white/5 pb-1">
                      <button
                        onClick={() => toggleSection(item.label)}
                        className="flex w-full items-center justify-between py-3 text-sm font-semibold text-neutral-200 hover:text-white"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-white" : "text-neutral-500"
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="pl-3 pb-2 space-y-2">
                          {dropdownItems.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="block py-1.5 text-xs text-neutral-400 hover:text-white"
                            >
                              <div className="font-medium text-neutral-200">{sub.title}</div>
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
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-sm font-semibold text-neutral-200 hover:text-white border-b border-white/5"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-6 pb-4">
            <Button
              href="#download"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={() => setIsOpen(false)}
              icon="Download"
            >
              Download Google Antigravity
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
