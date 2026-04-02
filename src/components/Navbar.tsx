'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, PhoneCall, Pizza } from 'lucide-react';
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
        'fixed w-full z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3 text-text-main'
          : 'bg-gradient-to-b from-black/60 to-transparent py-5 text-white'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Imagen Real */}
          <Link href="#inicio" className="group flex items-center gap-2 font-heading font-black text-2xl tracking-tight">
            <Image 
              src={logoImg} 
              alt="Metro Pizza Logo" 
              className={cn(
                'w-auto transition-transform duration-300 group-hover:scale-110 object-cover rounded-full shadow-lg border-2 border-white/10',
                isScrolled ? 'h-10 w-10' : 'h-14 w-14'
              )}
              unoptimized
            />
            <span className={cn(
              "font-heading font-black tracking-tight transition-all duration-300",
              isScrolled ? "text-xl" : "text-2xl"
            )}>
              Metro<span className="text-primary">Pizza</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'relative px-4 py-2 rounded-full transition-all duration-300',
                  activeSection === item.href.replace('#', '')
                    ? (isScrolled ? 'text-italy-green bg-italy-green/10' : 'text-accent bg-white/10')
                    : (isScrolled ? 'hover:text-accent hover:bg-gray-50' : 'hover:text-accent hover:bg-white/10')
                )}
              >
                {item.name}
                {activeSection === item.href.replace('#', '') && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-current rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="https://wa.me/573108884489?text=Hola%20MetroPizza,%20me%20gustaria%20hacer%20un%20pedido"
              target="_blank"
              className={cn(
                'group flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 overflow-hidden',
                isScrolled
                  ? 'bg-accent text-text-main hover:bg-italy-green/90 hover:shadow-lg hover:-translate-y-0.5'
                  : 'bg-italy-red text-white hover:bg-italy-red/90 hover:shadow-lg hover:-translate-y-0.5'
              )}
            >
              <PhoneCall className="w-4 h-4 transition-transform group-hover:rotate-12" />
              <span>Pedir Ahora</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-500 overflow-hidden',
          mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="py-4 px-4">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300',
                activeSection === item.href.replace('#', '')
                  ? 'text-italy-green bg-italy-green/5'
                  : 'text-text-main hover:bg-gray-50 hover:text-accent'
              )}
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link
              href="https://wa.me/573108884489?text=Hola%20MetroPizza,%20quiero%20hacer%20un%20pedido"
              target="_blank"
              className="flex items-center justify-center gap-2 w-full bg-accent text-text-main px-8 py-4 rounded-xl font-bold shadow-md"
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
