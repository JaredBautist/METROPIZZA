# Graph Report - METROPIZZA  (2026-09-19)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 125 nodes · 137 edges · 10 communities (8 shown, 2 thin omitted)
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

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `react` - 12 edges
3. `next` - 5 edges
4. `scripts` - 5 edges
5. `lucide-react` - 4 edges
6. `Navbar()` - 3 edges
7. `cn()` - 3 edges
8. `AnimatedCounter()` - 2 edges
9. `Badge()` - 2 edges
10. `FeatureCard()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Navbar()` --calls--> `cn()`  [EXTRACTED]
  src/components/Navbar.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (10 total, 2 thin omitted)

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

## Knowledge Gaps
- **80 isolated node(s):** `AnimatedCounterProps`, `BadgeProps`, `FeatureCardProps`, `SectionRevealProps`, `Testimonial` (+75 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 92 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `page.tsx`, `package.json`?**
  _High betweenness centrality (0.294) - this node is a cross-community bridge._
- **Why does `next` connect `layout.tsx` to `package.json`?**
  _High betweenness centrality (0.157) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **What connects `AnimatedCounterProps`, `BadgeProps`, `FeatureCardProps` to the rest of the system?**
  _80 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09788359788359788 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._