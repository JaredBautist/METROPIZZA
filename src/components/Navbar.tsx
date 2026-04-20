'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, PhoneCall, Pizza, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import logoImg from "../../575675898_18095722447794197_4792593760425524262_n.jpg";

const navItems = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Menu', href: '#menu' },
  { name: 'Galeria', href: '#galeria' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = navItems.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3 text-text-main border-b border-gray-100'
          : 'bg-gradient-to-b from-black/70 via-black/20 to-transparent py-5 text-white'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Imagen Real */}
          <Link href="#inicio" className="group flex items-center gap-3 font-heading font-black text-2xl tracking-tight">
            <div className="relative">
              <Image 
                src={logoImg} 
                alt="Metro Pizza Logo" 
                className={cn(
                  'w-auto transition-all duration-500 group-hover:scale-105 object-cover rounded-full shadow-2xl border-2 border-white/20',
                  isScrolled ? 'h-10 w-10' : 'h-16 w-16'
                )}
                unoptimized
              />
              {!isScrolled && (
                <div className="absolute -inset-1 bg-accent/20 rounded-full blur-sm animate-pulse -z-10" />
              )}
            </div>
            <span className={cn(
              "font-script tracking-normal transition-all duration-500",
              isScrolled ? "text-2xl translate-x-0" : "text-4xl -translate-x-1"
            )}>
              Metro<span className={cn("transition-colors duration-500", isScrolled ? "text-primary" : "text-accent")}>Pizza</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 font-semibold">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'relative px-5 py-2 rounded-full transition-all duration-500 group/nav',
                  activeSection === item.href.replace('#', '')
                    ? (isScrolled ? 'text-primary' : 'text-accent')
                    : (isScrolled ? 'text-text-muted hover:text-primary' : 'text-white/80 hover:text-white')
                )}
              >
                <span className="relative z-10">{item.name}</span>
                {activeSection === item.href.replace('#', '') && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(227,27,34,0.6)] animate-in fade-in zoom-in duration-500" />
                )}
                <span className="absolute inset-0 bg-gray-100/0 group-hover/nav:bg-gray-100/50 rounded-full transition-all duration-300 -z-10" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="https://linktr.ee/metropizzacol?utm_source=linktree_profile_share&ltsid=28985606-398f-41eb-aae1-6ff7192ca4b8"
              target="_blank"
              className="group relative flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 overflow-hidden shadow-lg hover:shadow-primary/20 bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <PhoneCall className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:scale-105" />
              <span className="relative z-10">Pedir Ahora</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={cn(
              "md:hidden p-2 rounded-full transition-all duration-300",
              isScrolled ? "text-text-main hover:bg-gray-100" : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Fluid reveal */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden border-b border-gray-100',
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        )}
      >
        <div className="py-8 px-6 space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-500 group',
                activeSection === item.href.replace('#', '')
                  ? 'text-primary bg-primary/5 font-bold translate-x-2'
                  : 'text-text-main hover:bg-gray-50 hover:translate-x-2'
              )}
              onClick={() => setMobileMenuOpen(false)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span>{item.name}</span>
              <ArrowRight className={cn(
                "w-4 h-4 transition-all duration-500",
                activeSection === item.href.replace('#', '') ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              )} />
            </Link>
          ))}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <Link
              href="https://linktr.ee/metropizzacol?utm_source=linktree_profile_share&ltsid=28985606-398f-41eb-aae1-6ff7192ca4b8"
              target="_blank"
              className="flex items-center justify-center gap-3 w-full bg-primary text-white px-8 py-5 rounded-2xl font-black shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <PhoneCall className="w-5 h-5" />
              Hacer un pedido
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
