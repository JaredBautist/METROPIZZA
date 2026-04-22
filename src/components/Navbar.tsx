'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import logoImg from "../../575675898_18095722447794197_4792593760425524262_n.jpg";

const LINKTREE = 'https://linktr.ee/MetroPizzaGyP';

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
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Scroll listener + active section tracker
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.href.replace('#', ''));
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(item.href.replace('#', ''));
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
    toggleRef.current?.focus(); // devuelve focus al botón — accesibilidad
  }, []);

  return (
    <>
      <nav
        className={cn(
          'fixed w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-3 text-text-main border-b border-gray-100'
            : 'bg-gradient-to-b from-black/70 via-black/20 to-transparent py-5 text-white'
        )}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link
              href="#inicio"
              className="group flex items-center gap-3 font-heading font-black text-2xl tracking-tight"
              onClick={() => closeMenu()}
            >
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
                'font-script tracking-normal transition-all duration-500',
                isScrolled ? 'text-2xl translate-x-0' : 'text-4xl -translate-x-1'
              )}>
                Metro<span className={cn('transition-colors duration-500', isScrolled ? 'text-primary' : 'text-accent')}>Pizza</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 font-semibold">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative px-5 py-2 rounded-full transition-all duration-300 group/nav',
                    activeSection === item.href.replace('#', '')
                      ? (isScrolled ? 'text-primary' : 'text-accent')
                      : (isScrolled ? 'text-text-muted hover:text-primary' : 'text-white/80 hover:text-white')
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {activeSection === item.href.replace('#', '') && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(227,27,34,0.6)]" />
                  )}
                  <span className="absolute inset-0 bg-gray-100/0 group-hover/nav:bg-gray-100/50 rounded-full transition-all duration-300 -z-10" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href={LINKTREE}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 overflow-hidden shadow-lg hover:shadow-primary/25 bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <PhoneCall className="relative z-10 w-4 h-4" />
                <span className="relative z-10">Pedir Ahora</span>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              ref={toggleRef}
              className={cn(
                'md:hidden touch-target flex items-center justify-center rounded-full transition-all duration-300',
                isScrolled ? 'text-text-main hover:bg-gray-100' : 'text-white hover:bg-white/10'
              )}
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen
                ? <X size={26} strokeWidth={2.5} />
                : <Menu size={26} strokeWidth={2} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className={cn(
            'md:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-2xl shadow-2xl border-b border-gray-100',
            'transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden',
            mobileMenuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          )}
        >
          <div className="py-5 px-4 space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center justify-between px-5 py-4 rounded-2xl font-semibold transition-all duration-200',
                  activeSection === item.href.replace('#', '')
                    ? 'text-primary bg-primary/8 border border-primary/15'
                    : 'text-text-main hover:bg-gray-50 active:bg-gray-100'
                )}
                onClick={closeMenu}
                tabIndex={mobileMenuOpen ? 0 : -1}
                style={{ transitionDelay: mobileMenuOpen ? `${index * 30}ms` : '0ms' }}
              >
                <span className="text-base">{item.name}</span>
                <ArrowRight className={cn(
                  'w-4 h-4 transition-all duration-200',
                  activeSection === item.href.replace('#', '') ? 'opacity-100 text-primary' : 'opacity-30'
                )} />
              </Link>
            ))}


          </div>
        </div>
      </nav>

      {/* Backdrop para cerrar menú al tocar fuera */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
