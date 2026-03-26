# PharmaPath — Roadmap & Known Gaps

## Incomplete Features

### 1. DesignerScreen (high priority)
**File:** `src/screens/DesignerScreen.jsx`
**Status:** Empty placeholder (1 line)

**What needs to be built:**
- Element/functional group palette (drag source)
- Canvas/drop zone for assembling molecules
- Visual bond editor (click atoms to connect)
- "Analyze" button that calls OpenRouter API
- Response display panel showing AI commentary
- Clear/reset canvas action
- Responsive layout (2-column desktop, stacked mobile)

**Existing infrastructure:**
- OpenRouter API key is already configured (`VITE_OPENROUTER_API_KEY`)
- CSS classes for designer layout already exist in `styles.js`
- `MB` builder class in `molecules.js` can programmatically create molecules

---

### 2. Molecule Data Completeness (medium priority)
**File:** `src/molecules.js`
**Status:** Only `amoxicillin` has a full 3D structure. Most other drugs are stubs or missing.

**What needs to be built:**
- Complete 3D atom coordinates and bonds for all ~20 drugs
- Add `role` and `desc` fields to every atom for educational content
- Priority drugs: atorvastatin, warfarin, metformin, clopidogrel, lisinopril

**Approach:**
Use the `MB` builder class pattern already established in `molecules.js`. Source coordinates from PubChem SDF files or compute approximate positions from SMILES strings.

---

### 3. User Authentication (low priority)
**Status:** Firebase configured, no auth code written

**What needs to be built:**
- Firebase SDK initialization
- Login/logout UI (Google OAuth at minimum)
- Protected routes (if any content should be gated)

---

### 4. User Data Persistence (low priority, depends on auth)
**Status:** Not started

**Potential features:**
- Save designed molecules
- Bookmark drugs
- Notes on drug lifecycle steps
- Progress tracking (which lifecycle steps have been read)

---

### 5. More Drugs (ongoing)
**File:** `src/constants.js` → `DRUGS` array
**Status:** ~20 drugs defined across 4 categories

**What needs to be added:**
- More drugs per category to round out coverage
- Rare disease drugs (orphan drugs)
- Biologics / monoclonal antibodies (different lifecycle path)
- Biosimilars

---

### 6. Error Handling & Loading States (low priority)
**Status:** None implemented

**Current gaps:**
- No loading spinner while Three.js initializes
- No error boundary around MolViewer (WebGL failure would crash screen)
- No error handling for OpenRouter API failures (when DesignerScreen is built)
- No 404/fallback for invalid `drug.id` values

---

## Known Technical Debt

### API Key in Client Bundle
`VITE_OPENROUTER_API_KEY` is a Vite env var and will be embedded in the JS bundle. For production, wrap the API call in a serverless function (Firebase Functions, Vercel Edge Function, etc.) to keep the key server-side.

### Inline Styles vs CSS Classes
The codebase mixes `style` props and CSS class names inconsistently. A future cleanup could consolidate to one approach per component.

### Hard-coded Lifecycle Content
`LC_CONTENT` in `constants.js` is a large, unwieldy object with template literals. As more drugs are added, this will become difficult to maintain. Consider moving content to JSON or MDX files.

### No TypeScript
The codebase is plain JavaScript. Adding TypeScript would improve safety for the `Drug`, `Atom`, and `MoleculeData` types which are used across multiple files.

---

## Potential Future Features

| Feature | Notes |
|---------|-------|
| Side-by-side drug comparison | Compare lifecycle, PGx, and molecular properties of two drugs |
| Quiz / learning mode | Test knowledge after reading lifecycle steps |
| Filtered PGx view | Show only drugs with PGx variants for a selected gene |
| Print / export | PDF export of a drug's full lifecycle summary |
| Accessibility improvements | ARIA labels on 3D viewer, keyboard nav for stepper |
| i18n | Spanish translation for broader reach |
