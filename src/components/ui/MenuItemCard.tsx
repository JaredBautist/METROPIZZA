'use client';

import { ReactNode } from 'react';

interface MenuItemCardProps {
  name: string;
  description: string;
  price?: string;
  image: string;
  category: string;
  badge?: string;
  className?: string;
}

export default function MenuItemCard({
  name,
  description,
  price,
  image,
  category,
  badge,
  className = '',
}: MenuItemCardProps) {
  return (
    <div className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${className}`}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-text-main uppercase tracking-wider">
            {category}
          </span>
        </div>

        {/* Special Badge */}
        {badge && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading text-xl font-bold text-text-main group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          {price && (
            <span className="text-lg font-bold text-primary">{price}</span>
          )}
        </div>

        <p className="text-text-muted text-sm leading-relaxed">{description}</p>

        {/* Hover indicator */}
        <div className="mt-4 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </div>
  );
}
