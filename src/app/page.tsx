"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import logoImg from "../../575675898_18095722447794197_4792593760425524262_n.jpg";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import TestimonialCard from "@/components/ui/TestimonialCard";
import FeatureCard from "@/components/ui/FeatureCard";
import Badge from "@/components/ui/Badge";
import {
  Pizza,
  Coffee,
  Flame,
  MapPin,
  Phone,
  Instagram,
  ArrowRight,
  Clock3,
  UtensilsCrossed,
  Award,
  Heart,
  ChevronDown,
  Sparkles,
  Globe,
  ChefHat,
  Flag,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="min-h-screen overflow-x-hidden relative">
        {/* Fondo Fijo del Coliseo Romano estilo Marca de Agua */}
        <div className="fixed inset-0 z-[-1] bg-bg-light">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1920px-Colosseo_2020.jpg"
            alt="Fondo Coliseo Romano"
            className="w-full h-full object-cover opacity-[0.35]"
          />
        </div>

        <Navbar />

        {/* Hero Section - 100% Italiano */}
        <header
          id="inicio"
          className="relative min-h-screen flex items-center justify-center"
        >
          {/* Background with Italian vibes */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop"
              alt="Autentica pizza horno"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient - Natural Food Contrast */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent" />
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-gradient" />
          </div>
          {/* Floating decorative particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-float"
                style={{
                  left: `${(i * 13) % 100}%`,
                  top: `${(i * 29) % 100}%`,
                  width: `${(i * 7) % 8 + 4}px`,
                  height: `${(i * 11) % 8 + 4}px`,
                  backgroundColor: i % 2 === 0 ? "#E31B22" : "#FED401",
                  opacity: 0.25,
                  animationDuration: `${(i * 17) % 10 + 10}s`,
                  animationDelay: `${(i * 19) % 5}s`,
                }}
              />
            ))}
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">


            <SectionReveal delay={0}>
              <div className="flex justify-center gap-4 flex-wrap mb-6">
                <Badge
                  variant="white"
                  icon={<MapPin className="w-4 h-4" />}
                >
                  Patios (Gourmet)
                </Badge>
                <Badge
                  variant="white"
                  icon={<MapPin className="w-4 h-4" />}
                >
                  Pinar del Río (Premium)
                </Badge>
              </div>
            </SectionReveal>

            <SectionReveal delay={100}>
              <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white mb-4 leading-tight drop-shadow-2xl tracking-tight">
                Metro <span className="text-accent">Pizza</span>
              </h1>
              <h2 className="font-heading text-2xl md:text-4xl text-accent italic mb-8 drop-shadow-lg">
                ¡El sabor a tu medida!
              </h2>
            </SectionReveal>

            <SectionReveal delay={150}>
              <p className="text-2xl md:text-3xl text-white/80 font-light italic mb-3 drop-shadow-md tracking-wide">
                Autentica tradicion italiana en cada bocado
              </p>
            </SectionReveal>

            <SectionReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#menu" className="btn btn-primary text-lg px-10 py-4">
                  <UtensilsCrossed className="w-5 h-5 mr-2" />
                  Ver la Carta
                </Link>
                <Link
                  href="https://linktr.ee/metropizzacol?utm_source=linktree_profile_share&ltsid=28985606-398f-41eb-aae1-6ff7192ca4b8"
                  target="_blank"
                  className="btn btn-ghost text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Pedir Ahora
                </Link>
              </div>
            </SectionReveal>

            {/* Trust badges removed as requested */}
          </div>

          <Link
            href="#nosotros"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </Link>
        </header>

        {/* About Section - 100% Italy */}
        <section id="nosotros" className="section-padding relative overflow-hidden">
          {/* Italian monument background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1972&auto=format&fit=crop"
              alt="Torre de Pisa Monumento"
              fill
              className="object-cover opacity-10"
              unoptimized
            />
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
          </div>

          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <SectionReveal direction="left">
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl group">
                        <Image
                          src="/images/pizza.png"
                          alt="Pizza artesanal italiana"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl group">
                        <Image
                          src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop"
                          alt="Ingredientes frescos"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl group">
                        <Image
                          src="/images/pasta.png"
                          alt="Pasta fresca italiana"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl group">
                        <Image
                          src="/images/lasagna.png"
                          alt="Lasana casera estilo italiano"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>

                  {/* Floating rating badge */}
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border-l-4 border-orange-500">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-primary rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-text-main">
                          <AnimatedCounter end={4} suffix=".6" />
                        </p>
                        <p className="text-text-muted text-sm">Calificacion Google</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal direction="right" delay={200}>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Badge icon={<Globe className="w-4 h-4" />}>
                      Sabor Autentico Italiano
                    </Badge>
                  </div>

                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-main leading-tight">
                    La Verdadera
                    <br />
                    <span className="text-primary">Receta Italiana</span>
                  </h2>

                  <p className="text-text-muted text-lg leading-relaxed">
                    En MetroPizza te traemos las recetas autenticas de la Nonna italiana
                    preparadas con los mejores ingredientes y la pasion de siempre.
                    Cada plato es una obra de arte que honra la tradicion.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    <FeatureCard
                      icon={<ChefHat className="w-6 h-6" />}
                      iconColor="text-orange-500"
                      title="Recetas Italianas"
                      description="Autenticas preparaciones tradicionales de Italia, con ingredientes importados y locales de primera calidad."
                    />
                    <FeatureCard
                      icon={<Flame className="w-6 h-6" />}
                      iconColor="text-primary"
                      title="Ingredientes Frescos"
                      description="Seleccionamos cuidadosamente nuestros ingredientes para garantizar el autentico sabor italiano."
                    />
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link href="#menu" className="btn btn-primary">
                      <UtensilsCrossed className="w-5 h-5 mr-2" />
                      Ver Menu
                    </Link>
                    <Link href="#historia" className="btn btn-secondary">
                      Nuestra Historia
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white/10 backdrop-blur-[2px] relative overflow-hidden shadow-lg border-y border-white/20">
          {/* Decorative Italian flag stripe */}
          <div className="absolute top-0 left-0 right-0 h-2 flex">
            <div className="flex-1 bg-orange-500" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-primary" />
          </div>

          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 605, suffix: "+", label: "Resenas Google", icon: Award },
                { value: 10, suffix: "+", label: "Años de Tradicion", icon: Clock3 },
                { value: 50, suffix: "+", label: "Recetas Italianas", icon: UtensilsCrossed },
                { value: 10000, suffix: "+", label: "Clientes Satisfechos", icon: Heart },
              ].map((stat, i) => (
                <SectionReveal key={i} delay={i * 100}>
                  <div className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-primary/20 text-primary mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <stat.icon className="w-8 h-8" />
                    </div>
                    <div className="font-heading text-4xl md:text-5xl font-bold text-text-main">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-text-muted mt-2">{stat.label}</div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>

          {/* Decorative Italian flag stripe bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-2 flex opacity-70">
            <div className="flex-1 bg-orange-500" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-primary" />
          </div>
        </section>

        {/* History Section */}
        <section id="historia" className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1520612984955-46eb130438c8?q=80&w=1974&auto=format&fit=crop"
              alt="Calle Italiana Roma"
              fill
              className="object-cover opacity-[0.35]"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white/20 backdrop-blur-[2px]" />
          </div>
          <div className="section-container relative z-10">
            <SectionReveal>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <Badge variant="secondary" icon={<Flag className="w-4 h-4" />}>
                  Nuestra Historia
                </Badge>

                <h2 className="font-heading text-4xl md:text-5xl text-text-main mt-6 mb-6">
                  La verdadera <span className="text-primary">pizza italiana a tu alcance</span>
                </h2>

                <p className="text-text-muted text-lg">
                  Un sueno nacido del amor por la autentica cocina italiana.
                  La mejor tradicion de Napoles en tu mesa.
                </p>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  year: "2014",
                  title: "El Inicio",
                  description: "Llegamos a Los Patios con la mision de traer la verdadera pizza italiana para ti.",
                },
                {
                  year: "2018",
                  title: "Receta Original",
                  description: "Nos mantenemos fieles a nuestras raíces: masa delgada, tomate San Marzano y mucho amor.",
                },
                {
                  year: "2024",
                  title: "Tradicion Consolidada",
                  description: "Mas de 600 resenas nos respaldan como el verdadero referente de cocina italiana en la region.",
                },
              ].map((item, i) => (
                <SectionReveal key={i} delay={i * 150}>
                  <div className="relative group">
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                      <div className="text-5xl font-heading font-bold bg-gradient-to-r from-orange-500 via-primary to-primary bg-clip-text text-transparent mb-4">
                        {item.year}
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-text-main mb-3">
                        {item.title}
                      </h3>
                      <p className="text-text-muted">{item.description}</p>
                    </div>
                    {i < 2 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-primary" />
                    )}
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="section-padding bg-bg-dark/85 backdrop-blur-[4px] text-white relative overflow-hidden">
          {/* Italian monument background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1498305886369-122e20b3dd1d?q=80&w=2070&auto=format&fit=crop"
              alt="Torre de Pisa Italia"
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-bg-light to-transparent" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

          {/* Italian flag decorative border */}
          <div className="absolute top-40 left-0 right-0 h-1 flex opacity-30">
            <div className="flex-1 bg-orange-500" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-primary" />
          </div>

          <div className="section-container relative z-10">
            <SectionReveal>
              <div className="text-center max-w-3xl mx-auto mb-16 pt-10">
                <Badge variant="default" icon={<UtensilsCrossed className="w-4 h-4" />}>
                  Carta Italiana
                </Badge>

                <h2 className="font-heading text-5xl md:text-6xl mt-6 mb-6">
                  Menu
                </h2>

                <p className="text-gray-400 text-lg">
                  Recetas tradicionales italianas elaboradas con ingredientes frescos
                  y amor por la buena cocina.
                </p>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuData.map((category, categoryIndex) => (
                <SectionReveal key={category.category} delay={categoryIndex * 100}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-colors duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.category}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <h3 className="font-heading text-2xl font-bold flex items-center gap-2">
                          <category.icon className="w-6 h-6 text-orange-500" />
                          {category.category}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="group/item flex justify-between items-start py-3 border-b border-white/10 last:border-0"
                        >
                          <div className="flex-1">
                            <h4 className="font-bold text-lg group-hover/item:text-orange-500 transition-colors">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-400">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal delay={500}>
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent rounded-full">
                  <Sparkles className="w-4 h-4" />
                  <span>Tamanos: Personal, Pequena, Mediana, Grande y Por Metro</span>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeria" className="section-padding relative bg-white/5 backdrop-blur-[2px] border-t border-white/20">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1563853173775-db322cd81a2e?q=80&w=2070&auto=format&fit=crop"
              alt="Monumento Roma"
              fill
              className="object-cover opacity-5"
              unoptimized
            />
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
          </div>
          {/* Italian flag decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-2 flex opacity-80">
            <div className="flex-1 bg-orange-500" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-primary" />
          </div>

          <div className="section-container">
            <SectionReveal>
              <div className="text-center mb-12">
                <Badge icon={<Sparkles className="w-4 h-4" />}>Galeria</Badge>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((image, i) => (
                <SectionReveal key={i} delay={i * 100}>
                  <div className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-bold">{image.alt}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="section-padding relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop"
              alt="Paisaje Italiano"
              fill
              className="object-cover opacity-[0.15]"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/40 backdrop-blur-[2px]" />
          </div>
          <div className="section-container relative z-10">
            <SectionReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="default">Testimonios</Badge>
                <h2 className="font-heading text-4xl md:text-5xl mt-4 mb-4">
                  Lo Que Dicen Nuestros <span className="text-primary">Clientes</span>
                </h2>
                <p className="text-text-muted">
                  Calificacion destacada: <span className="font-bold text-text-main">4.6/5</span> con{" "}
                  <span className="font-bold text-text-main">605 resenas</span> en Google.
                </p>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <TestimonialCard
                  key={i}
                  quote={t.text}
                  author={t.name}
                  rating={5}
                  delay={i * 150}
                />
              ))}
            </div>

            <SectionReveal delay={500}>
              <div className="mt-12 text-center">
                <Link
                  href="https://maps.app.goo.gl/nR7BYQUDbAo6ERg57"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="w-2 h-5 rounded-sm" style={{
                        background: i < 2 ? '#FFCD00' : i < 4 ? '#003893' : '#CE1126'
                      }} />
                    ))}
                  </div>
                  <span className="font-bold text-text-main">Ver 605 resenas en Google</span>
                  <ArrowRight className="w-5 h-5 text-text-muted" />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Sucursales Section */}
        <section id="sucursales" className="py-20 pb-20 md:py-28 bg-white/5 backdrop-blur-[2px] relative overflow-hidden border-t border-white/20">
          <div className="section-container relative z-10">
            <SectionReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <Badge variant="default" icon={<MapPin className="w-4 h-4" />}>
                  Nuestras Sucursales
                </Badge>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-main mt-6 mb-6">
                  Visítanos en tu <span className="text-primary">sede favorita</span>
                </h2>
                <p className="text-text-muted text-lg">
                  El verdadero sabor de Italia en 2 ubicaciones pensadas para ti.
                </p>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto gap-8">
              {[
                { name: "Patios (Gourmet)", address: "Cl. 16 #9-45", city: "Los Patios, Norte de Santander" },
                { name: "Pinar del Río (Premium)", address: "Barrio Bellavista", city: "Cúcuta, Norte de Santander" },
              ].map((branch, i) => (
                <SectionReveal key={i} delay={i * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-primary transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl text-text-main mb-2">{branch.name}</h3>
                    <p className="text-text-muted flex-grow">{branch.address}</p>
                    <p className="text-text-muted mt-1 font-medium text-sm border-t border-gray-100 pt-3">{branch.city}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contacto" className="bg-bg-dark text-white relative">
          {/* Italian flag border */}
          <div className="absolute top-0 left-0 right-0 h-1 flex">
            <div className="flex-1 bg-orange-500" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-primary" />
          </div>

          {/* CTA Banner - Subido más por petición del usuario */}
          <div className="relative z-10 -mt-12 md:mt-0 md:-translate-y-1/2">
            <div className="section-container">
              <div className="bg-gradient-to-r from-primary via-primary/90 to-orange-600 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                {/* Subtle diagonal lines */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 80px)`
                }} />

                <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <h3 className="font-heading text-3xl md:text-4xl font-bold mb-2">
                      ¡El sabor a tu medida!
                    </h3>
                    <p className="text-white/90 text-lg">
                      Pizza artesanal lista para pedir. Abierto desde las 5:00 p.m.
                    </p>
                  </div>
                  <Link
                    href="https://linktr.ee/metropizzacol?utm_source=linktree_profile_share&ltsid=28985606-398f-41eb-aae1-6ff7192ca4b8"
                    target="_blank"
                    className="btn bg-white text-text-main hover:bg-gray-100 whitespace-nowrap px-10 py-4 shadow-xl flex gap-2 items-center"
                  >
                    <Phone className="w-5 h-5" /> Pedir Ahora
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="section-container pb-8">
            <div className="grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12">
              <div>
                <Link href="#inicio" className="flex items-center gap-3 font-heading font-black text-3xl tracking-tight mb-6">
                  <Image
                    src={logoImg}
                    alt="Metro Pizza Logo"
                    className="w-12 h-12 object-cover rounded-full shadow-lg border-2 border-white/10"
                    unoptimized
                  />
                  <span>
                    Metro<span className="text-accent">Pizza</span>
                  </span>
                </Link>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Tradicion 100% italiana en tu mesa.
                  Tu pizzeria de confianza en Los Patios desde 2014.
                </p>
                <div className="flex gap-4">
                  <SocialLink
                    href="https://www.instagram.com/metropizza.col/"
                    icon={<Instagram className="w-5 h-5" />}
                  />
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-6">Enlaces Rapidos</h4>
                <ul className="space-y-3">
                  {["Inicio", "Nosotros", "Menu", "Galeria", "Contacto"].map(
                    (link) => (
                      <li key={link}>
                        <Link
                          href={`#${link.toLowerCase()}`}
                          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                        >
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          {link}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-6">Contacto</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                    <div className="text-gray-400 text-sm">
                      <p className="font-bold text-white mb-2">Visítanos en:</p>
                      <p className="mb-1"><span className="text-orange-500 font-semibold">Patios (Gourmet):</span> Cl. 16 #9-45, Los Patios</p>
                      <p className="mb-1"><span className="text-accent font-semibold">Pinar del Río (Premium):</span> Barrio Bellavista, Cúcuta</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-primary shrink-0" />
                    <div className="text-gray-400 text-sm flex flex-col gap-1 w-full mt-1">
                      <p className="font-bold text-white mb-1">Pide ahora en:</p>
                      <Link href="tel:+573108884489" className="hover:text-white transition-colors flex items-center justify-between">
                        <span className="text-orange-500 font-semibold">Patios (Gourmet):</span>
                        <span>+57 310 888 4489</span>
                      </Link>
                      <Link href="tel:+573135501695" className="hover:text-white transition-colors flex items-center justify-between">
                        <span className="text-accent font-semibold">Pinar del Río (Premium):</span>
                        <span>+57 313 550 1695</span>
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <Clock3 className="w-6 h-6 text-orange-500 shrink-0" />
                    <span className="text-gray-400">Abre a las 5:00 p.m.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center text-gray-500 text-sm pt-8">
              &copy; {new Date().getFullYear()} MetroPizza Col. Tradicion 100% Italiana.
            </div>
          </div>
        </footer>
      </main>

      {/* Enhanced Structured Data for SEO */}
      <Script
        id="metropizza-restaurant-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Restaurant",
                "@id": "https://metropizza.com/#restaurant",
                name: "MetroPizza Los Patios",
                description: "Autentica pizza italiana en Los Patios, Norte de Santander. Recetas tradicionales de Italia elaboradas al horno.",
                image: "https://images.unsplash.com/photo-1552832230-c0197dd311f5?q=80&w=1996&auto=format&fit=crop",
                telephone: "+57 310 8884489",
                email: "contacto@metropizza.com",
                url: "https://metropizza.com",
                priceRange: "$$",
                servesCuisine: ["Pizza", "Italian", "Pasta", "Lasagna", "Crepes"],
                currenciesAccepted: "COP",
                paymentAccepted: "Cash, Credit Card, Debit Card",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Cl. 16 #9-45",
                  addressLocality: "Los Patios",
                  addressRegion: "Norte de Santander",
                  postalCode: "541060",
                  addressCountry: "CO",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "7.8389",
                  longitude: "-72.5039",
                },
                openingHours: "Mo-Su 17:00-22:00",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.6",
                  reviewCount: "605",
                  bestRating: "5",
                  worstRating: "1",
                },
                sameAs: [
                  "https://www.instagram.com/metropizza.col/",
                  "https://maps.app.goo.gl/nR7BYQUDbAo6ERg57",
                ],
                hasMap: "https://maps.app.goo.gl/nR7BYQUDbAo6ERg57",
                isAccessibleForFree: true,
                publicAccess: true,
              },
              {
                "@type": "WebSite",
                "@id": "https://metropizza.com/#website",
                url: "https://metropizza.com",
                name: "MetroPizza Los Patios",
                description: "Autentica pizza 100% italiana. Pizza por metro, pastas y lasanas.",
                publisher: {
                  "@id": "https://metropizza.com/#restaurant",
                },
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://metropizza.com/?s={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@type": "WebPage",
                "@id": "https://metropizza.com/#webpage",
                url: "https://metropizza.com",
                name: "MetroPizza Los Patios | Autentica Pizza Italiana",
                isPartOf: {
                  "@id": "https://metropizza.com/#website",
                },
                about: {
                  "@id": "https://metropizza.com/#restaurant",
                },
                description: "Descubre el sabor de Italia en Los Patios. Pizza por metro, pastas artesanales y lasanas. Tradicion 100% italiana.",
                inLanguage: "es-CO",
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "¿Donde esta ubicado MetroPizza?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "MetroPizza cuenta con dos sedes principales: Patios (Gourmet) en la Calle 16 #9-45 y Pinar del Río (Premium) en Barrio Bellavista. Servimos con pasion la autentica tradicion italiana."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "¿Que tipo de cocina ofrece MetroPizza?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Ofrecemos autentica cocina italiana tradicional."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "¿Cual es el horario de atencion?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Abrimos todos los dias a las 5:00 PM. Los fines de semana extendemos el horario segun la demanda."
                    }
                  }
                ]
              }
            ],
          }),
        }}
      />

      {/* LocalBusiness Schema */}
      <Script
        id="metropizza-localbusiness-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "MetroPizza Los Patios",
            image: "https://images.unsplash.com/photo-1552832230-c0197dd311f5?q=80&w=1996&auto=format&fit=crop",
            telephone: "+57 310 8884489",
            email: "contacto@metropizza.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Cl. 16 #9-45",
              addressLocality: "Los Patios",
              addressRegion: "Norte de Santander",
              addressCountry: "CO",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 7.8389,
              longitude: -72.5039,
            },
            url: "https://metropizza.com",
            priceRange: "$$",
            openingHours: ["Mo-Su 17:00-22:00"],
            paymentAccepted: "Efectivo, Tarjeta de Credito, Tarjeta de Debito",
            currenciesAccepted: "COP",
            servesCuisine: ["Pizza", "Italian", "Pasta", "Lasagna", "Crepes"],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.6",
              reviewCount: "605",
            },
            sameAs: [
              "https://www.instagram.com/metropizza.col/",
              "https://maps.app.goo.gl/nR7BYQUDbAo6ERg57",
            ],
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <Script
        id="metropizza-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://metropizza.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Menu",
                item: "https://metropizza.com/#menu",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Contacto",
                item: "https://metropizza.com/#contacto",
              },
            ],
          }),
        }}
      />
    </>
  );
}

const menuData = [
  {
    category: "Pizza Borde Queso",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop", // pizza horneada
    icon: Pizza,
    items: [
      { name: "Genovesa", description: "Pollo, champiñón" },
      { name: "Siciliana", description: "Pollo, jamón" },
      { name: "Veleña", description: "Bocadillo y queso" },
      { name: "Hawaiana", description: "Jamón, piña" },
    ],
  },
  {
    category: "Pizza X Metro",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1935&auto=format&fit=crop",
    icon: Pizza,
    items: [
      { name: "Genovesa", description: "Pollo, champiñón" },
      { name: "Hawaiana Especial", description: "Jamón, piña, tocineta" },
      { name: "De La Casa", description: "Cebolla, pimentón, jamón, tocineta, camarones" },
    ],
  },
  {
    category: "Crepes & Lasagna",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=1935&auto=format&fit=crop",
    icon: Flame,
    items: [
      { name: "Crepe Genovesa", description: "Pollo - champiñón" },
      { name: "Crepe Marinero", description: "Pulpo - calamar - camarón" },
      { name: "Lasagna Mixta", description: "Pollo - jamón - carne - champiñón" },
    ],
  },
  {
    category: "Pastas",
    image: "https://images.unsplash.com/photo-1621996316521-016d50152f95?q=80&w=2070&auto=format&fit=crop",
    icon: UtensilsCrossed,
    items: [
      { name: "A la Bologna", description: "Carne molida con salsa napolitana" },
      { name: "A la Carbonara", description: "Tocineta, salsa bechamel" },
      { name: "A la Marinera", description: "Camarón-calamar-pulpo-mejillón" },
    ],
  },
];

const galleryImages = [
  { src: "https://instagram.fbga2-1.fna.fbcdn.net/v/t51.82787-15/583131844_18097129816794197_1408744934577507404_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=Mzc2ODE0MjAwOTgxMTk0NzQ4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxOS5zZHIuQzMifQ%3D%3D&_nc_ohc=rFAxjjAp6BIQ7kNvwF_CQ7Z&_nc_oc=Adqb2iHrCHaUfk0uDg6s3jOuatD5nrlF6B45I5DKDZUy0S8cg-5uHVSx5_7AEI-yGHO0NlN357ISlsZstXEFJrE3&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbga2-1.fna&_nc_gid=IhFzWzZZm_hGIlKUUPKPyA&_nc_ss=7a32e&oh=00_AfzXEdv9q8_TVA6tfNjsGorR7b7zJOF7ICrytS0DlRNhrg&oe=69CE6544", alt: "Auténtica Pizza Instagram 1" },
  { src: "https://instagram.fbga2-1.fna.fbcdn.net/v/t51.82787-15/576018577_18096612010794197_1647493379411802144_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzc2MzY4MjE1MTgzNDQ0ODk5NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=K2gsXN6r1KMQ7kNvwG9wcuI&_nc_oc=AdphSzjs1VBcu9h7RZYzfuf74282SHbGRwthJaTckpoBe6UMvzIOFvGsu-df2JNkrWRrM5ESLvVM3zWP9crP5TjE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbga2-1.fna&_nc_gid=wYcO776WTInNxv6M251ObA&_nc_ss=7a32e&oh=00_AfwzfO1BBrZHeHk42BPUIVvRaV-frt2cvMEVGgy9UcwOTA&oe=69CE8442", alt: "MetroPizza 2" },
  { src: "https://instagram.fbga2-1.fna.fbcdn.net/v/t51.82787-15/573701870_18096262780794197_8146605463177057127_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=Mzc2MDcxNDg1NzI2MDg4MjUzOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxOS5zZHIuQzMifQ%3D%3D&_nc_ohc=bIBg-A_WbMAQ7kNvwElr1Vd&_nc_oc=Adopn3QUIkQ5RZl2InJNQgpYTyIo-5iRHNZZ9gOiwUPjJdoetWZu1GQet69PnQxfOKSHycFl7U7NMw5gMVbvzcqX&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbga2-1.fna&_nc_gid=lmz-ucxGMbJVvNcdPKut4Q&_nc_ss=7a32e&oh=00_AfxGEPgnacaYmmt-03BukIbySYOw_FQJZ_kKBSe9ccMHGw&oe=69CE76EF", alt: "MetroPizza 3" },
  { src: "https://instagram.fbga2-1.fna.fbcdn.net/v/t51.82787-15/582002465_18096940039794197_2239727367230332515_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=Mzc2NjUyNDA0NDg4MDQ2NTg0Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=1R7JquCAijkQ7kNvwHq9hH1&_nc_oc=AdqLRLehQi-GJB6_Zj1koOp0gD2bakWD9AwxqhsFsUkQOiiQWO727Uup_8q5ljveEi96g0lrUpEd0cV4fmhVNj8e&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbga2-1.fna&_nc_gid=-pyyHtQqDmNpqJ9oFklMTQ&_nc_ss=7a32e&oh=00_AfxAnmZHxf6zEqR81zVWCjw1zyg_wp7Npyv59WYnssGNEQ&oe=69CE7CF0", alt: "MetroPizza 4" },
  { src: "https://instagram.fbga2-1.fna.fbcdn.net/v/t39.30808-6/468055315_18061953916794197_7476465813196411478_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzI0OTIxOTgwMTQyNjM2NDg1Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=nBNdtpqwehAQ7kNvwFcoOQ5&_nc_oc=Adr4enLt8-bZiIOmI3LGqFaSrP3QGWiWYV6FhJ9qbA5C59M1jXAoQSWjjLDXoOml8S8YwQxXt_XJlSjDZzpr_17N&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbga2-1.fna&_nc_gid=xzwvEocwcfsMQCouX0t78A&_nc_ss=7a32e&oh=00_AfwxYU9hdOmLHM1AytDBLkDCUTnQQyDSyjJSSdE0FlV5ow&oe=69CE5D02", alt: "MetroPizza 5" },
  { src: "https://instagram.fbga2-1.fna.fbcdn.net/v/t39.30808-6/402134750_18024779164794197_124564517541382461_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=MzI0MDQ3NDI4MTQ2ODYxMzI2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=QiBwuRueSvoQ7kNvwH4ip3w&_nc_oc=AdoDJcaQOOjv2Hq_gAtARbcT4bWQ3O1NhascKvqUtHRK22Ofy4EaZ2lVJZ014lKa-myuUQdbzUaPdRUyPnzmxtut&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fbga2-1.fna&_nc_gid=LSWhlPsMfHtrqd0dKtn90g&_nc_ss=7a32e&oh=00_AfzL8hm--HbqELLAqRXqyt4DUflWYY4Pk8GNv5D8GQyURA&oe=69CE64E6", alt: "MetroPizza 6" },
  { 
    src: "https://instagram.fbog20-1.fna.fbcdn.net/v/t39.30808-6/396292797_18022298770794197_6781914378553959374_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzIyNjcxNzc1MDQwMzA2ODc1Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNDl4MTY4Ny5zZHIuQzMifQ%3D%3D&_nc_ohc=t_76cbSPIVMQ7kNvwE4pZrU&_nc_oc=AdpEy0vNv64MAuoMiQr2jcfA3IRvNStx0IwBxjZAnm-v0ypfeICQvkF1OcAgs9dXJog&_nc_ad=z-m&_nc_cid=1462&_nc_zt=23&_nc_ht=instagram.fbog20-1.fna&_nc_gid=rZNUXKF3aqAD5u6qtrz-ww&_nc_ss=7a32e&oh=00_Af0_KALA8ag3D93zexNR7X--VroU2M_5G6LtxRoyfL8Dxg&oe=69D381B3", 
    alt: "Momento MetroPizza - Slice de Verdad" 
  },
  { 
    src: "https://instagram.fbog20-1.fna.fbcdn.net/v/t39.30808-6/392938801_18020404813794197_6164225698629784100_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzIxNTA5ODkzNjkwMTIzMDQ0OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNDl4MTY4Ny5zZHIuQzMifQ%3D%3D&_nc_ohc=qMZ6j1TSc60Q7kNvwHm8Tax&_nc_oc=Ado5i0062rfZmibw4ttQEsT7HevPl0xH0p-MdSfA3SzYYxL7SjUik5h-qn00ZI2xqRk&_nc_ad=z-m&_nc_cid=1462&_nc_zt=23&_nc_ht=instagram.fbog20-1.fna&_nc_gid=3EDGtbiJ264q8_30nbvdiQ&_nc_ss=7a32e&oh=00_Af1looksQIzmJ3T8mEKTfcRurFS8djFtDzKpqCjcEP6-Xg&oe=69D37DE9", 
    alt: "Especialidad de la Casa - Mucho Queso" 
  },
];


const testimonials = [
  {
    name: "Stevens Lopesierra",
    text: "La autentica pizza italiana en Los Patios. El sabor me recuerda a mis vacaciones en Roma. Excelente calidad!",
  },
  {
    name: "Marlene Rivera",
    text: "Un lugar donde la tradicion italiana se siente en cada plato. Ambiente familiar y servicio calido colombiano.",
  },
  {
    name: "Brayan Stive Zapata",
    text: "La pizza por metro es espectacular! Perfecta para compartir en familia. Sin duda, lo mejor de la region.",
  },
];

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:scale-110 transition-all duration-300"
    >
      {icon}
    </Link>
  );
}