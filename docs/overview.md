# PharmaPath — Application Overview

## Purpose

PharmaPath is an educational platform covering pharmaceutical drug development, pharmacogenomics (PGx), and racial equity in medicine. It is a client-side SPA with no backend — all drug and molecule data is bundled statically.

**Core educational goals:**
- Walk users through a drug's full lifecycle (Ideation → Post-Market) at two depth levels
- Visualize 3D molecular structures interactively
- Surface pharmacogenomic (PGx) data and population-level variant frequencies
- Highlight racial and ancestral disparities in drug efficacy, clinical trial representation, and prescribing

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| UI Framework | React | 18.2.0 |
| Build Tool | Vite | 5.0.0 |
| 3D Rendering | Three.js | 0.158.0 |
| JSX Transform | @vitejs/plugin-react | 4.0.0 |
| Styling | Injected global CSS (no library) | — |
| Deployment | Firebase Hosting | — |
| AI API | OpenRouter (free tier) | — |

No CSS framework, no state library, no routing library, no backend.

---

## Project Structure

```
PharmaPath/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.jsx       # Drug library with search & category filter
│   │   ├── DrugScreen.jsx       # Drug detail: 3D viewer + lifecycle stepper
│   │   └── DesignerScreen.jsx   # AI drug designer (placeholder — not implemented)
│   ├── components/
│   │   ├── NavBar.jsx           # Sticky top navigation
│   │   ├── MolViewer.jsx        # Three.js 3D molecule renderer
│   │   ├── AtomPanel.jsx        # Slide-in panel for selected atom details
│   │   ├── LegendChip.jsx       # CPK element color chip for legend
│   │   ├── DepthToggle.jsx      # L2 / L3 depth switcher
│   │   ├── MD.jsx               # Lightweight markdown renderer
│   │   └── PGxSection.jsx       # Pharmacogenomics info block
│   ├── App.jsx                  # Root: view state, routing, style injection
│   ├── constants.js             # DRUGS array, CPK colors, lifecycle steps & content
│   ├── molecules.js             # 3D molecule definitions (atom coords + bonds)
│   └── styles.js                # Global CSS string (injected at runtime)
├── public/
│   ├── manifest.webmanifest     # PWA manifest
│   ├── sw.js                    # Service worker (cache-first)
│   ├── icon-192.svg             # PWA icon small
│   └── icon-512.svg             # PWA icon large
├── entry.jsx                    # React DOM root mount + service worker registration
├── main.jsx                     # Re-exports App from src/App.jsx
├── index.html                   # HTML shell (mounts to #root)
├── vite.config.js               # Vite config (react plugin)
├── firebase.json                # Firebase Hosting: serve dist/, rewrite to index.html
├── .firebaserc                  # Firebase project: pharmapath-app
├── .env.local                   # VITE_OPENROUTER_API_KEY (not committed)
└── dist/                        # Vite build output
```

---

## Scripts

```json
"dev":     "vite"          // Dev server at localhost:5173
"build":   "vite build"    // Production bundle → /dist
"preview": "vite preview"  // Serve built /dist locally
```

---

## Build & Deployment

### Firebase Hosting (primary)
```bash
npm run build
firebase deploy --only hosting
```
The `firebase.json` rewrites all routes to `index.html` (SPA mode). Public directory is `dist`.

### Vercel (alternative)
```bash
vercel
```
Mentioned in README as a supported deploy target.

### Environment Variables
Create `.env.local` in the project root:
```
VITE_OPENROUTER_API_KEY=sk-or-v1-...
```
Accessed in code via `import.meta.env.VITE_OPENROUTER_API_KEY`.

---

## Data Sources

All data is hardcoded in source files — there is no database or API for drug/molecule data.

| Data | File | Count |
|------|------|-------|
| Drug records | `src/constants.js` → `DRUGS` array | ~20 drugs |
| 3D molecule structures | `src/molecules.js` | Partial (amoxicillin fully defined; others are stubs) |
| Lifecycle step definitions | `src/constants.js` → `LIFECYCLE_STEPS` | 6 steps |
| Lifecycle text content | `src/constants.js` → `LC_CONTENT` | L2 + L3 per step |
| CPK atom colors & radii | `src/constants.js` → `CPK` | 9 elements |
