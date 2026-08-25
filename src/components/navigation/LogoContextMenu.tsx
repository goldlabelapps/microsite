"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Copy, Check, FileText } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function NxLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      {/* Goldlabel Hex/Cartridge Icon */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#FFD849] shadow-sm text-[#2c2c2a] font-extrabold text-base transition-transform group-hover:scale-105">
        <span>NX</span>
        <span className="absolute -top-1 -right-1 text-xs font-black text-[#364450]">°</span>
      </div>
      <div className="flex flex-col text-left leading-none">
        <span className="text-lg font-black tracking-tight text-[#2c2c2a] dark:text-white flex items-center">
          NX<span className="text-[#FFD849] ml-0.5">°</span>
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-wider text-[#5e6d7a] dark:text-[#cbd5e1]/80">
          Goldlabel
        </span>
      </div>
    </div>
  );
}

export function LogoContextMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setPosition({
        x: Math.min(e.clientX, window.innerWidth - 220),
        y: e.clientY + 8,
      });
    }
    setIsOpen(true);
  };

  const handleCopySvg = async () => {
    try {
      const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 48" fill="none"><rect width="40" height="40" rx="8" fill="#FFD849"/><text x="8" y="27" font-family="sans-serif" font-weight="900" font-size="20" fill="#2C2C2A">NX</text><text x="32" y="16" font-family="sans-serif" font-weight="900" font-size="12" fill="#364450">°</text><text x="50" y="27" font-family="sans-serif" font-weight="900" font-size="22" fill="#2C2C2A">NX°</text><text x="50" y="38" font-family="sans-serif" font-weight="700" font-size="9" fill="#5E6D7A" letter-spacing="1">GOLDLABEL</text></svg>`;
      await navigator.clipboard.writeText(svgString);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setIsOpen(false);
      }, 1500);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", () => setIsOpen(false));
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} onContextMenu={handleContextMenu} className="relative inline-flex items-center">
      <Link
        href="/"
        className="group flex items-center py-1 text-neutral-900 dark:text-white hover:opacity-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#FFD849]/50 rounded-lg"
        title="Right click for logo assets"
        aria-label="NX° by Goldlabel"
      >
        <NxLogo />
      </Link>

      {isOpen && (
        <div
          ref={menuRef}
          style={{ top: `${position.y}px`, left: `${position.x}px` }}
          className="fixed z-50 min-w-[200px] rounded-xl bg-white/95 border border-black/10 dark:bg-[#2d3943] dark:border-white/10 p-1.5 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150"
        >
          <button
            onClick={handleCopySvg}
            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:bg-[#FFD849]/15 dark:hover:bg-white/10 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            {copied ? (
              <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <Copy className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
            )}
            <span>{copied ? "Copied SVG!" : siteConfig.brand.contextMenu.copySvgLabel}</span>
          </button>
          <div className="my-1 h-px bg-black/[0.06] dark:bg-white/10" />
          <a
            href={siteConfig.brand.contextMenu.guidelinesUrl}
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:bg-[#FFD849]/15 dark:hover:bg-white/10 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <FileText className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
            <span>{siteConfig.brand.contextMenu.guidelinesLabel}</span>
          </a>
        </div>
      )}
    </div>
  );
}
