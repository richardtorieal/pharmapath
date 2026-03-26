# PharmaPath — Data Models

All data is defined statically in `src/constants.js` and `src/molecules.js`. There is no database.

---

## Drug Object (`DRUGS` array in `constants.js`)

```typescript
interface Drug {
  id: string         // Unique slug, e.g. "atorvastatin", "amoxicillin"
  name: string       // Generic name, e.g. "Atorvastatin"
  brand: string      // Brand name(s), e.g. "Lipitor"
  cat: "cardiovascular" | "antibiotic" | "neuro" | "metabolic"
  cls: string        // Drug class, e.g. "Statin", "Beta-blocker"
  ind: string        // Primary indication, e.g. "High LDL cholesterol"
  mfr: string        // Manufacturer name
  yr: number         // FDA approval year
  formula: string    // Chemical formula with Unicode subscripts, e.g. "C₃₃H₃₅FN₂O₅"
  mw: string         // Molecular weight string, e.g. "558.6 g/mol"
  pgx: boolean       // Has pharmacogenomic labeling?
  pgxNote: string    // Detailed PGx text (may be empty string if pgx = false)
  rank: string       // Marketing/historical rank description
  color: string      // Hex color string for card theming, e.g. "#38bdf8"
}
```

### Drug Categories
| `cat` value | Description |
|-------------|-------------|
| `"cardiovascular"` | Heart/vascular drugs (statins, beta-blockers, ACE inhibitors, etc.) |
| `"antibiotic"` | Antibiotics and antimicrobials |
| `"neuro"` | Neurological/psychiatric drugs |
| `"metabolic"` | Metabolic drugs (diabetes, obesity, etc.) |

### Special Drugs of Note
- **BiDil** (`id: "bidil"`) — First race-specific FDA-approved drug. Has `rank: "★ Race-Specific"`.
- **Warfarin** — Strong PGx signal (VKORC1, CYP2C9 variants affect dosing significantly).
- **Clopidogrel** — CYP2C19 poor metabolizer risk (FDA Black Box warning).
- **Codeine** — CYP2D6 ultra-rapid metabolizers at risk; contraindicated in children.

---

## Molecule Object (`molecules.js`)

Exported as a map keyed by `drug.id`:

```typescript
// molecules.js exports:
export const MOLECULES: Record<string, MoleculeData>

interface MoleculeData {
  atoms: Atom[]
  bonds: Bond[]
}

interface Atom {
  id: number         // Index (0-based)
  element: string    // Element symbol: "C"|"H"|"N"|"O"|"S"|"F"|"Cl"|"P"|"I"
  x: number          // 3D coordinate in Ångströms
  y: number
  z: number
  role: string       // Short functional label, e.g. "Beta-lactam nitrogen"
  desc: string       // Educational description of this atom's pharmacological role
}

type Bond = [number, number]  // Indices into atoms[]
```

### Completeness
Molecule definitions are partial. `amoxicillin` has a full definition. Most other drugs have stub/partial structures or no 3D data. If `MOLECULES[drug.id]` is undefined, `MolViewer` shows a "no structure available" message.

### Molecule Builder (`MB` class in `molecules.js`)
Internal utility class used to construct molecule data:
```javascript
const mb = new MB();
mb.add("C", x, y, z, { role: "...", desc: "..." });  // Add atom
mb.bond(0, 1);                                         // Add bond by index
mb.ring(cx, cy, cz, n, r, elements);                  // Build n-membered ring
const molData = mb.build();                            // Returns { atoms, bonds }
```

---

## CPK Color System (`CPK` in `constants.js`)

Corey-Pauling-Koltun color scheme — chemistry standard for atom visualization.

```typescript
interface CPKEntry {
  hex: number    // Three.js hex color (e.g. 0x555566)
  css: string    // CSS color string (e.g. "#667")
  r: number      // Van der Waals radius in Ångströms (used to scale sphere size)
}

CPK: Record<string, CPKEntry>
```

| Element | Hex | CSS | Radius |
|---------|-----|-----|--------|
| C | 0x555566 | #667 | 0.36 |
| H | 0xdddddd | #ccc | 0.18 |
| N | 0x4488ff | #4af | 0.34 |
| O | 0xff4444 | #f55 | 0.32 |
| S | 0xffcc00 | #fc0 | 0.34 |
| F | 0x00ee88 | #0e8 | 0.27 |
| Cl | 0x33dd44 | #3d4 | 0.35 |
| P | 0xff8800 | #f80 | 0.35 |
| I | 0x9944aa | #94a | 0.40 |

---

## Lifecycle Step (`LIFECYCLE_STEPS` in `constants.js`)

```typescript
interface LifecycleStep {
  key: string    // "ideation"|"pharmchem"|"preclinical"|"clinical"|"regulatory"|"postmarket"
  title: string  // Full display title
  icon: string   // Emoji
  short: string  // Short label for nav button
}
```

### Steps in order (index 0–5)
| Index | key | title | icon | short |
|-------|-----|-------|------|-------|
| 0 | ideation | Target Ideation & Discovery | 🔬 | Ideation |
| 1 | pharmchem | Pharmaceutical Chemistry | ⚗️ | Pharmo-Chem |
| 2 | preclinical | Preclinical Testing | 🐭 | Preclinical |
| 3 | clinical | Clinical Trials | 🏥 | Clinical |
| 4 | regulatory | Regulatory Review | 📋 | Regulatory |
| 5 | postmarket | Post-Market Surveillance | 📊 | Post-Market |

---

## Lifecycle Content (`LC_CONTENT` in `constants.js`)

```typescript
LC_CONTENT: Record<string, {
  L2: (drug: Drug) => string,  // Returns markdown string (overview level)
  L3: (drug: Drug) => string   // Returns markdown string (technical level)
}>
```

Keys match `LifecycleStep.key`. Content functions receive the full drug object and may branch by `drug.id` or `drug.cat` to give drug-specific text. Output is a markdown string parsed by the `MD` component.

### Special conditional logic in content
- Antibiotic-specific text for `amoxicillin`, `vancomycin`, `rifampin`
- Cardiovascular-specific text for statins, beta-blockers
- PGx regulatory warnings triggered by `drug.pgx === true` in the `regulatory` step
- BiDil racial equity content triggered by `drug.id === "bidil"`
