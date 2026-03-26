# PharmaPath — Design System & Styling

## Overview

Styling is implemented as a single global CSS string in `src/styles.js`, injected into `<head>` at runtime by `App.jsx`. There is no Tailwind, no CSS modules, no styled-components.

Inline `style` props are used extensively for dynamic theming (e.g., drug card colors, conditional visibility, layout adjustments).

---

## Typography

| Font | Usage | Source |
|------|-------|--------|
| Syne | Headings, nav, hero text | Google Fonts |
| DM Sans | Body copy, labels, content | Google Fonts |
| JetBrains Mono | Chemical formulas, code, mono values | Google Fonts |

---

## Color Palette

| Role | Variable / Value | Usage |
|------|-----------------|-------|
| Background | `#060d1a` | Page background |
| Surface | `#0d1b2e` / `#0a1628` | Cards, panels |
| Border | `rgba(255,255,255,0.08)` | Card/panel borders |
| Primary | `#38bdf8` | Links, active states, sky-blue accents |
| Success / PGx | `#34d399` | PGx badges, teal accents |
| Warning | `#fbbf24` | Amber/yellow highlights |
| Danger | `#f87171` | Error states, red accents |
| Text primary | `#e2e8f0` | Main body text |
| Text muted | `#94a3b8` | Secondary labels, metadata |

---

## CSS Classes

### Layout
| Class | Description |
|-------|-------------|
| `.pp` | Main app container — full viewport, dark background |
| `.panel` | Bordered content block with padding |
| `.scroll` | Scrollable container with custom thin scrollbar |

### Cards
| Class | Description |
|-------|-------------|
| `.card` | Drug card — hover lifts (translateY -2px), pointer cursor |
| `.card:hover` | Border highlights, subtle box-shadow |

### Buttons
| Class | Description |
|-------|-------------|
| `.btn` | Base button — outlined, muted |
| `.btn-solid` | Filled primary button |
| `.btn-active` | Active/selected button state (primary color fill) |

### Depth Toggle
| Class | Description |
|-------|-------------|
| `.depth-bar` | Flex container for L2/L3 toggle |
| `.depth-btn` | Individual toggle button |
| `.depth-btn.active` | Active depth button (highlighted) |

### Pharmacogenomics
| Class | Description |
|-------|-------------|
| `.pgx-banner` | Outer teal-tinted PGx info container |
| `.pgx-banner-blk` | Dark inner block within PGx banner |

### Animations
| Class | Description |
|-------|-------------|
| `.fadein` | Fade in + slide up on mount (`opacity: 0 → 1`, `translateY: 10px → 0`, 0.3s ease) |

### Lifecycle
| Class | Description |
|-------|-------------|
| `.step-content` | Lifecycle step content area (max-height 420px, scrollable) |
| `.step-nav` | Step navigation button row |

---

## Responsive Breakpoints

| Breakpoint | Target | Key Changes |
|-----------|--------|-------------|
| `max-width: 768px` | Tablets | Two-column layout → single column, reduced padding |
| `max-width: 450px` | iPhone/small mobile | Full flex stacking, larger tap targets, no grid |

### iPhone-specific fixes (450px)
- `DrugScreen` 2-column section collapses to vertical stack
- `MolViewer` fills full width
- Lifecycle step buttons wrap/truncate
- Grid layout removed (conflicts with flex stacking fixed in recent commits)

---

## Inline Style Patterns

Several components use inline styles for dynamic values:

```jsx
// Drug card color theming (HomeScreen)
<div style={{ borderLeft: `3px solid ${drug.color}` }}>

// MolViewer container (DrugScreen)
<div style={{ height: 400, position: "relative" }}>

// AtomPanel slide-in visibility
<div style={{ display: selAtom ? "block" : "none" }}>

// Lifecycle step progress indicator
<span style={{ color: "#94a3b8" }}>Step {step + 1} of 6</span>
```

---

## Icon / Asset Sources

- **App icons:** Custom SVG (`icon-192.svg`, `icon-512.svg`) — stored in `public/`
- **Emoji icons:** Used directly in lifecycle step definitions (🔬 ⚗️ 🐭 🏥 📋 📊)
- **No icon library** (no FontAwesome, no Heroicons)
