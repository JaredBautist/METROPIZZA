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

            {/* CTA en menú mobile */}
            <div className="pt-4 pb-2 border-t border-gray-100 mt-2">
              <Link
                href={LINKTREE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-primary text-white px-6 py-4 rounded-2xl font-black text-base shadow-lg shadow-primary/25 active:scale-[0.98] transition-transform duration-150"
                onClick={closeMenu}
                tabIndex={mobileMenuOpen ? 0 : -1}
              >
                {/* WhatsApp icon inline para reforzar conversión */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Hacer un pedido
              </Link>
            </div>
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
