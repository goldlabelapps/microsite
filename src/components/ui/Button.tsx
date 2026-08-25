"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Download,
  ArrowRight,
  ChevronDown,
  Play,
  ExternalLink,
  Sparkles,
  Terminal,
  Code2,
  Check,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Download,
  ArrowRight,
  ChevronDown,
  Play,
  ExternalLink,
  Sparkles,
  Terminal,
  Code2,
  Check,
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass" | "pill";
  size?: "sm" | "md" | "lg";
  icon?: string;
  iconPosition?: "left" | "right";
  href?: string;
  external?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  href,
  external,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const IconComponent = icon ? iconMap[icon] : null;

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-full";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#1a73e8] hover:bg-[#1557b0] text-white shadow-sm hover:shadow-blue-500/25 active:scale-[0.98]",
    secondary:
      "bg-black/[0.04] hover:bg-black/[0.08] text-neutral-800 border border-black/5 dark:bg-neutral-800/80 dark:hover:bg-neutral-700/90 dark:text-neutral-200 dark:border-neutral-700/60 backdrop-blur-md active:scale-[0.98]",
    outline:
      "border border-neutral-300 hover:border-neutral-400 bg-transparent text-neutral-800 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:border-neutral-500 dark:text-neutral-200 dark:hover:bg-white/5 active:scale-[0.98]",
    ghost:
      "bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-black/[0.04] dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/5",
    glass:
      "bg-white/80 hover:bg-white text-neutral-800 backdrop-blur-lg border border-black/5 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white dark:border-white/10 shadow-lg active:scale-[0.98]",
    pill:
      "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 font-semibold shadow-md active:scale-[0.98]",
  };

  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  const iconElement = IconComponent ? (
    <IconComponent className={cn("shrink-0", size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4")} />
  ) : null;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {iconPosition === "left" && iconElement}
          <span>{children}</span>
          {iconPosition === "right" && iconElement}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {iconPosition === "left" && iconElement}
        <span>{children}</span>
        {iconPosition === "right" && iconElement}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {iconPosition === "left" && iconElement}
      <span>{children}</span>
      {iconPosition === "right" && iconElement}
    </button>
  );
}
