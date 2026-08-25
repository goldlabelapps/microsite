"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
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
          ? "bg-white/90 dark:bg-[#364450]/90 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.12] shadow-sm py-2.5"
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
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="px-3.5 py-1.5 text-sm font-medium text-[#5e6d7a] hover:text-[#2c2c2a] hover:bg-black/[0.04] dark:text-[#cbd5e1] dark:hover:text-white dark:hover:bg-white/10 rounded-full transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Action CTAs */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Studio Badge */}
          {siteConfig.navigation.remoteControlBadge?.enabled && (
            <a
              href={siteConfig.navigation.remoteControlBadge.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-[#2c2c2a] bg-[#FFD849]/20 hover:bg-[#FFD849]/30 border border-[#FFD849]/40 dark:text-[#FFD849] dark:bg-[#FFD849]/10 dark:hover:bg-[#FFD849]/20 transition-all duration-200"
              title={siteConfig.navigation.remoteControlBadge.tooltip}
            >
              <Sparkles className="h-3.5 w-3.5 text-[#e5c03e] dark:text-[#FFD849]" />
              <span>{siteConfig.navigation.remoteControlBadge.label}</span>
            </a>
          )}

          {/* Theme Toggle Button */}
          <ThemeToggle />

          {/* Sign In CTA */}
          {siteConfig.navigation.secondaryCta && (
            <Link
              href={siteConfig.navigation.secondaryCta.href}
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 text-xs font-semibold text-[#2c2c2a] dark:text-white hover:text-neutral-900 dark:hover:text-[#FFD849] transition-colors"
            >
              {siteConfig.navigation.secondaryCta.label}
            </Link>
          )}

          {/* Primary Sign Up CTA */}
          <Button
            href={siteConfig.navigation.primaryCta.href}
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex shadow-sm font-bold"
          >
            <span>{siteConfig.navigation.primaryCta.label}</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>

          {/* Mobile Menu Trigger */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
