'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Claudia Sierra",
    rating: 5,
    text: "Súper recomendados, excelente servicio 🙏😋😍",
    date: "Reciente",
    highlight: "Servicio Premium"
  },
  {
    name: "Stevens Lopesierra",
    rating: 5,
    text: "Ofrecen pizza por metro y tienen variedad de pizzas y productos de pastas.",
    date: "Hace 5 meses",
    highlight: "Pizza por Metro"
  },
  {
    name: "Marlene Rivera",
    rating: 5,
    text: "Sitio ambiente familiar y buen sabor 😊",
    date: "Hace 3 meses",
    highlight: "Ambiente Familiar"
  },
  {
    name: "Milena Rojas",
    rating: 5,
    text: "Pizza deliciosa.",
    date: "Hace 2 meses",
    highlight: "Sabor Inigualable"
  },
  {
    name: "Saieth Chaves Pabón",
    rating: 5,
    text: "Excelente lugar, servicio y comida. Muy atentos y rápidos con el servicio. Super recomendado.",
    date: "Hace 2 años",
    highlight: "Rapidez y Atención"
  },
  {
    name: "Lina Fernanda Suaza Luna",
    rating: 5,
    text: "Excelente lugar, muy bien atendidos, muy limpio y muy deliciosa la Pizza.",
    date: "Hace 4 años",
    highlight: "Limpieza y Calidad"
  }
];

export default function TestimonialCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setTimeout(() => {
      setStartIndex((current) => (current + 1) % testimonials.length);
      setIsAnimating(false);
    }, 400);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setTimeout(() => {
      setStartIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 400);
  };

  // Auto-slide logic with progress
  useEffect(() => {
    const interval = 100; // Fast update for smooth bar
    const duration = 7000; // 7 seconds per slide
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          next();
          return 0;
        }
        return old + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [startIndex]);

  const visibleTestimonials = isMobile 
    ? [testimonials[startIndex]] 
    : [
        testimonials[startIndex],
        testimonials[(startIndex + 1) % testimonials.length],
        testimonials[(startIndex + 2) % testimonials.length]
      ];

  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-4 py-8 group">
      {/* Progress Bar Container */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-100 rounded-full overflow-hidden mb-8">
        <div 
          className="h-full bg-primary transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {visibleTestimonials.map((t, i) => (
          <div 
            key={`${startIndex}-${i}`} 
            className="flex flex-col"
          >
            <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-white/50 h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group/card">
              
              {/* Red Quote Bubble with Floating Animation */}
              <div className="absolute -top-4 left-6 w-10 h-10 bg-[#E31B22] rounded-full flex items-center justify-center text-white text-2xl font-serif shadow-lg z-10 transition-transform group-hover/card:scale-125 group-hover/card:rotate-12">
                &quot;
              </div>

              {/* Stars with staggered delay feel */}
              <div className="flex gap-1 mb-6 mt-2">
                {Array.from({ length: 5 }).map((_, starI) => (
                  <Star 
                    key={starI} 
                    className="w-5 h-5 text-[#FED401] fill-[#FED401]" 
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-text-main/90 italic mb-10 leading-relaxed text-lg flex-grow">
                &quot;{t.text}&quot;
              </p>

              {/* Author Section */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F97316] to-[#FED401] flex items-center justify-center text-white text-xl font-bold shadow-md transform transition-transform group-hover/card:rotate-6">
                    {t.name.charAt(0)}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-text-main text-lg">
                    {t.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <span className="font-medium">Google Review</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{t.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prev}
        className="absolute -left-2 md:-left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white text-primary border border-gray-100 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 hover:bg-primary hover:text-white transform group-hover:-translate-x-2"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={next}
        className="absolute -right-2 md:-right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white text-primary border border-gray-100 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 hover:bg-primary hover:text-white transform group-hover:translate-x-2"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modern Indicators */}
      <div className="flex justify-center gap-3 mt-12">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setStartIndex(i);
              setProgress(0);
            }}
            className={`transition-all duration-500 ease-out ${
              startIndex === i 
                ? 'w-12 h-2 bg-primary rounded-full shadow-[0_0_15px_rgba(227,27,34,0.4)]' 
                : 'w-2 h-2 bg-gray-200 rounded-full hover:bg-gray-300 scale-90 hover:scale-100'
            }`}
            aria-label={`Ir a testimonio ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
