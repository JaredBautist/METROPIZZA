'use client';

import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: 'default' | 'colored';
  iconColor?: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  variant = 'default',
  iconColor = 'text-primary',
  className = '',
}: FeatureCardProps) {
  const baseStyles = 'group p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2';

  const variants = {
    default: 'bg-white border border-gray-100 shadow-sm hover:shadow-xl',
    colored: 'bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10',
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      <div className={`w-14 h-14 rounded-xl ${variant === 'colored' ? 'bg-white' : `${iconColor.replace('text-', 'bg-')}/10`} flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
        <span className={`${iconColor} transition-transform duration-500`}>{icon}</span>
      </div>
      <h3 className="font-heading text-xl font-bold text-text-main mb-2">{title}</h3>
      <p className="text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}
