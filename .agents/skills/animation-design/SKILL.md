---
name: animation-design
description: Use when creating animations, motion effects, 3D scenes, scroll-driven animations, or any interactive visual experiences. Covers GSAP, Framer Motion, Three.js, React Three Fiber, Babylon.js, PixiJS, Lottie, React Spring, Anime.js, Locomotive Scroll, and more. Enforces production-grade patterns and design-first thinking.
---

# Animation Design Skills

Comprehensive skill for creating animations, 3D graphics, motion effects, and interactive web experiences using the full modern web animation stack.

## Interaction Thesis

Before writing any animation code, define an **interaction thesis** — the single sentence that describes what emotion or action the animation serves:

> "This animation [does what] to make the user feel [what] so they [do what]."

Examples:
- "This entrance animation reveals content progressively to build anticipation so users read the full value prop."
- "This scroll-driven parallax creates depth to make the product feel premium so users trust the quality."
- "This hover micro-interaction confirms clickability to reduce hesitation so users convert."

Never add animation just because it looks cool. Every animation must earn its place.

---

## Technology Stack

### Core Animation Libraries

| Library | Best For | When to Use |
|---------|----------|-------------|
| **GSAP + ScrollTrigger** | Professional scroll effects, timelines | Marketing sites, complex sequences |
| **Framer Motion** | React component animations | Product UIs, page transitions |
| **React Spring** | Physics-based motion | Realistic, natural interactions |
| **Anime.js** | Lightweight SVG/CSS animation | Simple effects, no React needed |
| **Lottie** | Designer-created animations | Illustrations, icons, loaders |

### 3D & WebGL Libraries

| Library | Best For | When to Use |
|---------|----------|-------------|
| **Three.js** | Custom WebGL scenes | Full creative control needed |
| **React Three Fiber** | 3D in React apps | React ecosystem, declarative 3D |
| **Babylon.js** | Game-grade 3D | Physics, complex interactions |
| **PixiJS** | 2D WebGL rendering | Games, data viz, particle effects |
| **Spline** | Designer-made 3D | No-code 3D from designers |

### Scroll & Page Transition

| Library | Best For |
|---------|----------|
| **Locomotive Scroll** | Smooth scroll + parallax |
| **Barba.js** | Page transition animations |
| **ScrollReveal** | Simple scroll-triggered reveals |

---

## GSAP + ScrollTrigger

### Core Setup

```javascript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
```

### Intensity Tiers

**Tier 1 — Hover (subtle):**
```javascript
element.addEventListener("mouseenter", () => {
  gsap.to(element, { scale: 1.03, duration: 0.25, ease: "power2.out" });
});
element.addEventListener("mouseleave", () => {
  gsap.to(element, { scale: 1, duration: 0.2, ease: "power2.in" });
});
```

**Tier 2 — Scroll Reveal:**
```javascript
gsap.from(".reveal-element", {
  scrollTrigger: {
    trigger: ".reveal-element",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 40,
  duration: 0.7,
  ease: "power3.out"
});
```

**Tier 3 — Stagger (multiple elements):**
```javascript
gsap.from(".card", {
  scrollTrigger: { trigger: ".cards-container", start: "top 75%" },
  opacity: 0,
  y: 60,
  stagger: 0.12,
  duration: 0.6,
  ease: "power2.out"
});
```

**Tier 4 — Page Transition:**
```javascript
const tl = gsap.timeline();
tl.to(".page-overlay", { scaleY: 1, duration: 0.5, ease: "power4.in" })
  .call(() => router.push(newRoute))
  .to(".page-overlay", { scaleY: 0, duration: 0.5, ease: "power4.out" });
```

**Tier 5 — Parallax:**
```javascript
gsap.to(".parallax-bg", {
  yPercent: -30,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

**Tier 6 — Loading Sequence (cinematic):**
```javascript
const tl = gsap.timeline({ delay: 0.2 });
tl.from(".logo", { opacity: 0, scale: 0.8, duration: 0.8, ease: "back.out(1.7)" })
  .from(".tagline", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
  .from(".nav-items", { opacity: 0, y: -20, stagger: 0.08, duration: 0.4 }, "-=0.2")
  .from(".hero-content", { opacity: 0, y: 40, duration: 0.7, ease: "power3.out" }, "-=0.3");
```

---

## Framer Motion (React)

### Core Patterns

```tsx
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

// Entrance animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  Content
</motion.div>

// Hover + tap interactions
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
>
  Click me
</motion.button>

// Stagger children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

<motion.ul variants={container} initial="hidden" animate="show">
  {items.map(i => (
    <motion.li key={i} variants={item}>{i}</motion.li>
  ))}
</motion.ul>
```

### Scroll-Linked Animation

```tsx
const { scrollYProgress } = useScroll();
const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
const y = useTransform(scrollYProgress, [0, 0.3], [60, 0]);

<motion.div style={{ opacity, y }}>
  Scroll-linked content
</motion.div>
```

### Page Transitions

```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={router.pathname}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
</AnimatePresence>
```

---

## Three.js / React Three Fiber

### React Three Fiber Setup

```bash
npm install @react-three/fiber @react-three/drei three
```

```tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#6366f1" roughness={0.3} metalness={0.7} />
      </mesh>
      <OrbitControls enableZoom={false} />
      <Environment preset="city" />
    </Canvas>
  );
}
```

### Animated 3D Object

```tsx
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function RotatingMesh() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.3;
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8b5cf6" />
    </mesh>
  );
}
```

---

## Lottie Animations

```bash
npm install lottie-react
```

```tsx
import Lottie from "lottie-react";
import animationData from "./animation.json";

<Lottie
  animationData={animationData}
  loop={true}
  style={{ width: 200, height: 200 }}
/>
```

---

## CSS Animation Patterns

### Micro-interaction: Button

```css
.btn {
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}
.btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

### Skeleton Loading

```css
@keyframes skeleton-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s infinite;
  border-radius: 4px;
}
```

### Fade In Up

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease forwards;
}
```

---

## Performance Rules

1. **Prefer `transform` and `opacity`** — they trigger compositing only, not layout/paint
2. **Use `will-change: transform`** sparingly, only when GPU layer is truly needed
3. **Cancel GSAP timelines on unmount** — prevent memory leaks
4. **Lazy-load heavy libs** (Three.js, GSAP) with dynamic imports
5. **Respect `prefers-reduced-motion`** — always

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

```javascript
// GSAP: respect reduced motion
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  // run animations
}
```

---

## Anti-Patterns

❌ **Don't:**
- Animate `width`, `height`, `top`, `left` (causes layout thrashing)
- Use `setTimeout` for animation sequencing (use GSAP timelines or Framer variants)
- Add entrance animations to every element — reserve for focal points
- Autoplay video-like motion without user gesture
- Loop ambient animations indefinitely without reduced-motion check

✅ **Do:**
- Animate `transform: translate/scale/rotate` and `opacity`
- Use spring physics (`type: "spring"`) for UI elements, eased tweens for choreography
- Test at 60fps on mid-range mobile before shipping
- Group related animations into single timelines for easier control
- Provide a static fallback for 3D/WebGL when context creation fails

---

## Available Skills by Category

### Core 3D & Animation
- `threejs-webgl` — Three.js scenes, shaders, geometry
- `gsap-scrolltrigger` — Scroll-driven animations, timelines
- `react-three-fiber` — Declarative 3D in React
- `motion-framer` — Framer Motion component animations
- `babylonjs-engine` — Game-grade 3D with physics

### Extended 3D & Scroll
- `aframe-webxr` — VR/AR web experiences
- `lightweight-3d-effects` — CSS 3D without WebGL
- `playcanvas-engine` — Real-time 3D engine
- `pixijs-2d` — 2D WebGL for games and data viz
- `locomotive-scroll` — Smooth scroll + parallax
- `barba-js` — Page transition system

### Animation & Components
- `react-spring-physics` — Physics-based React animations
- `animated-component-libraries` — Pre-built animated components
- `scroll-reveal-libraries` — Simple scroll triggers
- `animejs` — Lightweight SVG/CSS animation engine
- `lottie-animations` — Designer animations in web

### 3D Authoring & Motion
- `blender-web-pipeline` — Blender → web export workflow
- `spline-interactive` — No-code 3D from designers
- `rive-interactive` — State machine animations
- `substance-3d-texturing` — PBR texture workflows

### Meta Skills
- `web3d-integration-patterns` — Architecture for 3D in web apps
- `modern-web-design` — Design principles for animated interfaces

Source: https://github.com/freshtechbro/claudedesignskills
