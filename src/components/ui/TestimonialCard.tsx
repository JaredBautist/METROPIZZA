'use client';

import { ReactNode, useState, useEffect } from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
  avatar?: string;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  author,
  rating,
  delay = 0,
}: TestimonialCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Quote icon */}
      <div className="absolute -top-4 left-8 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-serif">
        "
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-accent fill-accent' : 'text-gray-200'}`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-text-muted italic mb-6 leading-relaxed">"{quote}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-text-main">{author}</p>
          <p className="text-xs text-text-muted">Cliente verificado</p>
        </div>
      </div>
    </div>
  );
}
