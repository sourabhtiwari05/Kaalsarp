import Link from "next/link";
import React from "react";

export interface CTADynamicProps {
  href: string;
  variant?: "outline" | "solid";
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function CTADynamic({ 
  href, 
  variant = "solid", 
  icon, 
  children, 
  className = "", 
  target, 
  rel 
}: CTADynamicProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-full transition-all";
  
  const variantClasses = {
    outline: "border border-gold-soft text-white text-sm font-medium hover:bg-gold-soft/10",
    solid: "bg-linear-to-r from-gold-soft to-gold text-maroon-deep text-base font-medium shadow-md hover:brightness-105"
  };

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </Link>
  );
}
