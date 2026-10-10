# General Eye Care Diagnostics Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a diagnostic-services feature slider and advanced-equipment grid after the General Eye Care examination journey.

**Architecture:** Generate one section hero and six original equipment visuals in `public/`. A new client component owns immutable diagnostic-service data and the one-card React Slick behavior. The General Eye Care page composes that component after the journey section, while its CSS module owns desktop and responsive layout.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, `next/image`, React Slick, CSS Modules, Lucide icons, built-in image generation.

**Spec:** `docs/superpowers/specs/2026-09-28-general-diagnostics-design.md`

## Global Constraints

- Generated files use new descriptive versioned filenames under `public/`; do not overwrite existing assets.
- Generated visuals are clean clinical/equipment photographs without logos, text, watermarks, or fabricated UI labels.
- The slider presents one large card at a time and pauses on hover/focus.
- Preserve visible keyboard focus and disable non-essential movement under `prefers-reduced-motion`.
- Equipment cards are three columns on desktop, two on tablet, and one on mobile.
- Verify with `npm run type-check`, `npm run build`, and visual inspection at desktop and mobile widths.

## Review Focus

- A user with reduced motion sees a stable diagnostic card rather than auto-advancing content.
- Keyboard focus pauses the slider and its focus ring remains visible against the pale surface.
- The seven diagnostic items all render one at a time and retain unique, meaningful alternative text.
- The six equipment tiles reduce to two columns then one without image cropping or text overflow.
- Generated asset references resolve from `public/` in the static production build.

---

### Task 1: Generate the diagnostics image set

**Files:**
- Create: `public/general-diagnostics-hero-v1.png`
- Create: `public/general-equipment-oertli-faros-v1.png`
- Create: `public/general-equipment-zeiss-visu-160-v1.png`
- Create: `public/general-equipment-zeiss-oct-v1.png`
- Create: `public/general-equipment-lenstar-pro-v1.png`
- Create: `public/general-equipment-icare-tonometer-v1.png`
- Create: `public/general-equipment-appasamy-yag-laser-v1.png`

**Interfaces:** Produces seven public image paths consumed by `DiagnosticsShowcase.tsx`.

- [ ] Generate and inspect a wide clinical diagnostic hero with an ophthalmologist using a slit-lamp microscope, a patient, bright Indian clinic environment, no logo/text/watermark, and 16:9 framing.
- [ ] Generate and inspect six square clinical product photographs—one per equipment item—with a pale clinical background, no brand text/watermark, and clear subject crop.
- [ ] Copy accepted outputs into `public/` with exactly the seven filenames above; confirm each file is non-empty.
- [ ] Run `rg --files public | rg 'general-(diagnostics|equipment).*v1'`; expected: all seven assets appear.
- [ ] Commit only those assets with message `assets: add general diagnostics visuals`.

### Task 2: Add the diagnostic-services slider component

**Files:**
- Create: `src/app/services/general/DiagnosticsShowcase.tsx`
- Modify: `src/app/services/general/general.module.css`

**Interfaces:** Consumes Task 1 image paths. Produces default export `DiagnosticsShowcase(): JSX.Element` for `page.tsx`.

- [ ] Define readonly diagnostic service data for Comprehensive Eye Examination, Vision Testing, Eye Pressure Testing, Retina Examination, OCT, Optical Biometry, and Color Vision Testing. Each item includes a Lucide icon, concise description, image path, and unique alt text.
- [ ] Before creating the component, import `DiagnosticsShowcase` in `page.tsx` and run `npm run type-check`; expected: unresolved module failure.
- [ ] Implement `DiagnosticsShowcase` with React Slick: `slidesToShow: 1`, dots, `autoplay: true`, 5000ms interval, `pauseOnFocus: true`, and `pauseOnHover: true`. Render the generated hero, one diagnostic card at a time, and an equipment heading followed by six cards.
- [ ] Add CSS for a substantial diagnostic slide, visible focus state, reduced-motion behavior, and the 3/2/1 equipment grid.
- [ ] Run `npm run type-check && npm run build`; expected: pass with static image paths resolved.
- [ ] Commit component and CSS with message `feat: add diagnostics showcase component`.

### Task 3: Integrate and inspect the General Eye Care section

**Files:**
- Modify: `src/app/services/general/page.tsx`
- Modify: `src/app/services/general/general.module.css`

**Interfaces:** Consumes default `DiagnosticsShowcase` from Task 2. Produces the new section directly after `.examJourney`.

- [ ] Render `<DiagnosticsShowcase />` immediately after the examination-journey section without changing existing section order or copy.
- [ ] Run `npm run build`; expected: pass and include `/services/general` in static output.
- [ ] Inspect `/services/general` at desktop and 390px widths. Confirm one diagnostic slide remains visible, equipment cards follow 3/2/1 columns, focus styles are visible, and no image or text is clipped.
- [ ] Commit integration with message `feat: add diagnostics section to general eye care`.

## Self-review

- Spec coverage: Tasks 1–3 cover generated assets, service/equipment content, accessible slider behavior, responsive grid, and verification.
- Type consistency: Task 2 defines `DiagnosticsShowcase` as the default export consumed by Task 3.
- Review focus coverage: Tasks 2–3 explicitly inspect motion, focus, one-card rendering, public paths, and responsive columns.
- Proportion: tasks define interfaces and checks without transcribing implementation code.
