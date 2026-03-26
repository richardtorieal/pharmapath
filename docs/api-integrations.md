# PharmaPath — API Integrations

## OpenRouter AI API

Used in `DesignerScreen` for AI-powered drug analysis. Currently the DesignerScreen UI is not implemented, but the API key is configured and the integration was partially built.

### Configuration
```bash
# .env.local (not committed)
VITE_OPENROUTER_API_KEY=sk-or-v1-...
```

Accessed in code via:
```javascript
import.meta.env.VITE_OPENROUTER_API_KEY
```

### Endpoint
```
POST https://openrouter.ai/api/v1/chat/completions
```

### Headers
```javascript
{
  "Content-Type": "application/json",
  "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`
}
```

### Model
```javascript
model: "openrouter/free"
```
The free tier was selected to avoid costs. Can be swapped for a paid model for higher quality output.

### Intended Use Case
When DesignerScreen is built:
1. User assembles a molecule via drag-and-drop
2. User clicks "Analyze" button
3. App sends molecule description (atoms, bonds, functional groups) to OpenRouter
4. AI returns educational commentary on the molecule's likely pharmacological properties
5. Response is displayed in the designer UI

### Security Note
`VITE_` prefixed env vars are **bundled into the client-side JS** by Vite. The OpenRouter API key is visible in the browser. For production, consider:
- Using a backend proxy to keep the key server-side
- Rate-limiting requests
- Using a restricted/scoped API key

---

## Firebase

Firebase is configured but **not actively used** in the application code. It exists as a deployment and potential future auth target.

### Configuration Files

**`.firebaserc`**
```json
{
  "projects": {
    "default": "pharmapath-app"
  }
}
```

**`firebase.json`**
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      { "source": "**", "destination": "/index.html" }
    ]
  }
}
```

### Deployment via Firebase
```bash
npm run build
firebase deploy --only hosting
```

### Firebase Auth (not yet implemented)
Firebase is positioned to add authentication. Potential future use:
- Google OAuth login
- GitHub OAuth login
- Save user-created molecule designs
- Personalized drug notes or bookmarks

To add Firebase Auth, install the Firebase SDK and initialize it with the project config from the Firebase Console for `pharmapath-app`.

---

## No Other External APIs

The app has no other external API dependencies:
- Drug data is hardcoded in `src/constants.js`
- Molecule structures are hardcoded in `src/molecules.js`
- No analytics integration
- No error monitoring (Sentry, etc.)
- No CDN for fonts (Google Fonts loaded via CSS `@import` in styles)
