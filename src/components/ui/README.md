# Componentes UI de MetroPizza

Este directorio contiene componentes reutilizables de UI construidos con principios de diseño modernos.

## Componentes Disponibles

### SectionReveal
Animación de revelación al hacer scroll.
```tsx
<SectionReveal delay={100} direction="up" duration={800}>
  <div>Contenido</div>
</SectionReveal>
```
**Props:**
- `delay` - Retraso en ms antes de la animación
- `direction` - Dirección de entrada: 'up', 'down', 'left', 'right', 'fade'
- `duration` - Duración de la animación en ms

### AnimatedCounter
Contador animado con easing.
```tsx
<AnimatedCounter end={605} suffix="+" duration={2000} />
```

### Badge
Etiquetas con variantes de color.
```tsx
<Badge variant="primary" icon={<Icon />}>Texto</Badge>
```
**Variants:** default, secondary, accent, outline, white

### FeatureCard
Tarjeta de características con icono.
```tsx
<FeatureCard
  icon={<Pizza />}
  iconColor="text-primary"
  title="Titulo"
  description="Descripcion"
/>
```

### TestimonialCard
Tarjeta de testimonio con estrellas.
```tsx
<TestimonialCard
  quote="Excelente servicio"
  author="Juan Perez"
  rating={5}
/>
```

### MagneticButton
Botón con efecto magnético al hover (requiere JS).

### ImageParallax
Imagen con efecto parallax al scroll.

## Utilidades

### cn()
Función helper para combinar clases CSS condicionalmente.
```tsx
className={cn('base-class', condition && 'conditional-class', className)}
```
