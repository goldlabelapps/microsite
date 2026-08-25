"use client";

import React from "react";
import Link from "next/link";
import {
  ChevronDown,
  Layers,
  Terminal,
  Code2,
  Cpu,
  Globe,
  Layout,
  Sparkles,
  Building2,
  BookOpen,
  Newspaper,
  History,
  LifeBuoy,
  ExternalLink,
} from "lucide-react";
import { NavItem, DropdownItem } from "@/config/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Terminal,
  Code2,
  Cpu,
  Globe,
  Layout,
  Sparkles,
  Building2,
  BookOpen,
  Newspaper,
  History,
  LifeBuoy,
};

export function DropdownMenu({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const dropdownItems = (item.dropdown || []) as DropdownItem[];

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-colors rounded-full",
          isOpen
            ? "text-white bg-white/10"
            : "text-neutral-300 hover:text-white hover:bg-white/5"
        )}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200 opacity-70",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50 w-72 md:w-80">
          <div className="rounded-2xl bg-[#14161b]/95 border border-white/10 p-2 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="space-y-1">
              {dropdownItems.map((dropdownItem, idx) => {
                const IconComponent = dropdownItem.icon
                  ? iconMap[dropdownItem.icon]
                  : null;

                const content = (
                  <div className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/10 group">
                    {IconComponent && (
                      <div className="mt-0.5 rounded-lg bg-white/5 p-1.5 text-neutral-300 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                        <IconComponent className="h-4 w-4" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-neutral-100 group-hover:text-white">
                          {dropdownItem.title}
                        </span>
                        {dropdownItem.badge && (
                          <span className="rounded-full bg-blue-500/20 px-1.5 py-0.2 text-[10px] font-medium text-blue-300 border border-blue-500/30">
                            {dropdownItem.badge}
                          </span>
                        )}
                        {dropdownItem.external && (
                          <ExternalLink className="h-3 w-3 text-neutral-500 group-hover:text-neutral-300" />
                        )}
                      </div>
                      {dropdownItem.description && (
                        <p className="text-[11px] text-neutral-400 line-clamp-2 mt-0.5">
                          {dropdownItem.description}
                        </p>
                      )}
                    </div>
                  </div>
                );

                if (dropdownItem.external) {
                  return (
                    <a
                      key={idx}
                      href={dropdownItem.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      onClick={() => setIsOpen(false)}
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <Link
                    key={idx}
                    href={dropdownItem.href}
                    className="block"
                    onClick={() => setIsOpen(false)}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
