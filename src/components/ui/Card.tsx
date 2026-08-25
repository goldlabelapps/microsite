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
    default: "bg-[#16181d] border border-white/[0.08] text-neutral-100",
    glass: "bg-[#13151a]/80 backdrop-blur-xl border border-white/[0.07] text-neutral-100 shadow-2xl",
    bordered: "bg-[#0f1115] border border-neutral-800 text-neutral-100",
    glow: "bg-gradient-to-b from-[#181b22] to-[#101217] border border-white/[0.1] shadow-2xl shadow-blue-500/5",
  };

  const hoverStyles = hoverEffect
    ? "hover:border-white/[0.18] hover:translate-y-[-2px] hover:shadow-xl hover:shadow-black/50"
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
