"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Rocket } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { LogoContextMenu } from "./LogoContextMenu";
import { DropdownMenu } from "./DropdownMenu";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-white/85 dark:bg-[#090a0d]/85 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.08] shadow-sm dark:shadow-lg dark:shadow-black/20 py-2.5"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-8">
          <LogoContextMenu />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {siteConfig.navigation.links.map((item, idx) => {
              if (item.dropdown && item.dropdown.length > 0) {
                return <DropdownMenu key={idx} item={item} />;
              }

              return (
                <Link
                  key={idx}
                  href={item.href || "#"}
                  className="px-3.5 py-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:bg-black/[0.04] dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/5 rounded-full transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Action CTAs */}
        <div className="flex items-center gap-2.5">
          {/* Remote Control Pill */}
          {siteConfig.navigation.remoteControlBadge?.enabled && (
            <a
              href={siteConfig.navigation.remoteControlBadge.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-blue-700 bg-blue-500/10 hover:bg-blue-500/15 border border-blue-500/20 dark:text-blue-300 dark:bg-blue-500/10 dark:hover:bg-blue-500/20 transition-all duration-200"
              title={siteConfig.navigation.remoteControlBadge.tooltip}
            >
              <Rocket className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span>{siteConfig.navigation.remoteControlBadge.label}</span>
            </a>
          )}

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Primary Download Button */}
          <Button
            href={siteConfig.navigation.primaryCta.href}
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
            icon="Download"
          >
            {siteConfig.navigation.primaryCta.label}
          </Button>

          {/* Mobile Menu Trigger */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
