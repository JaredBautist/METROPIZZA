# Graph Report - METROPIZZA  (2026-09-28)

## Corpus Check
- 27 files · ~193,187 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 158 nodes · 166 edges · 14 communities (12 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `71aa894d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- page.tsx
- package.json
- compilerOptions
- react
- layout.tsx
- devDependencies
- dependencies
- scripts
- eslint.config.mjs
- postcss.config.mjs
- Cambios Realizados
- Componentes Disponibles
- Senior Marketing, UX y Sales Psychology
- README.md

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `react` - 12 edges
3. `Componentes Disponibles` - 8 edges
4. `Mejoras SEO y Diseño Italia-Colombia` - 6 edges
5. `Cambios Realizados` - 6 edges
6. `scripts` - 5 edges
7. `next` - 5 edges
8. `lucide-react` - 4 edges
9. `Senior Marketing, UX y Sales Psychology` - 4 edges
10. `Navbar()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Navbar()` --calls--> `cn()`  [EXTRACTED]
  src/components/Navbar.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (14 total, 2 thin omitted)

### Community 0 - "page.tsx"
Cohesion: 0.10
Nodes (18): lucide-react, galleryImages, locationMenus, menuData, Navbar(), navItems, AnimatedCounter(), AnimatedCounterProps (+10 more)

### Community 1 - "package.json"
Cohesion: 0.11
Nodes (18): name, private, version, autoprefixer, class-variance-authority, clsx, eslint, eslint-config-next (+10 more)

### Community 2 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 3 - "react"
Cohesion: 0.12
Nodes (6): react, Particle, ImageParallaxProps, MagneticButtonProps, MenuItemCardProps, TestimonialCardProps

### Community 4 - "layout.tsx"
Cohesion: 0.14
Nodes (7): nextConfig, next, greatVibes, metadata, outfit, playfair, viewport

### Community 5 - "devDependencies"
Cohesion: 0.18
Nodes (11): devDependencies, autoprefixer, eslint, eslint-config-next, postcss, tailwindcss, @tailwindcss/postcss, @types/node (+3 more)

### Community 6 - "dependencies"
Cohesion: 0.22
Nodes (9): dependencies, class-variance-authority, clsx, lucide-react, next, prototios-workspace, react, react-dom (+1 more)

### Community 7 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 10 - "Cambios Realizados"
Cohesion: 0.17
Nodes (11): 1. Paleta de Colores Italia-Colombia, 2. SEO Mejorado para IA y Navegadores, 3. Elementos Visuales Italia-Colombia, 4. Contenido Optimizado, 5. Mejoras Tecnicas SEO, Cambios Realizados, Como Verificar el SEO, Mejoras SEO y Diseño Italia-Colombia (+3 more)

### Community 11 - "Componentes Disponibles"
Cohesion: 0.17
Nodes (10): AnimatedCounter, Badge, Componentes Disponibles, Componentes UI de MetroPizza, FeatureCard, ImageParallax, MagneticButton, SectionReveal (+2 more)

### Community 12 - "Senior Marketing, UX y Sales Psychology"
Cohesion: 0.40
Nodes (4): 1. Psicología de Ventas (Sales Psychology), 2. Experiencia de Usuario (User Experience - UX), 3. Marketing Digital & SEO Integrado, Senior Marketing, UX y Sales Psychology

### Community 13 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **102 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+97 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 118 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `page.tsx`, `package.json`?**
  _High betweenness centrality (0.183) - this node is a cross-community bridge._
- **Why does `next` connect `layout.tsx` to `package.json`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _102 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09788359788359788 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._