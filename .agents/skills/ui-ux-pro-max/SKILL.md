---
name: ui-ux-pro-max
description: AI-powered design intelligence toolkit. Use when building UI/UX to pick styles, color palettes, font pairings, chart types, and UX guidelines. Provides searchable databases of 240+ styles, 127 font pairings, and 99 UX guidelines. Works across SaaS, e-commerce, portfolios, dashboards, and more.
---

# UI/UX Pro Max

AI-powered design intelligence toolkit providing searchable databases of UI styles, color palettes, font pairings, chart types, and UX guidelines. It works as a skill/workflow for AI coding assistants.

## Search Domains

- `product` - Product type recommendations (SaaS, e-commerce, portfolio)
- `style` - UI styles (glassmorphism, minimalism, brutalism) + AI prompts and CSS keywords
- `typography` - Font pairings with Google Fonts imports
- `color` - Color palettes by product type
- `landing` - Page structure and CTA strategies
- `chart` - Chart types and library recommendations
- `ux` - Best practices and anti-patterns
- `icons` - Icon recommendations with import code (Phosphor, Heroicons, Lucide)
- `react` - React/Next.js performance patterns
- `web` - App interface guidelines (iOS/Android/React Native)
- `google-fonts` - Individual Google Fonts lookup
- `gsap` - GSAP animation skeletons by intensity tier (hover, scroll reveal, stagger, page transition, parallax, loading)

## Design Dials (Optional)

When using `--design-system`, apply optional dials to fine-tune output:
- `--variance <1-10>` - Biases style selection (1=centered/minimal → 10=bold/asymmetric)
- `--motion <1-10>` - Attaches a matching GSAP snippet (1=subtle → 10=cinematic)
- `--density <1-10>` - Overrides spacing-scale tokens (1=spacious → 10=dense/dashboard)

## Available Stacks

`html-tailwind` (default), `react`, `nextjs`, `astro`, `vue`, `nuxtjs`, `nuxt-ui`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`, `jetpack-compose`, `threejs`, `angular`, `laravel`

## How to Use This Skill

When building UI, use this skill to:

1. **Pick a design style** from 240+ available: glassmorphism, neumorphism, brutalism, Swiss minimalism, Aurora gradients, retro-futurism, dark OLED luxury, etc.
2. **Get font pairings** that match the aesthetic (127 Google Fonts pairs available)
3. **Select a color palette** appropriate for the product type
4. **Apply GSAP animations** at the right intensity level for the context
5. **Follow UX best practices** from the 99-guideline database

## Workflow

When building a new interface:

1. Identify product type → search `product` domain
2. Choose style direction → search `style` domain  
3. Apply typography → search `typography` domain
4. Set color palette → search `color` domain
5. Add motion if needed → search `gsap` domain with appropriate intensity
6. Validate UX patterns → search `ux` domain

## v2.0 Reasoning Engine

The reasoning engine automatically matches styles to product context. Tell it "fintech dashboard" and it picks a design system that makes sense for fintech — dark, data-dense, trust-signaling blues and greens — not the generic Inter + purple gradient default.

## Style Examples

| Style | Use Case |
|-------|----------|
| Swiss Minimalism | B2B SaaS, professional tools |
| Glassmorphism | Consumer apps, modern dashboards |
| Neumorphism | Productivity apps, settings UIs |
| Brutalism | Creative agencies, portfolio sites |
| Aurora Mesh Gradient | AI/ML products, creative tools |
| Retro-Futurism/Cyberpunk | Gaming, crypto, Web3 |
| Dark OLED Luxury | Premium consumer apps |
| Vibrant Block Maximalist | Fashion, lifestyle brands |
| Claymorphism | Children's apps, playful products |
| Organic Biomorphic | Wellness, sustainability brands |

Source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
