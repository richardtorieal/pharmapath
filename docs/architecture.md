# PharmaPath — Architecture

## Routing

PharmaPath uses a hand-rolled view-state router — no React Router or similar library.

**Location:** `src/App.jsx`

```
view === "home"      →  <HomeScreen onSelect={drug => { setSelectedDrug(drug); setView("drug") }} />
view === "drug"      →  <DrugScreen drug={selectedDrug} onBack={() => setView("home")} />
view === "designer"  →  <DesignerScreen />
```

`<NavBar>` is rendered outside the switch and persists across all views.

### Navigation triggers
| Action | Result |
|--------|--------|
| Click drug card (HomeScreen) | `setSelectedDrug(drug)` + `setView("drug")` |
| Click "Open Drug Designer" | `setView("designer")` |
| NavBar home button | `setView("home")` |
| NavBar designer button | `setView("designer")` |
| Back arrow in DrugScreen | `setView("home")` |

---

## State Management

No Redux, no Zustand, no Context API. All state lives in `useState` hooks.

### Global state (App.jsx)
```javascript
const [view, setView] = useState("home");         // "home" | "drug" | "designer"
const [selectedDrug, setSelectedDrug] = useState(null); // Drug object from DRUGS[]
```

### Local screen state

**HomeScreen.jsx**
```javascript
const [filter, setFilter] = useState("all");  // Category filter
const [search, setSearch] = useState("");      // Search query
```

**DrugScreen.jsx**
```javascript
const [step, setStep] = useState(0);       // Lifecycle step index (0–5)
const [depth, setDepth] = useState("L2");  // "L2" | "L3"
const [selAtom, setSelAtom] = useState(null); // Selected atom from 3D viewer
```

---

## Data Flow

```
constants.js (DRUGS, LC_CONTENT, CPK, LIFECYCLE_STEPS)
    │
    └─► HomeScreen: filters/searches DRUGS, renders cards
              │ onSelect(drug)
              ▼
         App.jsx: stores selectedDrug, switches view to "drug"
              │ drug prop
              ▼
         DrugScreen: reads drug fields, looks up molecules.js[drug.id]
              │ molData prop
              ▼
         MolViewer: renders Three.js scene
              │ onSelectAtom(atom)
              ▼
         AtomPanel: displays atom.element, atom.role, atom.desc

         DrugScreen also reads:
           - LC_CONTENT[step][depth](drug) → markdown string → MD component
           - LIFECYCLE_STEPS[step] → title, icon, short label
           - drug.pgx → PGxSection

         DesignerScreen: uses drag-and-drop to assemble molecule parts
              │ on analyze click
              ▼
         services/ai.service.js: abstract layer to fetch AI pharmacology reviews
              │ formats array of molecule components as prompt
              │ uses multi-stage AI fallback (Google Gen AI primary/fallback -> OpenRouter failover)
              ▼
         DesignerScreen: reads typed AI JSON response and updates state
```

---

## Style Injection

Global CSS is stored as a string in `src/styles.js` and injected once into `<head>` by App.jsx:

```javascript
useEffect(() => {
  if (!document.querySelector("#pp-styles")) {
    const style = document.createElement("style");
    style.id = "pp-styles";
    style.textContent = STYLES;
    document.head.appendChild(style);
  }
}, []);
```

This prevents FOUC (Flash of Unstyled Content). The `#pp-styles` guard prevents double injection.

---

## Progressive Web App (PWA)

### Service Worker (`sw.js` / `public/sw.js`)
- **Strategy:** Cache-first with network fallback
- **On install:** Pre-caches index.html, manifest, icons, entry/main JS files
- **On fetch:** Checks cache first; if miss, fetches from network and caches response
- **On activate:** Deletes old cache versions
- **Offline:** Serves cached index.html as fallback

### Registration (`entry.jsx`)
```javascript
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
```
Errors are silently swallowed to prevent blocking app startup.

### Manifest (`manifest.webmanifest`)
```json
{
  "name": "PharmaPath",
  "display": "standalone",
  "start_url": ".",
  "theme_color": "#060d1a",
  "background_color": "#060d1a"
}
```

---

## Three.js Molecule Rendering (MolViewer)

### Scene setup
- `PerspectiveCamera` — 45° FOV, near 0.1, far 100
- 3 lights: `AmbientLight` (0.6) + 2 × `DirectionalLight` (0.8 each, orthogonal)
- `WebGLRenderer` with `antialias: true`, alpha background

### Atom rendering
- `SphereGeometry` scaled by CPK van der Waals radius
- `MeshPhongMaterial` with CPK hex color
- Emissive highlight applied on click selection

### Bond rendering
- `CylinderGeometry` (radius 0.06) placed between atom pairs
- Oriented using `lookAt` + rotation offset

### Interaction
| Input | Effect |
|-------|--------|
| Mouse/touch drag | Rotate molecule (euler angles) |
| Scroll wheel | Zoom (camera Z: 6–40 units) |
| Click atom | Raycast → `onSelectAtom(atomData)` callback |

### Cleanup
Full Three.js resource disposal (geometries, materials, renderer) on component unmount.

---

## File Entry Points

```
index.html  →  entry.jsx  →  main.jsx  →  src/App.jsx
```

- `index.html`: HTML shell with `<div id="root">` and `<script type="module" src="entry.jsx">`
- `entry.jsx`: `ReactDOM.createRoot(document.getElementById("root")).render(<App />)` + SW registration
- `main.jsx`: `export { default } from "./src/App.jsx"` (thin re-export for Vite compatibility)
- `src/App.jsx`: Root component with global state, style injection, and view routing
