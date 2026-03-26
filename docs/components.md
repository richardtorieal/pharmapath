# PharmaPath — Components

All reusable components live in `src/components/`.

---

## NavBar (`src/components/NavBar.jsx`)

Sticky top navigation bar rendered on every screen.

### Props
| Prop | Type | Description |
|------|------|-------------|
| `view` | `string` | Current view — `"home"` \| `"drug"` \| `"designer"` |
| `onHome` | `() => void` | Called when the home/logo button is clicked |
| `onDesigner` | `() => void` | Called when the Designer nav item is clicked |

### Behavior
- Logo/app name always navigates home (`onHome`)
- Designer link calls `onDesigner`
- Active view is visually indicated

---

## MolViewer (`src/components/MolViewer.jsx`)

Three.js-powered 3D molecule renderer. Renders atoms as CPK-colored spheres and bonds as cylinders.

### Props
| Prop | Type | Description |
|------|------|-------------|
| `molData` | `{ atoms: Atom[], bonds: [number, number][] }` \| `null` | Molecule to render. If `null`, shows a "no structure" message |
| `onSelectAtom` | `(atom: Atom) => void` | Called when user clicks an atom |

### Atom type
```typescript
{
  id: number
  element: string      // "C", "H", "N", "O", "S", "F", "Cl", "P", "I"
  x: number
  y: number
  z: number
  role: string         // Short label, e.g. "Beta-lactam nitrogen"
  desc: string         // Full educational description
}
```

### Interactions
| Input | Effect |
|-------|--------|
| Mouse drag / touch drag | Rotate molecule |
| Scroll wheel | Zoom in/out (camera Z: 6–40 units) |
| Click on atom sphere | Highlights atom, calls `onSelectAtom(atom)` |
| Click on empty space | Clears selection |

### Cleanup
Disposes all Three.js geometries, materials, and the WebGL renderer on unmount to prevent memory leaks.

---

## AtomPanel (`src/components/AtomPanel.jsx`)

Slide-in panel shown when a user selects an atom in MolViewer. Displays element identity, functional role, color swatch, and educational description.

### Props
| Prop | Type | Description |
|------|------|-------------|
| `atom` | `Atom \| null` | Atom to display. If `null`, panel is not rendered |
| `onClose` | `() => void` | Called when the close button is clicked |

### Displayed fields
- Element symbol (large)
- Element name
- Color swatch (from CPK palette)
- `atom.role` — short functional label
- `atom.desc` — full description paragraph

---

## DepthToggle (`src/components/DepthToggle.jsx`)

Two-button toggle for switching between L2 (overview) and L3 (technical) content depth in DrugScreen's lifecycle stepper.

### Props
| Prop | Type | Description |
|------|------|-------------|
| `depth` | `"L2" \| "L3"` | Currently active depth |
| `onChange` | `(depth: "L2" \| "L3") => void` | Called with new depth value on toggle |

### CSS classes used
- `.depth-bar` — container
- `.depth-btn` — inactive button
- `.depth-btn.active` / `.btn-active` — active button

---

## LegendChip (`src/components/LegendChip.jsx`)

Small colored chip showing an element symbol with its CPK color. Used in DrugScreen to build the molecule's element legend.

### Props
| Prop | Type | Description |
|------|------|-------------|
| `el` | `string` | Element symbol, e.g. `"C"`, `"N"`, `"O"` |

### Behavior
Looks up `CPK[el]` from `src/constants.js` to get the hex color and displays a colored circle next to the element symbol.

---

## MD (`src/components/MD.jsx`)

Lightweight markdown-to-HTML renderer. No external library — hand-rolled parser.

### Props
| Prop | Type | Description |
|------|------|-------------|
| `text` | `string` | Markdown string to render |
| `style` | `object` (optional) | Additional inline styles on the container |

### Supported syntax
| Markdown | Output |
|----------|--------|
| `**bold**` | `<strong>bold</strong>` |
| Lines starting with `•` | Rendered as bullet list items |
| Plain paragraphs | Wrapped in `<p>` |

Uses `dangerouslySetInnerHTML`. Content comes from `LC_CONTENT` in `constants.js` — not from user input, so XSS risk is minimal.

---

## PGxSection (`src/components/PGxSection.jsx`)

Renders a detailed pharmacogenomics information block for drugs where `drug.pgx === true`.

### Props
| Prop | Type | Description |
|------|------|-------------|
| `drug` | `Drug` | Drug object from `DRUGS[]` |

### Displayed content
- `🧬 Pharmacogenomics` header
- `drug.pgxNote` — detailed text covering:
  - Relevant genetic variants (e.g., CYP2D6, CYP2C19, VKORC1, OCT1, G6PD)
  - Population-level allele frequency data
  - Clinical dosing implications

### CSS classes used
- `.pgx-banner` — teal-tinted info block
- `.pgx-banner-blk` — dark block inside the banner
