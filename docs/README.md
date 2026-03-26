# PharmaPath Documentation

Index of all technical documentation for the PharmaPath application. Intended for use by agents, developers, and contributors.

## Documents

| File | Contents |
|------|----------|
| [overview.md](overview.md) | App purpose, tech stack, project structure, build & deploy |
| [architecture.md](architecture.md) | Routing, state management, data flow, PWA |
| [screens.md](screens.md) | Each screen's purpose, layout, and behavior |
| [components.md](components.md) | All reusable components with props and usage |
| [data-models.md](data-models.md) | Drug, molecule, and lifecycle data schemas |
| [styling.md](styling.md) | Design system, color palette, CSS classes, breakpoints |
| [api-integrations.md](api-integrations.md) | OpenRouter AI API and Firebase configuration |
| [roadmap.md](roadmap.md) | Incomplete features, known gaps, and future work |

## Quick Reference

- **Framework:** React 18 + Vite 5
- **3D Rendering:** Three.js 0.158
- **Deployment:** Firebase Hosting (project: `pharmapath-app`)
- **AI API:** OpenRouter (env var: `VITE_OPENROUTER_API_KEY`)
- **Screens:** Home → Drug Detail → Designer
- **Data:** All drug/molecule data is static, client-side (no backend)
- **Auth:** None implemented (Firebase configured but unused)
