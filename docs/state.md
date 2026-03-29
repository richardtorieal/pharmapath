# PharmaPath — State Management

## Overview
PharmaPath does not use external state management libraries (like Redux, Zustand, or Context API). All state is kept close to where it's needed using standard React `useState` hooks, mostly centralized within parent views.

## Global State Container: `App.jsx`
Responsible for high-level view routing and deeply shared items.
```javascript
const [view, setView] = useState("home");         // Controls: "home" | "drug" | "designer"
const [selectedDrug, setSelectedDrug] = useState(null); // The currently active drug object from constants.js
```

## Local Component State

### 1. `HomeScreen.jsx`
Responsible for the landing page UI state.
- `filter`: (String) Currently active category filter (e.g., "all", "cardiology").
- `search`: (String) User's search query across drug names and descriptions.

### 2. `DrugScreen.jsx`
Responsible for the deep-dive lifecycle display model.
- `step`: (Integer) Current vertical step index representing the drug's timeline stage (0-5).
- `depth`: (String) Detail level indicator ("L2" or "L3").
- `selAtom`: (Object | null) Active selected atom from the Three.js 3D viewer interaction.

### 3. `DesignerScreen.jsx`
Responsible for the drag-and-drop molecule creation and AI workflow state.
- `canvas`: (Array) List of molecule component objects currently dropped to the screen.
- `dragging`: (Object | null) Current component being dragged.
- `isOver`: (Boolean) Status tracking if dragged object is hovering on the drop zone.
- `loading`: (Boolean) Represents the loading state during the AI network call.
- `loadingPhrase`: (String) Fun strings that flip on an interval during AI generation.
- `result`: (Object | null) Formatted JSON response from the underlying `ai.service.js`.
- `error`: (String | null) Contains string error tags if the AI throws an exception (`lab_error`).

### Data Fetching and Services
- Local data is hardcoded into `src/constants.js` and `src/molecules.js` and flows downwards as props.
- Remote data points (AI calls via `src/services/ai.service.js`) keep intermediate promise state inside `.jsx` view functions (handled by `DesignerScreen.jsx` catching results/errors).
