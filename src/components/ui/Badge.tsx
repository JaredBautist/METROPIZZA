'use client';

import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  variant?: 'default' | 'secondary' | 'accent' | 'outline' | 'white' | 'italy' | 'colombia';
  size?: 'sm' | 'md' | 'lg';
}

export default function Badge({
  children,
  className = '',
  icon,
  variant = 'default',
  size = 'md',
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-300';

  const variants = {
    default: 'bg-primary/10 text-primary hover:bg-primary/20',
    secondary: 'bg-secondary/10 text-secondary hover:bg-secondary/20',
    accent: 'bg-accent/10 text-accent hover:bg-accent/20',
    outline: 'border-2 border-current text-text-main hover:bg-gray-50',
    white: 'bg-white/10 text-white border border-white/20 backdrop-blur-sm',
    // New Italy-Colombia variants
    italy: 'bg-italy-green/10 text-italy-green border border-italy-green/20 hover:bg-italy-green/20',
    colombia: 'bg-colombia-yellow/10 text-colombia-blue border border-colombia-yellow/30 hover:bg-colombia-yellow/20',
  };

  const sizes = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {icon}
      {children}
    </div>
  );
}
