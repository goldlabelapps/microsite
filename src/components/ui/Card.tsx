import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "bordered" | "glow";
  hoverEffect?: boolean;
}

export function Card({
  className,
  variant = "default",
  hoverEffect = true,
  children,
  ...props
}: CardProps) {
  const baseStyles = "rounded-2xl transition-all duration-300 relative overflow-hidden";

  const variantStyles = {
    default: "bg-white border border-black/[0.08] text-neutral-900 shadow-sm dark:bg-[#16181d] dark:border-white/[0.08] dark:text-neutral-100",
    glass: "bg-white/80 backdrop-blur-xl border border-black/[0.07] text-neutral-900 shadow-xl dark:bg-[#13151a]/80 dark:border-white/[0.07] dark:text-neutral-100 dark:shadow-2xl",
    bordered: "bg-neutral-50 border border-neutral-200 text-neutral-900 dark:bg-[#0f1115] dark:border-neutral-800 dark:text-neutral-100",
    glow: "bg-white border border-blue-500/20 shadow-xl shadow-blue-500/5 text-neutral-900 dark:bg-gradient-to-b dark:from-[#181b22] dark:to-[#101217] dark:border-white/[0.1] dark:shadow-blue-500/5 dark:text-neutral-100",
  };

  const hoverStyles = hoverEffect
    ? "hover:border-blue-500/30 hover:translate-y-[-2px] hover:shadow-lg dark:hover:border-white/[0.18] dark:hover:shadow-black/50"
    : "";

  return (
    <div
      className={cn(baseStyles, variantStyles[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
}
